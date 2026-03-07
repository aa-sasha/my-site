import { motion } from "motion/react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-bg/50 backdrop-blur-xl border-b border-line">
      <a href="#top" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
        <span className="font-sans font-bold tracking-tight text-xl uppercase">SASHA NIKITIN</span>
        <div className="w-[1px] h-4 bg-line hidden sm:block"></div>
        <span className="text-[10px] text-muted uppercase tracking-[0.3em] hidden sm:inline-block">Product Designer</span>
      </a>

      <div className="flex items-center gap-12">
        <div className="flex items-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-muted">
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#experience" className="hover:text-accent transition-colors">Work Experience</a>
          <a href="#contacts" className="hover:text-accent transition-colors">Contacts</a>
        </div>
      </div>
    </nav>
  );
}
