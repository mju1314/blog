import { NoteWorkspace } from "@/components/content/note-workspace";
import { notes } from "@/lib/content";

export const metadata = {
  title: "笔记",
  description: "技术文章、学习笔记与资料整理。"
};

export default function NotesPage() {
  const selectedNote = notes[0];

  return (
    <NoteWorkspace
      notes={notes.map((entry) => ({
        title: entry.title,
        slug: entry.slug,
      }))}
      selectedNote={
        selectedNote
          ? {
              title: selectedNote.title,
              summary: selectedNote.summary,
              slug: selectedNote.slug,
              date: selectedNote.date,
              updated: selectedNote.updated,
              readingTime: selectedNote.readingTime,
              category: selectedNote.category,
              tags: selectedNote.tags,
              headings: selectedNote.toc ? selectedNote.headings : [],
              body: selectedNote.body,
            }
          : undefined
      }
    />
  );
}
