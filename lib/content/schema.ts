import { z } from "zod";

export const iconNameSchema = z.enum([
  "arrow-down-right",
  "arrow-right",
  "arrow-up-right",
  "bike",
  "book-open",
  "chef-hat",
  "git-branch",
  "layers",
  "mail",
  "shield-check",
  "sprout",
]);

const sectionSchema = z.object({
  index: z.string().min(1),
  label: z.string().min(1),
  title: z.string().min(1),
  intro: z.string().min(1).optional(),
});

const siteSchema = z.object({
  meta: z.object({
    siteUrl: z.string().url(),
    title: z.string().min(1),
    description: z.string().min(1),
    themeColor: z.string().regex(/^#[0-9a-f]{6}$/i),
  }),
  identity: z.object({
    name: z.string().min(1),
    initials: z.string().min(1),
    role: z.string().min(1),
    location: z.string().min(1),
    email: z.string().email(),
  }),
  navigation: z.array(z.object({
    label: z.string().min(1),
    href: z.string().startsWith("#"),
  })).min(1),
  hero: z.object({
    title: z.object({
      before: z.string().min(1),
      accent: z.string().min(1),
      after: z.string().min(1),
    }),
    intro: z.object({
      before: z.string().min(1),
      emphasis: z.string().min(1),
      after: z.string().min(1),
    }),
    actions: z.array(z.object({
      label: z.string().min(1),
      href: z.string().min(1),
      icon: iconNameSchema,
      variant: z.enum(["primary", "secondary"]),
    })).min(1),
    facts: z.array(z.object({
      value: z.string().min(1),
      label: z.string().min(1),
    })).min(1),
  }),
  about: z.object({
    section: sectionSchema,
    lead: z.object({
      before: z.string().min(1),
      accent: z.string().min(1),
      after: z.string().min(1),
    }),
    body: z.string().min(1),
    interests: z.array(z.object({
      label: z.string().min(1),
      icon: iconNameSchema,
    })).min(1),
  }),
  contact: z.object({
    kicker: z.string().min(1),
    title: z.string().min(1),
    footerNote: z.string().min(1),
  }),
});

const approachSchema = z.object({
  explorer: z.object({
    title: z.string().min(1),
    code: z.string().min(1),
    ariaLabel: z.string().min(1),
    defaultLensId: z.string().min(1),
    lenses: z.array(z.object({
      id: z.string().min(1),
      label: z.string().min(1),
      kicker: z.string().min(1),
      title: z.string().min(1),
      copy: z.string().min(1),
      nodes: z.array(z.object({
        code: z.string().min(1),
        name: z.string().min(1),
        detail: z.string().min(1),
      })).min(1),
    })).min(1),
  }),
  principlesSection: z.object({
    section: sectionSchema,
    items: z.array(z.object({
      number: z.string().min(1),
      icon: iconNameSchema,
      title: z.string().min(1),
      copy: z.string().min(1),
    })).min(1),
  }),
});

const projectsSchema = z.object({
  section: sectionSchema,
  defaultProjectId: z.string().min(1),
  items: z.array(z.object({
    id: z.string().min(1),
    number: z.string().min(1),
    shortTitle: z.string().min(1),
    type: z.string().min(1),
    title: z.string().min(1),
    summary: z.string().min(1),
    details: z.array(z.object({
      label: z.string().min(1),
      copy: z.string().min(1),
    })).min(1),
    stack: z.array(z.string().min(1)).min(1),
  })).min(1),
});

const experienceSchema = z.object({
  section: sectionSchema,
  roles: z.array(z.object({
    start: z.string().min(1),
    end: z.string().min(1),
    role: z.string().min(1),
    company: z.string().min(1),
    copy: z.string().min(1),
  })).min(1),
  currentNotes: z.object({
    label: z.string().min(1),
    title: z.string().min(1),
    copy: z.string().min(1),
    topics: z.array(z.string().min(1)).min(1),
  }),
});

const toolboxSchema = z.object({
  section: sectionSchema,
  groups: z.array(z.object({
    title: z.string().min(1),
    items: z.array(z.string().min(1)).min(1),
  })).min(1),
});

const educationSchema = z.object({
  items: z.array(z.object({
    degree: z.string().min(1),
    school: z.string().min(1),
    period: z.string().min(1),
    href: z.string().url(),
  })).min(1),
});

export const portfolioContentSchema = z.object({
  site: siteSchema,
  approach: approachSchema,
  projects: projectsSchema,
  experience: experienceSchema,
  toolbox: toolboxSchema,
  education: educationSchema,
}).superRefine((content, context) => {
  const lensIds = new Set(content.approach.explorer.lenses.map((lens) => lens.id));
  if (!lensIds.has(content.approach.explorer.defaultLensId)) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["approach", "explorer", "defaultLensId"],
      message: "Default lens must reference an existing lens.",
    });
  }

  const projectIds = new Set(content.projects.items.map((project) => project.id));
  if (!projectIds.has(content.projects.defaultProjectId)) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["projects", "defaultProjectId"],
      message: "Default project must reference an existing project.",
    });
  }
});

export type IconName = z.infer<typeof iconNameSchema>;
export type PortfolioContent = z.infer<typeof portfolioContentSchema>;
export type SectionContent = z.infer<typeof sectionSchema>;
