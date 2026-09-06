import type { ReactNode } from "react";
import { Container } from "@/components/atoms/container";
import type { SectionContent } from "@/lib/content";
import styles from "./section-shell.module.css";

type SectionShellProps = {
  id?: string;
  content: SectionContent;
  children: ReactNode;
};

export function SectionShell({ id, content, children }: SectionShellProps) {
  const titleId = `${id ?? content.label.toLowerCase().replaceAll(" ", "-")}-title`;

  return (
    <section id={id} className={styles.section} aria-labelledby={titleId}>
      <Container>
        <div className={styles.header}>
          <p className={styles.index}>{content.index} / {content.label}</p>
          <div>
            <h2 id={titleId} className={styles.title}>{content.title}</h2>
            {content.intro ? <p className={styles.intro}>{content.intro}</p> : null}
          </div>
        </div>
        {children}
      </Container>
    </section>
  );
}
