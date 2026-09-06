import { Icon } from "@/components/atoms/icon";
import type { PortfolioContent } from "@/lib/content";
import styles from "./education-link.module.css";

type Education = PortfolioContent["education"]["items"][number];

export function EducationLink({ item }: { item: Education }) {
  return (
    <a className={styles.item} href={item.href} target="_blank" rel="noreferrer">
      <span className={styles.degree}>
        {item.degree} <Icon name="arrow-up-right" />
      </span>
      <span className={styles.school}>{item.school} · {item.period}</span>
    </a>
  );
}
