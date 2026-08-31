import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import SocialLinks from '@/components/home/SocialLinks'
import { name } from '@/config/infoConfig'
import { ArrowRightIcon } from 'lucide-react'

const versions = [
  {
    href: '/pm',
    title: 'AI产品经理',
    subtitle: 'AI Agent × 产品设计 × 用户需求',
    description: '聚焦用户需求分析、AI 产品方案设计、Agent 工作流规划与 PRD 撰写，展示从需求到落地的产品能力。',
    highlights: ['用户需求分析', 'AI产品方案设计', 'Agent工作流规划', 'PRD与产品迭代'],
    accent: 'from-blue-500 to-cyan-500',
    cta: '进入产品经理版本',
  },
  {
    href: '/ai',
    title: 'AI解决方案工程师',
    subtitle: 'AI Agent × 系统集成 × 企业AI',
    description: '聚焦 AI Agent 工作流开发、RAG 知识库搭建、企业系统集成与 AI 应用交付，展示技术方案到生产部署的落地能力。',
    highlights: ['AI Agent 工作流', 'RAG知识库', '企业系统集成', 'AI应用交付'],
    accent: 'from-purple-500 to-pink-500',
    cta: '进入解决方案版本',
  },
]

export default function Home() {
  return (
    <Container className="mt-9">
      <div className="flex min-h-[70vh] flex-col items-center justify-center">
        {/* Hero */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            软件工程背景 × AI Agent 实战经验，专注于企业 AI 应用的产品设计、解决方案与技术落地。
          </p>
          <p className="mt-3 text-sm text-muted-foreground/70">
            从不同视角了解我的项目实践
          </p>
        </div>

        {/* Version Cards */}
        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {versions.map((version) => (
            <Link
              key={version.href}
              href={version.href}
              className="group relative overflow-hidden rounded-2xl border border-muted-foreground/20 bg-card p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg"
              data-track={`home_version_${version.href.slice(1)}`}
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${version.accent}`} />
              <div className="mb-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  {version.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-primary">
                  {version.subtitle}
                </p>
              </div>
              <p className="mb-6 text-sm text-muted-foreground">
                {version.description}
              </p>
              <ul className="mb-6 space-y-2">
                {version.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary/60" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                {version.cta}
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-16">
          <SocialLinks />
        </div>
      </div>
    </Container>
  )
}