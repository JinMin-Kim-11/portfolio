"use client"

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X, ArrowUpRight, Calendar, UserCircle, Sparkle, Target, Lightbulb, Workflow, CheckCircle2, BarChart3, Trophy, Briefcase } from 'lucide-react'
import { ProjectItemType } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { Favicon } from "favicon-stealer"

function Section({ icon: Icon, title, children, accent = 'text-teal-500' }: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  children: React.ReactNode
  accent?: string
}) {
  return (
    <div className="space-y-2">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Icon className={`h-4 w-4 ${accent}`} />
        {title}
      </h3>
      <div className="text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function DecisionCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="rounded-lg border border-muted-foreground/20 bg-muted/30 p-3">
      <p className="mb-1 text-xs font-semibold text-primary">{title}</p>
      <p className="text-xs text-muted-foreground leading-relaxed">{content}</p>
    </div>
  )
}

function WorkflowStep({ step, index, total }: { step: string; index: number; total: number }) {
  const isLast = index === total - 1
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
          {index + 1}
        </div>
        {!isLast && <div className="mt-1 w-px flex-1 bg-primary/20" />}
      </div>
      <p className="pb-3 pt-0.5 text-sm text-muted-foreground leading-relaxed">{step}</p>
    </div>
  )
}

export function ProjectModal({
  project,
  isOpen,
  onClose
}: {
  project: ProjectItemType | null
  isOpen: boolean
  onClose: () => void
}) {
  if (!project) return null

  const utmLink = project.link.href.startsWith('http')
    ? `${project.link.href}?utm_source=${utm_source}`
    : project.link.href

  const hasExternalLink = project.link.href && project.link.href !== '#'

  const isCaseStudy = project.businessBackground && project.problem && project.solution

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95 translate-y-4"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-95 translate-y-4"
          >
            <Dialog.Panel className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-muted-foreground/20 bg-white dark:bg-zinc-900 p-6 shadow-2xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 rounded-lg p-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                aria-label="关闭"
                data-track="project_modal_close"
              >
                <X size={20} strokeWidth={2.5} />
              </button>

              <div className="flex flex-col gap-6 pr-8">
                {/* Header */}
                <div className="flex flex-row items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <Favicon url={project.link.href} src={project.logo} alt={`${project.name} logo`} />
                  </div>
                  <div>
                    <Dialog.Title className="text-xl font-bold tracking-tight">
                      {project.name}
                    </Dialog.Title>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      {project.role && (
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          <span>{project.role}</span>
                        </div>
                      )}
                      {project.date && (
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{project.date}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {project.category && project.category.length > 0 && (
                  <div className="flex flex-wrap gap-2">
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

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Case Study Sections */}
                {isCaseStudy && (
                  <div className="flex flex-col gap-5 border-t border-muted pt-5">
                    {/* Business Background */}
                    {project.businessBackground && (
                      <Section icon={Target} title="01 · Business Background" accent="text-blue-500">
                        <p className="leading-relaxed">{project.businessBackground}</p>
                      </Section>
                    )}

                    {/* Problem */}
                    {project.problem && project.problem.length > 0 && (
                      <Section icon={Lightbulb} title="02 · Problem" accent="text-rose-500">
                        <BulletList items={project.problem} />
                      </Section>
                    )}

                    {/* Solution */}
                    {project.solution && (
                      <Section icon={Sparkle} title="03 · Solution" accent="text-violet-500">
                        <p className="leading-relaxed">{project.solution}</p>
                      </Section>
                    )}

                    {/* Product Decisions */}
                    {project.productDecisions && project.productDecisions.length > 0 && (
                      <Section icon={CheckCircle2} title="04 · Product Decisions" accent="text-amber-500">
                        <div className="space-y-2">
                          {project.productDecisions.map((d, i) => (
                            <DecisionCard key={i} title={d.title} content={d.content} />
                          ))}
                        </div>
                      </Section>
                    )}

                    {/* Agent Workflow */}
                    {project.agentWorkflow && project.agentWorkflow.length > 0 && (
                      <Section icon={Workflow} title="05 · Agent Workflow" accent="text-teal-500">
                        <div className="mt-2">
                          {project.agentWorkflow.map((step, i) => (
                            <WorkflowStep key={i} step={step} index={i} total={project.agentWorkflow!.length} />
                          ))}
                        </div>
                      </Section>
                    )}

                    {/* My Role */}
                    {project.myRole && project.myRole.length > 0 && (
                      <Section icon={UserCircle} title="06 · My Role" accent="text-indigo-500">
                        <BulletList items={project.myRole} />
                      </Section>
                    )}

                    {/* Validation */}
                    {project.validation && project.validation.length > 0 && (
                      <Section icon={BarChart3} title="07 · Validation" accent="text-cyan-500">
                        <BulletList items={project.validation} />
                      </Section>
                    )}

                    {/* Results */}
                    {project.results && project.results.length > 0 && (
                      <Section icon={Trophy} title="08 · Results" accent="text-emerald-500">
                        <BulletList items={project.results} />
                      </Section>
                    )}
                  </div>
                )}

                {/* Tech Stack */}
                {project.techStack && project.techStack.length > 0 && (
                  <div className="border-t border-muted pt-5">
                    <h3 className="mb-2 text-sm font-semibold text-foreground">技术栈</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-md border border-muted-foreground/20 px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-muted-foreground">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA */}
                {hasExternalLink && (
                  <div className="pt-2">
                    <Link
                      href={utmLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-teal-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-600"
                      data-track="project_visit_link"
                      data-track-data={project.name}
                    >
                      访问 {project.link.label}
                      <ArrowUpRight size={16} strokeWidth={2.5} />
                    </Link>
                  </div>
                )}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
