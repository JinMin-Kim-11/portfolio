'use client'

import { Container } from '@/components/layout/Container'
import SocialLinks from '@/components/home/SocialLinks'
import { projects } from '@/config/infoConfig'
import { Favicon } from 'favicon-stealer'
import Link from 'next/link'
import { ArrowRight, MapPin, GraduationCap, Briefcase } from 'lucide-react'

const featuredProjects = projects.filter((p) => p.featured)

export default function Home() {

  return (
    <Container className="mt-9">
      <div className="flex min-h-[70vh] flex-col">
        {/* Hero */}
        <div className="mb-16 pt-8">
          <p className="mb-3 text-sm font-medium text-primary">AI Product Manager</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            把业务需求变成 AI 产品
          </h1>
          <h2 className="mt-2 text-xl font-medium text-muted-foreground sm:text-2xl">
            AI Agent × 产品设计 × 技术落地
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            软件工程背景，具备 AI Agent、RAG、AI SaaS 产品实践经验。擅长从<strong className="text-foreground">业务需求分析 → AI 产品方案 → Agent Workflow → 产品落地 → 测试迭代</strong>完整推进 AI 应用。
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Briefcase className="h-4 w-4" />
              <span>AI 产品经理 / AI Agent 产品经理</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span>上海</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4" />
              <span>26 届应届毕业生</span>
            </div>
          </div>
        </div>

        {/* Selected Projects */}
        <div className="mb-16">
          <div className="mb-8">
            <p className="text-sm font-medium text-primary">Selected AI Product Projects</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight">三个核心项目，完整的 AI 产品思考</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              从企业售前 Agent 到内部效率工具，再到海外 SaaS 产品。每个项目都包含业务问题、产品决策、Agent Workflow 和验证结果。
            </p>
          </div>

          <div className="space-y-4">
            {featuredProjects.map((project) => (
              <Link
                key={project.name}
                href={project.slug ? `/projects/${project.slug}` : '#'}
                className="group w-full rounded-2xl border border-muted-foreground/20 bg-card p-6 text-left shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                data-track="home_featured_project"
                data-track-data={project.name}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  {/* Index + Logo */}
                  <div className="flex shrink-0 items-center gap-3 sm:w-48">
                    <span className="text-3xl font-bold text-primary/20">{project.index}</span>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <Favicon url={project.link.href} src={project.logo} alt={`${project.name} logo`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    {project.businessScene && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground/80">业务场景</span>｜{project.businessScene}
                      </p>
                    )}
                    {project.myWork && project.myWork.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.myWork.map((w, i) => (
                          <span key={i} className="rounded-md bg-primary/5 px-2 py-0.5 text-xs font-medium text-primary/80">
                            {w}
                          </span>
                        ))}
                      </div>
                    )}
                    {project.keywords && project.keywords.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.keywords.map((k, i) => (
                          <span key={i} className="text-xs text-muted-foreground">
                            #{k}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Arrow */}
                  <div className="hidden sm:flex sm:shrink-0 sm:items-center sm:justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="mb-16">
          <div className="mb-8">
            <p className="text-sm font-medium text-primary">What I Bring</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight">三层能力，一个目标</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-muted-foreground/20 bg-card p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                <span className="text-lg">🎯</span>
              </div>
              <h3 className="text-lg font-semibold">产品能力</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                需求分析、用户研究、PRD 撰写、原型设计、产品迭代、数据驱动决策
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                <li>• Axure / Figma 原型</li>
                <li>• PRD 与产品文档</li>
                <li>• 用户旅程与场景分析</li>
                <li>• 数据指标体系</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-muted-foreground/20 bg-card p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                <span className="text-lg">🤖</span>
              </div>
              <h3 className="text-lg font-semibold">AI 能力</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                AI Agent 设计、RAG 知识库方案、Prompt Engineering、LLM 应用落地
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                <li>• Agent Workflow 设计</li>
                <li>• RAG 知识库架构</li>
                <li>• Prompt 模板设计</li>
                <li>• 大模型效果评估</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-muted-foreground/20 bg-card p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                <span className="text-lg">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold">技术落地能力</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                软件工程背景，能与研发高效协作，理解技术可行性，推动 AI 产品真正落地
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                <li>• Python / JavaScript / SQL</li>
                <li>• FastGPT / OpenClaw 智能体</li>
                <li>• Docker / Kubernetes / Git</li>
                <li>• 企业微信 AI 应用</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-8">
          <SocialLinks />
        </div>
      </div>
    </Container>
  )
}
