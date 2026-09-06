import { AboutSection } from "@/components/organisms/about-section";
import { ContactSection } from "@/components/organisms/contact-section";
import { ExperienceSection } from "@/components/organisms/experience-section";
import { HeroSection } from "@/components/organisms/hero-section";
import { PrinciplesSection } from "@/components/organisms/principles-section";
import { SiteHeader } from "@/components/organisms/site-header";
import { ToolboxSection } from "@/components/organisms/toolbox-section";
import { WorkSection } from "@/components/organisms/work-section";
import type { PortfolioContent } from "@/lib/content";

export function PortfolioPage({ content }: { content: PortfolioContent }) {
  return (
    <main id="main-content">
      <SiteHeader identity={content.site.identity} navigation={content.site.navigation} />
      <HeroSection site={content.site} explorer={content.approach.explorer} />
      <WorkSection content={content.projects} />
      <PrinciplesSection content={content.approach.principlesSection} />
      <ExperienceSection content={content.experience} />
      <ToolboxSection content={content.toolbox} />
      <AboutSection content={content.site.about} education={content.education} />
      <ContactSection contact={content.site.contact} identity={content.site.identity} />
    </main>
  );
}
