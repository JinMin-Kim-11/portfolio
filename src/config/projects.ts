// projects
export const projectHeadLine = "我做过什么，正在做什么"
export const projectIntro = "从企业销售 Agent 到内部 AI 效率工具，再到海外 SaaS AI 产品，以下是我参与和主导的核心项目。"

export type ProjectItemType = {
    name: string
    description: string
    link: { href: string, label: string }
    date?: string
    logo?: string,
    category?: string[],
    tags?: string[],
    image?: string,
    techStack?: string[],
    gitStars?: number,
    gitForks?: number
  }
  
  // projects 
  export const projects: Array<ProjectItemType> = [
    {
      name: '药明生物官网智能获客 SDR Agent',
      description:
        '针对海外客户咨询时差与人工响应效率不足的问题，为企业官网搭建 AI 销售助手。完成需求分析、Agent 方案设计、工作流搭建、知识库建设与 Prompt 设计，跟踪上线后交互数据并持续优化。',
      link: { href: 'https://www.wuxibiologics.com', label: '药明生物' },
      category: ['AI Agent'],
      techStack: ['AI Agent', 'RAG', 'Prompt Engineering', '知识库'],
      tags: ['售前咨询', '获客SDR', '工作流设计'],
      date: '2025.11 - 2026.07'
    },
    {
      name: 'OpenClaw 企业内部 AI 效率工具',
      description:
        '通过企业微信作为统一入口，引入 AI 能力提升内部信息获取效率。设计自然语言查询流程，实现数据库、Git、K8s 等数据源接入，完成 Git 提交统计、开发数据查询、部门周报生成等 AI 自动化能力。',
      link: { href: 'https://www.jingdigital.com', label: '径硕科技' },
      category: ['AI 工具'],
      techStack: ['OpenClaw', '企业微信', 'Kubernetes', 'Git', '数据库'],
      tags: ['企业效率', '系统集成', '自然语言查询'],
      date: '2025.11 - 2026.07'
    },
    {
      name: '海外 inrepli 营销 Agent 平台',
      description:
        '参与海外 B2B 营销 SaaS 平台 AI Agent 产品建设。分析海外企业营销场景用户需求，参与 AI Agent 功能设计和产品流程优化，协助分析用户交互反馈为产品迭代提供方向。',
      link: { href: 'https://www.jingdigital.com', label: '径硕科技' },
      category: ['SaaS 产品'],
      techStack: ['AI Agent', 'SaaS', '营销自动化'],
      tags: ['海外B2B', '产品规划', '用户反馈'],
      date: '2025.11 - 2026.07'
    },
    {
      name: 'Python 智能学习平台',
      description:
        '独立开发 Python 在线学习平台，实现学生、教师、管理员多角色系统。完成用户管理、课程管理、题库考试、社区交流等功能模块，负责前后端开发、数据库设计及系统功能实现。',
      link: { href: '#', label: '个人项目' },
      category: ['全栈开发'],
      techStack: ['Python', 'Web 全栈', '数据库设计'],
      tags: ['独立开发', '多角色系统', '全栈'],
      date: '2024 - 2025'
    },
  ]
  
  export const githubProjects: Array<ProjectItemType> = []
  
