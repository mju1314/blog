import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LogWorkspace } from "@/components/content/log-workspace";
import { getLogBySlug, logs } from "@/lib/content";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return logs.map((log) => ({
    slug: log.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const log = getLogBySlug(slug);

  if (!log) {
    return {};
  }

  return {
    title: log.title,
    description: log.summary
  };
}

export default async function LogDetailPage({ params }: Props) {
  const { slug } = await params;
  const log = getLogBySlug(slug);

  if (!log) {
    notFound();
  }

  return (
    <LogWorkspace
      logs={logs.map((entry) => ({
        title: entry.title,
        slug: entry.slug,
      }))}
      selectedLog={{
        title: log.title,
        summary: log.summary,
        slug: log.slug,
        date: log.date,
        updated: log.updated,
        readingTime: log.readingTime,
        period: log.period,
        tags: log.tags,
        headings: log.headings,
        body: log.body,
      }}
    />
  );
}
