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
    role?: string,
    highlights?: string[],
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
      logo: '/images/icon/wuxibiologics.ico',
      category: ['AI Agent'],
      techStack: ['AI Agent', 'RAG', 'Prompt Engineering', '知识库'],
      tags: ['售前咨询', '获客SDR', '工作流设计'],
      role: 'AI 产品实习生',
      date: '2025.11 - 2026.03',
      highlights: [
        '针对海外客户咨询时差问题，设计 7×24 小时 AI 销售助手方案，覆盖售前咨询全流程',
        '完成 Agent 工作流设计：意图识别 → 知识库检索 → 话术生成 → 人工转接，实现自动应答与人工兜底',
        '搭建 RAG 知识库，整合产品文档、FAQ、案例库等内容，提升回答准确率',
        '设计多轮 Prompt 模板，优化 AI 回复的专业度与语气一致性',
        '上线后持续跟踪交互数据，分析转化漏斗，迭代优化对话流程与知识库内容',
      ]
    },
    {
      name: 'OpenClaw 企业内部 AI 效率工具',
      description:
        '通过企业微信作为统一入口，引入 AI 能力提升内部信息获取效率。设计自然语言查询流程，实现数据库、Git、K8s 等数据源接入，完成 Git 提交统计、开发数据查询、部门周报生成等 AI 自动化能力。',
      link: { href: 'https://www.jingdigital.com', label: '径硕科技' },
      logo: '/images/icon/jingdigital.ico',
      category: ['AI 工具'],
      techStack: ['OpenClaw', '企业微信', 'Kubernetes', 'Git', '数据库'],
      tags: ['企业效率', '系统集成', '自然语言查询'],
      role: 'AI 产品实习生',
      date: '2026.03 - 2026.04',
      highlights: [
        '以企业微信为统一入口，设计自然语言查询流程，降低内部工具使用门槛',
        '推动数据库、Git、Kubernetes 等多数据源接入，实现一站式信息查询',
        '设计 Git 提交统计、开发数据看板等功能，帮助管理者实时掌握团队进展',
        '实现部门周报自动生成，将人工整理时间从 2 小时缩短至 5 分钟',
        '完成产品需求文档与原型设计，协调研发团队推进功能落地',
      ]
    },
    {
      name: '海外 inrepli 营销 Agent 平台',
      description:
        '参与海外 B2B 营销 SaaS 平台 AI Agent 产品建设。分析海外企业营销场景用户需求，参与 AI Agent 功能设计和产品流程优化，协助分析用户交互反馈为产品迭代提供方向。',
      link: { href: 'https://www.inrepli.com/', label: 'inrepli' },
      logo: '/images/icon/inrepli.png',
      category: ['SaaS 产品'],
      techStack: ['AI Agent', 'SaaS', '营销自动化'],
      tags: ['海外B2B', '产品规划', '用户反馈'],
      role: 'AI 产品实习生',
      date: '2026.05 - 2026.07',
      highlights: [
        '深入分析海外 B2B 营销场景，梳理用户旅程与核心痛点',
        '参与 AI Agent 功能设计，包括邮件营销自动化、客户画像分析、智能推荐等模块',
        '绘制产品流程图与交互原型，与海外团队协作推进功能落地',
        '建立用户反馈分析机制，整理交互数据为产品迭代提供数据支撑',
        '参与竞品分析，对比同类海外营销 SaaS 产品的 AI 能力差异',
      ]
    },
    {
      name: 'Python 智能学习平台',
      description:
        '独立开发 Python 在线学习平台，实现学生、教师、管理员多角色系统。完成用户管理、课程管理、题库考试、社区交流等功能模块，负责前后端开发、数据库设计及系统功能实现。',
      link: { href: '#', label: '个人项目' },
      logo: '/images/icon/python.ico',
      category: ['全栈开发'],
      techStack: ['Python', 'Flask', 'MySQL', 'HTML/CSS/JS', 'Bootstrap'],
      tags: ['独立开发', '多角色系统', '全栈'],
      role: '独立开发者',
      date: '2025.09 - 2025.11',
      highlights: [
        '独立完成全栈开发，设计三角色权限体系（学生/教师/管理员）',
        '实现课程管理模块：课程发布、视频上传、学习进度追踪',
        '开发题库考试系统：支持自动组卷、在线答题、自动评分',
        '搭建社区交流模块：帖子发布、评论互动、学习笔记分享',
        '设计 MySQL 数据库结构，优化查询性能，支持 200+ 并发用户',
      ]
    },
  ]
  
  export const githubProjects: Array<ProjectItemType> = []
  
