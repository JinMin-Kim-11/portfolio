// projects
export const projectHeadLine = "Selected AI Product Projects"
export const projectIntro = "三个核心 AI 产品项目，覆盖企业售前 Agent、内部效率工具和海外 SaaS 产品，完整呈现从业务问题到 AI 落地的产品思考。"

export type ProductDecision = {
  title: string
  content: string
}

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
    // AI PM Case Study fields
    businessBackground?: string
    problem?: string[]
    solution?: string
    productDecisions?: ProductDecision[]
    agentWorkflow?: string[]
    myRole?: string[]
    validation?: string[]
    results?: string[]
    // Featured flag for homepage
    featured?: boolean
    index?: string
    businessScene?: string
    myWork?: string[]
    keywords?: string[]
    gitStars?: number,
    gitForks?: number
  }

  // projects
  export const projects: Array<ProjectItemType> = [
    {
      name: '企业官网 Pre-sales AI Agent',
      index: '01',
      description:
        '为全球化生物医药企业官网设计 7×24 小时 AI 销售助手。从业务需求出发，完成 Agent 方案设计、工作流搭建、知识库建设与持续迭代优化。',
      link: { href: 'https://www.wuxibiologics.com', label: '药明生物' },
      logo: '/images/icon/wuxibiologics.ico',
      category: ['AI Agent', 'B2B SaaS'],
      techStack: ['AI Agent', 'RAG', 'Prompt Engineering', '知识库'],
      tags: ['售前咨询', '获客SDR', '工作流设计'],
      role: 'AI 产品实习生',
      date: '2025.11 - 2026.03',
      featured: true,
      businessScene: '全球化生物医药企业官网售前咨询',
      myWork: ['需求分析', 'Agent 设计', 'Workflow', '知识库', '测试迭代'],
      keywords: ['AI Agent', 'RAG', 'B2B', 'SaaS'],
      businessBackground: '药明生物作为全球化生物医药 CMO/CDMO 企业，官网面向全球访客提供产品与服务信息。海外访客与国内团队存在时差，人工售前响应存在延迟，影响潜在线索的获取和转化。',
      problem: [
        '跨时区售前响应成本高：海外访客咨询时间与国内工作时间错位，人工响应延迟可达 12 小时以上',
        '访客意向难以判断：大量浏览行为数据无法转化为结构化的销售线索',
        '产品信息分散：产品文档、FAQ、案例库内容分散，访客自助查找效率低',
        '重复性问题消耗人力：常见咨询问题占用售前团队大量时间，无法聚焦高价值客户'
      ],
      solution: '设计 7×24 小时 AI 销售助手，基于 RAG 知识库和 Agent 工作流，覆盖售前咨询全流程。从意图识别到知识检索，从多轮对话到人工转接，实现自动化应答与人工兜底的有机结合。',
      productDecisions: [
        {
          title: '为什么采用 Agent 而非传统 FAQ？',
          content: '用户问题具有开放性和多轮咨询属性（如"这个产品能做什么？""和竞品比怎么样？""怎么报价？"），纯 FAQ 无法处理复杂追问和上下文关联。Agent 可以基于对话历史进行多轮推理，更接近真实售前顾问的交互方式。'
        },
        {
          title: '为什么引入 RAG？',
          content: '企业业务信息具有强专业性，需要基于受控知识源回答以降低幻觉。同时产品文档更新频繁，RAG 架构允许知识库独立迭代，无需重新训练模型，更适合企业级场景。'
        },
        {
          title: '什么时候转人工？',
          content: '三类场景触发人工转接：1) Agent 连续两次无法给出满意回答；2) 用户明确表达购买意向或要求对接销售；3) 问题涉及报价、合同等敏感内容。转接时自动将对话摘要和用户画像同步给销售团队。'
        },
        {
          title: '如何判断 Agent 是否成功？',
          content: '核心指标：首次解决率（无需人工转接的对话占比）、线索获取量（有效留资数）、平均响应时长、知识库命中率。上线后每周跟踪这些指标，驱动对话流程和知识库内容的迭代优化。'
        }
      ],
      agentWorkflow: [
        '意图识别：判断用户咨询类型（产品咨询/报价/技术支持/其他）',
        '知识库检索：基于 RAG 从产品文档、FAQ、案例库中检索相关内容',
        '回答生成：结合检索结果和 Prompt 模板生成专业回答',
        '多轮追问：识别用户后续问题，维持对话上下文',
        '意向判断：分析用户表达，评估销售线索等级',
        '人工转接：触发条件满足时，推送对话摘要给销售团队'
      ],
      myRole: [
        '主导需求分析：与业务方、售前团队深度访谈，梳理核心场景与痛点',
        'Agent 工作流设计：从意图识别到人工转接的完整流程设计',
        '知识库搭建：产品文档结构化、FAQ 体系建设、检索策略设计',
        'Prompt 设计：多轮对话模板、语气控制、答案格式规范',
        '数据跟踪与迭代：上线后持续分析转化漏斗，优化对话流程与知识库内容'
      ],
      validation: [
        'A/B 测试：对比有/无 AI Agent 页面的线索转化率',
        '对话质量抽检：每周抽样 50 条对话，评估回答准确性和专业性',
        '用户满意度：对话结束后邀请评分，跟踪 CSAT 变化趋势'
      ],
      results: [
        '7×24 小时在线覆盖，解决跨时区售前响应问题',
        '首版上线后首次解决率达到 60%+，持续优化中',
        '知识库命中率 85%+，有效降低人工售前重复劳动',
        '沉淀结构化销售线索，支持销售团队后续跟进'
      ],
      highlights: [
        '针对海外客户咨询时差问题，设计 7×24 小时 AI 销售助手方案，覆盖售前咨询全流程',
        '完成 Agent 工作流设计：意图识别 → 知识库检索 → 话术生成 → 人工转接，实现自动应答与人工兜底',
        '搭建 RAG 知识库，整合产品文档、FAQ、案例库等内容，提升回答准确率',
        '设计多轮 Prompt 模板，优化 AI 回复的专业度与语气一致性',
        '上线后持续跟踪交互数据，分析转化漏斗，迭代优化对话流程与知识库内容',
      ]
    },
    {
      name: 'OpenClaw 研发运营 Agent',
      index: '02',
      description:
        '以企业微信为统一入口，设计自然语言查询与 AI 自动化工作流。接入数据库、Git、K8s 等多数据源，实现 Git 提交统计、开发数据查询、部门周报生成等效率工具。',
      link: { href: 'https://www.jingdigital.com', label: '径硕科技' },
      logo: '/images/icon/jingdigital.ico',
      category: ['AI 工具', '企业效率'],
      techStack: ['OpenClaw', '企业微信', 'Kubernetes', 'Git', '数据库'],
      tags: ['企业效率', '系统集成', '自然语言查询'],
      role: 'AI 产品实习生',
      date: '2026.03 - 2026.04',
      featured: true,
      businessScene: '运营团队与研发团队之间的信息检索与任务协作',
      myWork: ['需求调研', '场景识别', '产品方案', 'Agent Workflow', '验证迭代'],
      keywords: ['企业效率', '自然语言查询', '工作流自动化'],
      businessBackground: '径硕科技内部，运营团队需要频繁查询研发数据（Git 提交、K8s 部署状态、数据库信息等），但这些数据分散在不同系统中，需要找对应负责人查询，沟通成本高、效率低。',
      problem: [
        '数据孤岛：研发数据分散在 Git、K8s、数据库等多个系统，运营人员无法自助查询',
        '沟通成本高：每次数据查询都要找对应研发人员，平均耗时 30 分钟以上',
        '重复性报表：部门周报、项目进度统计等重复性工作占用大量人力',
        '工具门槛高：专业工具（Git CLI、SQL 等）对非技术人员不友好'
      ],
      solution: '基于 OpenClaw 平台构建企业微信 AI 助手，用自然语言作为统一入口，连接多个内部数据源。用户只需"说人话"就能查询数据、生成报表，降低工具使用门槛。',
      productDecisions: [
        {
          title: '为什么以企业微信为入口而非独立 App？',
          content: '企业微信是全员日常使用的沟通工具，零学习成本、零安装门槛。用户在聊天中就能完成数据查询，无需切换上下文，使用率远高于独立工具。'
        },
        {
          title: '为什么优先做周报自动化？',
          content: '周报是全公司每周都要做的重复性工作，痛点明确、ROI 高。将人工整理 2 小时压缩到 5 分钟，价值立竿见影，也为后续推广其他 AI 能力建立信任基础。'
        },
        {
          title: '什么任务交给 Agent，什么任务交给工具？',
          content: '理解用户意图、生成 SQL/查询语句、结果汇总和自然语言表达交给 LLM；实际数据查询、Git 操作等确定性操作交给工具函数。遵循"LLM 做决策，工具做执行"的原则，降低幻觉风险。'
        }
      ],
      agentWorkflow: [
        '意图解析：理解用户自然语言查询需求，识别目标数据源',
        '工具选择：根据意图选择对应工具（SQL 查询 / Git API / K8s API）',
        '参数生成：生成查询语句或 API 参数',
        '数据获取：调用工具执行查询，获取原始数据',
        '结果汇总：将多源数据整合，生成结构化结果',
        '自然语言输出：以用户易理解的方式呈现结果和图表'
      ],
      myRole: [
        '需求调研：深度访谈运营和研发团队，梳理高频查询场景',
        '场景识别：从 20+ 候选场景中筛选 3 个最高优先级落地场景',
        '产品方案：设计整体产品架构、功能模块和交互流程',
        'Agent Workflow 设计：定义意图分类、工具路由、结果输出规范',
        '验证迭代：组织内部试用，收集反馈并快速迭代'
      ],
      validation: [
        '用户调研：上线前后对比用户满意度和查询耗时',
        '使用数据：跟踪日活用户数、人均查询次数、功能使用率',
        '准确率评估：统计查询结果的正确率，分析失败原因并归类优化'
      ],
      results: [
        '部门周报自动生成：人工整理从 2 小时缩短至 5 分钟',
        '覆盖 5+ 核心查询场景：Git 统计、开发数据、部署状态等',
        '企业微信入口零门槛：运营人员无需培训即可使用',
        '为后续更多 AI 效率场景建立了产品框架和用户习惯'
      ],
      highlights: [
        '以企业微信为统一入口，设计自然语言查询流程，降低内部工具使用门槛',
        '推动数据库、Git、Kubernetes 等多数据源接入，实现一站式信息查询',
        '设计 Git 提交统计、开发数据看板等功能，帮助管理者实时掌握团队进展',
        '实现部门周报自动生成，将人工整理时间从 2 小时缩短至 5 分钟',
        '完成产品需求文档与原型设计，协调研发团队推进功能落地',
      ]
    },
    {
      name: 'Inrepli 海外 AI 产品',
      index: '03',
      description:
        '参与海外 B2B 营销 SaaS 平台 AI Agent 产品建设。从用户需求分析到 Agent Workflow 重构，从 Bug 测试到产品迭代，完整参与海外 AI 产品的全生命周期。',
      link: { href: 'https://www.inrepli.com/', label: 'inrepli' },
      logo: '/images/icon/inrepli.png',
      category: ['SaaS 产品', 'AI Agent'],
      techStack: ['AI Agent', 'SaaS', '营销自动化'],
      tags: ['海外B2B', '产品规划', '用户反馈'],
      role: 'AI 产品实习生',
      date: '2026.05 - 2026.07',
      featured: true,
      businessScene: '海外 B2B 营销 AI 产品迭代',
      myWork: ['Agent Workflow 重构', 'Bug 测试', '功能验收', '产品迭代'],
      keywords: ['海外 SaaS', 'B2B 营销', '产品迭代'],
      businessBackground: 'Inrepli 是面向海外市场的 B2B 营销自动化 SaaS 平台，核心功能围绕 AI Agent 帮助企业实现潜在客户开发、邮件营销和客户画像分析。作为快速迭代的创业型产品，需要持续优化 Agent 能力和产品体验。',
      problem: [
        'Agent Workflow 逻辑复杂，多轮对话容易出现上下文丢失',
        '海外用户使用场景差异大，国内产品直觉不完全适用',
        'AI 功能效果不稳定，缺乏系统性的测试和验收标准',
        '用户反馈分散，缺乏结构化的收集和分析机制'
      ],
      solution: '从 Agent Workflow 重构入手，梳理核心用户旅程，建立标准化的测试验收流程。同时搭建用户反馈分析机制，将交互数据转化为产品迭代方向。',
      productDecisions: [
        {
          title: '为什么要重构 Agent Workflow？',
          content: '原有 Workflow 是功能驱动的（有什么能力做什么），而非用户驱动的。导致用户在多轮对话中经常"迷路"。重构以用户任务为核心，每个 Workflow 对应一个明确的用户目标，减少无效对话轮次。'
        },
        {
          title: '海外产品和国内产品最大的不同是什么？',
          content: '海外用户更注重隐私和数据所有权，对 AI 生成内容的可解释性要求更高。产品设计上需要更透明地展示"AI 做了什么"，并提供充分的人工干预和编辑能力。'
        },
        {
          title: '如何建立 AI 产品的测试标准？',
          content: '建立三类测试：功能测试（每个 Workflow 步骤是否正确执行）、效果测试（AI 生成内容的质量评估）、边界测试（异常输入、超长上下文等极端场景）。每次迭代前设定明确的 pass/fail 标准。'
        }
      ],
      agentWorkflow: [
        '线索发现：基于目标客户画像自动搜索和筛选潜在客户',
        '邮件序列：自动生成多轮个性化营销邮件并定时发送',
        '回复分类：智能分类客户回复类型（感兴趣/不感兴趣/需跟进）',
        '客户画像：自动汇总和更新客户信息，生成结构化画像',
        '推荐引擎：基于客户行为推荐下一步最佳行动'
      ],
      myRole: [
        'Agent Workflow 重构：梳理用户旅程，重新设计核心工作流',
        'Bug 测试：建立系统性测试用例，跟踪和验证 AI 功能 Bug',
        '功能验收：制定验收标准，确保每个版本 AI 功能的质量基线',
        '产品迭代：基于用户反馈和数据分析，推动产品功能优化',
        '官网产品页迭代：参与产品官网文案和功能展示优化'
      ],
      validation: [
        '对话完成率：用户成功完成目标任务的比例',
        '平均对话轮次：完成一个任务需要多少轮交互',
        '用户留存：日活、周活、月活及功能留存率',
        'NPS/CSAT：用户满意度和净推荐值'
      ],
      results: [
        '完成核心 Agent Workflow 重构，对话完成率显著提升',
        '建立完整的 AI 功能测试体系，Bug 发现效率提升',
        '搭建用户反馈分析机制，为产品迭代提供数据支撑',
        '深入理解海外 B2B SaaS 产品的用户需求和市场特点'
      ],
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
