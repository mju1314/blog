import { notFound } from "next/navigation";

import { NoteCard } from "@/components/content/note-card";
import { Container } from "@/components/site/container";
import { getNoteTags, getNotesByTag } from "@/lib/content";

type Props = {
  params: Promise<{
    tag: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getNoteTags().map((tag) => ({
    tag
  }));
}

export default async function NotesByTagPage({ params }: Props) {
  const { tag } = await params;
  const filtered = getNotesByTag(tag);

  if (filtered.length === 0) {
    notFound();
  }

  return (
    <Container className="grid gap-8 pt-10 sm:pt-14">
      <section className="grid gap-3">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
          标签
        </p>
        <h1 className="text-4xl font-semibold tracking-[-0.05em]">#{tag}</h1>
        <p className="text-[var(--muted)]">
          当前标签下共有 {filtered.length} 篇内容。
        </p>
      </section>
      <section className="grid gap-4">
        {filtered.map((note) => (
          <NoteCard key={note.slug} note={note} />
        ))}
      </section>
    </Container>
  );
}
