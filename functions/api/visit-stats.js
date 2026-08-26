export async function onRequestGet(context) {
  const { env } = context

  try {
    const totalUV = await env.DB.prepare('SELECT COUNT(DISTINCT visitor_id) as count FROM page_views').first()
    const today = new Date().toISOString().split('T')[0]
    const dailyUV = await env.DB.prepare(
      'SELECT COUNT(DISTINCT visitor_id) as count FROM page_views WHERE date(created_at) = ?'
    ).bind(today).first()
    const totalPV = await env.DB.prepare('SELECT COUNT(*) as count FROM page_views').first()
    const dailyPV = await env.DB.prepare(
      'SELECT COUNT(*) as count FROM page_views WHERE date(created_at) = ?'
    ).bind(today).first()

    return new Response(JSON.stringify({
      totalUV: String(totalUV.count),
      dailyUV: String(dailyUV.count),
      totalPV: String(totalPV.count),
      dailyPV: String(dailyPV.count),
    }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({
      totalUV: '-',
      dailyUV: '-',
      totalPV: '-',
      dailyPV: '-',
    }), {
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
