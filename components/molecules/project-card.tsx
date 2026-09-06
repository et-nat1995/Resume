import { Pill } from "@/components/atoms/pill";
import type { PortfolioContent } from "@/lib/content";
import styles from "./project-card.module.css";

type Project = PortfolioContent["projects"]["items"][number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <Pill>Case {project.number}</Pill>
        <Pill>{project.type}</Pill>
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.summary}>{project.summary}</p>
      <div className={styles.breakdown}>
        {project.details.map((detail) => (
          <div className={styles.breakdownCell} key={detail.label}>
            <p className={styles.breakdownLabel}>{detail.label}</p>
            <p className={styles.breakdownCopy}>{detail.copy}</p>
          </div>
        ))}
      </div>
      <div className={styles.stack} aria-label="Technology and methods">
        {project.stack.map((item) => <span key={item}>{item}</span>)}
      </div>
    </article>
  );
}
