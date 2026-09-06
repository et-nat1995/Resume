import { Container } from "@/components/atoms/container";
import { Icon } from "@/components/atoms/icon";
import type { PortfolioContent } from "@/lib/content";
import styles from "./site-header.module.css";

type SiteHeaderProps = Pick<PortfolioContent["site"], "identity" | "navigation">;

export function SiteHeader({ identity, navigation }: SiteHeaderProps) {
  return (
    <header className={styles.wrap}>
      <Container>
        <nav className={styles.nav} aria-label="Primary navigation">
          <a className={styles.brand} href="#top" aria-label={`${identity.name}, home`}>
            <span className={styles.brandMark} aria-hidden="true">{identity.initials}</span>
            <span className={styles.brandName}>{identity.name}</span>
          </a>
          <div className={styles.links}>
            {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          </div>
          <a className={styles.contact} href={`mailto:${identity.email}`}>
            Contact <Icon name="arrow-up-right" />
          </a>
        </nav>
      </Container>
    </header>
  );
}
