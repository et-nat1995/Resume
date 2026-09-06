import { SectionShell } from "@/components/molecules/section-shell";
import type { PortfolioContent } from "@/lib/content";
import styles from "./toolbox-section.module.css";

export function ToolboxSection({ content }: { content: PortfolioContent["toolbox"] }) {
  return (
    <SectionShell id="toolbox" content={content.section}>
      <div className={styles.grid}>
        {content.groups.map((group) => (
          <article className={styles.group} key={group.title}>
            <h3>{group.title}</h3>
            <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
