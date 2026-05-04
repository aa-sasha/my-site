import { motion } from "motion/react";
import { EASE_OUT_EXPO } from "../lib/easing";

/**
 * Section eyebrow heading that fades + slides in once it enters view.
 * Used in Projects / Experience / Contacts sections.
 */
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h3
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
      className="text-sm text-primary font-bold mb-8 tracking-widest uppercase font-mono"
    >
      {children}
    </motion.h3>
  );
}
