import { type ProjectItemType } from '@/config/projects'

export const headline = 'AI 解决方案工程师 | Agent 开发 × RAG × 企业 AI 系统集成'
export const introduction = '软件工程背景，具备 AI Agent 开发与企业 AI 系统集成经验。熟悉 RAG 知识库搭建、Prompt Engineering、Agent 工作流开发，能够将大模型能力与企业系统（数据库、Git、K8s）深度集成，推动 AI 解决方案从技术验证到生产部署全流程。'

export const aboutMeHeadline = "我是金旻，AI 解决方案工程师，专注于企业 AI 应用的技术落地与系统集成。"

export const aboutParagraphs = [
  "我拥有软件工程学术背景，先后在上海建桥学院完成计算机科学技术和软件工程的学习。扎实的工程基础让我能够快速理解技术架构，在 AI Agent 开发、RAG 知识库搭建、企业系统集成等场景中，将产品需求转化为可落地的技术方案。",
  "在径硕网络科技（上海）有限公司担任 AI 产品实习生期间，我深度参与了多个 AI Agent 项目的技术建设。从药明生物官网智能获客 SDR Agent 的 RAG 知识库搭建与 Prompt 工程，到 OpenClaw 企业内部 AI 工具的多数据源接入与 Agent 开发，再到海外 inrepli 营销 Agent 平台的功能实现，我积累了 AI 解决方案从技术选型到生产部署的完整经验。",
  "我的核心能力涵盖三个维度：AI Agent 开发能力（RAG 知识库搭建、Prompt Engineering、Agent 工作流开发、FastGPT/OpenClaw 智能体搭建）、大模型应用工程能力（LLM API 集成、向量检索、对话流程编排）、以及企业系统集成能力（数据库查询接入、Git API 集成、Kubernetes 数据对接、企业微信应用开发）。",
  "除了技术能力，我在校园中也有丰富的组织管理经验——大三担任拳击社团社长，将社团规模发展到 180 人并实现活跃度同比增长；大一带领班级获得院校情景剧双一等奖及个人最佳奖。这些经历培养了我的团队协作与项目推进能力。"
]

export const projectHeadLine = "我做过什么，正在做什么"
export const projectIntro = "从 RAG 知识库搭建到企业系统集成，再到海外 SaaS AI 平台开发，以下是我参与和主导的核心项目。"

export const projects: Array<ProjectItemType> = [
  {
    name: 'OpenClaw 企业内部 AI 效率工具',
    description:
      '负责企业内部 AI 工具的 Agent 开发与系统集成。通过企业微信入口接入 AI 能力，实现数据库、Git、K8s 等多数据源的自然语言查询，完成 Git 提交统计、开发数据查询、部门周报自动生成等 AI 自动化功能开发。',
    link: { href: 'https://www.jingdigital.com', label: '径硕科技' },
    category: ['AI 工具'],
    techStack: ['OpenClaw', '企业微信', 'Kubernetes', 'Git', '数据库'],
    tags: ['Agent开发', '系统集成', '自然语言查询'],
    role: 'AI 产品实习生',
    date: '2025.11 - 2026.07',
    highlights: [
      '基于 OpenClaw 平台开发企业微信 AI Agent，实现自然语言到结构化查询的转换',
      '完成数据库、Git API、Kubernetes 等多数据源接入，设计统一的数据查询接口层',
      '开发 Git 提交统计 Agent，自动聚合开发数据并生成可视化报告',
      '实现部门周报自动生成 Agent，通过数据聚合与 LLM 总结，将整理时间从 2 小时缩短至 5 分钟',
      '优化 Agent 响应链路，处理并发请求与超时场景，确保系统稳定性',
    ]
  },
  {
    name: '药明生物官网智能获客 SDR Agent',
    description:
      '负责 AI 销售助手的 RAG 知识库搭建与 Prompt 工程。构建知识库检索系统，设计多轮对话 Prompt 模板，实现意图识别、知识检索、话术生成与人工转接的 Agent 工作流，上线后持续优化回答准确率。',
    link: { href: 'https://www.wuxibiologics.com', label: '药明生物' },
    category: ['AI Agent'],
    techStack: ['AI Agent', 'RAG', 'Prompt Engineering', '知识库'],
    tags: ['RAG搭建', 'Prompt工程', '工作流开发'],
    role: 'AI 产品实习生',
    date: '2025.11 - 2026.07',
    highlights: [
      '搭建 RAG 知识库系统，整合产品文档、FAQ、案例库，设计文档分块与向量化策略',
      '开发 Agent 工作流：意图识别 → 知识库检索 → 话术生成 → 人工转接，实现 7×24 小时自动应答',
      '设计多轮 Prompt 模板，优化 AI 回复的专业度、准确性与语气一致性',
      '实现知识库增量更新机制，支持新增文档自动索引与检索',
      '建立回答质量评估机制，通过交互数据分析持续优化检索策略与 Prompt 模板',
    ]
  },
  {
    name: '海外 inrepli 营销 Agent 平台',
    description:
      '参与海外 B2B 营销 SaaS 平台 AI Agent 功能开发。分析海外营销场景技术需求，参与 AI Agent 功能实现与产品流程优化，协助分析用户交互数据为技术迭代提供方向。',
    link: { href: 'https://www.inrepli.com/', label: 'inrepli' },
    category: ['SaaS 产品'],
    techStack: ['AI Agent', 'SaaS', '营销自动化'],
    tags: ['Agent开发', 'SaaS平台', '技术实现'],
    role: 'AI 产品实习生',
    date: '2025.11 - 2026.07',
    highlights: [
      '参与邮件营销自动化 Agent 开发，实现基于用户画像的智能邮件内容生成',
      '开发客户画像分析 Agent，通过 LLM 自动提取客户特征与意向标签',
      '参与智能推荐模块开发，基于营销数据构建 Agent 推荐工作流',
      '协助分析用户交互数据，定位 Agent 响应瓶颈，优化对话链路性能',
      '参与竞品技术方案分析，对比同类产品的 AI 架构与实现方案',
    ]
  },
  {
    name: 'Python 智能学习平台',
    description:
      '独立完成在线学习平台的全栈开发。基于 Flask 框架实现三角色权限系统，开发课程管理、题库考试、社区交流等功能模块，设计 MySQL 数据库结构并优化查询性能。',
    link: { href: '#', label: '个人项目' },
    category: ['全栈开发'],
    techStack: ['Python', 'Flask', 'MySQL', 'HTML/CSS/JS', 'Bootstrap'],
    tags: ['独立开发', '全栈', '数据库设计'],
    role: '独立开发者',
    date: '2024 - 2025',
    highlights: [
      '基于 Flask 框架独立完成全栈开发，设计三角色权限体系（学生/教师/管理员）',
      '实现课程管理模块：课程发布、视频上传、学习进度追踪',
      '开发题库考试系统：支持自动组卷、在线答题、自动评分',
      '搭建社区交流模块：帖子发布、评论互动、学习笔记分享',
      '设计 MySQL 数据库结构，优化查询性能，支持 200+ 并发用户',
    ]
  },
]
