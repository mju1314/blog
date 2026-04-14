type TableOfContentsProps = {
  headings: Array<{
    id: string;
    text: string;
    level: number;
  }>;
};

export function TableOfContents({ headings }: TableOfContentsProps) {
  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="surface-card sticky top-24 hidden h-fit rounded-[1.4rem] p-5 lg:block">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
        本文目录
      </p>
      <nav className="mt-4">
        <ul className="grid gap-3 text-sm">
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
      </nav>
    </aside>
  );
}
