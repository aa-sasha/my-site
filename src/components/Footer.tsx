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
            href="mailto:hello@sasha-nikitin.su" 
            className="text-2xl md:text-4xl lg:text-5xl font-light hover:text-accent transition-colors inline-block"
          >
            hello@sasha-nikitin.su
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
        
        <div className="p-6 md:p-12 lg:p-20 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-muted text-xs font-bold tracking-[0.2em] uppercase mb-12">
              Updates
            </h3>
            <form className="flex border-b border-line pb-4 mb-12" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent w-full text-sm outline-none placeholder:text-muted"
              />
              <button type="submit" className="text-accent text-xs font-bold tracking-[0.2em] uppercase hover:text-white transition-colors">
                Subscribe
              </button>
            </form>
            
            <div className="flex gap-8">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-24 text-xs tracking-[0.2em] uppercase text-muted font-medium text-right">
            Designing for the next digital millennium.
          </div>
        </div>
      </div>
    </footer>
  );
}
