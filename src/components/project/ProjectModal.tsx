"use client"

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X, ArrowUpRight, CalendarBlank, UserCircle, Sparkle } from '@phosphor-icons/react'
import { ProjectItemType } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { Favicon } from "favicon-stealer"

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
                <X size={20} weight="bold" />
              </button>

              <div className="flex flex-col gap-5">
                <div className="flex flex-row items-center gap-4 pr-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <Favicon url={project.link.href} src={project.logo} alt={`${project.name} logo`} />
                  </div>
                  <Dialog.Title className="text-xl font-bold tracking-tight">
                    {project.name}
                  </Dialog.Title>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  {project.role && (
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <UserCircle size={16} weight="duotone" />
                      <span>{project.role}</span>
                    </div>
                  )}
                  {project.date && (
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <CalendarBlank size={16} weight="duotone" />
                      <span>{project.date}</span>
                    </div>
                  )}
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

                {project.techStack && project.techStack.length > 0 && (
                  <div>
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

                {project.highlights && project.highlights.length > 0 && (
                  <div>
                    <h3 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
                      <Sparkle size={16} weight="duotone" className="text-teal-500" />
                      项目亮点
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {project.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-muted-foreground">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

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
                      <ArrowUpRight size={16} weight="bold" />
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
