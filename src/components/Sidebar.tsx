import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Sidebar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
          now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.aside 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[350px] p-8 lg:p-12 flex flex-col justify-between border-r border-line bg-bg/40 backdrop-blur-xl z-50"
    >
      {/* Top Status Bar (Phone style) */}
      <div className="flex justify-between items-center w-full mb-8 font-mono text-[11px] text-white/90 tracking-widest">
        {/* Signal Bars */}
        <div className="flex items-end gap-[2px] h-3">
          <div className="w-[3px] h-1.5 bg-white"></div>
          <div className="w-[3px] h-2 bg-white"></div>
          <div className="w-[3px] h-2.5 bg-white"></div>
          <div className="w-[3px] h-3 bg-white/30"></div>
        </div>
        
        {/* Time */}
        <div className="font-bold">{time}</div>
        
        {/* Battery */}
        <div className="flex items-center">
          <div className="w-5 h-2.5 border border-white p-[1px] rounded-[2px] flex">
            <div className="w-[80%] h-full bg-white"></div>
          </div>
          <div className="w-[2px] h-1.5 bg-white rounded-r-sm"></div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg border-2 border-white/80 glow-nokia relative group">
            <img 
              src={`${import.meta.env.BASE_URL}photo_2026.jpg`}
              alt="Sasha Nikitin" 
              className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
            />
            {/* CRT Overlay on Avatar */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]"></div>
          </div>
        </div>
        
        <div>
          <h1 className="text-xl font-bold">Sasha Nikitin</h1>
          <p className="text-white/60 mt-1 font-mono text-sm">Product Designer</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-12 mt-8">
        {/* Navigation */}
        <nav className="flex flex-col w-full border-t border-b border-white/20">
          <button onClick={() => scrollTo('projects')} className="text-left py-4 border-b border-white/10 hover:text-white transition-colors flex justify-between items-center group font-mono text-xs uppercase tracking-widest">
            <span>Projects</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </button>
          <button onClick={() => scrollTo('experience')} className="text-left py-4 border-b border-white/10 hover:text-white transition-colors flex justify-between items-center group font-mono text-xs uppercase tracking-widest">
            <span>Work Experience</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </button>
          <button onClick={() => scrollTo('contacts')} className="text-left py-4 hover:text-white transition-colors flex justify-between items-center group font-mono text-xs uppercase tracking-widest">
            <span>Contacts</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </button>
        </nav>

        {/* External Links */}
        <div className="flex flex-col w-full">
          <h3 className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-4">Network</h3>
          <div className="grid grid-cols-2 gap-4">
            <a href="#" className="hover:text-white transition-colors font-mono text-xs uppercase tracking-widest">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors font-mono text-xs uppercase tracking-widest">Telegram</a>
            <a href="#" className="hover:text-white transition-colors font-mono text-xs uppercase tracking-widest">Instagram</a>
            <a href="mailto:sashanikitindesigner@gmail.com" className="hover:text-white transition-colors font-mono text-xs uppercase tracking-widest">Mail</a>
          </div>
        </div>
      </div>

      {/* CV Button */}
      <div className="mt-auto pt-8">
        <a 
          href={`${import.meta.env.BASE_URL}cv.pdf`}
          target="_blank"
          className="flex w-full items-center justify-center bg-white text-black px-6 py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:shadow-[0_0_25px_rgba(255,255,255,1)] hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          Download CV
        </a>
      </div>
    </motion.aside>
  );
}
