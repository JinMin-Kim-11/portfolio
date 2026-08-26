import Database from 'better-sqlite3'
import path from 'path'
import { mkdirSync } from 'fs'

let db: Database.Database | null = null

const DB_DIR = path.join(process.cwd(), 'data')
const DB_PATH = path.join(DB_DIR, 'analytics.db')

function getDb() {
  if (db) return db

  mkdirSync(DB_DIR, { recursive: true })
  db = new Database(DB_PATH)

  db.pragma('journal_mode = WAL')

  db.exec(`
    CREATE TABLE IF NOT EXISTS page_views (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      path TEXT NOT NULL,
      visitor_id TEXT NOT NULL,
      referrer TEXT,
      user_agent TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS click_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      path TEXT NOT NULL,
      visitor_id TEXT NOT NULL,
      event_name TEXT NOT NULL,
      event_data TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE INDEX IF NOT EXISTS idx_page_views_created ON page_views(created_at);
    CREATE INDEX IF NOT EXISTS idx_page_views_path ON page_views(path);
    CREATE INDEX IF NOT EXISTS idx_click_events_created ON click_events(created_at);
    CREATE INDEX IF NOT EXISTS idx_click_events_name ON click_events(event_name);
  `)

  return db
}

export type TrackPageView = {
  path: string
  visitorId: string
  referrer?: string
  userAgent?: string
}

export type TrackClickEvent = {
  path: string
  visitorId: string
  eventName: string
  eventData?: string
}

export function recordPageView(data: TrackPageView) {
  const db = getDb()
  db.prepare(
    'INSERT INTO page_views (path, visitor_id, referrer, user_agent) VALUES (?, ?, ?, ?)'
  ).run(data.path, data.visitorId, data.referrer ?? null, data.userAgent ?? null)
}

export function recordClickEvent(data: TrackClickEvent) {
  const db = getDb()
  db.prepare(
    'INSERT INTO click_events (path, visitor_id, event_name, event_data) VALUES (?, ?, ?, ?)'
  ).run(data.path, data.visitorId, data.eventName, data.eventData ?? null)
}

export function getStats() {
  const db = getDb()

  const totalPV = db.prepare('SELECT COUNT(*) as count FROM page_views').get() as { count: number }
  const totalUV = db.prepare('SELECT COUNT(DISTINCT visitor_id) as count FROM page_views').get() as { count: number }

  const today = new Date().toISOString().split('T')[0]
  const dailyPV = db.prepare(
    "SELECT COUNT(*) as count FROM page_views WHERE date(created_at) = ?"
  ).get(today) as { count: number }
  const dailyUV = db.prepare(
    "SELECT COUNT(DISTINCT visitor_id) as count FROM page_views WHERE date(created_at) = ?"
  ).get(today) as { count: number }

  const topPages = db.prepare(
    'SELECT path, COUNT(*) as views FROM page_views GROUP BY path ORDER BY views DESC LIMIT 10'
  ).all() as { path: string; views: number }[]

  const topClicks = db.prepare(
    'SELECT event_name, COUNT(*) as clicks FROM click_events GROUP BY event_name ORDER BY clicks DESC LIMIT 10'
  ).all() as { event_name: string; clicks: number }[]

  const last7Days = db.prepare(`
    SELECT date(created_at) as date, COUNT(*) as views, COUNT(DISTINCT visitor_id) as uv
    FROM page_views
    WHERE created_at >= date('now', '-6 days')
    GROUP BY date(created_at)
    ORDER BY date ASC
  `).all() as { date: string; views: number; uv: number }[]

  return {
    totalPV: totalPV.count,
    totalUV: totalUV.count,
    dailyPV: dailyPV.count,
    dailyUV: dailyUV.count,
    topPages,
    topClicks,
    last7Days,
  }
}
