import { Icon } from "@/components/atoms/icon";
import { ProjectCard } from "@/components/molecules/project-card";
import { SectionShell } from "@/components/molecules/section-shell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/molecules/tabs";
import type { PortfolioContent } from "@/lib/content";
import styles from "./work-section.module.css";

export function WorkSection({ content }: { content: PortfolioContent["projects"] }) {
  return (
    <SectionShell id="work" content={content.section}>
      <Tabs defaultValue={content.defaultProjectId} orientation="vertical" className={styles.tabs}>
        <TabsList className={styles.list} aria-label="Selected projects">
          {content.items.map((project) => (
            <TabsTrigger key={project.id} value={project.id} className={styles.trigger}>
              <span className={styles.triggerIndex}>{project.number}</span>
              <span className={styles.triggerCopy}>
                <span className={styles.triggerTitle}>{project.shortTitle}</span>
                <span className={styles.triggerType}>{project.type}</span>
              </span>
              <Icon name="arrow-right" />
            </TabsTrigger>
          ))}
        </TabsList>
        {content.items.map((project) => (
          <TabsContent key={project.id} value={project.id} className={styles.panel}>
            <ProjectCard project={project} />
          </TabsContent>
        ))}
      </Tabs>
    </SectionShell>
  );
}
