import { Guestbook } from "@/components/guestbook/giscus-comments";
import { Container } from "@/components/site/container";

export const metadata = {
  title: "留言",
  description: "使用 Giscus 构建的轻量留言页。"
};

export default function GuestbookPage() {
  return (
    <Container className="grid gap-8 pt-10 sm:pt-14">
      <section className="grid gap-4">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
          留言
        </p>
        <h1 className="text-4xl font-semibold tracking-[-0.05em]">
          先把互动做轻一点
        </h1>
        <p className="max-w-3xl leading-8 text-[var(--muted)]">
          第一版先不做每篇文章评论，而是只保留一个统一留言页。这样审核和维护
          成本更低，同时也能保留一个明确的公开互动入口。
        </p>
      </section>

      <section className="surface-card rounded-[1.5rem] p-5 sm:p-6">
        <Guestbook />
      </section>
    </Container>
  );
}
