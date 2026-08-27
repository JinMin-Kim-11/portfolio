// site config
export const utm_source = process.env.NEXT_PUBLIC_UTM_SOURCE
export const site_url = process.env.NEXT_PUBLIC_SITE_URL

// navigation config
type NavItemType = {
  name: string
  href: string
}

export function getNavItems(prefix: string = ''): Array<NavItemType> {
  return [
    { name: '首页', href: prefix || '/' },
    { name: '关于', href: `${prefix}/about` },
    { name: '项目', href: `${prefix}/projects` },
    { name: '博客', href: `${prefix}/blogs` },
  ]
}

export function getFooterItems(prefix: string = ''): Array<NavItemType> {
  return [
    { name: '首页', href: prefix || '/' },
    { name: '关于', href: `${prefix}/about` },
    { name: '项目', href: `${prefix}/projects` },
    { name: '博客', href: `${prefix}/blogs` },
    { name: '更新日志', href: `${prefix}/changelog` },
    { name: '数据统计', href: `${prefix}/stats` },
  ]
}

export function getVersionPrefix(pathname: string): string {
  if (pathname.startsWith('/pm')) return '/pm'
  if (pathname.startsWith('/ai')) return '/ai'
  return ''
}

export const footerItems = getFooterItems()
export const navItems = getNavItems()
