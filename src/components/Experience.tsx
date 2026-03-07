import { motion } from "motion/react";

const EXPERIENCES = [
  {
    role: "Senior Product Designer",
    company: "my.games",
    period: "2022 — Present",
    description: "Designed social features and monetization mechanics for War Robots — a AAA mech shooter with 300M+ players and $1B+ in lifetime revenue. Evolved the design system and collaborated closely with game designers and engineers."
  },
  {
    role: "Product Designer",
    company: "noomeera",
    period: "2020 — 2022",
    description: "Executed end-to-end design of a social network and messenger for iOS/Android: from market research and prototyping to testing and Figma migration. Redesign of the social app grew the App Store rating from 3.6 to 4.5."
  },
  {
    role: "UX Designer",
    company: "sibdev",
    period: "2018 — 2020",
    description: "Designed web and mobile interfaces across 15+ projects: e-commerce, SaaS, and corporate tools. Delivered client projects and redesigned the studio website. Organized a series of IT meetups."
  }
];

const TEACHING = [
  {
    role: "Lecturer in UX Design",
    company: "Institute of Business and Design (B&D)",
    period: "2022 — Present",
    description: "Develop curriculum, lecture on UX theory, supervise student projects. Education background: 5 years at a pedagogical university. This background shapes how I think about products — understanding how people learn, what builds habits, what creates motivation."
  }
];

export function Experience() {
  return (
    <section id="experience" className="border-b border-line p-6 md:p-12 lg:p-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Experience List */}
        <div className="lg:col-span-8">
          <h3 className="text-muted text-xs font-bold tracking-[0.2em] uppercase mb-12">
            work Experience
          </h3>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h4 className="text-white font-medium text-lg">{exp.role}</h4>
                  <span className="text-muted text-xs font-mono">{exp.period}</span>
                </div>
                <div className="text-accent text-sm font-medium tracking-wider uppercase mb-3">
                  {exp.company}
                </div>
                <p className="text-muted text-sm leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Teaching List */}
        <div className="lg:col-span-4">
          <h3 className="text-muted text-xs font-bold tracking-[0.2em] uppercase mb-12">
            Teaching
          </h3>
          <div className="space-y-12">
            {TEACHING.map((teach, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h4 className="text-white font-medium text-lg">{teach.role}</h4>
                  <span className="text-muted text-xs font-mono">{teach.period}</span>
                </div>
                <div className="text-accent text-sm font-medium tracking-wider uppercase mb-3">
                  {teach.company}
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {teach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
