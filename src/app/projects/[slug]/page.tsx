import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { projects } from '@/config/projects'
import { ProjectDetail } from '@/components/project/ProjectDetail'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects
    .filter((p) => p.slug)
    .map((project) => ({
      slug: project.slug!,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: '项目未找到',
    }
  }

  return {
    title: project.name,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
