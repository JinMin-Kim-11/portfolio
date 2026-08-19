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
    date: '2026-08-19',
    content: [
      {
        title: '🔄 双版本作品集策略调整',
        description: '核心策略从"两个职业身份"改为"同一人，不同能力侧重点"。首页 headline 增加"解决方案"关键词，让两个入口自然衔接。'
      },
      {
        title: '✏️ 产品经理入口优化',
        description: '标题从"AI Agent 产品设计师"改为"AI产品经理"，贴近招聘市场搜索关键词。副标题改为"AI Agent × 产品设计 × 用户需求"，标签调整为用户需求分析、AI产品方案设计、Agent工作流规划、PRD与产品迭代。'
      },
      {
        title: '✏️ AI解决方案工程师入口优化',
        description: '副标题从"Agent开发 × RAG × 系统集成"改为"AI Agent × 系统集成 × 企业AI"，突出解决方案工程师核心能力而非纯RAG开发。标签调整为AI Agent工作流、RAG知识库、企业系统集成、AI应用交付。'
      },
      {
        title: '📝 选择区域文案优化',
        description: '将"选择你想了解的版本"改为"从不同视角了解我的项目实践"，CTA按钮改为"进入产品经理版本/进入解决方案版本"。'
      },
      {
        title: '🔀 项目内容双视角重写（核心变更）',
        description: '同一项目用两种思维方式重新解释。PM版按"业务问题→产品方案→用户旅程→Agent流程→数据反馈"结构展示，AI版按"业务问题→技术方案→系统架构→关键实现→交付结果"结构展示。AI页面避免技术简历化，不再堆砌技术栈Logo。'
      },
      {
        title: '🎨 视觉色彩区分',
        description: '产品经理入口保持蓝色渐变(from-blue-500 to-cyan-500)，AI解决方案工程师入口保持紫色渐变(from-purple-500 to-pink-500)，形成视觉锚点。'
      },
    ]
  },
  {
    date: '2026-08-13',
    content: [
      {
        title: '🚀 网站从 Vercel 迁移到 Cloudflare Pages',
        description: '为解决 Vercel 国内无法访问的问题，将作品集网站迁移至 Cloudflare Pages。迁移过程中解决 OpenNext 适配器与静态导出冲突（Framework preset 设为 None）、trailingSlash: true 修复子路径路由 404、改用 wrangler CLI 直接上传构建产物，最终实现国内可直接访问。'
      },
    ]
  },
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