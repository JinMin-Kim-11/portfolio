// projects
export const projectHeadLine = "Selected AI Product Projects"
export const projectIntro = "三个核心 AI 产品项目，覆盖企业售前 Agent、内部效率工具和海外 SaaS 产品，完整呈现从业务问题到 AI 落地的产品思考。"

export type ProductDecision = {
  title: string
  content: string
}

export type UserScenario = {
  type: string
  description: string
}

export type RequirementItem = {
  task: string
  capability: string
}

export type EvaluationLayer = {
  layer: string
  metrics: string[]
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
    // Featured flag for homepage
    featured?: boolean
    index?: string
    businessScene?: string
    myWork?: string[]
    keywords?: string[]
    gitStars?: number,
    gitForks?: number
    // URL slug for detail page
    slug?: string
    // 15-Node Knowledge Tree (AI PM Case Study)
    // 01 业务背景
    businessBackground?: string
    // 02 原来的业务流程
    originalFlow?: string[]
    // 03 发现什么问题
    problem?: string[]
    // 04 为什么这个问题值得解决
    valueJudgment?: string
    // 05 用户是谁/用户场景
    userScenarios?: UserScenario[]
    // 06 需求分析（需求拆解表）
    requirementBreakdown?: RequirementItem[]
    // 07 为什么选择AI
    whyAI?: string
    // 08 产品方案架构
    productArchitecture?: string
    // 09 Agent Workflow
    agentWorkflow?: string[]
    // 10 RAG/知识库/Prompt详情
    ragDetails?: string[]
    // 11 四层效果评估体系
    evaluationSystem?: EvaluationLayer[]
    // 12 上线后发现的问题
    postLaunchIssues?: string[]
    // 13 迭代方案
    iterationPlan?: string[]
    // 14 最终结果
    results?: string[]
    // 15 如果重新做会怎么做
    reflection?: string
    // Legacy fields (kept for backward compatibility)
    solution?: string
    productDecisions?: ProductDecision[]
    myRole?: string[]
    validation?: string[]
  }

  // projects
  export const projects: Array<ProjectItemType> = [
    // ========== 01 药明生物 SDR Agent ==========
    {
      name: '企业官网 Pre-sales AI Agent',
      index: '01',
      slug: 'wuxibiologics-sdr-agent',
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

      // 01 业务背景
      businessBackground: '药明生物是全球领先的生物制药CDMO企业，官网面向全球客户提供产品与服务信息。海外访客与国内售前团队存在明显时差，人工售前难以做到7×24小时及时响应。项目最初的业务目标并不是简单做一个AI客服，而是希望把官网从单纯的信息展示入口，进一步变成一个能够承接用户咨询、理解用户需求，并最终帮助销售获取有效线索的售前入口。',

      // 02 原来的业务流程
      originalFlow: [
        '海外客户访问官网',
        '浏览产品/技术资料',
        '产生咨询',
        '寻找联系方式',
        '邮件/人工沟通',
        '销售进一步了解需求',
        '判断是否为有效商机',
        '后续跟进'
      ],

      // 03 发现什么问题
      problem: [
        '时差问题：海外访客在北京时间凌晨咨询，售前团队第二天上班才能回，延迟可达12小时以上',
        '信息断层：用户从访问官网到形成有效销售线索，中间存在较大的信息断层',
        '需求识别难：大量浏览行为数据无法转化为结构化的销售线索，不知道哪些访客是真正的潜在客户',
        '重复劳动：常见的产品介绍、技术咨询占用售前团队大量时间，无法聚焦高价值客户'
      ],

      // 04 为什么这个问题值得解决
      valueJudgment: '用户层面：海外用户有时差，咨询得不到及时响应。业务层面：人工无法覆盖所有时间，售前资源有限。效率层面：大量重复咨询消耗人工售前精力。商业层面：访问→咨询→需求识别→留资→销售跟进这个链路存在断点，真正的损失不是"回答慢了"，而是"潜在客户流失了"。核心判断：如果Agent只回答问题，价值有限；如果它能够承接咨询、理解需求并完成有效线索收集，才真正进入业务流程。',

      // 05 用户是谁/用户场景
      userScenarios: [
        { type: '普通浏览者', description: '随便看看，了解公司，低意向' },
        { type: '产品了解者', description: '对某类服务感兴趣，中低意向' },
        { type: '技术咨询者', description: '有具体技术问题，中意向' },
        { type: '潜在采购客户', description: '有明确业务需求，中高意向' },
        { type: '高意向客户', description: '准备进入采购流程，高意向' }
      ],

      // 06 需求分析
      requirementBreakdown: [
        { task: '了解产品', capability: '产品介绍能力' },
        { task: '解决专业问题', capability: '技术问答能力' },
        { task: '找网站内容', capability: '官网导航推荐' },
        { task: '表达需求', capability: '需求理解与记录' },
        { task: '进入销售流程', capability: '留资表单' },
        { task: '销售继续跟进', capability: '用户需求总结输出' }
      ],

      // 07 为什么选择AI
      whyAI: '因为这个场景的输入是高度非结构化的。用户不会按照固定表单告诉我们"我需要什么产品、预算多少、什么时候采购"，而是可能通过自然语言描述自己的研究方向、技术问题或者业务需求。传统规则可以解决固定流程，但是对于这种开放式咨询，需要理解用户意图、结合上下文判断需求，再决定下一步应该回答问题、检索资料、推荐页面还是进入留资流程，所以AI更适合承担这一层。',

      // 08 产品方案架构
      productArchitecture: '整体架构：用户进入官网 → 自然语言咨询 → 用户意图识别 → 路由分发。产品咨询 → RAG检索 → 专业回答；技术问答 → RAG检索 → 技术解答；导航需求 → URL推荐 → 页面引导；商务需求 → 需求识别 → 留资流程。所有路径最终汇总为：用户需求总结 → 销售跟进。',

      // 09 Agent Workflow
      agentWorkflow: [
        '意图识别：解决"用户到底想干什么"的问题',
        '路由判断：根据意图类型分配到不同能力',
        'RAG检索：解决"AI回答的内容从哪里来"的问题',
        '回答生成：基于检索结果组织自然语言',
        '多轮上下文：解决"用户前面说过的信息如何继续利用"的问题',
        '意向判断：分析用户表达中的商业意图信号',
        '留资引导：解决"如何从咨询进入销售流程"的问题',
        '人工转接：超出能力范围时带上下文转人工',
        '需求总结：对话结束后生成结构化的用户需求摘要给销售'
      ],

      // 10 RAG/知识库/Prompt
      ragDetails: [
        '官网Sitemap检测：官网内容不是静态不变的，需要建立内容更新机制',
        '内容抓取与结构化：将产品页面、技术文档、FAQ等转化为结构化内容',
        'Chunk分块：按语义单元分块，确保检索粒度合理',
        '知识库构建：向量存储，支持语义检索',
        '多轮上下文：对话历史影响检索策略',
        '内容更新机制：通过Sitemap检测页面变化，触发重新抓取和知识库更新',
        'Prompt设计要点：答案内容必须来自知识库，LLM只负责组织语言',
        'Prompt设计要点：语气专业、友好，符合企业品牌形象',
        'Prompt设计要点：不确定的内容明确告知用户，不编造答案'
      ],

      // 11 四层效果评估体系
      evaluationSystem: [
        { layer: 'AI层', metrics: ['回答准确性', '知识召回效果', '导航准确率', '幻觉情况'] },
        { layer: 'Agent层', metrics: ['意图识别准确率', '任务完成率', '人工接管率', '留资完成率'] },
        { layer: '产品层', metrics: ['咨询量', '有效咨询比例', '留资率'] },
        { layer: '商业层', metrics: ['有效线索率', '销售跟进率', '后续转化'] }
      ],

      // 12 上线后发现的问题
      postLaunchIssues: [
        '流量≠有效商机：官网1000+访问，只有1条销售线索',
        '流量构成复杂：学生、竞争对手、普通浏览者占比很高',
        'Agent很会回答问题，但不太会识别商业意图',
        '留资时机和价值感可能不对：用户为什么要留下联系方式？',
        '缺少完整的漏斗数据：只有访问量、对话数、线索数三个数字，中间全是黑箱'
      ],

      // 13 迭代方案
      iterationPlan: [
        '建立意图分层：低/中/高意向用户走不同对话路径',
        '低意向用户：好好回答问题，建立品牌印象',
        '中意向用户：多了解具体场景，推荐相关服务，软性推送资料',
        '高意向用户：快速确认需求，收集关键字段，直接转销售',
        '优化留资时机：先给够价值，再提出下一步，用"换取资料"替代"留个联系方式"',
        '完善漏斗埋点：从访问→点击启动→有效对话→产品咨询→业务需求→高意向→留资点击→完成留资，每一步都要有数据'
      ],

      // 14 最终结果
      results: [
        '7×24小时在线覆盖，解决跨时区售前响应问题',
        '首次解决率达到60%+，知识库命中率85%+',
        '沉淀了结构化的销售线索收集机制',
        '验证了AI SDR的可行性，为后续优化奠定基础',
        '最重要的收获：发现了从"AI客服"到"AI SDR"的核心差距——不是回答问题，而是识别和转化商业意图'
      ],

      // 15 如果重新做会怎么做
      reflection: '如果重新做，会把业务指标前置。当时是外部项目团队，对历史用户画像、销售跟进和最终转化数据掌握有限，所以项目更多关注Agent本身的咨询和交互效果。如果重新做，会在立项阶段先和业务方确定完整漏斗：官网访问量→咨询率→有效咨询率→留资率→有效线索率→销售跟进率，然后再确定Agent的核心指标。这样才能判断Agent到底是在增加咨询量，还是在真正创造有效销售线索。',

      highlights: [
        '针对海外客户咨询时差问题，设计 7×24 小时 AI 销售助手方案，覆盖售前咨询全流程',
        '完成 Agent 工作流设计：意图识别 → 知识库检索 → 话术生成 → 人工转接，实现自动应答与人工兜底',
        '搭建 RAG 知识库，整合产品文档、FAQ、案例库等内容，提升回答准确率',
        '设计多轮 Prompt 模板，优化 AI 回复的专业度与语气一致性',
        '上线后持续跟踪交互数据，分析转化漏斗，迭代优化对话流程与知识库内容',
      ]
    },

    // ========== 02 OpenClaw 研发运营 Agent ==========
    {
      name: 'OpenClaw 研发运营 Agent',
      index: '02',
      slug: 'openclaw-ai-agent',
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

      // 01 业务背景
      businessBackground: '径硕科技内部，运营团队需要频繁查询研发数据（Git 提交、K8s 部署状态、数据库信息等），但这些数据分散在不同系统中，需要找对应负责人查询，沟通成本高、效率低。项目的目标不是做一个酷炫的AI工具，而是把运营人员从"找研发要数据"的低效沟通中解放出来，让数据获取像发消息一样简单。',

      // 02 原来的业务流程
      originalFlow: [
        '运营人员产生数据需求',
        '在企业微信找对应研发人员',
        '描述需求背景和数据要求',
        '研发人员登录对应系统查询',
        '整理数据后回复运营',
        '数据不对/不够 → 反复沟通',
        '最终拿到可用数据'
      ],

      // 03 发现什么问题
      problem: [
        '数据孤岛：研发数据分散在 Git、K8s、数据库等多个系统，运营人员无法自助查询',
        '沟通成本高：每次数据查询都要找对应研发人员，平均耗时 30 分钟以上',
        '重复性报表：部门周报、项目进度统计等重复性工作占用大量人力',
        '工具门槛高：专业工具（Git CLI、SQL 等）对非技术人员不友好'
      ],

      // 04 为什么这个问题值得解决
      valueJudgment: '用户层面：运营人员不需要学习复杂的技术工具就能拿到数据。效率层面：每次查询从30分钟缩短到几十秒，释放研发和运营双方的时间。组织层面：数据不再是研发部门的"私产"，而是可以被业务人员自助获取的公共资源。核心判断：企业效率工具的价值不在于技术有多酷，而在于它是否能真正降低跨部门协作的摩擦成本。',

      // 05 用户是谁/用户场景
      userScenarios: [
        { type: '运营经理', description: '需要查看部门研发数据、生成周报，高频使用' },
        { type: '产品经理', description: '需要了解功能开发进度、上线状态，中频使用' },
        { type: '项目负责人', description: '需要跟踪项目进展、团队产出，中频使用' },
        { type: 'HR/行政', description: '偶尔需要查询员工产出数据，低频使用' }
      ],

      // 06 需求分析
      requirementBreakdown: [
        { task: '查Git提交数据', capability: 'Git仓库数据查询能力' },
        { task: '查部署状态', capability: 'Kubernetes集群状态查询' },
        { task: '查业务数据', capability: '数据库SQL查询能力' },
        { task: '生成周报', capability: '多源数据聚合 + LLM总结' },
        { task: '团队效率分析', capability: '数据统计与可视化' },
        { task: '异常告警', capability: '规则引擎 + 消息推送' }
      ],

      // 07 为什么选择AI
      whyAI: '因为企业内部的数据查询需求是高度多样化和非结构化的。运营人员不会说"帮我查一下git log --author=xxx --since=2026-03-01 --until=2026-03-31 --stat"，他们会说"帮我看看张三这个月提交了多少代码"。如果用传统后台，需要为每一种查询场景开发一个页面和表单，开发成本高、覆盖场景有限。而LLM可以理解自然语言意图，自动生成对应的查询语句，用一个入口覆盖几乎所有查询场景。',

      // 08 产品方案架构
      productArchitecture: '整体架构：企业微信入口 → 自然语言输入 → 意图识别与工具路由 → 工具执行层（Git API / K8s API / SQL查询） → 数据聚合 → LLM自然语言总结 → 结果返回。核心原则：LLM做决策（理解意图、生成查询语句、汇总结果），工具做执行（实际数据查询、系统操作），确保数据准确性和安全性。',

      // 09 Agent Workflow
      agentWorkflow: [
        '意图解析：理解用户自然语言查询需求，识别目标数据源',
        '工具选择：根据意图选择对应工具（SQL 查询 / Git API / K8s API）',
        '参数生成：生成查询语句或 API 参数',
        '数据获取：调用工具执行查询，获取原始数据',
        '结果汇总：将多源数据整合，生成结构化结果',
        '自然语言输出：以用户易理解的方式呈现结果和图表'
      ],

      // 10 RAG/知识库/Prompt
      ragDetails: [
        'Schema知识库：存储数据库表结构、字段含义、Git仓库信息等元数据',
        '查询示例库：常见查询的最佳实践示例，用于few-shot prompting',
        'Prompt设计：明确输出格式要求，确保SQL/API参数正确无误',
        '安全约束：禁止执行写操作、禁止访问敏感表、设置查询超时',
        '错误处理：查询失败时自动分析错误原因并重试或转人工'
      ],

      // 11 四层效果评估体系
      evaluationSystem: [
        { layer: 'AI层', metrics: ['意图识别准确率', 'SQL生成正确率', '查询结果相关性'] },
        { layer: 'Agent层', metrics: ['任务完成率', '平均查询耗时', '人工干预率'] },
        { layer: '产品层', metrics: ['日活用户数', '人均查询次数', '功能使用率'] },
        { layer: '商业层', metrics: ['节省人力时间', '运营效率提升', '研发沟通成本降低'] }
      ],

      // 12 上线后发现的问题
      postLaunchIssues: [
        '用户习惯难改变：很多人还是习惯直接找研发问，觉得"更靠谱"',
        '查询成功率受数据质量影响：有些数据本身不规范，导致查询结果不准',
        '复杂查询需要多轮澄清：用户一句话说不清楚需求，需要反复追问',
        '权限管理复杂：不同人能看的数据不一样，权限控制是个大问题'
      ],

      // 13 迭代方案
      iterationPlan: [
        '从高频场景切入：先把周报自动化做深做透，用ROI最高的场景建立用户信任',
        '优化查询体验：增加查询结果的可视化呈现，让数据更直观',
        '建立反馈闭环：用户可以对查询结果点赞/点踩，持续优化模型',
        '完善权限体系：对接企业组织架构，实现细粒度的数据访问控制',
        '推广运营：用数据说话，展示节省的时间和效率提升，推动更多人使用'
      ],

      // 14 最终结果
      results: [
        '部门周报自动生成：人工整理从 2 小时缩短至 5 分钟',
        '覆盖 5+ 核心查询场景：Git 统计、开发数据、部署状态等',
        '企业微信入口零门槛：运营人员无需培训即可使用',
        '为后续更多 AI 效率场景建立了产品框架和用户习惯'
      ],

      // 15 如果重新做会怎么做
      reflection: '如果重新做，会更重视用户 adoption（采纳率）而非功能数量。第一版做了很多查询能力，但实际高频使用的就两三个。如果重新来，会先聚焦一个最高频的场景（比如周报），把体验做到极致，让用户真正离不开它，然后再扩展其他场景。另外，数据治理是企业AI工具的隐形地基——数据质量不好，再聪明的AI也没用。应该在项目早期就推动数据标准化和规范化的工作。',

      highlights: [
        '以企业微信为统一入口，设计自然语言查询流程，降低内部工具使用门槛',
        '推动数据库、Git、Kubernetes 等多数据源接入，实现一站式信息查询',
        '设计 Git 提交统计、开发数据看板等功能，帮助管理者实时掌握团队进展',
        '实现部门周报自动生成，将人工整理时间从 2 小时缩短至 5 分钟',
        '完成产品需求文档与原型设计，协调研发团队推进功能落地',
      ]
    },

    // ========== 03 Inrepli 海外 AI 产品 ==========
    {
      name: 'Inrepli 海外 AI 产品',
      index: '03',
      slug: 'inrepli-ai-saas',
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

      // 01 业务背景
      businessBackground: 'Inrepli 是面向海外市场的 B2B 营销自动化 SaaS 平台，核心功能围绕 AI Agent 帮助企业实现潜在客户开发、邮件营销和客户画像分析。作为快速迭代的创业型产品，需要持续优化 Agent 能力和产品体验。海外SaaS产品和国内产品在用户期望、隐私要求、使用习惯上有很大差异，AI功能的设计思路也需要相应调整。',

      // 02 原来的业务流程
      originalFlow: [
        '营销人员确定目标客户画像',
        '手动搜索和筛选潜在客户',
        '撰写个性化营销邮件',
        '批量发送邮件序列',
        '跟踪打开/回复情况',
        '手动分类回复类型',
        '高意向客户转销售跟进'
      ],

      // 03 发现什么问题
      problem: [
        'Agent Workflow 逻辑复杂，多轮对话容易出现上下文丢失',
        '海外用户使用场景差异大，国内产品直觉不完全适用',
        'AI 功能效果不稳定，缺乏系统性的测试和验收标准',
        '用户反馈分散，缺乏结构化的收集和分析机制'
      ],

      // 04 为什么这个问题值得解决
      valueJudgment: '用户层面：B2B营销人员的时间非常宝贵，他们需要的是"能干活的工具"而不是"酷炫的AI玩具"。产品层面：AI功能的稳定性和可靠性直接影响用户留存和付费转化。商业层面：海外SaaS市场竞争激烈，AI能力是核心差异化卖点，做得好就能建立护城河。核心判断：对于AI驱动的SaaS产品，AI不只是功能，它就是产品本身。AI体验的好坏直接决定产品的价值感知。',

      // 05 用户是谁/用户场景
      userScenarios: [
        { type: 'SDR/BDR（销售开发代表）', description: '主要使用者，每天用Agent找线索、发邮件、跟进回复' },
        { type: '销售经理', description: '管理团队，查看团队产出和转化数据' },
        { type: '市场负责人', description: '制定营销策略，配置邮件序列和客户画像' },
        { type: '创业者/小团队', description: '一个人干所有活，需要简单好用的自动化工具' }
      ],

      // 06 需求分析
      requirementBreakdown: [
        { task: '发现潜在客户', capability: 'AI线索搜索与筛选' },
        { task: '发送营销邮件', capability: '个性化邮件生成与序列发送' },
        { task: '处理客户回复', capability: '智能回复分类与摘要' },
        { task: '客户画像管理', capability: '自动信息提取与画像更新' },
        { task: '销售跟进建议', capability: '基于行为的下一步行动推荐' },
        { task: '效果分析', capability: '营销数据统计与洞察' }
      ],

      // 07 为什么选择AI
      whyAI: 'B2B营销的核心挑战是"规模化的个性化"——你需要联系大量潜在客户，但每封邮件又必须足够个性化才能获得回复。传统的邮件群发工具只能做简单的变量替换，效果越来越差。而AI可以基于每个客户的画像和背景，生成真正个性化的邮件内容，同时保持规模化触达的效率。这是传统规则引擎根本做不到的事情。',

      // 08 产品方案架构
      productArchitecture: '整体架构：用户定义目标客户画像 → AI线索发现引擎 → 邮件序列自动化 → 智能回复处理 → 客户画像更新 → 行动推荐。每个环节都有AI参与，但用户始终保留最终控制权——AI生成的内容可以编辑，AI推荐的行动可以确认或拒绝。这是海外用户非常看重的"human-in-the-loop"设计理念。',

      // 09 Agent Workflow
      agentWorkflow: [
        '线索发现：基于目标客户画像自动搜索和筛选潜在客户',
        '邮件序列：自动生成多轮个性化营销邮件并定时发送',
        '回复分类：智能分类客户回复类型（感兴趣/不感兴趣/需跟进）',
        '客户画像：自动汇总和更新客户信息，生成结构化画像',
        '推荐引擎：基于客户行为推荐下一步最佳行动'
      ],

      // 10 RAG/知识库/Prompt
      ragDetails: [
        '产品知识库：存储产品信息、价值主张、常见异议回答等',
        '行业知识库：不同行业的术语、痛点、场景描述',
        '邮件模板库：不同场景、不同阶段的邮件模板和示例',
        'Prompt分层：系统Prompt（角色设定）+ 任务Prompt（具体任务）+ 上下文（客户信息）',
        '内容审核机制：AI生成内容后自动审核，确保合规性和品牌一致性',
        'A/B测试框架：支持多版本Prompt和模板的效果对比测试'
      ],

      // 11 四层效果评估体系
      evaluationSystem: [
        { layer: 'AI层', metrics: ['内容生成质量', '回复分类准确率', '画像信息完整度'] },
        { layer: 'Agent层', metrics: ['工作流完成率', '平均处理时间', '人工干预率'] },
        { layer: '产品层', metrics: ['用户留存率', '功能使用率', 'NPS/CSAT'] },
        { layer: '商业层', metrics: ['付费转化率', '客户生命周期价值', '流失率'] }
      ],

      // 12 上线后发现的问题
      postLaunchIssues: [
        'AI生成的邮件"太像AI写的"：模板化严重，打开率和回复率不如预期',
        '海外用户对AI内容很敏感：很多人能看出来是AI写的，反而降低信任',
        '数据隐私顾虑：海外用户对自己的数据被用来训练模型非常警惕',
        'Agent"一条道走到黑"：遇到异常情况不会灵活调整，容易把对话搞砸'
      ],

      // 13 迭代方案
      iterationPlan: [
        '重构Agent Workflow：从功能驱动转向用户任务驱动，每个Workflow对应一个明确的用户目标',
        '增加人工编辑环节：AI生成初稿，用户可以自由编辑，强调"AI辅助"而非"AI替代"',
        '优化内容多样性：引入更多风格模板和个性化变量，让邮件更像真人写的',
        '透明化AI使用：明确告诉用户哪些是AI做的、为什么这么做，建立信任',
        '完善测试体系：建立功能测试、效果测试、边界测试三层测试标准'
      ],

      // 14 最终结果
      results: [
        '完成核心 Agent Workflow 重构，对话完成率显著提升',
        '建立完整的 AI 功能测试体系，Bug 发现效率提升',
        '搭建用户反馈分析机制，为产品迭代提供数据支撑',
        '深入理解海外 B2B SaaS 产品的用户需求和市场特点'
      ],

      // 15 如果重新做会怎么做
      reflection: '如果重新做，会更早地接触真实海外用户，而不是基于国内的产品经验去推测海外用户的需求。海外SaaS用户的产品预期、付费意愿、隐私敏感度都和国内很不一样，很多想当然的设计在实际用户那里根本不work。另外，AI产品的"可解释性"和"用户掌控感"在海外市场特别重要——用户需要知道AI做了什么、为什么这么做，并且能够随时干预。这不是锦上添花，而是基本要求。',

      highlights: [
        '深入分析海外 B2B 营销场景，梳理用户旅程与核心痛点',
        '参与 AI Agent 功能设计，包括邮件营销自动化、客户画像分析、智能推荐等模块',
        '绘制产品流程图与交互原型，与海外团队协作推进功能落地',
        '建立用户反馈分析机制，整理交互数据为产品迭代提供数据支撑',
        '参与竞品分析，对比同类海外营销 SaaS 产品的 AI 能力差异',
      ]
    },

    // ========== 04 Python 智能学习平台（无slug，保持弹窗） ==========
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
