import { useState, useEffect } from "react";
import { motion } from "motion/react";

const SOCIAL_LINKS: Array<{ label: string; href: string }> = [
  // TODO: paste real profile URLs
  { label: "LinkedIn", href: "" },
  { label: "Telegram", href: "" },
  { label: "Instagram", href: "" },
  { label: "Mail", href: "mailto:sashanikitindesigner@gmail.com" },
];

export function Sidebar() {
  const [timeData, setTimeData] = useState({ time: "", status: "", indicator: "" });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Yerevan time
      const timeStr = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Yerevan",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);
      
      const hourStr = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Yerevan",
        hour: "numeric",
        hour12: false,
      }).format(now);
      
      const hour = parseInt(hourStr, 10);
      let status = "";
      let indicator = "";
      
      if (hour >= 9 && hour < 19) {
        status = "Available for contact";
        indicator = "bg-green-500";
      } else if (hour >= 19 && hour < 23) {
        status = "Might miss messages, it's late";
        indicator = "bg-orange-400";
      } else {
        status = "I am currently sleeping";
        indicator = "bg-blue-400";
      }

      setTimeData({ time: `${timeStr} in Yerevan`, status, indicator });
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
      className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[350px] p-8 lg:p-12 flex flex-col justify-between border-r border-black/10 bg-white/40 backdrop-blur-2xl z-50 shadow-[4px_0_24px_rgba(0,126,255,0.05)]"
    >
      {/* Top Status */}
      <div className="flex flex-col gap-3 font-mono text-sm tracking-wide">
        <div className="text-ink font-bold">{timeData.time}</div>
        <div className="flex items-center gap-2 text-ink/60 text-xs uppercase tracking-widest font-semibold">
          <span className={`w-2 h-2 rounded-full ${timeData.indicator} shadow-[0_0_8px_currentColor]`} />
          {timeData.status}
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col gap-4 mt-8">
        <div>
          <p className="text-2xl font-black text-ink tracking-tight uppercase">Sasha Nikitin</p>
          <p className="text-primary mt-2 font-mono text-sm font-bold tracking-widest uppercase">Product Designer</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-12 mt-8">
        {/* Navigation */}
        <nav className="flex flex-col w-full border-t border-b border-black/10">
          <button onClick={() => scrollTo('projects')} className="text-left py-4 border-b border-black/5 text-ink/70 hover:text-primary transition-colors flex justify-between items-center group font-mono text-xs uppercase tracking-widest font-semibold">
            <span>Projects</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">→</span>
          </button>
          <button onClick={() => scrollTo('experience')} className="text-left py-4 border-b border-black/5 text-ink/70 hover:text-primary transition-colors flex justify-between items-center group font-mono text-xs uppercase tracking-widest font-semibold">
            <span>Work Experience</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">→</span>
          </button>
          <button onClick={() => scrollTo('contacts')} className="text-left py-4 text-ink/70 hover:text-primary transition-colors flex justify-between items-center group font-mono text-xs uppercase tracking-widest font-semibold">
            <span>Contacts</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">→</span>
          </button>
        </nav>

        {/* External Links */}
        <div className="flex flex-col w-full">
          <h3 className="font-mono text-[10px] text-ink/40 font-bold uppercase tracking-widest mb-4">Network</h3>
          <div className="grid grid-cols-2 gap-4">
            {SOCIAL_LINKS.filter((l) => l.href).map((l) => {
              const external = !l.href.startsWith("mailto:");
              return (
                <a
                  key={l.label}
                  href={l.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="text-ink/70 hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest font-semibold"
                >
                  {l.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* CV Button */}
      <div className="mt-auto pt-8">
        <a 
          href={`${import.meta.env.BASE_URL}cv.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center bg-primary text-white px-6 py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-[0_8px_20px_rgba(0,126,255,0.3),_inset_0_2px_4px_rgba(255,255,255,0.4)] hover:shadow-[0_12px_25px_rgba(0,126,255,0.5),_inset_0_2px_4px_rgba(255,255,255,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
        >
          Download CV
        </a>
      </div>
    </motion.aside>
  );
}
