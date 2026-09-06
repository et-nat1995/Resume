import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bike,
  BookOpen,
  ChefHat,
  GitBranch,
  Layers3,
  Mail,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const lenses = [
  {
    id: "build",
    label: "Build",
    kicker: "From concept to product",
    title: "Composable by design",
    copy: "I shape frontend systems around clear contracts, so products can evolve without every team moving in lockstep.",
    nodes: [
      ["01", "Contract", "Stable inputs"],
      ["02", "Module", "Owned behavior"],
      ["03", "Consumer", "Flexible data"],
    ],
  },
  {
    id: "scale",
    label: "Scale",
    kicker: "Change without disruption",
    title: "Migrations with a safety net",
    copy: "I turn risky, all-at-once change into observable steps—protecting business-as-usual behavior while the system moves forward.",
    nodes: [
      ["V1", "Baseline", "Known behavior"],
      ["FF", "Control", "Granular rollout"],
      ["V2", "Evolve", "Measured cutover"],
    ],
  },
  {
    id: "enable",
    label: "Enable",
    kicker: "Make the path repeatable",
    title: "A solution others can use",
    copy: "The work is not finished when my code ships. I package the pattern into shared utilities, guidance, and examples that help other teams move faster.",
    nodes: [
      ["01", "Prove", "Working path"],
      ["02", "Package", "Shared tools"],
      ["03", "Adopt", "Team leverage"],
    ],
  },
];

const projects = [
  {
    id: "migration",
    number: "01",
    shortTitle: "Safer API evolution",
    type: "Enterprise systems",
    title: "Move the system without moving the risk.",
    summary:
      "Designed a controlled path for moving frontend API traffic between versions while preserving day-to-day customer behavior. Feature flags made the cutover granular, reversible, and observable.",
    details: [
      ["The tension", "Multiple teams needed to modernize shared integrations without turning a version change into a coordinated release event."],
      ["The approach", "Separated compatibility logic, introduced per-path controls, and backed the migration with focused testing and production-safe rollout steps."],
      ["The leverage", "Converted the successful implementation into shared utilities and a repeatable method that other engineers and teams could adopt."],
    ],
    stack: ["React", "TypeScript", "Feature flags", "Shared utilities", "E2E testing"],
  },
  {
    id: "module",
    number: "02",
    shortTitle: "Composable product module",
    type: "Frontend architecture",
    title: "One experience. Many product contexts.",
    summary:
      "Built a reusable micro-frontend module whose behavior is driven through deliberate prop contracts. Consuming teams keep ownership of their data while the experience remains consistent.",
    details: [
      ["The tension", "A useful product experience needed to appear in different applications, each with its own endpoint, data ownership, and release rhythm."],
      ["The approach", "Kept the module presentation-focused, defined a stable interface, and moved environment-specific data concerns to consuming teams."],
      ["The leverage", "Reduced duplicated UI logic and created a cleaner boundary between shared product behavior and team-owned integrations."],
    ],
    stack: ["Micro frontends", "React", "TypeScript", "Contract design", "Component systems"],
  },
  {
    id: "streaming",
    number: "03",
    shortTitle: "50K+ user platform rebuild",
    type: "Web + mobile product",
    title: "Rebuild the product, not just the interface.",
    summary:
      "Reworked a WordPress-based fitness streaming and scheduling service into a modern React experience, then designed and built its companion mobile application for iOS and Android.",
    details: [
      ["The tension", "A growing 50,000+ user service needed a more capable product foundation across streaming, scheduling, and mobile."],
      ["The approach", "Rebuilt the web experience in React, assessed product and UX feasibility, and carried the system into React Native with in-app purchases."],
      ["The leverage", "Created a consistent cross-platform experience and a foundation the team could continue evolving through new feature work."],
    ],
    stack: ["React", "React Native", "Redux Thunk", "Expo", "iOS + Android"],
  },
];

const toolGroups = [
  {
    title: "Core",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "HTML + CSS"],
  },
  {
    title: "Architecture",
    items: ["Micro frontends", "API integration", "State management", "Design systems", "Responsive UI"],
  },
  {
    title: "Delivery",
    items: ["Nx + pnpm", "Storybook", "Rollup + esbuild", "GitHub Actions", "Testing + E2E"],
  },
  {
    title: "Platform",
    items: ["Node.js", "Docker", "Kubernetes", "React Native", "Cross-browser QA"],
  },
];

const education = [
  {
    degree: "Full Stack Web Development Certificate",
    school: "University of Arizona · 2018",
    href: "https://bootcamp.ce.arizona.edu/",
  },
  {
    degree: "A.A.S., Computer Science",
    school: "Paradise Valley Community College · 2018",
    href: "https://www.paradisevalley.edu/",
  },
  {
    degree: "Computer Science studies · 40 credit hours",
    school: "Holon Institute of Technology · 2016–2018",
    href: "https://www.hit.ac.il/",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="site-shell">
      <div className="topbar-wrap frame">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Tamir Natanov, home">
            <span className="brand-mark" aria-hidden="true">TN</span>
            <span className="brand-name">Tamir Natanov</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#toolbox">Toolbox</a>
            <a href="#about">About</a>
          </div>
          <a className="nav-contact" href="mailto:et.natanov@gmail.com">
            Contact <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>
      </div>

      <div id="top" className="frame">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer III · Phoenix, Arizona</p>
            <h1 id="hero-title">
              Clear paths through <span className="accent-word">complex</span> systems.
            </h1>
            <p className="hero-intro">
              I&apos;m Tamir, a frontend-focused software engineer at <strong>American Express</strong>. I work across architecture, migration strategy, and developer enablement—building product systems that are safer to change and easier to reuse.
            </p>
            <div className="hero-actions">
              <a className="button-link" href="#work">
                Explore selected work <ArrowDownRight aria-hidden="true" />
              </a>
              <a className="text-link" href="mailto:et.natanov@gmail.com">
                <Mail aria-hidden="true" /> Start a conversation
              </a>
            </div>
            <ul className="hero-facts" aria-label="Career highlights">
              <li>
                <span className="fact-value">2019 → now</span>
                <span className="fact-label">Shipping web and mobile products</span>
              </li>
              <li>
                <span className="fact-value">50K+ users</span>
                <span className="fact-label">Largest public platform rebuild</span>
              </li>
              <li>
                <span className="fact-value">Build · Scale · Enable</span>
                <span className="fact-label">How I frame engineering impact</span>
              </li>
            </ul>
          </div>

          <div className="signal-wrap">
            <div className="signal-card">
              <div className="signal-head">
                <p className="signal-title"><span className="live-dot" aria-hidden="true" /> Engineering map</p>
                <span className="signal-code">TN / 03</span>
              </div>
              <Tabs defaultValue="build" className="lens-tabs">
                <TabsList className="lens-list" aria-label="Explore Tamir's engineering approach">
                  {lenses.map((lens) => (
                    <TabsTrigger key={lens.id} value={lens.id} className="lens-trigger">
                      {lens.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {lenses.map((lens) => (
                  <TabsContent key={lens.id} value={lens.id} className="lens-panel">
                    <p className="map-kicker">{lens.kicker}</p>
                    <h2 className="map-title">{lens.title}</h2>
                    <p className="map-copy">{lens.copy}</p>
                    <div className="system-path" aria-label={`${lens.label} process`}>
                      {lens.nodes.map(([code, name, detail]) => (
                        <div className="path-node" key={name}>
                          <span className="node-dot">{code}</span>
                          <span className="node-name">{name}</span>
                          <span className="node-detail">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>
      </div>

      <section id="work" className="section">
        <div className="frame">
          <div className="section-head">
            <p className="section-index">01 / Selected work</p>
            <div>
              <h2 className="section-title">Systems that create leverage.</h2>
              <p className="section-intro">
                The common thread is bigger than UI: define the boundary, make change safe, and leave behind a path other engineers can follow.
              </p>
            </div>
          </div>

          <Tabs defaultValue="migration" orientation="vertical" className="work-tabs">
            <TabsList className="work-list" aria-label="Selected projects">
              {projects.map((project) => (
                <TabsTrigger key={project.id} value={project.id} className="work-trigger">
                  <span className="trigger-index">{project.number}</span>
                  <span className="trigger-copy">
                    <span className="trigger-title">{project.shortTitle}</span>
                    <span className="trigger-type">{project.type}</span>
                  </span>
                  <ArrowRight aria-hidden="true" />
                </TabsTrigger>
              ))}
            </TabsList>
            {projects.map((project) => (
              <TabsContent key={project.id} value={project.id} className="project-panel">
                <article className="project-card">
                  <div className="project-meta">
                    <span className="meta-pill">Case {project.number}</span>
                    <span className="meta-pill">{project.type}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <div className="project-breakdown">
                    {project.details.map(([label, copy]) => (
                      <div className="breakdown-cell" key={label}>
                        <p className="breakdown-label">{label}</p>
                        <p className="breakdown-copy">{copy}</p>
                      </div>
                    ))}
                  </div>
                  <div className="stack-line" aria-label="Technology and methods">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="section" aria-labelledby="principles-title">
        <div className="frame">
          <div className="section-head">
            <p className="section-index">02 / How I engineer</p>
            <div>
              <h2 id="principles-title" className="section-title">The habits behind the output.</h2>
            </div>
          </div>
          <div className="principles-grid">
            <article className="principle">
              <span className="principle-number">01</span>
              <div className="principle-icon"><ShieldCheck aria-hidden="true" /></div>
              <h3>Make change reversible</h3>
              <p>Feature flags, compatibility layers, and observable steps turn a high-risk release into a series of controlled decisions.</p>
            </article>
            <article className="principle">
              <span className="principle-number">02</span>
              <div className="principle-icon"><Layers3 aria-hidden="true" /></div>
              <h3>Design the boundary first</h3>
              <p>Clear ownership and deliberate contracts let shared modules stay reusable without hiding product-specific complexity.</p>
            </article>
            <article className="principle">
              <span className="principle-number">03</span>
              <div className="principle-icon"><GitBranch aria-hidden="true" /></div>
              <h3>Build the paved road</h3>
              <p>A good solution becomes better when it is packaged, explained, and easy for another engineer to adopt confidently.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="frame">
          <div className="section-head">
            <p className="section-index">03 / Experience</p>
            <div>
              <h2 className="section-title">From product execution to system direction.</h2>
              <p className="section-intro">
                My scope has grown from owning complete customer experiences to shaping the technical paths that help teams deliver them safely.
              </p>
            </div>
          </div>
          <div className="experience-layout">
            <div className="timeline">
              <article className="timeline-item">
                <span className="timeline-date">JAN 2022<br />→ PRESENT</span>
                <div>
                  <h3 className="timeline-role">Software Engineer III</h3>
                  <p className="timeline-company">American Express</p>
                  <p className="timeline-copy">
                    Frontend architecture, product delivery, API modernization, reusable modules, and developer enablement in a large cross-functional environment.
                  </p>
                </div>
              </article>
              <article className="timeline-item">
                <span className="timeline-date">FEB 2019<br />→ JAN 2022</span>
                <div>
                  <h3 className="timeline-role">Front-end Developer</h3>
                  <p className="timeline-company">GymnasticBodies by GymFit.tv</p>
                  <p className="timeline-copy">
                    Rebuilt a 50,000+ user fitness streaming and scheduling platform in React, delivered web experiences from concept through deployment, and built a companion React Native app with in-app purchases.
                  </p>
                </div>
              </article>
            </div>

            <aside className="now-card" aria-labelledby="now-title">
              <p className="now-label">Current field notes</p>
              <h3 id="now-title" className="now-title">Making engineering context usable.</h3>
              <p className="now-copy">
                I&apos;m exploring better ways to connect product intent, code evidence, and agent-assisted workflows—especially across complex frontend ecosystems.
              </p>
              <ul className="now-list">
                <li>Living product docs</li>
                <li>Local LLMs</li>
                <li>Agent workflows</li>
                <li>Developer tools</li>
                <li>System recovery</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section id="toolbox" className="section">
        <div className="frame">
          <div className="section-head">
            <p className="section-index">04 / Toolbox</p>
            <div>
              <h2 className="section-title">Tools follow the system.</h2>
              <p className="section-intro">
                I&apos;m strongest in the modern React ecosystem, with enough platform depth to carry an idea through architecture, delivery, and production.
              </p>
            </div>
          </div>
          <div className="toolbox-grid">
            {toolGroups.map((group) => (
              <article className="tool-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="frame">
          <div className="section-head">
            <p className="section-index">05 / About</p>
            <div>
              <h2 className="section-title">Curiosity is part of the job.</h2>
            </div>
          </div>
          <div className="about-grid">
            <div>
              <p className="about-lead">
                I like the point where a messy problem becomes a <span>clear model</span>—then a useful product.
              </p>
              <p className="about-copy">
                I&apos;m a Phoenix-based software engineer with a creative design sense and a practical bias toward shipping. Away from the keyboard, I spend time outdoors, garden through the Arizona seasons, bike when the weather cooperates, cook, and keep up with science fiction, strategy games, and the latest shifts in frontend technology.
              </p>
              <div className="interest-list" aria-label="Interests">
                <span className="interest"><Sprout aria-hidden="true" /> Gardening</span>
                <span className="interest"><Bike aria-hidden="true" /> Biking</span>
                <span className="interest"><ChefHat aria-hidden="true" /> Cooking</span>
                <span className="interest"><BookOpen aria-hidden="true" /> Sci-fi + strategy</span>
              </div>
            </div>

            <div className="education" aria-label="Education">
              {education.map((item) => (
                <a className="education-item" href={item.href} target="_blank" rel="noreferrer" key={item.degree}>
                  <span className="education-degree">
                    {item.degree} <ArrowUpRight aria-hidden="true" />
                  </span>
                  <span className="education-school">{item.school}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" aria-labelledby="contact-title">
        <div className="frame">
          <p className="contact-kicker">Have a system worth untangling?</p>
          <h2 id="contact-title" className="contact-title">Let&apos;s make the path clear.</h2>
          <a className="contact-link" href="mailto:et.natanov@gmail.com">
            et.natanov@gmail.com <ArrowUpRight aria-hidden="true" />
          </a>
          <footer className="footer">
            <p>Software Engineer III · Phoenix, Arizona</p>
            <p className="footer-mark">© {new Date().getFullYear()} Tamir Natanov · Built with intention.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
