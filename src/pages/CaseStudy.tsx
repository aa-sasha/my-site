import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export function CaseStudy() {
  const { slug } = useParams();
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const nextProject = projects[currentIndex + 1] || projects[0];

  return (
    <div className="min-h-screen pb-24 font-mono text-white/90">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[800px] mx-auto px-6 py-4 flex justify-between items-center text-xs uppercase tracking-widest">
          <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors group">
            <span className="group-hover:-translate-x-1 transition-transform">↤</span> Back
          </Link>
          <div className="flex items-center gap-6">
            <a href={`${import.meta.env.BASE_URL}cv.pdf`} target="_blank" className="hover:text-white transition-colors">Download CV</a>
            <a href="mailto:sashanikitindesigner@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors group">
              Contact <span className="group-hover:translate-x-1 transition-transform">↦</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-6 pt-24 flex flex-col gap-24">
        
        {/* Hero Section */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
              {project.shortTitle}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20 text-sm"
          >
            <div>
              <div className="text-white/40 uppercase tracking-widest text-[10px] mb-2">Category</div>
              <div className="font-bold">{project.category}</div>
            </div>
            <div>
              <div className="text-white/40 uppercase tracking-widest text-[10px] mb-2">Role</div>
              <div className="font-bold">{project.role}</div>
            </div>
            <div>
              <div className="text-white/40 uppercase tracking-widest text-[10px] mb-2">Platform</div>
              <div className="font-bold">{project.platform}</div>
            </div>
            <div>
              <div className="text-white/40 uppercase tracking-widest text-[10px] mb-2">Period</div>
              <div className="font-bold">{project.period}</div>
            </div>
          </motion.div>
        </section>

        {/* Context */}
        {project.context && project.context.length > 0 && (
          <section className="flex flex-col md:flex-row gap-8">
            <h2 className="md:w-1/3 shrink-0 text-sm uppercase tracking-widest text-white/70 sticky top-24 h-fit">Context</h2>
            <div className="md:w-2/3 flex flex-col gap-6 text-white/70 leading-relaxed">
              {project.context.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </section>
        )}

        {/* Custom Sections */}
        {project.sections.map((section, idx) => (
          <section key={idx} className="flex flex-col md:flex-row gap-8">
            <h2 className="md:w-1/3 shrink-0 text-sm uppercase tracking-widest text-white/70 sticky top-24 h-fit">{section.title}</h2>
            <div className="md:w-2/3 flex flex-col gap-6 text-white/70 leading-relaxed">
              {section.content.map((p, i) => {
                // If the paragraph starts with bold text "**", render it slightly differently
                if (p.startsWith("**") && p.includes("** ")) {
                  const parts = p.split("**");
                  return (
                    <p key={i}>
                      <span className="text-white font-bold">{parts[1]}</span>
                      {parts.slice(2).join("**")}
                    </p>
                  );
                }
                if (p.startsWith("**") && p.endsWith("**")) {
                   return <h3 key={i} className="text-white font-bold mt-4">{p.replace(/\*\*/g, '')}</h3>
                }
                return <p key={i}>{p}</p>;
              })}
            </div>
          </section>
        ))}

        {/* Design / Gallery Placeholder */}
        <section className="flex flex-col gap-8">
          <h2 className="text-sm uppercase tracking-widest text-white/70">Design & Interface</h2>
          <div className="w-full aspect-[16/9] bg-[#111] rounded-2xl border border-white/20 shadow-2xl glow-nokia flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px]"></div>
             <p className="text-white/40 uppercase tracking-widest text-xs z-10">Image Placeholder</p>
          </div>
        </section>

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <section className="flex flex-col md:flex-row gap-8">
            <h2 className="md:w-1/3 shrink-0 text-sm uppercase tracking-widest text-white/70">Results</h2>
            <ul className="md:w-2/3 flex flex-col gap-4 text-white/70 leading-relaxed list-disc list-inside">
              {project.results.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </section>
        )}

        {/* Reflection */}
        {project.reflection && project.reflection.length > 0 && (
          <section className="flex flex-col md:flex-row gap-8 border-t border-white/20 pt-16">
            <h2 className="md:w-1/3 shrink-0 text-sm uppercase tracking-widest text-white/70">Reflection</h2>
            <div className="md:w-2/3 flex flex-col gap-6 text-white/70 leading-relaxed italic">
              {project.reflection.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </section>
        )}

      </main>

      {/* Next Case Footer */}
      <footer className="mt-32 border-t border-white/20 bg-[#030712]">
        <Link 
          to={`/case/${nextProject.slug}`}
          className="block max-w-[800px] mx-auto px-6 py-24 group"
        >
          <div className="text-white/40 uppercase tracking-widest text-sm mb-4">Next Case</div>
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">{nextProject.shortTitle}</h2>
              <p className="text-white/70 mt-4 max-w-md">{nextProject.category}</p>
            </div>
            <div className="text-4xl text-white/20 group-hover:text-white group-hover:translate-x-4 transition-all">
              ↳
            </div>
          </div>
        </Link>
      </footer>

    </div>
  );
}
