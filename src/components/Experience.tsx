import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      company: "Company Name",
      role: "Senior Product Designer",
      period: "2020 — Present",
      description: "Led the design of core product features, improving user engagement by 40%. Collaborated closely with engineering and product teams to deliver high-quality solutions."
    },
    {
      company: "Previous Agency",
      role: "UX/UI Designer",
      period: "2016 — 2020",
      description: "Designed responsive web and mobile applications for international clients. Conducted user research and usability testing to iterate on designs."
    },
    {
      company: "Start of Career",
      role: "Graphic Designer",
      period: "2014 — 2016",
      description: "Created visual identities, marketing materials, and digital assets. Transitioned into digital product design."
    }
  ];

  return (
    <section id="experience" className="pt-12 pb-24 scroll-mt-24 border-t border-line">
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-sm text-white/60 mb-12 tracking-widest uppercase font-mono"
      >
        Work Experience
      </motion.h3>
      
      <div className="flex flex-col gap-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row gap-4 md:gap-12"
          >
            <div className="md:w-1/3 shrink-0">
              <div className="text-sm text-white/70 mb-1 font-mono">{exp.period}</div>
              <h4 className="text-xl font-black text-white uppercase tracking-wide">{exp.company}</h4>
              <div className="text-sm text-white/80 font-mono mt-1">{exp.role}</div>
            </div>
            <div className="md:w-2/3">
              <p className="text-white/70 leading-relaxed text-sm font-mono">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contacts section appended at the bottom */}
      <motion.div 
        id="contacts" 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-24 pt-12 border-t border-line scroll-mt-24"
      >
        <h3 className="text-sm text-white/60 mb-8 tracking-widest uppercase font-mono">Contacts</h3>
        <div className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
          Let's create something<br />amazing together.
        </div>
        <a 
          href="mailto:sashanikitindesigner@gmail.com" 
          className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:shadow-[0_0_30px_rgba(255,255,255,1)] hover:scale-105 active:scale-95 transition-all"
        >
          sashanikitindesigner@gmail.com
        </a>
      </motion.div>
    </section>
  );
}
