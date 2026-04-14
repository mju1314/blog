"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

const requiredKeys = [
  "NEXT_PUBLIC_GISCUS_REPO",
  "NEXT_PUBLIC_GISCUS_REPO_ID",
  "NEXT_PUBLIC_GISCUS_CATEGORY",
  "NEXT_PUBLIC_GISCUS_CATEGORY_ID"
] as const;

export function Guestbook() {
  const { resolvedTheme } = useTheme();

  const values = {
    repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
    repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID,
    category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
    categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID
  };

  const missing = requiredKeys.filter((key) => {
    switch (key) {
      case "NEXT_PUBLIC_GISCUS_REPO":
        return !values.repo;
      case "NEXT_PUBLIC_GISCUS_REPO_ID":
        return !values.repoId;
      case "NEXT_PUBLIC_GISCUS_CATEGORY":
        return !values.category;
      case "NEXT_PUBLIC_GISCUS_CATEGORY_ID":
        return !values.categoryId;
      default:
        return true;
    }
  });

  if (missing.length > 0) {
    return (
      <div className="grid gap-4">
        <p className="text-sm font-medium">留言页还没有完成配置。</p>
        <p className="text-sm leading-7 text-[var(--muted)]">
          先在 `.env.example` 对应的环境变量里填入 Giscus 配置，并绑定目标
          GitHub 仓库，之后再启用这个页面。
        </p>
        <ul className="grid gap-2 rounded-[1.25rem] border border-[var(--border)] p-4 text-sm text-[var(--muted)]">
          {missing.map((key) => (
            <li key={key}>{key}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <Giscus
      repo={values.repo! as `${string}/${string}`}
      repoId={values.repoId!}
      category={values.category!}
      categoryId={values.categoryId!}
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      lang="zh-CN"
      loading="lazy"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
}
