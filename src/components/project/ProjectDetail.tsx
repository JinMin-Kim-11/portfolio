"use client"

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Building2,
  ArrowRightLeft,
  AlertCircle,
  Target,
  Users,
  ListChecks,
  Sparkles,
  Boxes,
  Workflow,
  Database,
  BarChart3,
  Bug,
  RefreshCw,
  Trophy,
  Lightbulb,
  Calendar,
  UserCircle,
  HashIcon,
  ArrowUpRight,
  ChevronLeft,
  GraduationCap,
  LayoutGrid,
  Zap,
  PieChart,
  Quote,
} from 'lucide-react'
import { Favicon } from 'favicon-stealer'
import { ProjectItemType, CoreValueItem, MetricItem, ScenarioScreenshot } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'

type NodePhase = 'business' | 'user' | 'product' | 'ai-tech' | 'validation'

type NodeDefinition = {
  id: string
  number: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  phase: NodePhase
  hasContent: (p: ProjectItemType) => boolean
}

const NODES: NodeDefinition[] = [
  { id: 'background', number: '01', title: '业务背景', icon: Building2, phase: 'business', hasContent: (p) => !!p.businessBackground },
  { id: 'original-flow', number: '02', title: '原来的业务流程', icon: ArrowRightLeft, phase: 'business', hasContent: (p) => !!p.originalFlow && p.originalFlow.length > 0 },
  { id: 'problem', number: '03', title: '发现什么问题', icon: AlertCircle, phase: 'business', hasContent: (p) => !!p.problem && p.problem.length > 0 },
  { id: 'value-judgment', number: '04', title: '为什么值得解决', icon: Target, phase: 'business', hasContent: (p) => !!p.valueJudgment },
  { id: 'user-scenarios', number: '05', title: '用户是谁/用户场景', icon: Users, phase: 'user', hasContent: (p) => !!p.userScenarios && p.userScenarios.length > 0 },
  { id: 'requirement', number: '06', title: '需求分析', icon: ListChecks, phase: 'user', hasContent: (p) => !!p.requirementBreakdown && p.requirementBreakdown.length > 0 },
  { id: 'why-ai', number: '07', title: '为什么选择AI', icon: Sparkles, phase: 'product', hasContent: (p) => !!p.whyAI },
  { id: 'architecture', number: '08', title: '产品方案架构', icon: Boxes, phase: 'product', hasContent: (p) => !!p.productArchitecture },
  { id: 'workflow', number: '09', title: 'Agent Workflow', icon: Workflow, phase: 'product', hasContent: (p) => !!p.agentWorkflow && p.agentWorkflow.length > 0 },
  { id: 'rag', number: '10', title: 'RAG/知识库/Prompt', icon: Database, phase: 'ai-tech', hasContent: (p) => !!p.ragDetails && p.ragDetails.length > 0 },
  { id: 'evaluation', number: '11', title: '四层效果评估体系', icon: BarChart3, phase: 'validation', hasContent: (p) => !!p.evaluationSystem && p.evaluationSystem.length > 0 },
  { id: 'post-launch', number: '12', title: '上线后发现的问题', icon: Bug, phase: 'validation', hasContent: (p) => !!p.postLaunchIssues && p.postLaunchIssues.length > 0 },
  { id: 'iteration', number: '13', title: '迭代方案', icon: RefreshCw, phase: 'validation', hasContent: (p) => !!p.iterationPlan && p.iterationPlan.length > 0 },
  { id: 'results', number: '14', title: '最终结果', icon: Trophy, phase: 'validation', hasContent: (p) => !!p.results && p.results.length > 0 },
  { id: 'reflection', number: '15', title: '如果重新做会怎么做', icon: Lightbulb, phase: 'validation', hasContent: (p) => !!p.reflection },
]

const PHASE_COLORS: Record<NodePhase, { border: string; bg: string; text: string; iconBg: string; iconText: string; dot: string }> = {
  'business': {
    border: 'border-l-blue-500',
    bg: 'bg-blue-500/5',
    text: 'text-blue-600 dark:text-blue-400',
    iconBg: 'bg-blue-500/10',
    iconText: 'text-blue-500',
    dot: 'bg-blue-500',
  },
  'user': {
    border: 'border-l-emerald-500',
    bg: 'bg-emerald-500/5',
    text: 'text-emerald-600 dark:text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    iconText: 'text-emerald-500',
    dot: 'bg-emerald-500',
  },
  'product': {
    border: 'border-l-violet-500',
    bg: 'bg-violet-500/5',
    text: 'text-violet-600 dark:text-violet-400',
    iconBg: 'bg-violet-500/10',
    iconText: 'text-violet-500',
    dot: 'bg-violet-500',
  },
  'ai-tech': {
    border: 'border-l-amber-500',
    bg: 'bg-amber-500/5',
    text: 'text-amber-600 dark:text-amber-400',
    iconBg: 'bg-amber-500/10',
    iconText: 'text-amber-500',
    dot: 'bg-amber-500',
  },
  'validation': {
    border: 'border-l-rose-500',
    bg: 'bg-rose-500/5',
    text: 'text-rose-600 dark:text-rose-400',
    iconBg: 'bg-rose-500/10',
    iconText: 'text-rose-500',
    dot: 'bg-rose-500',
  },
}

const PHASE_LABELS: Record<NodePhase, string> = {
  'business': '业务阶段',
  'user': '用户阶段',
  'product': '产品阶段',
  'ai-tech': 'AI技术阶段',
  'validation': '验证迭代阶段',
}

function BulletList({ items, accent = 'text-primary' }: { items: string[]; accent?: string }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.replace('text-', 'bg-')} opacity-60`} />
          <span className="leading-relaxed text-foreground/80">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function WorkflowStep({ step, index, total, accent }: { step: string; index: number; total: number; accent: string }) {
  const isLast = index === total - 1
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${accent.replace('text-', 'bg-')}/10 text-[10px] font-bold ${accent}`}>
          {index + 1}
        </div>
        {!isLast && <div className={`mt-1 w-px flex-1 ${accent.replace('text-', 'bg-')}/20`} />}
      </div>
      <p className="pb-3 pt-0.5 text-sm text-foreground/80 leading-relaxed">{step}</p>
    </div>
  )
}

function CoreValueSection({ items }: { items: CoreValueItem[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => {
        const Icon =
          item.icon === 'graduation' ? GraduationCap :
          item.icon === 'portal' ? LayoutGrid :
          item.icon === 'speed' ? Zap :
          item.icon === 'data' ? PieChart :
          Sparkles
        return (
          <div
            key={i}
            className="group relative overflow-hidden rounded-lg border border-muted-foreground/20 bg-white/60 dark:bg-zinc-800/50 p-4 transition-all hover:border-teal-500/40 hover:shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-500/10 text-teal-500">
                <Icon className="h-4 w-4" strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function MetricGrid({ items }: { items: MetricItem[] }) {
  return (
    <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
      {items.map((m, i) => (
        <div
          key={i}
          className="rounded-lg border border-muted-foreground/20 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 p-4 text-center transition-all hover:border-teal-500/40"
        >
          <p className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400 tracking-tight">
            {m.value}
          </p>
          <p className="mt-1 text-xs font-medium text-foreground/80">{m.label}</p>
          {m.description && (
            <p className="mt-1.5 text-[10px] text-muted-foreground leading-relaxed line-clamp-2">
              {m.description}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

function ScenarioCard({ screenshot, index }: { screenshot: ScenarioScreenshot; index: number }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-muted-foreground/20 bg-white/50 dark:bg-zinc-800/50">
      <div className="relative aspect-[16/10] bg-muted">
        <Image
          src={screenshot.image}
          alt={screenshot.title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover object-top"
        />
        <div className="absolute top-2 left-2 flex h-6 w-6 items-center justify-center rounded-full bg-foreground/80 text-background text-xs font-bold backdrop-blur">
          {index + 1}
        </div>
      </div>
      <figcaption className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h4 className="text-sm font-semibold text-foreground">{screenshot.title}</h4>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3">
          {screenshot.description}
        </p>
        {screenshot.input && (
          <div className="mb-2 rounded-md bg-muted/60 px-3 py-2 border-l-2 border-teal-500/50">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
              用户输入
            </p>
            <p className="text-xs text-foreground/90 italic">"{screenshot.input}"</p>
          </div>
        )}
        {screenshot.output && (
          <div className="mb-3 rounded-md bg-muted/60 px-3 py-2 border-l-2 border-emerald-500/50">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
              Agent 输出
            </p>
            <p className="text-xs text-foreground/90">{screenshot.output}</p>
          </div>
        )}
        {screenshot.tags && screenshot.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {screenshot.tags.map((tag, j) => (
              <span
                key={j}
                className="rounded-md bg-teal-500/10 px-2 py-0.5 text-[10px] font-medium text-teal-600 dark:text-teal-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </figcaption>
    </figure>
  )
}

function ScenarioGallery({ screenshots }: { screenshots: ScenarioScreenshot[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {screenshots.map((s, i) => (
        <ScenarioCard key={i} screenshot={s} index={i} />
      ))}
    </div>
  )
}

function HighlightSection({ title, icon: Icon, accent, children, id }: { title: string; icon: React.ComponentType<{ className?: string }>; accent: { border: string; bg: string; text: string; iconBg: string; iconText: string; dot: string }; children: React.ReactNode; id?: string }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 rounded-xl border-l-4 ${accent.border} ${accent.bg} p-5 sm:p-6`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${accent.iconBg}`}>
          <Icon className={`h-5 w-5 ${accent.iconText}`} />
        </div>
        <div>
          <p className={`text-xs font-semibold tracking-wider uppercase ${accent.iconText}`}>
            HIGHLIGHT
          </p>
          <h2 className="text-lg font-bold text-foreground">{title}</h2>
        </div>
      </div>
      <div className="text-sm sm:text-base">{children}</div>
    </section>
  )
}

function NodeSection({
  node,
  project,
}: {
  node: NodeDefinition
  project: ProjectItemType
}) {
  const colors = PHASE_COLORS[node.phase]
  const Icon = node.icon

  const renderContent = () => {
    switch (node.id) {
      case 'background':
        return <p className="leading-relaxed text-foreground/80">{project.businessBackground}</p>
      case 'original-flow':
        return (
          <div className="space-y-1">
            {project.originalFlow!.map((step, i) => (
              <div key={i} className="flex items-center gap-3 py-1">
                <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${colors.iconBg} text-[10px] font-semibold ${colors.iconText}`}>
                  {i + 1}
                </span>
                <span className="text-foreground/80">{step}</span>
              </div>
            ))}
          </div>
        )
      case 'problem':
        return <BulletList items={project.problem!} accent={colors.iconText} />
      case 'value-judgment':
        return <p className="leading-relaxed text-foreground/80">{project.valueJudgment}</p>
      case 'user-scenarios':
        return (
          <div className="grid gap-3 sm:grid-cols-2">
            {project.userScenarios!.map((s, i) => (
              <div key={i} className="rounded-lg border border-muted-foreground/20 bg-white/50 dark:bg-zinc-800/50 p-3">
                <p className="text-sm font-semibold text-foreground mb-1">{s.type}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        )
      case 'requirement':
        return (
          <div className="overflow-hidden rounded-lg border border-muted-foreground/20">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold text-foreground/80">用户任务</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-foreground/80">对应能力</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-muted-foreground/10">
                {project.requirementBreakdown!.map((item, i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-2.5 text-foreground/80">{item.task}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{item.capability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      case 'why-ai':
        return <p className="leading-relaxed text-foreground/80">{project.whyAI}</p>
      case 'architecture':
        return <p className="leading-relaxed text-foreground/80">{project.productArchitecture}</p>
      case 'workflow':
        return (
          <div className="mt-2">
            {project.agentWorkflow!.map((step, i) => (
              <WorkflowStep key={i} step={step} index={i} total={project.agentWorkflow!.length} accent={colors.iconText} />
            ))}
          </div>
        )
      case 'rag':
        return <BulletList items={project.ragDetails!} accent={colors.iconText} />
      case 'evaluation':
        return (
          <div className="grid gap-3 sm:grid-cols-2">
            {project.evaluationSystem!.map((layer, i) => (
              <div key={i} className="rounded-lg border border-muted-foreground/20 bg-white/50 dark:bg-zinc-800/50 p-4">
                <p className={`text-sm font-bold ${colors.iconText} mb-2`}>{layer.layer}</p>
                <div className="flex flex-wrap gap-1.5">
                  {layer.metrics.map((m, j) => (
                    <span key={j} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )
      case 'post-launch':
        return <BulletList items={project.postLaunchIssues!} accent={colors.iconText} />
      case 'iteration':
        return <BulletList items={project.iterationPlan!} accent={colors.iconText} />
      case 'results':
        return <BulletList items={project.results!} accent={colors.iconText} />
      case 'reflection':
        return <p className="leading-relaxed text-foreground/80">{project.reflection}</p>
      default:
        return null
    }
  }

  if (!node.hasContent(project)) return null

  return (
    <section
      id={node.id}
      className={`scroll-mt-24 rounded-xl border-l-4 ${colors.border} ${colors.bg} p-5 sm:p-6`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${colors.iconBg}`}>
          <Icon className={`h-5 w-5 ${colors.iconText}`} />
        </div>
        <div>
          <p className={`text-xs font-semibold tracking-wider uppercase ${colors.iconText}`}>
            {node.number} · {PHASE_LABELS[node.phase]}
          </p>
          <h2 className="text-lg font-bold text-foreground">{node.title}</h2>
        </div>
      </div>
      <div className="text-sm sm:text-base">
        {renderContent()}
      </div>
    </section>
  )
}

export function ProjectDetail({ project }: { project: ProjectItemType }) {
  const [activeId, setActiveId] = useState<string>('')
  const contentRef = useRef<HTMLDivElement>(null)

  const visibleNodes = NODES.filter((n) => n.hasContent(project))

  const utmLink = project.link.href.startsWith('http')
    ? `${project.link.href}?utm_source=${utm_source}`
    : project.link.href

  const hasExternalLink = project.link.href && project.link.href !== '#'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    )

    visibleNodes.forEach((node) => {
      const el = document.getElementById(node.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [visibleNodes.length])

  // Group TOC items by phase
  const phaseGroups = visibleNodes.reduce<Record<NodePhase, NodeDefinition[]>>(
    (acc, node) => {
      if (!acc[node.phase]) acc[node.phase] = []
      acc[node.phase].push(node)
      return acc
    },
    { business: [], user: [], product: [], 'ai-tech': [], validation: [] }
  )

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveId(id)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="border-b border-muted bg-gradient-to-b from-muted/30 to-transparent">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ChevronLeft className="h-4 w-4" />
            返回项目列表
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-muted-foreground/10">
              <Favicon url={project.link.href} src={project.logo} alt={`${project.name} logo`} />
            </div>
            <div className="flex-1">
              {project.index && (
                <p className="text-sm font-mono text-muted-foreground mb-1">Project {project.index}</p>
              )}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                {project.name}
              </h1>
              <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                {project.role && (
                  <div className="flex items-center gap-1.5">
                    <UserCircle className="h-4 w-4" />
                    <span>{project.role}</span>
                  </div>
                )}
                {project.date && (
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    <span>{project.date}</span>
                  </div>
                )}
              </div>

              {project.category && project.category.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.category.map((cat, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-600 dark:text-teal-400"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}

              {hasExternalLink && (
                <div className="mt-6">
                  <Link
                    href={utmLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
                    data-track="project_detail_visit_link"
                    data-track-data={project.name}
                  >
                    访问 {project.link.label}
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with TOC */}
      <div className="mx-auto max-w-6xl px-4 sm:px-8 py-10 sm:py-12">
        <div className="flex gap-8 lg:gap-12">
          {/* TOC - Desktop */}
          <aside className="hidden lg:block w-56 shrink-0">
            <nav className="sticky top-24">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                目录导航
              </p>
              <div className="space-y-4">
                {(Object.keys(phaseGroups) as NodePhase[]).map(
                  (phase) =>
                    phaseGroups[phase].length > 0 && (
                      <div key={phase}>
                        <p className={`text-[11px] font-semibold uppercase tracking-wider mb-1.5 ${PHASE_COLORS[phase].iconText}`}>
                          {PHASE_LABELS[phase]}
                        </p>
                        <ul className="space-y-0.5">
                          {phaseGroups[phase].map((node) => {
                            const isActive = activeId === node.id
                            const Icon = node.icon
                            return (
                              <li key={node.id}>
                                <a
                                  href={`#${node.id}`}
                                  onClick={(e) => handleTocClick(e, node.id)}
                                  className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-xs transition-all ${
                                    isActive
                                      ? `${PHASE_COLORS[phase].bg} ${PHASE_COLORS[phase].text} font-medium`
                                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                                  }`}
                                >
                                  <span className="font-mono opacity-60">{node.number}</span>
                                  <span className="truncate">{node.title}</span>
                                </a>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    )
                )}
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <div ref={contentRef} className="flex-1 min-w-0">
            <div className="flex flex-col gap-6">
              {visibleNodes.map((node) => (
                <NodeSection key={node.id} node={node} project={project} />
              ))}

              {/* 核心价值 / 关键数据 / 场景截图（Highlight Section） */}
              {(project.coreValues || project.metrics || project.scenarioScreenshots) && (
                <div className="mt-4 pt-6 border-t-2 border-dashed border-muted-foreground/20">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-4">
                    HIGHLIGHTS · 产品亮点速览
                  </p>
                  <div className="flex flex-col gap-6">
                    {project.coreValues && project.coreValues.length > 0 && (
                      <HighlightSection
                        id="core-values"
                        title="核心价值"
                        icon={Sparkles}
                        accent={{
                          border: 'border-l-teal-500',
                          bg: 'bg-teal-500/5',
                          text: 'text-teal-600 dark:text-teal-400',
                          iconBg: 'bg-teal-500/10',
                          iconText: 'text-teal-500',
                          dot: 'bg-teal-500',
                        }}
                      >
                        <CoreValueSection items={project.coreValues} />
                      </HighlightSection>
                    )}

                    {project.metrics && project.metrics.length > 0 && (
                      <HighlightSection
                        id="metrics"
                        title="关键数据"
                        icon={BarChart3}
                        accent={{
                          border: 'border-l-emerald-500',
                          bg: 'bg-emerald-500/5',
                          text: 'text-emerald-600 dark:text-emerald-400',
                          iconBg: 'bg-emerald-500/10',
                          iconText: 'text-emerald-500',
                          dot: 'bg-emerald-500',
                        }}
                      >
                        <MetricGrid items={project.metrics} />
                      </HighlightSection>
                    )}

                    {project.scenarioScreenshots && project.scenarioScreenshots.length > 0 && (
                      <HighlightSection
                        id="scenarios"
                        title="真实使用场景"
                        icon={Quote}
                        accent={{
                          border: 'border-l-violet-500',
                          bg: 'bg-violet-500/5',
                          text: 'text-violet-600 dark:text-violet-400',
                          iconBg: 'bg-violet-500/10',
                          iconText: 'text-violet-500',
                          dot: 'bg-violet-500',
                        }}
                      >
                        <ScenarioGallery screenshots={project.scenarioScreenshots} />
                      </HighlightSection>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="mt-10 pt-8 border-t border-muted">
                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <HashIcon className="h-4 w-4 text-muted-foreground" />
                  技术栈
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-md border border-muted-foreground/20 px-2.5 py-1 text-xs text-muted-foreground bg-muted/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="mt-6">
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
