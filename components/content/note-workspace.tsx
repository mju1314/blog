import Link from "next/link";

import { MdxContent } from "@/components/mdx/mdx-content";
import { formatDate } from "@/lib/utils";

type NoteWorkspaceListItem = {
  title: string;
  slug: string;
};

type NoteWorkspaceNote = {
  title: string;
  summary: string;
  slug: string;
  date: string;
  updated?: string;
  readingTime?: number;
  category: string;
  tags: string[];
  headings: Array<{
    id: string;
    text: string;
    level: number;
  }>;
  body: string;
};

type NoteWorkspaceProps = {
  notes: NoteWorkspaceListItem[];
  selectedNote?: NoteWorkspaceNote;
};

function getNoteHref(note: NoteWorkspaceListItem, index: number) {
  return index === 0 ? "/notes" : `/notes/${note.slug}`;
}

export function NoteWorkspace({
  notes,
  selectedNote,
}: NoteWorkspaceProps) {
  if (!selectedNote) {
    return (
      <div className="note-page mx-auto w-full max-w-[1760px] px-2 pt-10 sm:px-4 sm:pt-14 xl:px-5">
        <div className="surface-card rounded-[1.8rem] p-6 sm:p-8">
          <p className="text-sm text-[var(--muted)]">当前还没有可展示的笔记内容。</p>
        </div>
      </div>
    );
  }

  const hasHeadings = selectedNote.headings.length > 0;

  return (
    <div className="note-page mx-auto grid w-full max-w-[1760px] gap-6 px-2 pt-6 pb-6 sm:gap-8 sm:px-4 sm:pt-8 xl:px-5">
      <section
        className={`grid gap-6 xl:items-start ${
          hasHeadings
            ? "xl:grid-cols-[12rem_minmax(0,1fr)_13rem]"
            : "xl:grid-cols-[12rem_minmax(0,1fr)]"
        }`}
      >
        <aside className="order-2 xl:order-1 xl:sticky xl:top-24 xl:self-start">
          <div className="rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(255,248,230,0.82)_0%,rgba(255,255,255,0.5)_100%)] p-4 sm:p-5 dark:bg-[linear-gradient(180deg,rgba(60,49,32,0.24)_0%,rgba(31,35,45,0.18)_100%)] xl:max-h-[calc(100vh-7rem)] xl:overflow-y-auto xl:pr-1">
            <details open className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-semibold tracking-[-0.02em] text-[var(--foreground-strong)]">
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true">📁</span>
                  <span>笔记</span>
                </span>
                <span className="text-[var(--muted)] transition-transform group-open:rotate-180">
                  ^
                </span>
              </summary>

              <nav className="mt-4">
                <ul className="grid gap-1.5 border-l border-[var(--border)] pl-3">
                  {notes.map((note, index) => {
                    const active = note.slug === selectedNote.slug;

                    return (
                      <li key={note.slug}>
                        <Link
                          href={getNoteHref(note, index)}
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
                          <span>{note.title}</span>
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
                    {selectedNote.category}
                  </span>
                  <span>{formatDate(selectedNote.date)}</span>
                  {selectedNote.updated ? (
                    <span>更新于 {formatDate(selectedNote.updated)}</span>
                  ) : null}
                  {selectedNote.readingTime ? (
                    <span>{selectedNote.readingTime} 分钟阅读</span>
                  ) : null}
                </div>

                <div className="grid gap-3">
                  <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.07em] text-[var(--foreground-strong)] sm:text-5xl">
                    {selectedNote.title}
                  </h1>
                  <p className="max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                    {selectedNote.summary}
                  </p>
                </div>

                {selectedNote.tags.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {selectedNote.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/notes/tag/${encodeURIComponent(tag)}`}
                        className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-sm text-[var(--foreground-strong)]"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </header>

              {hasHeadings ? (
                <details className="mobile-toc surface-card rounded-[1.4rem] p-4 lg:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                        大纲
                      </p>
                      <p className="mt-1 text-sm text-[var(--foreground-strong)]">
                        展开查看当前笔记结构
                      </p>
                    </div>
                    <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
                      展开
                    </span>
                  </summary>

                  <ul className="mt-4 grid list-none gap-3 text-sm">
                    {selectedNote.headings.map((heading) => (
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
                <MdxContent code={selectedNote.body} />
              </div>
            </div>
          </article>
        </div>

        {hasHeadings ? (
          <aside className="order-3 hidden xl:block xl:sticky xl:top-24 xl:self-start">
            <div className="border-l border-[var(--border)] pl-4 xl:max-h-[calc(100vh-7rem)] xl:overflow-y-auto xl:pr-1">
              <p className="text-sm font-medium text-[var(--foreground-strong)]">
                大纲
              </p>
              <nav className="mt-4">
                <ul className="grid list-none gap-3 text-sm">
                  {selectedNote.headings.map((heading) => (
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
