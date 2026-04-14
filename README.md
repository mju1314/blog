# Personal Blog / Portfolio

一个基于 `Next.js 15 + React 19 + MDX + content-collections` 的个人博客与作品集项目。

这个项目不只是内容博客，也同时承担几类用途：

- 沉淀技术文章、学习笔记和阶段日志
- 展示项目案例、实现思路和工程能力
- 作为求职时可直接访问的个人站点

## Features

- App Router 架构
- MDX 内容驱动
- `notes / projects / logs` 三类内容模型
- 基于 frontmatter 的内容校验与编译
- 自动提取二三级标题生成大纲
- 阅读时长计算
- 深色模式
- Giscus 留言页
- Sitemap / Robots / 基础 SEO

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- MDX
- content-collections
- next-themes
- Giscus

## Pages

- `/`
  首页，展示站点定位、精选项目、最新笔记和最近日志
- `/notes`
  笔记工作区，默认打开第一篇笔记，左侧目录，右侧大纲
- `/projects`
  项目工作区，默认打开第一个项目，左侧目录，右侧大纲
- `/logs`
  日志工作区，默认打开第一篇日志，左侧目录，右侧大纲
- `/about`
  关于页，作为简历式概览与技能展示页
- `/guestbook`
  基于 Giscus 的统一留言页

## Project Structure

```text
blog/
  app/                     # App Router 页面与路由
  components/              # 内容组件、站点组件、留言组件
  content/                 # MDX 内容源
    notes/
    projects/
    logs/
  docs/                    # 项目需求、架构、开发状态文档
  lib/                     # 站点配置、内容聚合、工具函数
  content-collections.ts   # 内容模型定义与 MDX 编译配置
  next.config.mjs
  eslint.config.mjs
  postcss.config.mjs
  package.json
```

## Content Model

### Notes

位置：`content/notes`

主要字段：

- `title`
- `summary`
- `date`
- `updated`
- `slug`
- `category`
- `tags`
- `toc`
- `draft`
- `featured`

### Projects

位置：`content/projects`

主要字段：

- `title`
- `summary`
- `date`
- `updated`
- `slug`
- `role`
- `status`
- `stack`
- `repo`
- `demo`
- `tags`
- `draft`
- `featured`

### Logs

位置：`content/logs`

主要字段：

- `title`
- `summary`
- `date`
- `updated`
- `slug`
- `period`
- `tags`
- `draft`
- `featured`

## Local Development

要求：

- Node.js `>= 20`
- npm

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

访问：

```text
http://localhost:3000
```

## Scripts

开发：

```bash
npm run dev
```

类型检查：

```bash
npm run typecheck
```

代码检查：

```bash
npm run lint
```

生产构建：

```bash
npm run build
```

启动生产环境：

```bash
npm run start
```

## Environment Variables

项目根目录提供了 `.env.example`，首次运行建议复制为 `.env.local`：

```bash
cp .env.example .env.local
```

当前用到的环境变量：

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GISCUS_REPO=owner/repo
NEXT_PUBLIC_GISCUS_REPO_ID=
NEXT_PUBLIC_GISCUS_CATEGORY=Guestbook
NEXT_PUBLIC_GISCUS_CATEGORY_ID=
```

说明：

- `NEXT_PUBLIC_SITE_URL`
  用于 `metadataBase`、`sitemap`、`robots` 等站点 URL 生成
- `NEXT_PUBLIC_GISCUS_*`
  用于留言页的 Giscus 配置

如果不配置 Giscus，站点仍可运行，只是 `/guestbook` 页面会显示缺少配置提示。

## Content Workflow

新增一篇笔记：

1. 在 `content/notes` 下创建一个 `.mdx` 文件
2. 补齐 frontmatter
3. 编写正文内容
4. 启动开发环境后自动被内容系统收集

项目与日志的维护方式相同，分别放在：

- `content/projects`
- `content/logs`

`content-collections.ts` 会负责：

- frontmatter 校验
- MDX 编译
- 生成 `body`
- 提取标题大纲
- 计算阅读时长

## Docs

仓库内已有项目文档：

- `docs/需求.md`
- `docs/架构.md`
- `docs/development-status.md`

如果你准备继续开发或交接给别人，建议优先看这三份文档。

## Current Status

当前这一版已经完成的内容包括：

- 站点整体壳层与导航
- 首页展示
- 笔记模块工作区
- 项目模块工作区
- 日志模块工作区
- 关于页
- 留言页骨架
- 深色模式
- 基础 SEO 与 sitemap / robots

更适合继续补充的内容包括：

- 替换站点中的占位个人信息
- 补充真实笔记、项目和日志内容
- 完成 Giscus 实际配置
- 补充部署信息
- 后续可再增加 RSS、搜索、统计等功能

## Deployment

推荐部署到支持 Next.js 的平台，例如：

- Vercel
- Netlify
- 自建 Node.js 服务器

部署前建议确认：

1. `.env.local` 中的站点 URL 与 Giscus 配置已填写
2. `npm run typecheck` 通过
3. `npm run build` 可以成功

## License

如果你准备公开发布这个仓库，建议补充一个明确的 License 文件，例如：

- MIT
- Apache-2.0

当前仓库中尚未看到单独的 `LICENSE` 文件，如要开源，建议一并补上。
