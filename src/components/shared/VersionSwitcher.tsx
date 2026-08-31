'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from 'lucide-react'
import { getVersionPrefix } from '@/config/siteConfig'

const versions = [
  { prefix: '/pm', label: '产品经理', short: 'PM' },
  { prefix: '/ai', label: 'AI 解决方案工程师', short: 'AI' },
]

export function VersionSwitcher() {
  const pathname = usePathname()
  const currentPrefix = getVersionPrefix(pathname)

  if (!currentPrefix) return null

  const currentVersion = versions.find(v => v.prefix === currentPrefix)
  const otherVersions = versions.filter(v => v.prefix !== currentPrefix)

  function getSwitchHref(targetPrefix: string): string {
    const rest = pathname.slice(currentPrefix.length)
    if (rest === '' || rest === '/') return targetPrefix
    return `${targetPrefix}${rest}`
  }

  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium shadow-sm ring-1 ring-muted backdrop-blur bg-card transition hover:ring-primary/40" data-track="nav_version_switch">
        {currentVersion?.short}
        <ChevronDownIcon className="h-3 w-3" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-xl border border-muted bg-card p-1 shadow-lg">
          <div className="px-2 py-1.5 text-xs text-muted-foreground">
            当前版本
          </div>
          <div className="px-2 py-1.5 text-sm font-medium">
            {currentVersion?.label}
          </div>
          <div className="my-1 border-t border-muted" />
          <div className="px-2 py-1.5 text-xs text-muted-foreground">
            切换到
          </div>
          {otherVersions.map((version) => (
            <Link
              key={version.prefix}
              href={getSwitchHref(version.prefix)}
              className="block rounded-lg px-2 py-1.5 text-sm transition hover:bg-muted"
              data-track="nav_version_change"
              data-track-data={version.short}
            >
              {version.label}
            </Link>
          ))}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
