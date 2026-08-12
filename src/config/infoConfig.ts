export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = '金旻'
export const headline = 'AI Agent 产品设计师 | 软件工程背景 × 企业 AI 应用落地'
export const introduction = '软件工程背景，具备 AI Agent 产品设计与企业应用落地经验。参与企业销售 Agent、内部 AI 助手、海外 SaaS AI 产品建设，熟悉从用户需求分析、业务流程设计、Agent 工作流搭建到产品优化全过程。能够结合技术能力理解业务问题，并推动 AI 产品从 0 到 1 落地。'
export const email = '2509210811@qq.com'
export const gmail = 'PollardPollard5h71vjh@gmail.com'
export const phone = '13162293836'
export const wechatId = 'Kim_2509210811'
export const githubUsername = 'jinmin'

// about page
export const aboutMeHeadline = "我是金旻，AI Agent 产品设计师，专注于企业 AI 应用的产品设计与落地实施。"
export const aboutParagraphs = [
  "我拥有软件工程学术背景，先后在上海建桥学院完成计算机科学技术（专科）和软件工程（本科）的学习。扎实的工程基础让我能够深入理解技术可行性，在与研发团队协作时高效沟通。",
  "在径硕网络科技（上海）有限公司担任 AI 产品实习生期间，我深度参与了多个 AI Agent 项目的全流程建设。从药明生物官网智能获客 SDR Agent 的需求分析与工作流搭建，到 OpenClaw 企业内部 AI 效率工具的产品方案设计，再到海外 inrepli 营销 Agent 平台的功能规划，我积累了从 0 到 1 推动 AI 产品落地的完整经验。",
  "我的核心能力涵盖三个维度：AI 产品能力（Axure/Figma 原型设计、PRD 文档、Agent Workflow 设计）、大模型应用能力（LLM 应用落地、RAG 知识库方案、Prompt Engineering、FastGPT/OpenClaw 智能体搭建）、以及企业 AI 应用能力（企业微信 AI 应用开发、数据库/Git/Kubernetes 系统集成）。",
  "除了专业能力，我在校园中也有丰富的组织管理经验——大三担任拳击社团社长，将社团规模发展到 180 人并实现活跃度同比增长；大一带领班级获得院校情景剧双一等奖及个人最佳奖。这些经历培养了我的领导力与团队协作能力。"
]


// blog
export const blogHeadLine = "我的思考与实践"
export const blogIntro = "记录我在 AI Agent 产品设计、企业应用落地和全栈开发中的思考与经验。"


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/jinmin',
    external: true
  },
  {
    name: 'Wechat',
    icon: 'wechat',
    href: 'https://www.jingdigital.com',
    external: true
  },
  {
    name: 'Phone',
    icon: 'phone',
    href: 'tel:13162293836',
    external: false
  },
  {
    name: 'Email',
    icon: 'email',
    href: 'mailto:2509210811@qq.com',
    external: false
  }
]

// https://simpleicons.org/
export const techIcons = [
  "python",
  "javascript",
  "typescript",
  "react",
  "nextdotjs",
  "nodedotjs",
  "openai",
  "figma",
  "docker",
  "kubernetes",
  "git",
  "github",
  "wechat",
  "linux",
  "visualstudiocode"
];
