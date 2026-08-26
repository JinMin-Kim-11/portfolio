export async function onRequestGet(context) {
  const { env } = context

  try {
    const totalPV = await env.DB.prepare('SELECT COUNT(*) as count FROM page_views').first()
    const totalUV = await env.DB.prepare('SELECT COUNT(DISTINCT visitor_id) as count FROM page_views').first()

    const today = new Date().toISOString().split('T')[0]
    const dailyPV = await env.DB.prepare(
      'SELECT COUNT(*) as count FROM page_views WHERE date(created_at) = ?'
    ).bind(today).first()
    const dailyUV = await env.DB.prepare(
      'SELECT COUNT(DISTINCT visitor_id) as count FROM page_views WHERE date(created_at) = ?'
    ).bind(today).first()

    const topPages = await env.DB.prepare(
      'SELECT path, COUNT(*) as views FROM page_views GROUP BY path ORDER BY views DESC LIMIT 10'
    ).all()

    const topClicks = await env.DB.prepare(
      'SELECT event_name, COUNT(*) as clicks FROM click_events GROUP BY event_name ORDER BY clicks DESC LIMIT 10'
    ).all()

    const last7Days = await env.DB.prepare(`
      SELECT date(created_at) as date, COUNT(*) as views, COUNT(DISTINCT visitor_id) as uv
      FROM page_views
      WHERE created_at >= date('now', '-6 days')
      GROUP BY date(created_at)
      ORDER BY date ASC
    `).all()

    return new Response(JSON.stringify({
      totalPV: totalPV.count,
      totalUV: totalUV.count,
      dailyPV: dailyPV.count,
      dailyUV: dailyUV.count,
      topPages: topPages.results,
      topClicks: topClicks.results,
      last7Days: last7Days.results,
    }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
