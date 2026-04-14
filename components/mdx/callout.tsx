type CalloutProps = {
  tone?: "default" | "info" | "warning";
  title?: string;
  children: React.ReactNode;
};

export function Callout({
  tone = "default",
  title,
  children
}: CalloutProps) {
  const toneClass =
    tone === "info"
      ? "border-sky-300/60 bg-sky-100/60 dark:border-sky-500/35 dark:bg-sky-500/10"
      : tone === "warning"
        ? "border-amber-300/60 bg-amber-100/60 dark:border-amber-500/35 dark:bg-amber-500/10"
        : "border-[var(--border)] bg-black/4 dark:bg-white/4";

  return (
    <div className={`rounded-[1.25rem] border p-4 ${toneClass}`}>
      {title ? <p className="mb-2 text-sm font-semibold">{title}</p> : null}
      <div className="text-sm leading-7 text-[var(--muted)]">{children}</div>
    </div>
  );
}
