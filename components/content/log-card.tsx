import Link from "next/link";

import { formatDate } from "@/lib/utils";

type LogCardProps = {
  log: {
    title: string;
    summary: string;
    slug: string;
    date: string;
    period?: string;
    tags: string[];
  };
};

export function LogCard({ log }: LogCardProps) {
  return (
    <article className="surface-card group rounded-[1.6rem] p-5 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-2)] sm:p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs tracking-[0.16em] text-[var(--muted)]">
        <span className="rounded-full bg-[var(--surface-soft)] px-2.5 py-1">
          {log.period ?? "周记"}
        </span>
        <span>{formatDate(log.date)}</span>
      </div>

      <div className="mt-4 grid gap-3">
        <h2 className="text-[1.55rem] font-semibold tracking-[-0.04em] text-[var(--foreground-strong)]">
          <Link
            href={`/logs/${log.slug}`}
            className="underline-offset-4 group-hover:text-[color:var(--accent)]"
          >
            {log.title}
          </Link>
        </h2>
        <p className="text-sm leading-8 text-[var(--muted)]">{log.summary}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {log.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}
