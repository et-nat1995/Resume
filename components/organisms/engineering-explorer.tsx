import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/molecules/tabs";
import type { PortfolioContent } from "@/lib/content";
import styles from "./engineering-explorer.module.css";

type Explorer = PortfolioContent["approach"]["explorer"];

export function EngineeringExplorer({ content }: { content: Explorer }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <div className={styles.header}>
          <p className={styles.headerTitle}>
            <span className={styles.liveDot} aria-hidden="true" /> {content.title}
          </p>
          <span className={styles.code}>{content.code}</span>
        </div>
        <Tabs defaultValue={content.defaultLensId} className={styles.tabs}>
          <TabsList className={styles.list} aria-label={content.ariaLabel}>
            {content.lenses.map((lens) => (
              <TabsTrigger key={lens.id} value={lens.id} className={styles.trigger}>
                {lens.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {content.lenses.map((lens) => (
            <TabsContent key={lens.id} value={lens.id} className={styles.panel}>
              <p className={styles.kicker}>{lens.kicker}</p>
              <h2 className={styles.title}>{lens.title}</h2>
              <p className={styles.copy}>{lens.copy}</p>
              <div className={styles.path} aria-label={`${lens.label} process`}>
                {lens.nodes.map((node) => (
                  <div className={styles.node} key={node.name}>
                    <span className={styles.nodeDot}>{node.code}</span>
                    <span className={styles.nodeName}>{node.name}</span>
                    <span className={styles.nodeDetail}>{node.detail}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
