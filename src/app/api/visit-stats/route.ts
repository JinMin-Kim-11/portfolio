import { NextResponse } from 'next/server'
import { getStats } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const stats = getStats()
    return NextResponse.json({
      totalUV: String(stats.totalUV),
      dailyUV: String(stats.dailyUV),
      totalPV: String(stats.totalPV),
      dailyPV: String(stats.dailyPV),
    })
  } catch {
    return NextResponse.json({
      totalUV: '-',
      dailyUV: '-',
      totalPV: '-',
      dailyPV: '-',
    })
  }
}
