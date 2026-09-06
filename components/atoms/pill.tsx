import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import styles from "./atoms.module.css";

export function Pill({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn(styles.pill, className)} {...props} />;
}
