"use client"

import Link from 'next/link'
import { email, gmail, phone, wechatId, socialLinks } from '@/config/infoConfig'
import { CustomIcon } from '@/components/shared/CustomIcon'
import { Phone, Envelope, WechatLogo } from '@phosphor-icons/react'


export default function SocialLinks() {
  return (
    <div>
      <div className="mt-6 flex flex-row flex-wrap justify-center md:justify-start items-center gap-1">
        {socialLinks.filter((link) => link.name !== 'Wechat').map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.ariaLabel ?? `Follow on ${link.name}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
          >
            <CustomIcon name={link.icon} />
            <span className="sr-only">{link.name}</span>
          </Link>
        ))}
      </div>
      <div className="mt-8 border-t pt-8 space-y-4">
        <Link
          href={`tel:${phone}`}
          className="group flex flex-row ml-3 justify-start items-center text-md font-medium transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        >
          <Phone size={22} weight="duotone" />
          <span className="ml-4">{phone}</span>
        </Link>
        <div
          className="group flex flex-row ml-3 justify-start items-center text-md font-medium dark:text-zinc-200"
        >
          <WechatLogo size={22} weight="duotone" />
          <span className="ml-4">微信：{wechatId}</span>
        </div>
        <Link
          href={`mailto:${email}`}
          className="group flex flex-row ml-3 justify-start items-center text-md font-medium transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        >
          <Envelope size={22} weight="duotone" />
          <span className="ml-4">{email}</span>
        </Link>
        <Link
          href={`mailto:${gmail}`}
          className="group flex flex-row ml-3 justify-start items-center text-md font-medium transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        >
          <Envelope size={22} weight="duotone" />
          <span className="ml-4">{gmail}</span>
        </Link>
      </div>
    </div>

  )
}
