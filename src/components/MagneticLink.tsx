import { useRef } from "react";
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "motion/react";

type MagneticLinkProps = Omit<HTMLMotionProps<"a">, "onMouseMove" | "onMouseLeave"> & {
  /** How far the element drifts toward the cursor (0 = none, 1 = follows). Default 0.25. */
  strength?: number;
};

/**
 * Anchor that gently pulls toward the cursor while hovered.
 * Uses spring physics for organic motion. Honors prefers-reduced-motion via MotionConfig.
 */
export function MagneticLink({ children, strength = 0.25, ...rest }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
