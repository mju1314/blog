import Link from "next/link";

import { Container } from "@/components/site/container";

export default function NotFound() {
  return (
    <Container className="grid min-h-[60vh] place-items-center py-16">
      <div className="surface-card grid max-w-xl gap-4 rounded-[2rem] p-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
          404
        </p>
        <h1 className="text-3xl font-semibold tracking-[-0.05em]">
          页面不存在
        </h1>
        <p className="leading-8 text-[var(--muted)]">
          可能是链接已变更，或者内容还没有发布。
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)]"
          >
            返回首页
          </Link>
        </div>
      </div>
    </Container>
  );
}
