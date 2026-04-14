import { compileMDX } from "@content-collections/mdx";
import { defineCollection, defineConfig } from "@content-collections/core";
import GithubSlugger from "github-slugger";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { z } from "zod";

type Heading = {
  id: string;
  text: string;
  level: 2 | 3;
};

const baseDocumentFields = {
  title: z.string(),
  summary: z.string(),
  date: z.string(),
  updated: z.string().optional(),
  slug: z.string(),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  content: z.string(),
};

function extractHeadings(content: string): Heading[] {
  const slugger = new GithubSlugger();
  const headings = content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("##"));

  return headings.map((line) => {
    const level = line.startsWith("### ") ? 3 : 2;
    const text = line.replace(/^#{2,3}\s+/, "");

    return {
      id: slugger.slug(text),
      text,
      level,
    };
  });
}

function getReadingTime(content: string) {
  const withoutCode = content.replace(/```[\s\S]*?```/g, " ");
  const words = withoutCode.split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.round(words / 220));
}

async function compileDocument<
  T extends {
    content: string;
    date: string;
    slug: string;
  },
>(document: T, context: unknown) {
  const body = await compileMDX(context as never, document as never, {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: {
            className: ["heading-anchor"],
          },
        },
      ],
      [
        rehypePrettyCode,
        {
          keepBackground: false,
          theme: {
            dark: "github-dark-default",
            light: "github-light-default",
          },
        },
      ],
    ],
  });

  return {
    ...document,
    body,
    headings: extractHeadings(document.content),
    readingTime: getReadingTime(document.content),
    publishedAt: new Date(document.date).getTime(),
  };
}

const notes = defineCollection({
  name: "notes",
  directory: "content/notes",
  include: "**/*.mdx",
  schema: z.object({
    ...baseDocumentFields,
    category: z.string(),
    toc: z.boolean().default(true),
  }),
  transform: compileDocument,
});

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "**/*.mdx",
  schema: z.object({
    ...baseDocumentFields,
    role: z.string(),
    status: z
      .enum(["active", "completed", "archived", "experimental"])
      .default("active"),
    stack: z.array(z.string()).default([]),
    repo: z.string().optional(),
    demo: z.string().optional(),
  }),
  transform: compileDocument,
});

const logs = defineCollection({
  name: "logs",
  directory: "content/logs",
  include: "**/*.mdx",
  schema: z.object({
    ...baseDocumentFields,
    period: z.string().optional(),
  }),
  transform: compileDocument,
});

export default defineConfig({
  collections: [notes, projects, logs],
});
