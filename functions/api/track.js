export async function onRequestPost(context) {
  const { request, env } = context

  try {
    const body = await request.json()
    const { type, path, visitorId, eventName, eventData } = body

    if (!path || !visitorId) {
      return new Response(JSON.stringify({ error: 'missing fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const userAgent = request.headers.get('user-agent') || null
    const referrer = body.referrer || null

    if (type === 'pageview') {
      await env.DB.prepare(
        'INSERT INTO page_views (path, visitor_id, referrer, user_agent) VALUES (?, ?, ?, ?)'
      ).bind(path, visitorId, referrer, userAgent).run()
    } else if (type === 'click' && eventName) {
      await env.DB.prepare(
        'INSERT INTO click_events (path, visitor_id, event_name, event_data) VALUES (?, ?, ?, ?)'
      ).bind(path, visitorId, eventName, eventData || null).run()
    } else {
      return new Response(JSON.stringify({ error: 'invalid type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
