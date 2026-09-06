import { Icon } from "@/components/atoms/icon";
import { EducationLink } from "@/components/molecules/education-link";
import { SectionShell } from "@/components/molecules/section-shell";
import type { PortfolioContent } from "@/lib/content";
import styles from "./about-section.module.css";

type AboutSectionProps = {
  content: PortfolioContent["site"]["about"];
  education: PortfolioContent["education"];
};

export function AboutSection({ content, education }: AboutSectionProps) {
  return (
    <SectionShell id="about" content={content.section}>
      <div className={styles.layout}>
        <div>
          <p className={styles.lead}>
            {content.lead.before} <span>{content.lead.accent}</span> {content.lead.after}
          </p>
          <p className={styles.copy}>{content.body}</p>
          <div className={styles.interests} aria-label="Interests">
            {content.interests.map((interest) => (
              <span className={styles.interest} key={interest.label}>
                <Icon name={interest.icon} /> {interest.label}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.education} aria-label="Education">
          {education.items.map((item) => <EducationLink item={item} key={`${item.school}-${item.period}`} />)}
        </div>
      </div>
    </SectionShell>
  );
}
