import Link from "next/link";

import { Container } from "@/components/site/container";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border)] py-10">
      <Container className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="grid gap-3">
          <p className="text-lg font-semibold tracking-[-0.03em] text-[var(--foreground-strong)]">
            {siteConfig.title}
          </p>
          <p className="max-w-2xl text-sm leading-7 text-[var(--muted)]">
            基于 Next.js、MDX 和内容文件驱动构建。这个站点用于沉淀技术笔记、
            项目复盘、阶段日志，以及作为求职时的个人主页入口。
          </p>
        </div>

        <div className="grid gap-4 lg:justify-end">
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/about"
              className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted)] hover:text-[var(--foreground-strong)]"
            >
              关于
            </Link>
            <Link
              href="/guestbook"
              className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted)] hover:text-[var(--foreground-strong)]"
            >
              留言
            </Link>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted)] hover:text-[var(--foreground-strong)]"
            >
              GitHub
            </a>
          </div>
          <p className="text-xs tracking-[0.16em] text-[var(--muted-soft)] lg:text-right">
            Notes / Projects / Logs
          </p>
        </div>
      </Container>
    </footer>
  );
}
