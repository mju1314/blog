import { projects } from "@/lib/content";
import { ProjectWorkspace } from "@/components/content/project-workspace";

export const metadata = {
  title: "项目",
  description: "项目案例、项目复盘与实现说明。"
};

export default function ProjectsPage() {
  return <ProjectWorkspace projects={projects} selectedProject={projects[0]} />;
}
