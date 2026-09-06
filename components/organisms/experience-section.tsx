import { SectionShell } from "@/components/molecules/section-shell";
import { TimelineEntry } from "@/components/molecules/timeline-entry";
import type { PortfolioContent } from "@/lib/content";
import styles from "./experience-section.module.css";

export function ExperienceSection({ content }: { content: PortfolioContent["experience"] }) {
  return (
    <SectionShell id="experience" content={content.section}>
      <div className={styles.layout}>
        <div className={styles.timeline}>
          {content.roles.map((role) => <TimelineEntry role={role} key={`${role.company}-${role.start}`} />)}
        </div>
        <aside className={styles.notes} aria-labelledby="current-notes-title">
          <p className={styles.notesLabel}>{content.currentNotes.label}</p>
          <h3 id="current-notes-title" className={styles.notesTitle}>{content.currentNotes.title}</h3>
          <p className={styles.notesCopy}>{content.currentNotes.copy}</p>
          <ul className={styles.topics}>
            {content.currentNotes.topics.map((topic) => <li key={topic}>{topic}</li>)}
          </ul>
        </aside>
      </div>
    </SectionShell>
  );
}
