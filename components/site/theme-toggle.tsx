"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs text-[var(--muted)]"
      >
        主题
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs text-[var(--muted)] hover:border-[var(--border-strong)] hover:text-[var(--foreground-strong)]"
      aria-label="切换主题"
    >
      {isDark ? "浅色" : "深色"}
    </button>
  );
}
