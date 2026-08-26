import { NextResponse } from 'next/server'
import { getStats } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const stats = getStats()
    return NextResponse.json(stats)
  } catch {
    return NextResponse.json({ error: 'server error' }, { status: 500 })
  }
}
