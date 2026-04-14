import Link from "next/link";

import { TableOfContents } from "@/components/content/toc";
import { Container } from "@/components/site/container";
import { formatDate } from "@/lib/utils";

type ArticleLayoutProps = {
  title: string;
  summary: string;
  date: string;
  updated?: string;
  readingTime?: number;
  eyebrow?: string;
  tags?: string[];
  headings?: Array<{
    id: string;
    text: string;
    level: number;
  }>;
  actions?: Array<{
    href: string;
    label: string;
  }>;
  backHref?: string;
  backLabel?: string;
  children: React.ReactNode;
};

export function ArticleLayout({
  title,
  summary,
  date,
  updated,
  readingTime,
  eyebrow,
  tags = [],
  headings = [],
  actions = [],
  backHref,
  backLabel,
  children
}: ArticleLayoutProps) {
  return (
    <Container className="grid gap-6 pt-8 sm:gap-8 sm:pt-12">
      <section className="surface-strong rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_16rem] xl:items-start">
          <div className="grid gap-5">
            {backHref && backLabel ? (
              <div>
                <Link
                  href={backHref}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground-strong)]"
                >
                  <span>←</span>
                  <span>{backLabel}</span>
                </Link>
              </div>
            ) : null}

            <div className="flex flex-wrap items-center gap-2 text-xs tracking-[0.16em] text-[var(--muted)]">
              {eyebrow ? (
                <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[color:var(--accent)]">
                  {eyebrow}
                </span>
              ) : null}
              <span>{formatDate(date)}</span>
              {updated ? <span>更新于 {formatDate(updated)}</span> : null}
              {readingTime ? <span>{readingTime} 分钟阅读</span> : null}
            </div>

            <div className="grid gap-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.07em] text-[var(--foreground-strong)] sm:text-5xl">
                {title}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                {summary}
              </p>
            </div>

            {tags.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-sm text-[var(--foreground-strong)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {actions.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {actions.map((action) => (
                  <a
                    key={action.href}
                    href={action.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--foreground-strong)] hover:border-[var(--border-strong)]"
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface-soft)] p-5 text-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              阅读信息
            </p>
            <div className="mt-4 grid gap-3 text-[var(--muted)]">
              <div className="grid gap-1">
                <span className="text-xs uppercase tracking-[0.16em]">发布日期</span>
                <span className="text-[var(--foreground-strong)]">{formatDate(date)}</span>
              </div>
              {updated ? (
                <div className="grid gap-1">
                  <span className="text-xs uppercase tracking-[0.16em]">最近更新</span>
                  <span className="text-[var(--foreground-strong)]">{formatDate(updated)}</span>
                </div>
              ) : null}
              {readingTime ? (
                <div className="grid gap-1">
                  <span className="text-xs uppercase tracking-[0.16em]">阅读时长</span>
                  <span className="text-[var(--foreground-strong)]">{readingTime} 分钟</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {headings.length > 0 ? (
        <details className="mobile-toc surface-card rounded-[1.4rem] p-4 lg:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                快速目录
              </p>
              <p className="mt-1 text-sm text-[var(--foreground-strong)]">
                展开查看本文结构
              </p>
            </div>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
              展开
            </span>
          </summary>
          <ul className="mt-4 grid gap-3 text-sm">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={heading.level === 3 ? "pl-4 text-[var(--muted)]" : ""}
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

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start">
        <article className="surface-card rounded-[1.8rem] p-5 sm:p-8">
          <div className="content-body">{children}</div>
        </article>
        <TableOfContents headings={headings} />
      </section>
    </Container>
  );
}
