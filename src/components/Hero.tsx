import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end p-6 md:p-12 lg:p-20 border-b border-line relative overflow-hidden">
      {/* Background decoration removed */}

      <div className="relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-[1px] bg-accent"></div>
          <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase">Product Designer</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-[8vw] lg:text-[6vw] leading-[0.9] font-bold tracking-tighter mb-12 uppercase"
        >
          Hi there!<br />
          I'm Sasha Nikitin
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-muted font-light leading-tight max-w-2xl"
          >
            10 years in design — 8 in product and UX, with expertise in building social features, communication systems, and monetization mechanics.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8 md:items-end"
          >
            <div className="flex gap-12">
              <div>
                <div className="font-display text-5xl text-accent mb-1">10+</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-muted font-bold">Years Experience</div>
              </div>
              <div>
                <div className="font-display text-5xl text-white mb-1">50+</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-muted font-bold">Global Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 right-12 flex flex-col items-center gap-4">
        <span className="writing-mode-vertical text-[10px] tracking-[0.3em] uppercase text-muted">Scroll</span>
        <div className="w-[1px] h-12 bg-line relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
          />
        </div>
      </div>
    </section>
  );
}
