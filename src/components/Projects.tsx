import { motion } from "framer-motion";

import { projects } from "../data/projects";
import { Link } from "react-router-dom";

const Card = ({ project, index, total }: { project: any, index: number, total: number }) => {
  // Metallic gradients for the hardware feel
  const bgColor = "bg-gradient-to-br from-[#e0e5ec] to-[#f4f7f6]";

  return (
    <motion.article 
      className={`sticky flex flex-col gap-6 pt-10 pb-12 px-8 w-full origin-top rounded-[2rem] border border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.3),_inset_0_1px_0_rgba(255,255,255,0.8)] text-black ${bgColor}`}
      style={{ 
        top: `calc(2rem + ${index * 8}px)`, 
        zIndex: index + 10,
      }}
    >
      <div className="flex flex-col gap-2">
        <div className="text-sm text-gray-500 font-mono tracking-widest">{project.id}</div>
        <h4 className="text-3xl font-black tracking-tighter uppercase">{project.shortTitle}</h4>
        <div className="text-lg text-gray-600 font-mono">{project.category}</div>
      </div>

      <div className="rounded-2xl overflow-hidden border-2 border-white/80 bg-[#111] mt-4 relative group aspect-[16/9] flex items-center justify-center">
        {project.coverImage ? (
          <img 
            src={`${import.meta.env.BASE_URL}${project.coverImage.replace(/^\//, '')}`}
            alt={project.shortTitle} 
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          />
        ) : (
          <div className="text-white/20 uppercase tracking-widest font-bold text-xl">Image Placeholder</div>
        )}
      </div>

      <div className="mt-4 flex flex-col gap-6">
        <p className="text-gray-700 leading-relaxed text-sm font-mono">{project.description}</p>
        <Link 
          to={`/case/${project.slug}`}
          className="inline-flex w-max items-center justify-center bg-black text-white px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#0050ff] hover:scale-105 active:scale-95 transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.39)]"
        >
          Open Case ↦
        </Link>
      </div>
    </motion.article>
  );
};

export function Projects() {
  return (
    <section id="projects" className="pt-12 scroll-mt-24">
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-sm text-muted mb-8 tracking-widest uppercase"
      >
        Selected Projects
      </motion.h3>
      
      <div className="flex flex-col gap-24 relative pb-[50vh]">
        {projects.map((project, index) => (
          <Card 
            key={project.id} 
            project={project} 
            index={index} 
            total={projects.length} 
          />
        ))}
      </div>
    </section>
  );
}
