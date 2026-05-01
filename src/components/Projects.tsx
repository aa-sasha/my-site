import { motion, useScroll, useTransform, MotionValue, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";

import { projects, type ProjectData } from "../data/projects";
import { Link } from "react-router-dom";

interface CardProps {
  project: ProjectData;
  index: number;
  progress: MotionValue<number>;
  total: number;
}

const Card = ({ project, index, progress, total }: CardProps) => {
  const isLast = index === total - 1;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking for custom cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for the cursor
  const springConfig = { damping: 30, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Scale: gradual shrink over full remaining scroll
  const start = index / total;
  const targetScale = 1 - ((total - index) * 0.025);
  const scale = useTransform(progress, [start, 1], [1, isLast ? 1 : targetScale]);

  const bgColor = "bg-white/60 backdrop-blur-2xl";

  const MotionLink = motion(Link);

  return (
    <MotionLink 
      to={`/case/${project.slug}`}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${isLast ? "relative" : "sticky"} flex flex-col gap-6 pt-10 pb-12 px-8 w-full origin-top rounded-[var(--radius-2xl)] border border-white shadow-[0_12px_40px_rgba(0,126,255,0.1),_inset_0_1px_0_rgba(255,255,255,1)] text-ink ${bgColor} cursor-none overflow-hidden group no-underline`}
      style={{ 
        top: isLast ? undefined : `calc(2rem + ${index * 8}px)`, 
        zIndex: index + 10,
        scale: isLast ? 1 : scale,
      }}
    >
      {/* Custom Cursor */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="pointer-events-none absolute z-50 flex items-center justify-center bg-primary text-white font-black text-[10px] uppercase tracking-widest px-4 py-2 rounded-full shadow-lg whitespace-nowrap"
            style={{
              left: cursorX,
              top: cursorY,
              x: "-50%",
              y: "-50%",
            }}
          >
            Open Case ↦
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-2 pointer-events-none min-h-[110px]">
        <div className="text-sm text-primary/80 font-mono tracking-widest font-bold">{project.id}</div>
        <h4 className="text-3xl font-black tracking-tighter uppercase line-clamp-2">{project.shortTitle}</h4>
        <div className="text-lg text-ink/60 font-mono font-medium">{project.category}</div>
      </div>

      <div className="rounded-2xl overflow-hidden border-2 border-white/80 bg-black/5 mt-4 relative shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] p-6 pointer-events-none">
        {project.coverImage ? (
          <img 
            src={`${import.meta.env.BASE_URL}${project.coverImage.replace(/^\//, '')}`}
            alt={project.shortTitle} 
            className="w-full h-auto rounded-xl transition-transform duration-[1.5s] ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div className="aspect-[16/9] flex items-center justify-center">
            <div className="text-ink/20 uppercase tracking-widest font-bold text-xl">Image Placeholder</div>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-col gap-6 pointer-events-none min-h-[60px]">
        <p className="text-ink/80 leading-relaxed text-sm font-mono line-clamp-3">{project.description}</p>
      </div>
    </MotionLink>
  );
};

export function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" className="pt-12 scroll-mt-24" ref={containerRef}>
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-sm text-primary font-bold mb-8 tracking-widest uppercase font-mono"
      >
        Selected Projects
      </motion.h3>
      
      <div className="flex flex-col gap-24 relative pb-12">
        {projects.map((project, index) => (
          <Card 
            key={project.id} 
            project={project} 
            index={index} 
            progress={scrollYProgress} 
            total={projects.length} 
          />
        ))}
      </div>
    </section>
  );
}
