import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { PrimaryButton } from "./PrimaryButton";
import { EASE_OUT_EXPO } from "../lib/easing";

export function Experience() {
  const experiences = [
    {
      company: "my.games",
      role: "Senior Product Designer",
      period: "2022 — Present",
      description: "Designed social features and monetization mechanics for War Robots — a AAA mech shooter with 300M+ players and $1B+ in lifetime revenue. Evolved the design system and collaborated closely with game designers and engineers."
    },
    {
      company: "noomeera",
      role: "Product Designer",
      period: "2020 — 2022",
      description: "Executed end-to-end design of a social network and messenger for iOS/Android: from market research and prototyping to testing and Figma migration. Redesign of the social app grew the App Store rating from 3.6 to 4.5."
    },
    {
      company: "sibdev",
      role: "UX Designer",
      period: "2018 — 2020",
      description: "Designed web and mobile interfaces across 15+ projects: e-commerce, SaaS, and corporate tools. Delivered client projects and redesigned the studio website. Organized a series of IT meetups."
    }
  ];

  const teaching = [
    {
      company: "Institute of Business and Design (B&D)",
      role: "Lecturer in UX Design",
      period: "2022 — Present",
      description: "Develop curriculum, lecture on UX theory, supervise student projects. Education background: 5 years at a pedagogical university. This background shapes how I think about products — understanding how people learn, what builds habits, what creates motivation."
    }
  ];

  return (
    <section id="experience" className="pt-12 pb-24 scroll-mt-24">
      <div className="mb-4">
        <SectionHeading>Work Experience</SectionHeading>
      </div>
      
      <div className="flex flex-col gap-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: EASE_OUT_EXPO }}
            className="flex flex-col md:flex-row gap-4 md:gap-12"
          >
            <div className="md:w-1/3 shrink-0">
              <div className="text-sm text-ink/60 mb-1 font-mono font-medium">{exp.period}</div>
              <h4 className="text-xl font-black text-ink uppercase tracking-wide">{exp.company}</h4>
              <div className="text-sm text-primary/90 font-mono mt-1 font-bold">{exp.role}</div>
            </div>
            <div className="md:w-2/3">
              <p className="text-ink/70 leading-relaxed text-sm font-mono">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 mb-4">
        <SectionHeading>Teaching</SectionHeading>
      </div>

      <div className="flex flex-col gap-12">
        {teaching.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: EASE_OUT_EXPO }}
            className="flex flex-col md:flex-row gap-4 md:gap-12"
          >
            <div className="md:w-1/3 shrink-0">
              <div className="text-sm text-ink/60 mb-1 font-mono font-medium">{exp.period}</div>
              <h4 className="text-xl font-black text-ink uppercase tracking-wide">{exp.company}</h4>
              <div className="text-sm text-primary/90 font-mono mt-1 font-bold">{exp.role}</div>
            </div>
            <div className="md:w-2/3">
              <p className="text-ink/70 leading-relaxed text-sm font-mono">{exp.description}</p>
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
        transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        className="mt-24 pt-12 scroll-mt-24"
      >
        <SectionHeading>Contacts</SectionHeading>
        <div className="text-2xl md:text-5xl font-black text-ink uppercase tracking-tighter mb-8 leading-tight">
          Let's create something<br />amazing together.
        </div>
        <PrimaryButton href="mailto:sashanikitindesigner@gmail.com" strength={0.2}>
          sashanikitindesigner@gmail.com
          <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </PrimaryButton>
      </motion.div>
    </section>
  );
}
