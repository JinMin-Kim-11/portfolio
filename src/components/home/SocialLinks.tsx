"use client"

import { useState } from 'react'
import { socialLinks, wechatId } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { CustomIcon } from '@/components/shared/CustomIcon'
import { cn } from '@/lib/utils'

export default function SocialLinks({ className }: { className?: string }) {
    const [showWechatTip, setShowWechatTip] = useState(false)

    const handleWechatClick = async (e: React.MouseEvent) => {
        e.preventDefault()
        try {
            await navigator.clipboard.writeText(wechatId)
        } catch {}
        setShowWechatTip(true)
        setTimeout(() => setShowWechatTip(false), 3000)
    }

    return (
        <div className={cn("mt-6 flex items-center", className)}>
            {socialLinks.map((link) => {
                if (link.name === 'Wechat') {
                    return (
                        <div key={link.name} className="relative">
                            <button
                                onClick={handleWechatClick}
                                aria-label={`微信号：${wechatId}`}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground transition"
                                data-track="social_wechat_copy"
                            >
                                <CustomIcon name={link.icon} />
                                <span className="sr-only">{link.name}</span>
                            </button>
                            {showWechatTip && (
                                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-teal-500 px-3 py-1.5 text-xs font-medium text-white shadow-lg">
                                    微信号已复制：{wechatId}
                                </div>
                            )}
                        </div>
                    )
                }
                return (
                        <Link
                            key={link.name}
                            href={link.external ? `${link.href}?utm_source=${utm_source}` : link.href}
                            target={link.external ? "_blank" : "_self"}
                            rel="noreferrer"
                            aria-label={link.ariaLabel ?? `Follow on ${link.name}`}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                            data-track="social_link"
                            data-track-data={link.name}
                        >
                        <CustomIcon name={link.icon} />
                        <span className="sr-only">{link.name}</span>
                    </Link>
                )
            })}
        </div>
    )
}
