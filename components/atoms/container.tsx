import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import styles from "./atoms.module.css";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(styles.container, className)} {...props} />;
}
