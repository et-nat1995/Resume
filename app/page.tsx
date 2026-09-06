import { PortfolioPage } from "@/components/templates/portfolio-page";
import { portfolioContent } from "@/lib/content";

export default function Home() {
  return <PortfolioPage content={portfolioContent} />;
}
