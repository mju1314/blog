import Link from "next/link";

import { LogCard } from "@/components/content/log-card";
import { NoteCard } from "@/components/content/note-card";
import { ProjectCard } from "@/components/content/project-card";
import { Container } from "@/components/site/container";
import { getFeaturedProjects, logs, notes } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

const floatingDots = [
  { size: 24, left: "4%", top: "34%", delay: "0s" },
  { size: 18, left: "11%", top: "70%", delay: "1.2s" },
  { size: 16, left: "28%", top: "12%", delay: "0.8s" },
  { size: 22, left: "46%", top: "58%", delay: "1.8s" },
  { size: 14, left: "62%", top: "16%", delay: "0.5s" },
  { size: 26, left: "79%", top: "66%", delay: "2.1s" },
  { size: 12, left: "88%", top: "24%", delay: "0.9s" }
] as const;

const specialtyColumns = [
  {
    icon: "📝",
    title: "技术文章",
    description: "围绕 Java、Spring Boot、接口设计、工程实践和问题排查输出文章。",
    href: "/notes"
  },
  {
    icon: "🚀",
    title: "项目专栏",
    description: "整理项目案例、架构拆解、关键难点和交付过程，而不是只放结果图。",
    href: "/projects"
  },
  {
    icon: "🤖",
    title: "Agent 实验",
    description: "记录 AI 应用、工作流编排、工具调用和产品化尝试。",
    href: "/notes"
  },
  {
    icon: "⚙️",
    title: "中间件 / 工程化",
    description: "沉淀数据库、中间件、构建链路和部署流程里的实践经验。",
    href: "/notes"
  },
  {
    icon: "🧩",
    title: "前端与交互",
    description: "记录 Next.js、组件设计、页面结构和交互实现中的方法与取舍。",
    href: "/notes"
  },
  {
    icon: "🔎",
    title: "日志与复盘",
    description: "把阶段推进、每周总结和学习轨迹整理成公开可读的长期记录。",
    href: "/logs"
  }
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);
  const latestNotes = notes.slice(0, 3);
  const recentLogs = logs.slice(0, 2);

  return (
    <div className="home-page pt-4 sm:pt-6">
      <section className="home-section home-hero relative overflow-hidden">
        {floatingDots.map((dot, index) => (
          <span
            key={`${dot.left}-${dot.top}-${index}`}
            className="home-floating-dot"
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              left: dot.left,
              top: dot.top,
              animationDelay: dot.delay
            }}
          />
        ))}

        <Container className="relative grid gap-8 py-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-10">
          <div className="grid gap-5">
            <div className="grid gap-3">
              <span className="w-fit rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">
                {siteConfig.hero.badge}
              </span>
              <div className="grid gap-2">
                <p className="text-base font-medium text-[color:var(--accent)]">
                  Hi, I&apos;m {siteConfig.name}
                </p>
                <h1 className="max-w-4xl text-[3rem] font-semibold leading-[0.92] tracking-[-0.08em] text-[var(--foreground-strong)] sm:text-[3.5rem] lg:text-[4rem]">
                  把个人站做成真正能代表你能力边界的作品集
                </h1>
              </div>
              <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
                围绕技术文章、项目案例、阶段日志与 AI 应用实验展开，用更清晰的版式
                展示工程能力、思考方式和持续输出。
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-full bg-[color:var(--accent)] px-5 py-2.5 text-sm font-medium text-white shadow-[var(--shadow-1)] hover:translate-y-[-1px]"
              >
                开始探索
              </Link>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--foreground-strong)] hover:border-[var(--border-strong)]"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="grid place-items-center py-2 lg:py-0">
            <div className="home-emblem-wrap">
              <div className="home-emblem-glow" />
              <div className="home-emblem-shadow" />
              <div className="home-emblem">
                <span className="home-emblem-core home-emblem-core-1" />
                <span className="home-emblem-core home-emblem-core-2" />
                <span className="home-emblem-core home-emblem-core-3" />
                <span className="home-emblem-core home-emblem-core-4" />
                <span className="home-emblem-core home-emblem-core-5" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="home-section py-8 sm:py-10 lg:py-12">
        <Container className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {specialtyColumns.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              aria-label={`前往${item.title}`}
              className="block rounded-[1.55rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--background)]"
            >
              <article className="specialty-card h-full rounded-[1.55rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-1)]">
                <div className="specialty-icon grid h-12 w-12 place-items-center rounded-2xl bg-[var(--accent-soft)] text-xl shadow-[var(--shadow-1)]">
                  {item.icon}
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground-strong)]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-8 text-[var(--muted)]">
                  {item.description}
                </p>
              </article>
            </Link>
          ))}
        </Container>
      </section>

      <section className="home-section py-8 sm:py-10 lg:py-12">
        <Container className="grid gap-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                精选项目
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground-strong)]">
                先看最能代表你的作品
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground-strong)]"
            >
              查看全部项目
            </Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="home-section py-8 sm:py-10 lg:py-12">
        <Container className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                  技术笔记
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground-strong)]">
                  最近输出
                </h2>
              </div>
              <Link
                href="/notes"
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground-strong)]"
              >
                查看全部笔记
              </Link>
            </div>
            <div className="grid gap-4">
              {latestNotes.map((note) => (
                <NoteCard key={note.slug} note={note} />
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                  阶段日志
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground-strong)]">
                  最近推进轨迹
                </h2>
              </div>
              <Link
                href="/logs"
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground-strong)]"
              >
                查看全部日志
              </Link>
            </div>
            <div className="grid gap-4">
              {recentLogs.map((log) => (
                <LogCard key={log.slug} log={log} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
