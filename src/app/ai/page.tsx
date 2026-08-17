import VersionHome from '@/components/home/VersionHome'
import { headline, introduction, projectHeadLine, projectIntro, projects } from '@/config/versions/ai'

export const metadata = {
  title: '金旻 - AI 解决方案工程师',
  description: introduction,
}

export default function AIHome() {
  return (
    <VersionHome
      headline={headline}
      introduction={introduction}
      projectHeadLine={projectHeadLine}
      projectIntro={projectIntro}
      projects={projects}
      basePath="/ai"
    />
  )
}
