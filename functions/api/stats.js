export async function onRequestGet(context) {
  const { env, request } = context

  try {
    const url = new URL(request.url)
    const excludeVisitor = url.searchParams.get('exclude') || null
    const today = new Date().toISOString().split('T')[0]

    // --- 基础统计 ---
    const totalPV = excludeVisitor
      ? await env.DB.prepare('SELECT COUNT(*) as count FROM page_views WHERE visitor_id != ?').bind(excludeVisitor).first()
      : await env.DB.prepare('SELECT COUNT(*) as count FROM page_views').first()

    const totalUV = excludeVisitor
      ? await env.DB.prepare('SELECT COUNT(DISTINCT visitor_id) as count FROM page_views WHERE visitor_id != ?').bind(excludeVisitor).first()
      : await env.DB.prepare('SELECT COUNT(DISTINCT visitor_id) as count FROM page_views').first()

    const dailyPV = excludeVisitor
      ? await env.DB.prepare('SELECT COUNT(*) as count FROM page_views WHERE date(created_at) = ? AND visitor_id != ?').bind(today, excludeVisitor).first()
      : await env.DB.prepare('SELECT COUNT(*) as count FROM page_views WHERE date(created_at) = ?').bind(today).first()

    const dailyUV = excludeVisitor
      ? await env.DB.prepare('SELECT COUNT(DISTINCT visitor_id) as count FROM page_views WHERE date(created_at) = ? AND visitor_id != ?').bind(today, excludeVisitor).first()
      : await env.DB.prepare('SELECT COUNT(DISTINCT visitor_id) as count FROM page_views WHERE date(created_at) = ?').bind(today).first()

    // --- 热门页面 ---
    const topPages = excludeVisitor
      ? await env.DB.prepare('SELECT path, COUNT(*) as views FROM page_views WHERE visitor_id != ? GROUP BY path ORDER BY views DESC LIMIT 10').bind(excludeVisitor).all()
      : await env.DB.prepare('SELECT path, COUNT(*) as views FROM page_views GROUP BY path ORDER BY views DESC LIMIT 10').all()

    // --- 点击事件 (全部) ---
    const topClicks = excludeVisitor
      ? await env.DB.prepare('SELECT event_name, COUNT(*) as clicks FROM click_events WHERE visitor_id != ? GROUP BY event_name ORDER BY clicks DESC').bind(excludeVisitor).all()
      : await env.DB.prepare('SELECT event_name, COUNT(*) as clicks FROM click_events GROUP BY event_name ORDER BY clicks DESC').all()

    // --- 点击事件明细 (含 event_data) ---
    const clickDetails = excludeVisitor
      ? await env.DB.prepare("SELECT event_name, event_data, COUNT(*) as count FROM click_events WHERE visitor_id != ? GROUP BY event_name, event_data ORDER BY count DESC").bind(excludeVisitor).all()
      : await env.DB.prepare("SELECT event_name, event_data, COUNT(*) as count FROM click_events GROUP BY event_name, event_data ORDER BY count DESC").all()

    // --- 7 天趋势 ---
    const last7Days = excludeVisitor
      ? await env.DB.prepare(`SELECT date(created_at) as date, COUNT(*) as views, COUNT(DISTINCT visitor_id) as uv FROM page_views WHERE created_at >= date('now', '-6 days') AND visitor_id != ? GROUP BY date(created_at) ORDER BY date ASC`).bind(excludeVisitor).all()
      : await env.DB.prepare(`SELECT date(created_at) as date, COUNT(*) as views, COUNT(DISTINCT visitor_id) as uv FROM page_views WHERE created_at >= date('now', '-6 days') GROUP BY date(created_at) ORDER BY date ASC`).all()

    // --- 来源分析 (referrer) ---
    const referrers = excludeVisitor
      ? await env.DB.prepare(`SELECT CASE WHEN referrer IS NULL OR referrer = '' THEN '直接访问' WHEN referrer LIKE '%google%' THEN 'Google' WHEN referrer LIKE '%bing%' THEN 'Bing' WHEN referrer LIKE '%baidu%' THEN '百度' WHEN referrer LIKE '%github%' THEN 'GitHub' WHEN referrer LIKE '%weixin%' OR referrer LIKE '%微信%' THEN '微信' WHEN referrer LIKE '%linkedin%' THEN 'LinkedIn' WHEN referrer LIKE '%boss%' THEN 'BOSS直聘' WHEN referrer LIKE '%lagou%' THEN '拉勾' WHEN referrer LIKE '%zhihu%' THEN '知乎' WHEN referrer LIKE '%twitter%' OR referrer LIKE '%x.com%' THEN 'Twitter/X' ELSE substr(referrer, 1, instr(referrer || '/', '/') - 1) END as source, COUNT(*) as count FROM page_views WHERE visitor_id != ? GROUP BY source ORDER BY count DESC LIMIT 10`).bind(excludeVisitor).all()
      : await env.DB.prepare(`SELECT CASE WHEN referrer IS NULL OR referrer = '' THEN '直接访问' WHEN referrer LIKE '%google%' THEN 'Google' WHEN referrer LIKE '%bing%' THEN 'Bing' WHEN referrer LIKE '%baidu%' THEN '百度' WHEN referrer LIKE '%github%' THEN 'GitHub' WHEN referrer LIKE '%weixin%' OR referrer LIKE '%微信%' THEN '微信' WHEN referrer LIKE '%linkedin%' THEN 'LinkedIn' WHEN referrer LIKE '%boss%' THEN 'BOSS直聘' WHEN referrer LIKE '%lagou%' THEN '拉勾' WHEN referrer LIKE '%zhihu%' THEN '知乎' WHEN referrer LIKE '%twitter%' OR referrer LIKE '%x.com%' THEN 'Twitter/X' ELSE substr(referrer, 1, instr(referrer || '/', '/') - 1) END as source, COUNT(*) as count FROM page_views GROUP BY source ORDER BY count DESC LIMIT 10`).all()

    // --- 设备/浏览器分析 (user_agent) ---
    const devices = excludeVisitor
      ? await env.DB.prepare(`SELECT CASE WHEN user_agent LIKE '%Mobile%' OR user_agent LIKE '%iPhone%' OR user_agent LIKE '%Android%' THEN '移动端' WHEN user_agent LIKE '%iPad%' THEN '平板' ELSE '桌面端' END as device, COUNT(*) as count FROM page_views WHERE visitor_id != ? GROUP BY device ORDER BY count DESC`).bind(excludeVisitor).all()
      : await env.DB.prepare(`SELECT CASE WHEN user_agent LIKE '%Mobile%' OR user_agent LIKE '%iPhone%' OR user_agent LIKE '%Android%' THEN '移动端' WHEN user_agent LIKE '%iPad%' THEN '平板' ELSE '桌面端' END as device, COUNT(*) as count FROM page_views GROUP BY device ORDER BY count DESC`).all()

    const browsers = excludeVisitor
      ? await env.DB.prepare(`SELECT CASE WHEN user_agent LIKE '%Edg%' THEN 'Edge' WHEN user_agent LIKE '%Chrome%' THEN 'Chrome' WHEN user_agent LIKE '%Firefox%' THEN 'Firefox' WHEN user_agent LIKE '%Safari%' THEN 'Safari' WHEN user_agent LIKE '%MicroMessenger%' THEN '微信内置' ELSE '其他' END as browser, COUNT(*) as count FROM page_views WHERE visitor_id != ? GROUP BY browser ORDER BY count DESC`).bind(excludeVisitor).all()
      : await env.DB.prepare(`SELECT CASE WHEN user_agent LIKE '%Edg%' THEN 'Edge' WHEN user_agent LIKE '%Chrome%' THEN 'Chrome' WHEN user_agent LIKE '%Firefox%' THEN 'Firefox' WHEN user_agent LIKE '%Safari%' THEN 'Safari' WHEN user_agent LIKE '%MicroMessenger%' THEN '微信内置' ELSE '其他' END as browser, COUNT(*) as count FROM page_views GROUP BY browser ORDER BY count DESC`).all()

    const oses = excludeVisitor
      ? await env.DB.prepare(`SELECT CASE WHEN user_agent LIKE '%Windows%' THEN 'Windows' WHEN user_agent LIKE '%Mac OS%' THEN 'macOS' WHEN user_agent LIKE '%iPhone%' OR user_agent LIKE '%iPad%' THEN 'iOS' WHEN user_agent LIKE '%Android%' THEN 'Android' WHEN user_agent LIKE '%Linux%' THEN 'Linux' ELSE '其他' END as os, COUNT(*) as count FROM page_views WHERE visitor_id != ? GROUP BY os ORDER BY count DESC`).bind(excludeVisitor).all()
      : await env.DB.prepare(`SELECT CASE WHEN user_agent LIKE '%Windows%' THEN 'Windows' WHEN user_agent LIKE '%Mac OS%' THEN 'macOS' WHEN user_agent LIKE '%iPhone%' OR user_agent LIKE '%iPad%' THEN 'iOS' WHEN user_agent LIKE '%Android%' THEN 'Android' WHEN user_agent LIKE '%Linux%' THEN 'Linux' ELSE '其他' END as os, COUNT(*) as count FROM page_views GROUP BY os ORDER BY count DESC`).all()

    // --- 版本对比 (PM vs AI) ---
    const pmPV = excludeVisitor
      ? await env.DB.prepare("SELECT COUNT(*) as count FROM page_views WHERE path LIKE '/pm%' AND visitor_id != ?").bind(excludeVisitor).first()
      : await env.DB.prepare("SELECT COUNT(*) as count FROM page_views WHERE path LIKE '/pm%'").first()
    const aiPV = excludeVisitor
      ? await env.DB.prepare("SELECT COUNT(*) as count FROM page_views WHERE path LIKE '/ai%' AND visitor_id != ?").bind(excludeVisitor).first()
      : await env.DB.prepare("SELECT COUNT(*) as count FROM page_views WHERE path LIKE '/ai%'").first()
    const pmUV = excludeVisitor
      ? await env.DB.prepare("SELECT COUNT(DISTINCT visitor_id) as count FROM page_views WHERE path LIKE '/pm%' AND visitor_id != ?").bind(excludeVisitor).first()
      : await env.DB.prepare("SELECT COUNT(DISTINCT visitor_id) as count FROM page_views WHERE path LIKE '/pm%'").first()
    const aiUV = excludeVisitor
      ? await env.DB.prepare("SELECT COUNT(DISTINCT visitor_id) as count FROM page_views WHERE path LIKE '/ai%' AND visitor_id != ?").bind(excludeVisitor).first()
      : await env.DB.prepare("SELECT COUNT(DISTINCT visitor_id) as count FROM page_views WHERE path LIKE '/ai%'").first()

    // --- 回访率 ---
    const returningVisitors = excludeVisitor
      ? await env.DB.prepare(`SELECT COUNT(*) as count FROM (SELECT visitor_id, COUNT(DISTINCT date(created_at)) as days FROM page_views WHERE visitor_id != ? GROUP BY visitor_id HAVING days > 1)`).bind(excludeVisitor).first()
      : await env.DB.prepare(`SELECT COUNT(*) as count FROM (SELECT visitor_id, COUNT(DISTINCT date(created_at)) as days FROM page_views GROUP BY visitor_id HAVING days > 1)`).first()
    const returnRate = totalUV.count > 0 ? Math.round((returningVisitors.count / totalUV.count) * 100) : 0

    // --- 时段分布 ---
    const hourly = excludeVisitor
      ? await env.DB.prepare(`SELECT cast(strftime('%H', created_at) as integer) as hour, COUNT(*) as views, COUNT(DISTINCT visitor_id) as uv FROM page_views WHERE visitor_id != ? GROUP BY hour ORDER BY hour ASC`).bind(excludeVisitor).all()
      : await env.DB.prepare(`SELECT cast(strftime('%H', created_at) as integer) as hour, COUNT(*) as views, COUNT(DISTINCT visitor_id) as uv FROM page_views GROUP BY hour ORDER BY hour ASC`).all()

    // --- 页面停留时长估算 ---
    const dwellTimes = excludeVisitor
      ? await env.DB.prepare(`WITH ordered AS (SELECT visitor_id, path, created_at, LEAD(created_at) OVER (PARTITION BY visitor_id ORDER BY created_at) as next_at FROM page_views WHERE visitor_id != ?) SELECT path, ROUND(AVG(CASE WHEN next_at IS NOT NULL AND (julianday(next_at) - julianday(created_at)) * 24 * 60 * 60 < 1800 THEN (julianday(next_at) - julianday(created_at)) * 24 * 60 * 60 ELSE 0 END), 1) as avg_dwell FROM ordered GROUP BY path ORDER BY avg_dwell DESC LIMIT 10`).bind(excludeVisitor).all()
      : await env.DB.prepare(`WITH ordered AS (SELECT visitor_id, path, created_at, LEAD(created_at) OVER (PARTITION BY visitor_id ORDER BY created_at) as next_at FROM page_views) SELECT path, ROUND(AVG(CASE WHEN next_at IS NOT NULL AND (julianday(next_at) - julianday(created_at)) * 24 * 60 * 60 < 1800 THEN (julianday(next_at) - julianday(created_at)) * 24 * 60 * 60 ELSE 0 END), 1) as avg_dwell FROM ordered GROUP BY path ORDER BY avg_dwell DESC LIMIT 10`).all()

    // --- 浏览路径 (最近 20 条路径) ---
    const paths = excludeVisitor
      ? await env.DB.prepare(`SELECT visitor_id, path, created_at FROM page_views WHERE visitor_id != ? ORDER BY created_at DESC LIMIT 200`).bind(excludeVisitor).all()
      : await env.DB.prepare(`SELECT visitor_id, path, created_at FROM page_views ORDER BY created_at DESC LIMIT 200`).all()

    const visitorMap = {}
    for (const row of paths.results) {
      if (!visitorMap[row.visitor_id]) {
        visitorMap[row.visitor_id] = []
      }
      visitorMap[row.visitor_id].push(row)
    }
    for (const id in visitorMap) {
      visitorMap[id].reverse()
    }
    const pathSequences = Object.entries(visitorMap)
      .filter(([, v]) => v.length > 0)
      .sort((a, b) => b[1].length - a[1].length)
      .slice(0, 10)
      .map(([id, visits]) => ({
        visitorId: id.slice(0, 8),
        pages: visits.map(v => v.path),
        count: visits.length,
      }))

    return new Response(JSON.stringify({
      totalPV: totalPV.count,
      totalUV: totalUV.count,
      dailyPV: dailyPV.count,
      dailyUV: dailyUV.count,
      topPages: topPages.results,
      topClicks: topClicks.results,
      clickDetails: clickDetails.results,
      last7Days: last7Days.results,
      referrers: referrers.results,
      devices: devices.results,
      browsers: browsers.results,
      oses: oses.results,
      versionCompare: {
        pm: { pv: pmPV.count, uv: pmUV.count },
        ai: { pv: aiPV.count, uv: aiUV.count },
      },
      returnRate,
      returningVisitors: returningVisitors.count,
      hourly: hourly.results,
      dwellTimes: dwellTimes.results,
      pathSequences,
      excluded: excludeVisitor ? true : false,
    }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'server error', detail: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
