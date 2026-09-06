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
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/lib/content";

const iconMap = {
  "arrow-down-right": ArrowDownRight,
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  bike: Bike,
  "book-open": BookOpen,
  "chef-hat": ChefHat,
  "git-branch": GitBranch,
  layers: Layers3,
  mail: Mail,
  "shield-check": ShieldCheck,
  sprout: Sprout,
} satisfies Record<IconName, React.ComponentType<LucideProps>>;

type IconProps = LucideProps & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  const IconComponent = iconMap[name];
  return <IconComponent aria-hidden="true" {...props} />;
}
