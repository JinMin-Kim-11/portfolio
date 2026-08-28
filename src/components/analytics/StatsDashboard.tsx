'use client'

import { useEffect, useState } from 'react'
import {
  Eye, Users, CalendarDays, TrendingUp, BarChart3, MousePointerClick,
  Globe, Monitor, Clock, Route, Repeat, Smartphone,
} from 'lucide-react'

type StatsData = {
  totalPV: number
  totalUV: number
  dailyPV: number
  dailyUV: number
  topPages: Array<{ path: string; views: number }>
  topClicks: Array<{ event_name: string; clicks: number }>
  last7Days: Array<{ date: string; views: number; uv: number }>
  referrers: Array<{ source: string; count: number }>
  devices: Array<{ device: string; count: number }>
  browsers: Array<{ browser: string; count: number }>
  oses: Array<{ os: string; count: number }>
  versionCompare: { pm: { pv: number; uv: number }; ai: { pv: number; uv: number } }
  returnRate: number
  returningVisitors: number
  hourly: Array<{ hour: number; views: number; uv: number }>
  dwellTimes: Array<{ path: string; avg_dwell: number }>
  pathSequences: Array<{ visitorId: string; pages: string[]; count: number }>
}

function StatCard({
  icon: Icon, label, value, subValue, accent,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string | number
  subValue?: string
  accent: string
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-card p-6 ring-1 ring-muted shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight">{value}</p>
          {subValue && <p className="mt-1 text-xs text-muted-foreground">{subValue}</p>}
        </div>
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  )
}

function TrendChart({ data }: { data: Array<{ date: string; views: number; uv: number }> }) {
  if (!data.length) return null
  const maxViews = Math.max(...data.map((d) => d.views), 1)
  const maxUV = Math.max(...data.map((d) => d.uv), 1)
  const chartHeight = 160
  const barWidth = 32
  const gap = 16
  const totalWidth = data.length * (barWidth + gap) - gap

  return (
    <div className="overflow-x-auto">
      <svg width={totalWidth + 40} height={chartHeight + 60} className="min-w-full">
        {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
          <line key={ratio} x1={20} y1={chartHeight - chartHeight * ratio + 20} x2={totalWidth + 20} y2={chartHeight - chartHeight * ratio + 20} stroke="currentColor" strokeOpacity={0.08} strokeDasharray="4 4" />
        ))}
        {data.map((d, i) => {
          const viewHeight = (d.views / maxViews) * (chartHeight - 20)
          const uvHeight = (d.uv / maxUV) * (chartHeight - 20)
          const x = 20 + i * (barWidth + gap)
          return (
            <g key={d.date}>
              <rect x={x} y={chartHeight - viewHeight + 20} width={barWidth / 2 - 2} height={viewHeight} rx={4} className="fill-primary/70">
                <title>{d.date}: {d.views} PV / {d.uv} UV</title>
              </rect>
              <rect x={x + barWidth / 2 + 2} y={chartHeight - uvHeight + 20} width={barWidth / 2 - 2} height={uvHeight} rx={4} className="fill-primary/30">
                <title>{d.date}: {d.views} PV / {d.uv} UV</title>
              </rect>
              <text x={x + barWidth / 2} y={chartHeight + 42} textAnchor="middle" className="fill-muted-foreground text-[10px]">{d.date.slice(5)}</text>
            </g>
          )
        })}
      </svg>
      <div className="mt-2 flex items-center justify-center gap-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-primary/70" /><span>页面浏览 (PV)</span></div>
        <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-primary/30" /><span>独立访客 (UV)</span></div>
      </div>
    </div>
  )
}

function TopList({
  title, icon: Icon, items, valueLabel, pathKey, countKey,
}: {
  title: string
  icon: React.ComponentType<{ className?: string }>
  items: Array<Record<string, string | number>>
  valueLabel: string
  pathKey: string
  countKey: string
}) {
  if (!items.length) {
    return (
      <div className="rounded-2xl bg-card p-6 ring-1 ring-muted shadow-sm">
        <div className="flex items-center gap-2 mb-4"><Icon className="h-5 w-5 text-primary" /><h3 className="font-semibold">{title}</h3></div>
        <p className="text-sm text-muted-foreground">暂无数据</p>
      </div>
    )
  }
  const maxCount = Math.max(...items.map((i) => Number(i[countKey])), 1)
  return (
    <div className="rounded-2xl bg-card p-6 ring-1 ring-muted shadow-sm">
      <div className="flex items-center gap-2 mb-4"><Icon className="h-5 w-5 text-primary" /><h3 className="font-semibold">{title}</h3></div>
      <div className="space-y-3">
        {items.map((item, idx) => {
          const count = Number(item[countKey])
          const percent = (count / maxCount) * 100
          return (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="truncate font-medium max-w-[70%]">{String(item[pathKey])}</span>
                <span className="text-muted-foreground tabular-nums">{count} {valueLabel}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-primary/60" style={{ width: `${percent}%` }} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function PieChart({ data, labelKey, valueKey }: { data: Array<Record<string, string | number>>; labelKey: string; valueKey: string }) {
  if (!data.length) return <p className="text-sm text-muted-foreground">暂无数据</p>
  const total = data.reduce((s, d) => s + Number(d[valueKey]), 0)
  const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4', '#3b82f6', '#ef4444', '#84cc16', '#a855f7']
  let acc = 0
  const cx = 80, cy = 80, r = 60
  const segments = data.map((d, i) => {
    const val = Number(d[valueKey])
    const pct = val / total
    const startAngle = acc * 2 * Math.PI - Math.PI / 2
    acc += pct
    const endAngle = acc * 2 * Math.PI - Math.PI / 2
    const x1 = cx + r * Math.cos(startAngle), y1 = cy + r * Math.sin(startAngle)
    const x2 = cx + r * Math.cos(endAngle), y2 = cy + r * Math.sin(endAngle)
    const largeArc = pct > 0.5 ? 1 : 0
    return { path: `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${largeArc} 1 ${x2},${y2} Z`, color: colors[i % colors.length], label: String(d[labelKey]), count: val, pct }
  })

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
      <svg width={160} height={160} viewBox="0 0 160 160">
        {segments.map((s, i) => (
          <path key={i} d={s.path} fill={s.color} stroke="white" strokeWidth={1.5}>
            <title>{s.label}: {s.count} ({(s.pct * 100).toFixed(1)}%)</title>
          </path>
        ))}
        <circle cx={80} cy={80} r={28} fill="white" />
        <text x={80} y={76} textAnchor="middle" className="fill-foreground text-sm font-bold">{total}</text>
        <text x={80} y={90} textAnchor="middle" className="fill-muted-foreground text-[9px]">总计</text>
      </svg>
      <div className="flex-1 space-y-1.5">
        {segments.map((s, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm" style={{ background: s.color }} />
              <span className="font-medium">{s.label}</span>
            </div>
            <span className="text-muted-foreground tabular-nums">{s.count} ({(s.pct * 100).toFixed(0)}%)</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function VersionCompare({ pm, ai }: { pm: { pv: number; uv: number }; ai: { pv: number; uv: number } }) {
  const maxPV = Math.max(pm.pv, ai.pv, 1)
  return (
    <div className="rounded-2xl bg-card p-6 ring-1 ring-muted shadow-sm">
      <div className="flex items-center gap-2 mb-4"><BarChart3 className="h-5 w-5 text-primary" /><h3 className="font-semibold">版本对比 (PM vs AI)</h3></div>
      <div className="space-y-5">
        <div>
          <div className="flex items-center justify-between mb-2 text-sm">
            <span className="font-medium text-blue-600">PM 版</span>
            <span className="text-muted-foreground tabular-nums">{pm.pv} PV / {pm.uv} UV</span>
          </div>
          <div className="h-4 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-blue-500/60" style={{ width: `${(pm.pv / maxPV) * 100}%` }} />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2 text-sm">
            <span className="font-medium text-violet-600">AI 版</span>
            <span className="text-muted-foreground tabular-nums">{ai.pv} PV / {ai.uv} UV</span>
          </div>
          <div className="h-4 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-violet-500/60" style={{ width: `${(ai.pv / maxPV) * 100}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function HourlyChart({ data }: { data: Array<{ hour: number; views: number; uv: number }> }) {
  if (!data.length) return <p className="text-sm text-muted-foreground">暂无数据</p>
  const maxViews = Math.max(...data.map((d) => d.views), 1)
  const barWidth = 16
  const gap = 4
  const chartHeight = 120
  const totalWidth = 24 * (barWidth + gap)

  return (
    <div className="overflow-x-auto">
      <svg width={totalWidth + 30} height={chartHeight + 40} className="min-w-full">
        {[0, 0.5, 1].map((ratio) => (
          <line key={ratio} x1={10} y1={chartHeight - chartHeight * ratio + 10} x2={totalWidth + 20} y2={chartHeight - chartHeight * ratio + 10} stroke="currentColor" strokeOpacity={0.08} strokeDasharray="4 4" />
        ))}
        {Array.from({ length: 24 }, (_, h) => {
          const row = data.find((d) => d.hour === h)
          const views = row ? row.views : 0
          const h2 = (views / maxViews) * (chartHeight - 10)
          const x = 10 + h * (barWidth + gap)
          return (
            <g key={h}>
              <rect x={x} y={chartHeight - h2 + 10} width={barWidth} height={h2} rx={2} className="fill-primary/60">
                <title>{h}:00 - {views} 次浏览</title>
              </rect>
              {h % 3 === 0 && (
                <text x={x + barWidth / 2} y={chartHeight + 26} textAnchor="middle" className="fill-muted-foreground text-[8px]">{h}</text>
              )}
            </g>
          )
        })}
      </svg>
      <p className="mt-1 text-center text-xs text-muted-foreground">时段 (0-23 点)</p>
    </div>
  )
}

function PathSequences({ data }: { data: Array<{ visitorId: string; pages: string[]; count: number }> }) {
  if (!data.length) return <p className="text-sm text-muted-foreground">暂无数据</p>
  return (
    <div className="space-y-3">
      {data.map((s, i) => (
        <div key={i} className="rounded-lg bg-muted/40 p-3">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="font-mono text-muted-foreground">访客 {s.visitorId}...</span>
            <span className="text-muted-foreground">{s.count} 次浏览</span>
          </div>
          <div className="flex flex-wrap items-center gap-1 text-xs">
            {s.pages.map((p, j) => (
              <span key={j} className="inline-flex items-center gap-1">
                {j > 0 && <span className="text-muted-foreground">→</span>}
                <span className="rounded bg-primary/10 px-1.5 py-0.5 font-medium text-primary">{p}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function StatsDashboard() {
  const [data, setData] = useState<StatsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/stats', { cache: 'no-store' })
      if (!res.ok) throw new Error('Failed to fetch')
      const json = await res.json()
      setData(json)
      setError(null)
    } catch {
      setError('加载失败，请稍后重试')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
    const interval = setInterval(fetchStats, 60000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-28 animate-pulse rounded-2xl bg-card ring-1 ring-muted" />
          ))}
        </div>
        <div className="h-56 animate-pulse rounded-2xl bg-card ring-1 ring-muted" />
        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-64 animate-pulse rounded-2xl bg-card ring-1 ring-muted" />
          ))}
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="rounded-2xl bg-card p-12 text-center ring-1 ring-muted">
        <p className="text-muted-foreground">{error || '暂无数据'}</p>
        <button onClick={fetchStats} className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">重试</button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={Eye} label="总页面浏览" value={data.totalPV.toLocaleString()} subValue="累计 PV" accent="bg-blue-500" />
        <StatCard icon={Users} label="总独立访客" value={data.totalUV.toLocaleString()} subValue="累计 UV" accent="bg-violet-500" />
        <StatCard icon={CalendarDays} label="今日浏览" value={data.dailyPV.toLocaleString()} subValue="今日 PV" accent="bg-emerald-500" />
        <StatCard icon={TrendingUp} label="今日访客" value={data.dailyUV.toLocaleString()} subValue="今日 UV" accent="bg-amber-500" />
      </div>

      {/* Secondary stat cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={Repeat} label="回访率" value={`${data.returnRate}%`} subValue={`${data.returningVisitors} 位回访访客`} accent="bg-rose-500" />
        <StatCard icon={Smartphone} label="移动端占比" value={
          (() => {
            const total = data.devices.reduce((s, d) => s + d.count, 0)
            const mobile = data.devices.find((d) => d.device === '移动端')?.count || 0
            return total > 0 ? `${Math.round((mobile / total) * 100)}%` : '—'
          })()
        } subValue="设备分布" accent="bg-cyan-500" />
        <StatCard icon={Globe} label="访问来源数" value={data.referrers.length} subValue="不同来源" accent="bg-indigo-500" />
        <StatCard icon={Clock} label="平均停留" value={
          data.dwellTimes.length > 0
            ? `${Math.round(data.dwellTimes.reduce((s, d) => s + d.avg_dwell, 0) / data.dwellTimes.length)}s`
            : '—'
        } subValue="页面停留估算" accent="bg-teal-500" />
      </div>

      {/* Trend Chart */}
      <div className="rounded-2xl bg-card p-6 ring-1 ring-muted shadow-sm">
        <div className="flex items-center gap-2 mb-4"><BarChart3 className="h-5 w-5 text-primary" /><h3 className="font-semibold">近 7 天访问趋势</h3></div>
        <TrendChart data={data.last7Days} />
      </div>

      {/* Hourly Distribution */}
      <div className="rounded-2xl bg-card p-6 ring-1 ring-muted shadow-sm">
        <div className="flex items-center gap-2 mb-4"><Clock className="h-5 w-5 text-primary" /><h3 className="font-semibold">访问时段分布</h3></div>
        <HourlyChart data={data.hourly} />
      </div>

      {/* Top Lists */}
      <div className="grid gap-4 md:grid-cols-2">
        <TopList title="热门页面 TOP 10" icon={Eye} items={data.topPages} valueLabel="次浏览" pathKey="path" countKey="views" />
        <TopList title="点击事件 TOP 10" icon={MousePointerClick} items={data.topClicks} valueLabel="次点击" pathKey="event_name" countKey="clicks" />
      </div>

      {/* Source & Version */}
      <div className="grid gap-4 md:grid-cols-2">
        <TopList title="访问来源分析" icon={Globe} items={data.referrers as unknown as Array<Record<string, string | number>>} valueLabel="次" pathKey="source" countKey="count" />
        <VersionCompare pm={data.versionCompare.pm} ai={data.versionCompare.ai} />
      </div>

      {/* Device / Browser / OS */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-card p-6 ring-1 ring-muted shadow-sm">
          <div className="flex items-center gap-2 mb-4"><Monitor className="h-5 w-5 text-primary" /><h3 className="font-semibold">设备分布</h3></div>
          <PieChart data={data.devices as unknown as Array<Record<string, string | number>>} labelKey="device" valueKey="count" />
        </div>
        <div className="rounded-2xl bg-card p-6 ring-1 ring-muted shadow-sm">
          <div className="flex items-center gap-2 mb-4"><Globe className="h-5 w-5 text-primary" /><h3 className="font-semibold">浏览器分布</h3></div>
          <PieChart data={data.browsers as unknown as Array<Record<string, string | number>>} labelKey="browser" valueKey="count" />
        </div>
        <div className="rounded-2xl bg-card p-6 ring-1 ring-muted shadow-sm">
          <div className="flex items-center gap-2 mb-4"><Monitor className="h-5 w-5 text-primary" /><h3 className="font-semibold">操作系统分布</h3></div>
          <PieChart data={data.oses as unknown as Array<Record<string, string | number>>} labelKey="os" valueKey="count" />
        </div>
      </div>

      {/* Dwell Times */}
      <div className="rounded-2xl bg-card p-6 ring-1 ring-muted shadow-sm">
        <div className="flex items-center gap-2 mb-4"><Clock className="h-5 w-5 text-primary" /><h3 className="font-semibold">页面停留时长 (估算)</h3></div>
        {data.dwellTimes.length === 0 ? (
          <p className="text-sm text-muted-foreground">暂无数据</p>
        ) : (
          <div className="space-y-3">
            {data.dwellTimes.map((d, i) => {
              const maxDwell = Math.max(...data.dwellTimes.map((x) => x.avg_dwell), 1)
              const percent = (d.avg_dwell / maxDwell) * 100
              return (
                <div key={i} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="truncate font-medium max-w-[70%]">{d.path}</span>
                    <span className="text-muted-foreground tabular-nums">{d.avg_dwell}s</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary/60" style={{ width: `${percent}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Path Sequences */}
      <div className="rounded-2xl bg-card p-6 ring-1 ring-muted shadow-sm">
        <div className="flex items-center gap-2 mb-4"><Route className="h-5 w-5 text-primary" /><h3 className="font-semibold">用户浏览路径 (近 20 条)</h3></div>
        <PathSequences data={data.pathSequences} />
      </div>
    </div>
  )
}
