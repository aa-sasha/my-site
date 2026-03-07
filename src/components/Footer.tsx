import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacts" className="flex flex-col lg:flex-row border-b border-line min-h-[60vh]">
      {/* Left Column */}
      <div className="flex-1 p-6 md:p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-line flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-[12vw] lg:text-[8vw] leading-[0.85] uppercase tracking-tight mb-2">
            Let's Build
          </h2>
          <h2 className="font-display text-[12vw] lg:text-[8vw] leading-[0.85] uppercase tracking-tight text-accent mb-12">
            Together.
          </h2>
          <a
            href="mailto:sashanikitindesigner@gmail.com"
            className="text-2xl md:text-4xl lg:text-5xl font-light hover:text-accent transition-colors inline-block"
          >
            sashanikitindesigner@gmail.com
          </a>
        </motion.div>

        <div className="mt-24 text-xs tracking-[0.2em] uppercase text-muted font-medium">
          SASHA NIKITIN © {new Date().getFullYear()}
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/3 flex flex-col">
        <div className="flex-1 p-6 md:p-12 lg:p-20 border-b border-line flex flex-col justify-center">
          <h3 className="text-muted text-xs font-bold tracking-[0.2em] uppercase mb-12">
            Navigation
          </h3>
          <nav className="flex flex-col gap-4 font-display text-4xl uppercase tracking-wide">
            <a href="#projects" className="hover:text-accent transition-colors flex items-center gap-2 group">
              Projects
              <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
            </a>
            <a href="#experience" className="hover:text-accent transition-colors flex items-center gap-2 group">
              Work Experience
              <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
            </a>
            <a href="#contacts" className="hover:text-accent transition-colors flex items-center gap-2 group">
              Contacts
              <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
            </a>
          </nav>
        </div>


      </div>
    </footer>
  );
}
