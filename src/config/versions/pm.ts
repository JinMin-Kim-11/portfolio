import { type ProjectItemType } from '@/config/projects'

export const headline = 'AI Agent 产品设计师 | 软件工程背景 × 企业 AI 应用落地'
export const introduction = '软件工程背景，具备 AI Agent 产品设计与企业应用落地经验。擅长从用户需求出发，完成产品方案设计、Agent 工作流规划、PRD 撰写与跨团队协作，推动 AI 产品从 0 到 1 落地并持续迭代优化。'

export const aboutMeHeadline = "我是金旻，AI Agent 产品设计师，专注于企业 AI 应用的产品设计与落地实施。"

export const aboutParagraphs = [
  "我拥有软件工程学术背景，先后在上海建桥学院完成计算机科学技术和软件工程的学习。扎实的工程基础让我能够深入理解技术可行性，在与研发团队协作时高效沟通，确保产品方案既满足用户需求又具备技术可实现性。",
  "在径硕网络科技（上海）有限公司担任 AI 产品实习生期间，我深度参与了多个 AI Agent 项目的全流程建设。从药明生物官网智能获客 SDR Agent 的需求分析与产品方案设计，到 OpenClaw 企业内部 AI 效率工具的功能规划，再到海外 inrepli 营销 Agent 平台的用户需求分析，我积累了从 0 到 1 推动 AI 产品落地的完整经验。",
  "我的核心能力涵盖三个维度：AI 产品能力（Axure/Figma 原型设计、PRD 文档、用户需求分析、竞品调研）、大模型应用理解（LLM 应用场景、RAG 知识库方案、Prompt Engineering、Agent 工作流设计）、以及企业 AI 产品落地能力（企业微信 AI 应用、用户旅程梳理、产品迭代优化）。",
  "除了专业能力，我在校园中也有丰富的组织管理经验——大三担任拳击社团社长，将社团规模发展到 180 人并实现活跃度同比增长；大一带领班级获得院校情景剧双一等奖及个人最佳奖。这些经历培养了我的领导力与团队协作能力。"
]

export const projectHeadLine = "我做过什么，正在做什么"
export const projectIntro = "从企业销售 Agent 到内部 AI 效率工具，再到海外 SaaS AI 产品，以下是我参与和主导的核心项目。"

export const projects: Array<ProjectItemType> = [
  {
    name: '药明生物官网智能获客 SDR Agent',
    description:
      '针对海外客户咨询时差与人工响应效率不足的痛点，主导 AI 销售助手的产品方案设计。完成用户需求分析、Agent 对话流程设计、知识库内容规划与 Prompt 策略制定，推动产品从方案到上线全流程。',
    link: { href: 'https://www.wuxibiologics.com', label: '药明生物' },
    category: ['AI Agent'],
    techStack: ['AI Agent', 'RAG', 'Prompt Engineering', '知识库'],
    tags: ['售前咨询', '获客SDR', '工作流设计'],
    role: 'AI 产品实习生',
    date: '2025.11 - 2026.07',
    highlights: [
      '深入分析海外客户咨询场景，梳理用户旅程与核心痛点，输出需求分析文档',
      '设计 Agent 对话工作流：意图识别 → 知识库检索 → 话术生成 → 人工转接，覆盖售前咨询全流程',
      '规划 RAG 知识库内容结构，整合产品文档、FAQ、案例库，制定知识库维护与更新机制',
      '设计多轮 Prompt 模板，定义 AI 回复的语气、专业度与信息边界，确保品牌一致性',
      '上线后建立数据追踪机制，分析转化漏斗与用户交互数据，持续迭代优化对话流程',
    ]
  },
  {
    name: '海外 inrepli 营销 Agent 平台',
    description:
      '参与海外 B2B 营销 SaaS 平台 AI Agent 产品建设。负责海外企业营销场景用户需求调研，参与 AI Agent 功能规划和产品流程设计，建立用户反馈分析机制推动产品迭代。',
    link: { href: 'https://www.inrepli.com/', label: 'inrepli' },
    category: ['SaaS 产品'],
    techStack: ['AI Agent', 'SaaS', '营销自动化'],
    tags: ['海外B2B', '产品规划', '用户反馈'],
    role: 'AI 产品实习生',
    date: '2025.11 - 2026.07',
    highlights: [
      '深入分析海外 B2B 营销场景，梳理用户旅程与核心痛点，输出需求调研报告',
      '参与 AI Agent 功能规划，包括邮件营销自动化、客户画像分析、智能推荐等产品模块设计',
      '绘制产品流程图与交互原型，与海外团队协作推进功能评审与落地',
      '建立用户反馈分析机制，整理交互数据与用户访谈，为产品迭代提供数据支撑',
      '参与竞品分析，对比同类海外营销 SaaS 产品的 AI 能力差异，输出竞品分析报告',
    ]
  },
  {
    name: 'OpenClaw 企业内部 AI 效率工具',
    description:
      '负责企业内部 AI 效率工具的产品方案设计。以企业微信为入口，设计自然语言查询流程，规划 Git 统计、开发数据查询、部门周报自动生成等产品功能，撰写 PRD 并协调研发落地。',
    link: { href: 'https://www.jingdigital.com', label: '径硕科技' },
    category: ['AI 工具'],
    techStack: ['OpenClaw', '企业微信', 'Kubernetes', 'Git', '数据库'],
    tags: ['企业效率', '系统集成', '自然语言查询'],
    role: 'AI 产品实习生',
    date: '2025.11 - 2026.07',
    highlights: [
      '调研企业内部信息获取痛点，设计以企业微信为入口的自然语言查询产品方案',
      '规划多数据源接入方案（数据库、Git、K8s），输出产品功能清单与优先级排序',
      '设计 Git 提交统计、开发数据看板等产品功能，撰写详细 PRD 文档',
      '推动部门周报自动生成功能落地，将人工整理时间从 2 小时缩短至 5 分钟',
      '协调研发团队推进功能开发，跟踪上线后使用数据并持续优化产品体验',
    ]
  },
  {
    name: 'Python 智能学习平台',
    description:
      '独立完成在线学习平台的产品设计与全栈开发。设计三角色权限体系，规划课程管理、题库考试、社区交流等功能模块，负责前后端开发与数据库设计。',
    link: { href: '#', label: '个人项目' },
    category: ['全栈开发'],
    techStack: ['Python', 'Flask', 'MySQL', 'HTML/CSS/JS', 'Bootstrap'],
    tags: ['独立开发', '多角色系统', '全栈'],
    role: '独立开发者',
    date: '2024 - 2025',
    highlights: [
      '独立完成产品设计与全栈开发，设计三角色权限体系（学生/教师/管理员）',
      '规划并实现课程管理模块：课程发布、视频上传、学习进度追踪',
      '设计题库考试系统：支持自动组卷、在线答题、自动评分',
      '搭建社区交流模块：帖子发布、评论互动、学习笔记分享',
      '设计 MySQL 数据库结构，优化查询性能，支持 200+ 并发用户',
    ]
  },
]
