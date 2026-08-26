'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

function getVisitorId() {
  const KEY = 'vid'
  let id = localStorage.getItem(KEY)
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem(KEY, id)
  }
  return id
}

export function Tracker() {
  const pathname = usePathname()

  useEffect(() => {
    const visitorId = getVisitorId()

    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'pageview',
        path: pathname,
        visitorId,
        referrer: document.referrer || undefined,
      }),
    }).catch(() => {})
  }, [pathname])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-track]')
      if (!target) return

      const eventName = target.getAttribute('data-track') || 'click'
      const visitorId = getVisitorId()

      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'click',
          path: window.location.pathname,
          visitorId,
          eventName,
          eventData: target.getAttribute('data-track-data') || undefined,
        }),
      }).catch(() => {})
    }

    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return null
}
