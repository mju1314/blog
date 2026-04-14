"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/site/theme-toggle";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-xl ${
        isHome
          ? "home-header relative border-b border-transparent bg-[color:var(--surface)]/72"
          : "border-b border-[var(--border)] bg-[color:var(--surface)]/92"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[color:var(--accent)] text-sm font-semibold text-white shadow-[var(--shadow-1)]">
            B
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-[-0.02em] text-[var(--foreground-strong)]">
              {siteConfig.name}
            </p>
            <p className="text-xs text-[var(--muted)]">笔记、项目、日志</p>
          </div>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-sm text-[var(--muted)]">
            探索你的技术与项目沉淀
          </div>
        </div>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)] p-1.5 shadow-[var(--shadow-1)] md:flex">
            {siteConfig.nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3.5 py-2 text-sm ${
                    active
                      ? "bg-[var(--accent-soft)] text-[color:var(--accent)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground-strong)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "关闭导航菜单" : "打开导航菜单"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] md:hidden"
          >
            <span className="relative block h-4 w-4">
              <span
                className={`absolute left-0 top-1/2 block h-px w-4 bg-[var(--foreground-strong)] transition-transform ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-[5px]"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-px w-4 bg-[var(--foreground-strong)] transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-px w-4 bg-[var(--foreground-strong)] transition-transform ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-[5px]"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <>
          <button
            type="button"
            aria-label="关闭菜单遮罩"
            className="fixed inset-0 top-[73px] z-30 bg-black/20 backdrop-blur-[2px] md:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-x-0 top-[73px] z-40 border-b border-[var(--border)] bg-[color:var(--background)]/98 px-4 pb-6 pt-4 backdrop-blur-xl md:hidden">
            <div className="mx-auto grid max-w-6xl gap-4">
              <div className="surface-strong grid gap-3 rounded-[1.8rem] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  站点导航
                </p>
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground-strong)]">
                  {siteConfig.title}
                </h2>
                <p className="text-sm leading-7 text-[var(--muted)]">
                  {siteConfig.hero.status}
                </p>
              </div>

              <nav className="grid gap-2">
                {siteConfig.nav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === item.href
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`surface-card flex items-center justify-between rounded-[1.3rem] px-4 py-4 text-sm ${
                        active
                          ? "border-[color:var(--accent)] bg-[var(--accent-soft)]"
                          : ""
                      }`}
                    >
                      <span className="text-[var(--foreground-strong)]">{item.label}</span>
                      <span className="text-[var(--muted)]">进入</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
