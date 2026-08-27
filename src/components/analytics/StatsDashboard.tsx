'use client'

import { useEffect, useState } from 'react'
import { Eye, Users, CalendarDays, TrendingUp, BarChart3, MousePointerClick } from 'lucide-react'

type StatsData = {
  totalPV: number
  totalUV: number
  dailyPV: number
  dailyUV: number
  topPages: Array<{ path: string; views: number }>
  topClicks: Array<{ event_name: string; clicks: number }>
  last7Days: Array<{ date: string; views: number; uv: number }>
}

function StatCard({
  icon: Icon,
  label,
  value,
  subValue,
  accent,
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
          {subValue && (
            <p className="mt-1 text-xs text-muted-foreground">{subValue}</p>
          )}
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
      <svg
        width={totalWidth + 40}
        height={chartHeight + 60}
        className="min-w-full"
      >
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
          <line
            key={ratio}
            x1={20}
            y1={chartHeight - chartHeight * ratio + 20}
            x2={totalWidth + 20}
            y2={chartHeight - chartHeight * ratio + 20}
            stroke="currentColor"
            strokeOpacity={0.08}
            strokeDasharray="4 4"
          />
        ))}

        {/* Bars */}
        {data.map((d, i) => {
          const viewHeight = (d.views / maxViews) * (chartHeight - 20)
          const uvHeight = (d.uv / maxUV) * (chartHeight - 20)
          const x = 20 + i * (barWidth + gap)
          const dateStr = d.date.slice(5) // MM-DD

          return (
            <g key={d.date}>
              {/* PV bar */}
              <rect
                x={x}
                y={chartHeight - viewHeight + 20}
                width={barWidth / 2 - 2}
                height={viewHeight}
                rx={4}
                className="fill-primary/70"
              >
                <title>
                  {d.date}: {d.views} PV / {d.uv} UV
                </title>
              </rect>
              {/* UV bar */}
              <rect
                x={x + barWidth / 2 + 2}
                y={chartHeight - uvHeight + 20}
                width={barWidth / 2 - 2}
                height={uvHeight}
                rx={4}
                className="fill-primary/30"
              >
                <title>
                  {d.date}: {d.views} PV / {d.uv} UV
                </title>
              </rect>
              {/* Date label */}
              <text
                x={x + barWidth / 2}
                y={chartHeight + 42}
                textAnchor="middle"
                className="fill-muted-foreground text-[10px]"
              >
                {dateStr}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Legend */}
      <div className="mt-2 flex items-center justify-center gap-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-primary/70" />
          <span>页面浏览 (PV)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-primary/30" />
          <span>独立访客 (UV)</span>
        </div>
      </div>
    </div>
  )
}

function TopList({
  title,
  icon: Icon,
  items,
  valueLabel,
  pathKey,
  countKey,
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
        <div className="flex items-center gap-2 mb-4">
          <Icon className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">暂无数据</p>
      </div>
    )
  }

  const maxCount = Math.max(...items.map((i) => Number(i[countKey])), 1)

  return (
    <div className="rounded-2xl bg-card p-6 ring-1 ring-muted shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="h-5 w-5 text-primary" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="space-y-3">
        {items.map((item, idx) => {
          const count = Number(item[countKey])
          const percent = (count / maxCount) * 100
          return (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="truncate font-medium max-w-[70%]">
                  {String(item[pathKey])}
                </span>
                <span className="text-muted-foreground tabular-nums">
                  {count} {valueLabel}
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary/60"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
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
    } catch (e) {
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
          <div className="h-64 animate-pulse rounded-2xl bg-card ring-1 ring-muted" />
          <div className="h-64 animate-pulse rounded-2xl bg-card ring-1 ring-muted" />
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="rounded-2xl bg-card p-12 text-center ring-1 ring-muted">
        <p className="text-muted-foreground">{error || '暂无数据'}</p>
        <button
          onClick={fetchStats}
          className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          重试
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          icon={Eye}
          label="总页面浏览"
          value={data.totalPV.toLocaleString()}
          subValue="累计 PV"
          accent="bg-blue-500"
        />
        <StatCard
          icon={Users}
          label="总独立访客"
          value={data.totalUV.toLocaleString()}
          subValue="累计 UV"
          accent="bg-violet-500"
        />
        <StatCard
          icon={CalendarDays}
          label="今日浏览"
          value={data.dailyPV.toLocaleString()}
          subValue="今日 PV"
          accent="bg-emerald-500"
        />
        <StatCard
          icon={TrendingUp}
          label="今日访客"
          value={data.dailyUV.toLocaleString()}
          subValue="今日 UV"
          accent="bg-amber-500"
        />
      </div>

      {/* Trend Chart */}
      <div className="rounded-2xl bg-card p-6 ring-1 ring-muted shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">近 7 天访问趋势</h3>
        </div>
        <TrendChart data={data.last7Days} />
      </div>

      {/* Top Lists */}
      <div className="grid gap-4 md:grid-cols-2">
        <TopList
          title="热门页面 TOP 10"
          icon={Eye}
          items={data.topPages}
          valueLabel="次浏览"
          pathKey="path"
          countKey="views"
        />
        <TopList
          title="点击事件 TOP 10"
          icon={MousePointerClick}
          items={data.topClicks}
          valueLabel="次点击"
          pathKey="event_name"
          countKey="clicks"
        />
      </div>
    </div>
  )
}
