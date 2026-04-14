import { allLogs, allNotes, allProjects } from "content-collections";

function isVisible<T extends { draft: boolean }>(document: T) {
  return process.env.NODE_ENV === "development" || !document.draft;
}

function sortByDate<T extends { publishedAt: number }>(documents: T[]) {
  return [...documents].sort((a, b) => b.publishedAt - a.publishedAt);
}

export const notes = sortByDate(allNotes.filter(isVisible));
export const projects = sortByDate(allProjects.filter(isVisible));
export const logs = sortByDate(allLogs.filter(isVisible));

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getNoteBySlug(slug: string) {
  return notes.find((note) => note.slug === slug);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getLogBySlug(slug: string) {
  return logs.find((log) => log.slug === slug);
}

export function getNoteCategories() {
  return Array.from(new Set(notes.map((note) => note.category))).sort();
}

export function getNoteTags() {
  return Array.from(new Set(notes.flatMap((note) => note.tags))).sort();
}

export function getNotesByCategory(category: string) {
  return notes.filter((note) => note.category === category);
}

export function getNotesByTag(tag: string) {
  return notes.filter((note) => note.tags.includes(tag));
}
