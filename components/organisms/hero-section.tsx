import { Container } from "@/components/atoms/container";
import { Icon } from "@/components/atoms/icon";
import type { PortfolioContent } from "@/lib/content";
import { EngineeringExplorer } from "./engineering-explorer";
import styles from "./hero-section.module.css";

type HeroSectionProps = {
  site: PortfolioContent["site"];
  explorer: PortfolioContent["approach"]["explorer"];
};

export function HeroSection({ site, explorer }: HeroSectionProps) {
  const { hero, identity } = site;

  return (
    <section id="top" className={styles.section} aria-labelledby="hero-title">
      <Container className={styles.layout}>
        <div className={styles.copyBlock}>
          <p className={styles.eyebrow}>{identity.role} · {identity.location}</p>
          <h1 id="hero-title" className={styles.title}>
            {hero.title.before} <span>{hero.title.accent}</span> {hero.title.after}
          </h1>
          <p className={styles.intro}>
            {hero.intro.before} <strong>{hero.intro.emphasis}</strong>. {hero.intro.after}
          </p>
          <div className={styles.actions}>
            {hero.actions.map((action) => (
              <a className={styles.action} data-variant={action.variant} href={action.href} key={action.href}>
                <Icon name={action.icon} /> {action.label}
              </a>
            ))}
          </div>
          <ul className={styles.facts} aria-label="Career highlights">
            {hero.facts.map((fact) => (
              <li key={fact.value}>
                <span className={styles.factValue}>{fact.value}</span>
                <span className={styles.factLabel}>{fact.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <EngineeringExplorer content={explorer} />
      </Container>
    </section>
  );
}
