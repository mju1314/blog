import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NoteWorkspace } from "@/components/content/note-workspace";
import { getNoteBySlug, notes } from "@/lib/content";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return notes.map((note) => ({
    slug: note.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return {};
  }

  return {
    title: note.title,
    description: note.summary
  };
}

export default async function NoteDetailPage({ params }: Props) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <NoteWorkspace
      notes={notes.map((entry) => ({
        title: entry.title,
        slug: entry.slug,
      }))}
      selectedNote={{
        title: note.title,
        summary: note.summary,
        slug: note.slug,
        date: note.date,
        updated: note.updated,
        readingTime: note.readingTime,
        category: note.category,
        tags: note.tags,
        headings: note.toc ? note.headings : [],
        body: note.body,
      }}
    />
  );
}
