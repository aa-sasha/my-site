import { useParams, Link, Navigate } from "react-router-dom";
import { Fragment, type ReactNode } from "react";
import { motion } from "motion/react";
import { projects } from "../data/projects";

function renderRichParagraph(text: string, key: number): ReactNode {
  if (text.startsWith("**") && text.endsWith("**") && text.indexOf("**", 2) === text.length - 2) {
    return (
      <h3 key={key} className="text-ink font-bold mt-4">
        {text.slice(2, -2)}
      </h3>
    );
  }

  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p key={key}>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <span key={i} className="text-ink font-bold">
              {part.slice(2, -2)}
            </span>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </p>
  );
}

export function CaseStudy() {
  const { slug } = useParams();
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const nextProject = projects[currentIndex + 1] || projects[0];

  return (
    <div className="min-h-screen pb-24 font-mono text-ink/90">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-2xl border-b border-black/10">
        <div className="max-w-[800px] mx-auto px-6 py-4 flex justify-between items-center text-xs uppercase tracking-widest font-semibold">
          <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors group">
            <span className="group-hover:-translate-x-1 transition-transform">↤</span> Back
          </Link>
          <div className="flex items-center gap-6">
            <a href={`${import.meta.env.BASE_URL}cv.pdf`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Download CV</a>
            <a href="mailto:sashanikitindesigner@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors group">
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
            <h1 className="text-4xl md:text-6xl font-black text-ink uppercase tracking-tighter leading-tight font-sans">
              {project.shortTitle}
            </h1>
            <p className="text-xl text-ink/70 leading-relaxed max-w-2xl font-mono">
              {project.description}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-black/10 text-sm font-mono"
          >
            <div>
              <div className="text-ink/40 uppercase tracking-widest text-[10px] mb-2 font-bold">Category</div>
              <div className="font-bold text-ink">{project.category}</div>
            </div>
            <div>
              <div className="text-ink/40 uppercase tracking-widest text-[10px] mb-2 font-bold">Role</div>
              <div className="font-bold text-ink">{project.role}</div>
            </div>
            <div>
              <div className="text-ink/40 uppercase tracking-widest text-[10px] mb-2 font-bold">Platform</div>
              <div className="font-bold text-ink">{project.platform}</div>
            </div>
            <div>
              <div className="text-ink/40 uppercase tracking-widest text-[10px] mb-2 font-bold">Period</div>
              <div className="font-bold text-ink">{project.period}</div>
            </div>
          </motion.div>
        </section>

        {/* Context */}
        {project.context && project.context.length > 0 && (
          <section className="flex flex-col md:flex-row gap-8 font-mono">
            <h2 className="md:w-1/3 shrink-0 text-sm uppercase tracking-widest text-primary font-bold sticky top-24 h-fit">Context</h2>
            <div className="md:w-2/3 flex flex-col gap-6 text-ink/80 leading-relaxed">
              {project.context.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </section>
        )}

        {/* Custom Sections */}
        {project.sections.map((section, idx) => (
          <section key={idx} className="flex flex-col md:flex-row gap-8 font-mono">
            <h2 className="md:w-1/3 shrink-0 text-sm uppercase tracking-widest text-primary font-bold sticky top-24 h-fit">{section.title}</h2>
            <div className="md:w-2/3 flex flex-col gap-6 text-ink/80 leading-relaxed">
              {section.content.map((p, i) => renderRichParagraph(p, i))}
            </div>
          </section>
        ))}

        {/* Design / Gallery Placeholder */}
        <section className="flex flex-col gap-8 font-mono">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold">Design & Interface</h2>
          <div className="w-full aspect-[16/9] bg-white rounded-2xl border border-black/10 shadow-[0_8px_30px_rgba(0,126,255,0.15)] flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,126,255,0.03)_50%)] bg-[length:100%_4px]"></div>
             <p className="text-ink/30 uppercase tracking-widest text-xs z-10 font-bold">Image Placeholder</p>
          </div>
        </section>

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <section className="flex flex-col md:flex-row gap-8 font-mono">
            <h2 className="md:w-1/3 shrink-0 text-sm uppercase tracking-widest text-primary font-bold">Results</h2>
            <ul className="md:w-2/3 flex flex-col gap-4 text-ink/80 leading-relaxed list-disc list-inside">
              {project.results.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </section>
        )}

        {/* Reflection */}
        {project.reflection && project.reflection.length > 0 && (
          <section className="flex flex-col md:flex-row gap-8 border-t border-black/10 pt-16 font-mono">
            <h2 className="md:w-1/3 shrink-0 text-sm uppercase tracking-widest text-primary font-bold">Reflection</h2>
            <div className="md:w-2/3 flex flex-col gap-6 text-ink/80 leading-relaxed italic">
              {project.reflection.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </section>
        )}

      </main>

      {/* Next Case Footer */}
      <footer className="mt-32 border-t border-black/10 bg-white/40 backdrop-blur-2xl">
        <Link 
          to={`/case/${nextProject.slug}`}
          className="block max-w-[800px] mx-auto px-6 py-24 group"
        >
          <div className="text-primary uppercase tracking-widest text-sm mb-4 font-bold font-mono">Next Case</div>
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-ink uppercase tracking-tighter font-sans">{nextProject.shortTitle}</h2>
              <p className="text-ink/70 mt-4 max-w-md font-mono">{nextProject.category}</p>
            </div>
            <div className="text-4xl text-ink/20 group-hover:text-primary group-hover:translate-x-4 transition-all">
              ↳
            </div>
          </div>
        </Link>
      </footer>

    </div>
  );
}
