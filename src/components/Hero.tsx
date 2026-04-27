import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-8 pb-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter leading-tight uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
      >
        Hi there!<br />
        I'm Sasha Nikitin
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl font-mono tracking-wide"
      >
        10 years in design — 8 in product and UX, with expertise in building social features, communication systems, and monetization mechanics.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex gap-12 mt-12 pt-12 border-t border-line"
      >
        <div>
          <div className="text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">10+</div>
          <div className="text-sm text-white/60 mt-2 font-mono uppercase tracking-widest">Years Experience</div>
        </div>
        <div>
          <div className="text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">50+</div>
          <div className="text-sm text-white/60 mt-2 font-mono uppercase tracking-widest">Global Projects</div>
        </div>
      </motion.div>
    </section>
  );
}
