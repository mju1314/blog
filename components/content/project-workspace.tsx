import Link from "next/link";

import { MdxContent } from "@/components/mdx/mdx-content";
import { formatDate, formatProjectStatus } from "@/lib/utils";

type ProjectWorkspaceProject = {
  title: string;
  summary: string;
  slug: string;
  date: string;
  updated?: string;
  readingTime?: number;
  role: string;
  status: string;
  stack: string[];
  repo?: string;
  demo?: string;
  headings: Array<{
    id: string;
    text: string;
    level: number;
  }>;
  body: string;
};

type ProjectWorkspaceProps = {
  projects: ProjectWorkspaceProject[];
  selectedProject?: ProjectWorkspaceProject;
};

function getProjectHref(project: ProjectWorkspaceProject, index: number) {
  return index === 0 ? "/projects" : `/projects/${project.slug}`;
}

export function ProjectWorkspace({
  projects,
  selectedProject,
}: ProjectWorkspaceProps) {
  if (!selectedProject) {
    return (
      <div className="project-page mx-auto w-full max-w-[1760px] px-2 pt-10 sm:px-4 sm:pt-14 xl:px-5">
        <div className="surface-card rounded-[1.8rem] p-6 sm:p-8">
          <p className="text-sm text-[var(--muted)]">当前还没有可展示的项目内容。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="project-page mx-auto grid w-full max-w-[1760px] gap-6 px-2 pt-6 pb-6 sm:gap-8 sm:px-4 sm:pt-8 xl:px-5">
      <section className="grid gap-6 xl:grid-cols-[12rem_minmax(0,1fr)_13rem] xl:items-start">
        <aside className="order-2 xl:order-1 xl:sticky xl:top-24 xl:self-start">
          <div className="rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(255,248,230,0.82)_0%,rgba(255,255,255,0.5)_100%)] p-4 sm:p-5 dark:bg-[linear-gradient(180deg,rgba(60,49,32,0.24)_0%,rgba(31,35,45,0.18)_100%)] xl:max-h-[calc(100vh-7rem)] xl:overflow-y-auto xl:pr-1">
            <details open className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-semibold tracking-[-0.02em] text-[var(--foreground-strong)]">
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true">📁</span>
                  <span>项目</span>
                </span>
                <span className="text-[var(--muted)] transition-transform group-open:rotate-180">
                  ˅
                </span>
              </summary>

              <nav className="mt-4">
                <ul className="grid gap-1.5 border-l border-[var(--border)] pl-3">
                  {projects.map((project, index) => {
                    const active = project.slug === selectedProject.slug;

                    return (
                      <li key={project.slug}>
                        <Link
                          href={getProjectHref(project, index)}
                          className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm transition-colors ${
                            active
                              ? "text-[color:var(--accent)]"
                              : "text-[var(--foreground-strong)] hover:bg-[var(--surface-soft)]"
                          }`}
                        >
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${
                              active
                                ? "bg-[color:var(--accent)]"
                                : "bg-[color:var(--muted-soft)]"
                            }`}
                          />
                          <span>{project.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </details>
          </div>
        </aside>

        <div className="order-1 xl:order-2 xl:min-w-0">
          <article className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,251,237,0.88)_0%,rgba(255,255,255,0.68)_100%)] p-6 shadow-[0_18px_50px_rgba(212,190,133,0.12)] sm:p-8 lg:p-10 dark:bg-[linear-gradient(180deg,rgba(56,47,34,0.24)_0%,rgba(31,35,45,0.22)_100%)] dark:shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
            <div className="grid gap-6">
                <header className="grid gap-4 border-b border-[var(--border)] pb-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs tracking-[0.16em] text-[var(--muted)]">
                    <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[color:var(--accent)]">
                      {selectedProject.role}
                    </span>
                    <span>{formatProjectStatus(selectedProject.status)}</span>
                    <span>{formatDate(selectedProject.date)}</span>
                    {selectedProject.updated ? (
                      <span>更新于 {formatDate(selectedProject.updated)}</span>
                    ) : null}
                    {selectedProject.readingTime ? (
                      <span>{selectedProject.readingTime} 分钟阅读</span>
                    ) : null}
                  </div>

                  <div className="grid gap-3">
                    <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.07em] text-[var(--foreground-strong)] sm:text-5xl">
                      {selectedProject.title}
                    </h1>
                    <p className="max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                      {selectedProject.summary}
                    </p>
                  </div>

                  {selectedProject.stack.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-sm text-[var(--foreground-strong)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {selectedProject.repo || selectedProject.demo ? (
                    <div className="rounded-[1.2rem] border border-[color:color-mix(in_oklab,var(--border)_80%,#f4d78f_20%)] bg-[linear-gradient(180deg,rgba(255,246,220,0.56)_0%,rgba(255,255,255,0.45)_100%)] p-4 dark:bg-[linear-gradient(180deg,rgba(70,55,30,0.18)_0%,rgba(43,47,58,0.16)_100%)]">
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                        项目概览
                      </p>
                      <div className="mt-3 flex flex-wrap gap-3">
                        {selectedProject.repo ? (
                          <a
                            href={selectedProject.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.78)] px-4 py-2 text-sm text-[var(--foreground-strong)] hover:border-[var(--border-strong)] dark:bg-[rgba(31,35,45,0.72)]"
                          >
                            代码仓库
                          </a>
                        ) : null}
                        {selectedProject.demo ? (
                          <a
                            href={selectedProject.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.78)] px-4 py-2 text-sm text-[var(--foreground-strong)] hover:border-[var(--border-strong)] dark:bg-[rgba(31,35,45,0.72)]"
                          >
                            在线演示
                          </a>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </header>

                {selectedProject.headings.length > 0 ? (
                  <details className="mobile-toc surface-card rounded-[1.4rem] p-4 lg:hidden">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                          大纲
                        </p>
                        <p className="mt-1 text-sm text-[var(--foreground-strong)]">
                          展开查看当前项目结构
                        </p>
                      </div>
                      <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
                        展开
                      </span>
                    </summary>

                    <ul className="mt-4 grid list-none gap-3 text-sm">
                      {selectedProject.headings.map((heading) => (
                        <li
                          key={heading.id}
                          className={`leading-6 ${
                            heading.level === 3 ? "pl-4 text-[var(--muted)]" : ""
                          }`}
                        >
                          <a
                            href={`#${heading.id}`}
                            className="text-[var(--muted)] hover:text-[var(--foreground-strong)]"
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : null}

                <div className="content-body">
                  <MdxContent code={selectedProject.body} />
                </div>
            </div>
          </article>
        </div>

        {selectedProject.headings.length > 0 ? (
          <aside className="order-3 hidden xl:block xl:sticky xl:top-24 xl:self-start">
            <div className="border-l border-[var(--border)] pl-4 xl:max-h-[calc(100vh-7rem)] xl:overflow-y-auto xl:pr-1">
              <p className="text-sm font-medium text-[var(--foreground-strong)]">
                大纲
              </p>
              <nav className="mt-4">
                <ul className="grid list-none gap-3 text-sm">
                  {selectedProject.headings.map((heading) => (
                    <li
                      key={heading.id}
                      className={`leading-6 ${
                        heading.level === 3 ? "pl-4 text-[var(--muted)]" : ""
                      }`}
                    >
                      <a
                        href={`#${heading.id}`}
                        className="text-[var(--muted)] hover:text-[var(--foreground-strong)]"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        ) : null}
      </section>
    </div>
  );
}
