// site config
export const utm_source = process.env.NEXT_PUBLIC_UTM_SOURCE
export const site_url = process.env.NEXT_PUBLIC_SITE_URL

// navigation config
type NavItemType = {
  name: string
  href: string
}

export const footerItems: Array<NavItemType> = [
  {
    name: '首页',
    href: '/'
  },
  {
    name: '关于',
    href: '/about'
  },
  {
    name: '项目',
    href: '/projects'
  },
  {
    name: '博客',
    href: '/blogs'
  },
  {
    name: '更新日志',
    href: '/changelog'
  }
]

export const navItems: Array<NavItemType> = [
  {
    name: '首页',
    href: '/'
  },
  {
    name: '关于',
    href: '/about'
  },
  {
    name: '项目',
    href: '/projects'
  },
  {
    name: '博客',
    href: '/blogs'
  }
]
