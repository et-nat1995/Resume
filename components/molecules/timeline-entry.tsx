import type { PortfolioContent } from "@/lib/content";
import styles from "./timeline-entry.module.css";

type Role = PortfolioContent["experience"]["roles"][number];

export function TimelineEntry({ role }: { role: Role }) {
  return (
    <article className={styles.item}>
      <span className={styles.date}>{role.start}<span aria-hidden="true">→</span>{role.end}</span>
      <div>
        <h3 className={styles.role}>{role.role}</h3>
        <p className={styles.company}>{role.company}</p>
        <p className={styles.copy}>{role.copy}</p>
      </div>
    </article>
  );
}
