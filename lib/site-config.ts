export const siteConfig = {
  name: "你的名字",
  title: "全栈开发 / AI Agent 应用工程师",
  description:
    "一个用于沉淀技术笔记、项目复盘、阶段记录和求职展示的个人站点。",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "you@example.com",
  hero: {
    badge: "Java 后端、全栈实现与 AI 应用实践",
    title: "把个人站做成能代表你能力边界的作品集。",
    description:
      "这个站点围绕技术笔记、项目案例、阶段日志和简历主页展开，目标不是堆内容，而是用清晰的结构展示你的工程能力、思考方式和持续输出。",
    status: "当前持续补强 Java 后端、全栈交付和 AI Agent 应用方向。"
  },
  about:
    "我偏后端思维做产品，关注实现质量、系统设计和长期维护，也希望把学习过程沉淀成能复用的内容资产。这个站点的目标很明确：既能长期记录，也能在求职时快速说明我会做什么、怎么做以及为什么这么做。",
  intro: [
    "关注系统设计、实现质量和长期维护。",
    "希望这个站点既能沉淀学习过程，也能作为求职时的第一落点。"
  ],
  techFocus: [
    "Java",
    "Spring Boot",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Agent 工作流"
  ],
  nav: [
    { href: "/", label: "首页" },
    { href: "/notes", label: "笔记" },
    { href: "/projects", label: "项目" },
    { href: "/logs", label: "日志" },
    { href: "/about", label: "关于" },
    { href: "/guestbook", label: "留言" }
  ],
  social: {
    github: "https://github.com/your-name"
  }
};
