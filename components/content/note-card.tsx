import Link from "next/link";

import { formatDate } from "@/lib/utils";

type NoteCardProps = {
  note: {
    title: string;
    summary: string;
    slug: string;
    date: string;
    category: string;
    tags: string[];
    readingTime: number;
  };
};

export function NoteCard({ note }: NoteCardProps) {
  return (
    <article className="surface-card group rounded-[1.6rem] p-5 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-2)] sm:p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs tracking-[0.16em] text-[var(--muted)]">
        <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[color:var(--accent)]">
          {note.category}
        </span>
        <span>{formatDate(note.date)}</span>
        <span>{note.readingTime} 分钟阅读</span>
      </div>

      <div className="mt-4 grid gap-3">
        <h2 className="text-[1.55rem] font-semibold tracking-[-0.04em] text-[var(--foreground-strong)]">
          <Link
            href={`/notes/${note.slug}`}
            className="underline-offset-4 group-hover:text-[color:var(--accent)]"
          >
            {note.title}
          </Link>
        </h2>
        <p className="text-sm leading-8 text-[var(--muted)]">{note.summary}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {note.tags.slice(0, 4).map((tag) => (
          <Link
            key={tag}
            href={`/notes/tag/${encodeURIComponent(tag)}`}
            className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)] hover:border-[var(--border-strong)] hover:text-[var(--foreground-strong)]"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </article>
  );
}
