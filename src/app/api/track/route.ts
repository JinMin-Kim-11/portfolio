import { NextRequest, NextResponse } from 'next/server'
import { recordPageView, recordClickEvent } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, path, visitorId, eventName, eventData } = body

    if (!path || !visitorId) {
      return NextResponse.json({ error: 'missing fields' }, { status: 400 })
    }

    const userAgent = request.headers.get('user-agent') ?? undefined
    const referrer = body.referrer ?? undefined

    if (type === 'pageview') {
      recordPageView({ path, visitorId, referrer, userAgent })
    } else if (type === 'click' && eventName) {
      recordClickEvent({ path, visitorId, eventName, eventData })
    } else {
      return NextResponse.json({ error: 'invalid type' }, { status: 400 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'server error' }, { status: 500 })
  }
}
