import type { MetadataRoute } from "next";

import { logs, notes, projects } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/notes", "/projects", "/logs", "/about", "/guestbook"];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date()
  }));

  const noteEntries = notes.map((note) => ({
    url: `${siteConfig.url}/notes/${note.slug}`,
    lastModified: new Date(note.updated ?? note.date)
  }));

  const projectEntries = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(project.updated ?? project.date)
  }));

  const logEntries = logs.map((log) => ({
    url: `${siteConfig.url}/logs/${log.slug}`,
    lastModified: new Date(log.updated ?? log.date)
  }));

  return [...staticEntries, ...noteEntries, ...projectEntries, ...logEntries];
}
