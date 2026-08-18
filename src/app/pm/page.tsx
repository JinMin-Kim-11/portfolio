import VersionHome from '@/components/home/VersionHome'
import { headline, introduction, projectHeadLine, projectIntro, projects } from '@/config/versions/pm'

export const metadata = {
  title: '金旻 - AI产品经理',
  description: introduction,
}

export default function PMHome() {
  return (
    <VersionHome
      headline={headline}
      introduction={introduction}
      projectHeadLine={projectHeadLine}
      projectIntro={projectIntro}
      projects={projects}
      basePath="/pm"
    />
  )
}
