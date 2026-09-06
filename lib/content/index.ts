import approach from "@/content/approach.json";
import education from "@/content/education.json";
import experience from "@/content/experience.json";
import projects from "@/content/projects.json";
import site from "@/content/site.json";
import toolbox from "@/content/toolbox.json";
import { portfolioContentSchema } from "./schema";

export const portfolioContent = portfolioContentSchema.parse({
  site,
  approach,
  projects,
  experience,
  toolbox,
  education,
});

export type { IconName, PortfolioContent, SectionContent } from "./schema";
