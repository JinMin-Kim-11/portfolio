import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { changelogIntro, changelogHeadLine } from '@/config/infoConfig'
import ChangelogBlock from '@/components/changelog/Changelog'

export const metadata = {
  title: '更新日志',
  description: changelogHeadLine,
}

export default function PMChangelog() {
  return (
    <SimpleLayout
      title={changelogHeadLine}
      intro={changelogIntro}
    >
      <div className="space-y-20">
        <ChangelogBlock />
      </div>
    </SimpleLayout>
  )
}
