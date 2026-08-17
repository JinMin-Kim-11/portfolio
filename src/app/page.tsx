import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import SocialLinks from '@/components/home/SocialLinks'
import { name } from '@/config/infoConfig'
import { ArrowRightIcon } from 'lucide-react'

const versions = [
  {
    href: '/pm',
    title: '产品经理',
    subtitle: 'AI Agent 产品设计师',
    description: '聚焦 AI 产品方案设计、用户需求分析、Agent 工作流规划与跨团队协作，展示产品设计与落地能力。',
    highlights: ['产品方案设计', '用户需求分析', 'Agent 工作流规划', 'PRD 撰写'],
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    href: '/ai',
    title: 'AI 解决方案工程师',
    subtitle: 'Agent 开发 × RAG × 系统集成',
    description: '聚焦 AI Agent 开发、RAG 知识库搭建、Prompt 工程与企业 AI 系统集成，展示技术落地与工程能力。',
    highlights: ['RAG 知识库搭建', 'Agent 工作流开发', 'Prompt Engineering', '企业系统集成'],
    accent: 'from-purple-500 to-pink-500',
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
            软件工程背景 × AI Agent 实战经验，专注于企业 AI 应用的产品设计与技术落地。
          </p>
          <p className="mt-3 text-sm text-muted-foreground/70">
            选择你想了解的版本
          </p>
        </div>

        {/* Version Cards */}
        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {versions.map((version) => (
            <Link
              key={version.href}
              href={version.href}
              className="group relative overflow-hidden rounded-2xl border border-muted-foreground/20 bg-card p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg"
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
                进入版本
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
