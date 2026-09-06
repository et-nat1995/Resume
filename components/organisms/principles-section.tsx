import { Icon } from "@/components/atoms/icon";
import { SectionShell } from "@/components/molecules/section-shell";
import type { PortfolioContent } from "@/lib/content";
import styles from "./principles-section.module.css";

type Principles = PortfolioContent["approach"]["principlesSection"];

export function PrinciplesSection({ content }: { content: Principles }) {
  return (
    <SectionShell id="principles" content={content.section}>
      <div className={styles.grid}>
        {content.items.map((principle) => (
          <article className={styles.card} key={principle.number}>
            <span className={styles.number}>{principle.number}</span>
            <div className={styles.icon}><Icon name={principle.icon} /></div>
            <h3>{principle.title}</h3>
            <p>{principle.copy}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
