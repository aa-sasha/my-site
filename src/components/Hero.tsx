import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import { EASE_OUT_EXPO } from "../lib/easing";

/** Animated number that counts up from 0 to `to` once it scrolls into view. */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const value = useMotionValue(0);
  const display = useTransform(value, (v) => `${Math.floor(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    // Linear easing keeps the time between integers constant. With easeOut,
    // the curve crawls near the target (e.g. a long pause between 9 and 10).
    const controls = animate(value, to, {
      duration: 1.2,
      ease: "linear",
    });
    return () => controls.stop();
  }, [inView, to, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function Hero() {
  return (
    <section className="pt-8 pb-12">
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: EASE_OUT_EXPO }}
        className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter leading-tight uppercase text-ink"
      >
        Hi there!<br />
        I'm Sasha Nikitin
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.25, ease: EASE_OUT_EXPO }}
        className="text-xl lg:text-2xl text-ink/80 leading-relaxed max-w-2xl font-mono tracking-wide"
      >
        10 years in design — 8 in product and UX, with expertise in building social features, communication systems, and monetization mechanics.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO }}
        className="flex gap-12 mt-12 pt-12"
      >
        <div>
          <div className="text-5xl font-black text-ink tabular-nums">
            <CountUp to={10} suffix="+" />
          </div>
          <div className="text-sm text-ink/60 mt-2 font-mono uppercase tracking-widest font-bold">Years Experience</div>
        </div>
        <div>
          <div className="text-5xl font-black text-ink tabular-nums">
            <CountUp to={20} suffix="+" />
          </div>
          <div className="text-sm text-ink/60 mt-2 font-mono uppercase tracking-widest font-bold">Global Projects</div>
        </div>
      </motion.div>
    </section>
  );
}
