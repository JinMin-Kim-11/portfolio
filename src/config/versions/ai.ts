import { type ProjectItemType } from '@/config/projects'

export const headline = 'AI解决方案工程师 | AI Agent × 系统集成 × 企业AI'
export const introduction = '我关注如何将 AI 能力转化为可部署、可使用的企业解决方案。熟悉 AI Agent 工作流开发、RAG 知识库搭建与企业系统集成，能够将大模型能力与数据库、Git、K8s 等系统深度集成，推动 AI 解决方案从技术验证到生产部署全流程。'

export const aboutMeHeadline = "我是金旻，AI解决方案工程师，专注于企业 AI 应用的技术落地与系统集成。"

export const aboutParagraphs = [
  "我拥有软件工程学术背景，先后在上海建桥学院完成计算机科学技术和软件工程的学习。扎实的工程基础让我能够快速理解技术架构，在 AI Agent 开发、RAG 知识库搭建、企业系统集成等场景中，将产品需求转化为可落地的技术方案。",
  "在径硕网络科技（上海）有限公司担任 AI 产品实习生期间，我深度参与了多个 AI Agent 项目的技术建设。从药明生物官网智能获客 SDR Agent 的 RAG 知识库搭建与 Prompt 工程，到 OpenClaw 企业内部 AI 工具的多数据源接入与 Agent 开发，再到海外 inrepli 营销 Agent 平台的功能实现，我积累了 AI 解决方案从技术选型到生产部署的完整经验。",
  "我的核心能力涵盖三个维度：AI Agent 开发能力（Agent 工作流开发、RAG 知识库搭建、Prompt Engineering、智能体搭建）、大模型应用工程能力（LLM API 集成、向量检索、对话流程编排）、以及企业系统集成能力（数据库查询接入、Git API 集成、Kubernetes 数据对接、企业微信应用开发）。",
  "除了技术能力，我在校园中也有丰富的组织管理经验——大三担任拳击社团社长，将社团规模发展到 180 人并实现活跃度同比增长；大一带领班级获得院校情景剧双一等奖及个人最佳奖。这些经历培养了我的团队协作与项目推进能力。"
]

export const projectHeadLine = "我做过什么，正在做什么"
export const projectIntro = "从 RAG 知识库搭建到企业系统集成，再到海外 SaaS AI 平台开发，以下是我参与和主导的核心项目。"

export const projects: Array<ProjectItemType> = [
  {
    name: 'OpenClaw 企业内部 AI 效率工具',
    description:
      '企业内部信息获取依赖多系统切换，缺乏统一入口。负责 AI 工具的 Agent 开发与系统集成，通过企业微信接入 AI 能力，实现数据库、Git、K8s 等多数据源的自然语言查询，完成 Git 提交统计、部门周报自动生成等 AI 自动化功能开发。',
    link: { href: 'https://www.jingdigital.com', label: '径硕科技' },
    logo: '/images/icon/jingdigital.ico',
    category: ['AI 工具'],
    techStack: ['OpenClaw', '企业微信', 'Kubernetes', 'Git', '数据库'],
    tags: ['Agent开发', '系统集成', '企业交付'],
    role: 'AI 产品实习生',
    date: '2025.11 - 2026.07',
    highlights: [
      '业务问题：内部员工获取开发数据需切换数据库、Git、K8s 等多个系统，效率低下且缺乏统一入口',
      '技术方案：基于 OpenClaw 平台开发企业微信 AI Agent，将自然语言转化为结构化查询，实现统一入口',
      '系统架构：设计多数据源接入层——数据库 SQL 查询、Git API 集成、Kubernetes 数据对接，统一数据查询接口',
      '关键实现：开发 Git 提交统计 Agent（自动聚合开发数据生成报告）、部门周报 Agent（LLM 总结+数据聚合），周报生成从 2 小时缩短至 5 分钟',
      '交付结果：系统上线后稳定运行，支持并发请求与超时处理，显著提升内部信息获取效率',
    ]
  },
  {
    name: '药明生物官网智能获客 SDR Agent',
    description:
      '海外客户咨询存在时差障碍，人工团队无法全天候响应。负责 AI 销售助手的 RAG 知识库搭建与 Prompt 工程，构建知识库检索系统，设计多轮对话 Prompt 模板，实现意图识别、知识检索、话术生成与人工转接的 Agent 工作流。',
    link: { href: 'https://www.wuxibiologics.com', label: '药明生物' },
    logo: '/images/icon/wuxibiologics.ico',
    category: ['AI Agent'],
    techStack: ['AI Agent', 'RAG', 'Prompt Engineering', '知识库'],
    tags: ['RAG搭建', 'Agent工作流', 'AI交付'],
    role: 'AI 产品实习生',
    date: '2025.11 - 2026.07',
    highlights: [
      '业务问题：海外客户咨询存在时差障碍，人工销售无法 7×24 小时响应，潜在客户流失',
      '技术方案：搭建 RAG 知识库检索系统 + 多轮对话 Agent 工作流，实现 7×24 小时自动应答',
      '系统架构：知识库（文档分块+向量化）→ 意图识别 → 检索增强生成 → 话术输出 → 人工转接兜底',
      '关键实现：设计文档分块与向量化策略，开发多轮 Prompt 模板优化回复准确性与语气一致性，实现知识库增量更新机制',
      '交付结果：Agent 上线后覆盖售前咨询全流程，通过交互数据分析持续优化检索策略与 Prompt 模板',
    ]
  },
  {
    name: '海外 inrepli 营销 Agent 平台',
    description:
      '海外 B2B 营销场景缺乏智能化工具支持。参与营销 SaaS 平台 AI Agent 功能开发，分析海外营销场景技术需求，参与 Agent 功能实现与产品流程优化，协助分析用户交互数据为技术迭代提供方向。',
    link: { href: 'https://www.inrepli.com/', label: 'inrepli' },
    logo: '/images/icon/inrepli.png',
    category: ['SaaS 产品'],
    techStack: ['AI Agent', 'SaaS', '营销自动化'],
    tags: ['Agent开发', 'SaaS平台', '功能交付'],
    role: 'AI 产品实习生',
    date: '2025.11 - 2026.07',
    highlights: [
      '业务问题：海外 B2B 营销人员缺乏智能化工具，邮件营销、客户画像分析等环节效率不足',
      '技术方案：参与邮件营销 Agent、客户画像分析 Agent、智能推荐模块的 Agent 工作流开发',
      '系统架构：基于用户画像的 LLM 推理 → 个性化内容生成 → 多渠道触达 → 效果数据回流',
      '关键实现：开发智能邮件内容生成 Agent（基于画像自动生成文案）、客户画像分析 Agent（LLM 自动提取特征标签）',
      '交付结果：Agent 功能上线后协助分析交互数据，定位响应瓶颈并优化对话链路性能',
    ]
  },
  {
    name: 'Python 智能学习平台',
    description:
      '在线教育场景下，学习平台需要支持多角色协作与完整学习闭环。独立完成全栈开发，基于 Flask 框架实现三角色权限系统，设计 MySQL 数据库结构并优化查询性能。',
    link: { href: '#', label: '个人项目' },
    logo: '/images/icon/python.ico',
    category: ['全栈开发'],
    techStack: ['Python', 'Flask', 'MySQL', 'HTML/CSS/JS', 'Bootstrap'],
    tags: ['独立开发', '全栈', '系统设计'],
    role: '独立开发者',
    date: '2024 - 2025',
    highlights: [
      '业务问题：在线学习平台需支持学生、教师、管理员三方协作，现有工具功能分散',
      '技术方案：基于 Flask 框架实现三角色权限系统，设计 RESTful API 与 MySQL 数据库架构',
      '系统架构：前端 Bootstrap + 后端 Flask + MySQL，支持课程管理、题库考试、社区交流模块',
      '关键实现：自动组卷算法、学习进度追踪、并发处理优化，支持 200+ 并发用户',
      '交付结果：平台完整上线运行，根据用户反馈持续优化查询性能与交互体验',
    ]
  },
]