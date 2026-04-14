import { LogWorkspace } from "@/components/content/log-workspace";
import { logs } from "@/lib/content";

export const metadata = {
  title: "日志",
  description: "周记、构建记录和阶段推进日志。"
};

export default function LogsPage() {
  const selectedLog = logs[0];

  return (
    <LogWorkspace
      logs={logs.map((entry) => ({
        title: entry.title,
        slug: entry.slug,
      }))}
      selectedLog={
        selectedLog
          ? {
              title: selectedLog.title,
              summary: selectedLog.summary,
              slug: selectedLog.slug,
              date: selectedLog.date,
              updated: selectedLog.updated,
              readingTime: selectedLog.readingTime,
              period: selectedLog.period,
              tags: selectedLog.tags,
              headings: selectedLog.headings,
              body: selectedLog.body,
            }
          : undefined
      }
    />
  );
}
