import { Container } from "@/components/atoms/container";
import { Icon } from "@/components/atoms/icon";
import type { PortfolioContent } from "@/lib/content";
import styles from "./contact-section.module.css";

type ContactSectionProps = Pick<PortfolioContent["site"], "contact" | "identity">;

export function ContactSection({ contact, identity }: ContactSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="contact-title">
      <Container>
        <p className={styles.kicker}>{contact.kicker}</p>
        <h2 id="contact-title" className={styles.title}>{contact.title}</h2>
        <a className={styles.link} href={`mailto:${identity.email}`}>
          {identity.email} <Icon name="arrow-up-right" />
        </a>
        <footer className={styles.footer}>
          <p>{identity.role} · {identity.location}</p>
          <p className={styles.footerMark}>© {new Date().getFullYear()} {identity.name} · {contact.footerNote}</p>
        </footer>
      </Container>
    </section>
  );
}
