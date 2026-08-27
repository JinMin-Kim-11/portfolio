import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { StatsDashboard } from '@/components/analytics/StatsDashboard'

export const metadata = {
  title: '数据统计',
  description: '网站访问数据统计面板',
}

export default function PMStatsPage() {
  return (
    <SimpleLayout
      title="数据统计"
      intro="网站访问数据实时统计，包括页面浏览量、独立访客、热门页面和点击事件。"
    >
      <StatsDashboard />
    </SimpleLayout>
  )
}
