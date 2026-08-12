// changelog
export const changelogHeadLine = "网站更新记录"
export const changelogIntro = "这个作品集网站的最新变化。"


// changelog
export type ChangelogItemType = {
  date: string
  content: Array<{
    title: string
    description: string
  }>
}

export const changelogList: Array<ChangelogItemType> = [
  {
    date: '2026-08-12',
    content: [
      {
        title: '📝 根据简历更新全部内容',
        description: '根据真实简历信息更新个人信息、项目经历、职业背景、教育背景与博客文章，全面反映 AI Agent 产品设计经验。'
      },
      {
        title: '🚀 作品集网站上线',
        description: '基于 coreychiu-portfolio-template 搭建个人作品集网站，展示项目经历、职业背景与个人简介。'
      },
    ]
  },
]
