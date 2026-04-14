export function formatDate(value: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(value));
}

export function formatProjectStatus(status: string) {
  const statusMap: Record<string, string> = {
    active: "进行中",
    completed: "已完成",
    archived: "已归档",
    experimental: "实验中"
  };

  return statusMap[status] ?? status;
}
