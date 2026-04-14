import { Container } from "@/components/site/container";
import { siteConfig } from "@/lib/site-config";

const skillGroups = [
  {
    title: "后端",
    items: ["Java", "Spring Boot", "REST API 设计", "PostgreSQL", "Redis"]
  },
  {
    title: "前端",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "AI 应用",
    items: ["RAG", "Agent 工作流", "工具调用", "Prompt 编排"]
  }
];

export const metadata = {
  title: "关于",
  description: "简历式概览、技能栈与求职方向。"
};

export default function AboutPage() {
  return (
    <Container className="about-page grid gap-8 pt-10 sm:pt-14">
      <section className="relative overflow-hidden rounded-[2rem] border border-[color:color-mix(in_oklab,var(--border)_72%,white_28%)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(248,250,255,0.7)_100%)] p-7 shadow-[0_20px_50px_rgba(108,124,216,0.10)] backdrop-blur-xl sm:p-9 dark:border-[rgba(78,85,100,0.52)] dark:bg-[linear-gradient(180deg,rgba(34,39,53,0.96)_0%,rgba(28,32,44,0.92)_100%)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_100%)] dark:bg-[linear-gradient(180deg,rgba(93,112,255,0.12)_0%,rgba(93,112,255,0)_100%)]" />
        <p className="relative text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
          关于
        </p>
        <div className="relative grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="grid gap-4">
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-[var(--foreground-strong)]">
              {siteConfig.title}
            </h1>
            <p className="leading-8 text-[var(--muted)]">
              {siteConfig.about}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.7)] px-4 py-2 text-sm text-[var(--foreground-strong)] shadow-[var(--shadow-1)] backdrop-blur-md dark:border-[rgba(78,85,100,0.52)] dark:bg-[rgba(38,43,59,0.88)] dark:shadow-none"
              >
                GitHub
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.7)] px-4 py-2 text-sm text-[var(--foreground-strong)] shadow-[var(--shadow-1)] backdrop-blur-md dark:border-[rgba(78,85,100,0.52)] dark:bg-[rgba(38,43,59,0.88)] dark:shadow-none"
              >
                邮箱
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-[color:color-mix(in_oklab,var(--border)_74%,white_26%)] bg-[rgba(255,255,255,0.56)] p-5 shadow-[0_10px_28px_rgba(113,130,214,0.08)] backdrop-blur-lg dark:border-[rgba(78,85,100,0.52)] dark:bg-[rgba(36,41,56,0.9)] dark:shadow-none">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              求职方向
            </p>
            <ul className="grid gap-2 text-sm leading-7 text-[var(--muted)]">
              <li>以 Java 后端为核心的全栈岗位</li>
              <li>AI 应用工程和 Agent 工程相关岗位</li>
              <li>兼顾产品理解、清晰表达和系统思维的工程岗位</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="relative overflow-hidden rounded-[1.5rem] border border-[color:color-mix(in_oklab,var(--border)_72%,white_28%)] bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(248,250,255,0.66)_100%)] p-5 shadow-[0_16px_36px_rgba(108,124,216,0.08)] backdrop-blur-lg dark:border-[rgba(78,85,100,0.52)] dark:bg-[linear-gradient(180deg,rgba(35,40,54,0.96)_0%,rgba(30,34,46,0.92)_100%)] dark:shadow-none"
          >
            <div className="pointer-events-none absolute inset-x-6 top-0 h-14 bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_100%)] dark:bg-[linear-gradient(180deg,rgba(93,112,255,0.1)_0%,rgba(93,112,255,0)_100%)]" />
            <p className="relative text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              {group.title}
            </p>
            <ul className="relative mt-4 grid gap-2 text-sm leading-7 text-[var(--foreground-strong)]">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="relative overflow-hidden rounded-[1.5rem] border border-[color:color-mix(in_oklab,var(--border)_72%,white_28%)] bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(248,250,255,0.66)_100%)] p-6 shadow-[0_16px_36px_rgba(108,124,216,0.08)] backdrop-blur-lg dark:border-[rgba(78,85,100,0.52)] dark:bg-[linear-gradient(180deg,rgba(35,40,54,0.96)_0%,rgba(30,34,46,0.92)_100%)] dark:shadow-none">
        <div className="pointer-events-none absolute inset-x-6 top-0 h-14 bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_100%)] dark:bg-[linear-gradient(180deg,rgba(93,112,255,0.1)_0%,rgba(93,112,255,0)_100%)]" />
        <p className="relative text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          下一步建议
        </p>
        <ul className="relative grid gap-3 text-sm leading-7 text-[var(--muted)]">
          <li>把当前占位简介替换成你自己的简历式自我介绍。</li>
          <li>优先做 3 到 5 个强项目，不要为了凑数量塞弱项目。</li>
          <li>把重复性的学习推进整理成周记，而不是零散笔记。</li>
        </ul>
      </section>
    </Container>
  );
}
