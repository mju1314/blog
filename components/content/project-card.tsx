import Link from "next/link";

import { formatDate, formatProjectStatus } from "@/lib/utils";

type ProjectCardProps = {
  project: {
    title: string;
    summary: string;
    slug: string;
    date: string;
    role: string;
    stack: string[];
    status: string;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface-card group flex h-full flex-col rounded-[1.6rem] p-5 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-2)] sm:p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs tracking-[0.16em] text-[var(--muted)]">
        <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[color:var(--accent)]">
          {project.role}
        </span>
        <span>{formatProjectStatus(project.status)}</span>
        <span>{formatDate(project.date)}</span>
      </div>

      <div className="mt-4 grid gap-3">
        <h2 className="text-[1.55rem] font-semibold tracking-[-0.04em] text-[var(--foreground-strong)]">
          <Link
            href={`/projects/${project.slug}`}
            className="underline-offset-4 group-hover:text-[color:var(--accent)]"
          >
            {project.title}
          </Link>
        </h2>
        <p className="text-sm leading-8 text-[var(--muted)]">{project.summary}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 5).map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
