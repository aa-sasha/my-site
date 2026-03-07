import { motion } from "motion/react";

const PROJECTS = [
  {
    id: "01",
    category: "Quiz Mini-App for Yandex",
    title: "TECHNO",
    subtitle: "The Challenge",
    description: "The goal was to create an engaging and intuitive quiz mini-app with diverse gameplay mechanics and a vibrant, eye-catching visual design that would captivate users.",
    solution: "I designed a seamless user flow for completing quizzes, architecting the core question-and-answer system and implementing a variety of interactive quest types. To maximize user engagement, I integrated a competitive leaderboard and developed an overarching global adventure map, bringing it to life through close collaboration with illustrators.",
    tags: ["PRODUCT DESIGN", "GAMIFICATION", "UX RESEARCH"],
    imageBg: "bg-bg",
    image: "/1.webp",
    fallbackImage: "/1.webp"
  },
  {
    id: "02",
    category: "Mech Shooter",
    title: "War Robots",
    subtitle: "The Challenge",
    description: "My focus was on enhancing player retention through new social features and boosting revenue by designing monetization mechanics. A key secondary objective was to optimize the design system to accelerate the team's workflow.",
    solution: "To address these goals, I designed and implemented a suite of social features — including Friends, Clans, Lobbies, and Chat — to foster community and increase engagement. On the monetization front, I developed key mechanics such as Bingo, a Fortune Wheel, a Login Calendar, and a Currency Bank. Furthermore, I led a major overhaul of the design system, restructuring 50+ feature files into 25 by categorizing them into Meta UI, Battle UI, and a core Design System. This was supported by introducing a version and branching system. The effort also included creating and systematizing a library of 700+ icons for game designers and refining over 50 button variations to ensure consistency and efficiency.",
    tags: ["UI ARCHITECTURE", "VISUAL DEV", "MOBILE UI"],
    imageBg: "bg-bg",
    image: "/2.webp",
    fallbackImage: "/2.webp"
  },
  {
    id: "03",
    category: "Glucose Dynamics Tracker",
    title: "AnnNigm",
    subtitle: "The Challenge",
    description: "To design a Bluetooth-connected glucose monitoring system that ensures instant data processing and provides a user-friendly interface for daily use.",
    solution: "I designed an intuitive interface featuring real-time glucose readings, a dynamic trends graph, and a historical data calendar, all optimized for seamless daily monitoring.",
    tags: ["DATA VISUALIZATION", "MOBILE APP", "UX/UI"],
    imageBg: "bg-bg",
    image: "/3.webp",
    fallbackImage: "/3.webp"
  },
  {
    id: "04",
    category: "Private Messenger",
    title: "Meera Messenger",
    subtitle: "The Challenge",
    description: "To design a full-featured messenger for iOS and Android from the ground up, ensuring stable performance for all core communication scenarios.",
    solution: "I designed the complete user experience across 40+ features and 500+ screens — from onboarding and chat lists to high-quality audio and video calls. The application supports group chats, channels, and over 20 different message types to facilitate rich and versatile communication.",
    tags: ["NATIVE MOBILE", "COMPLEX FLOWS", "0→1 PRODUCT"],
    imageBg: "bg-bg",
    image: "/4.webp",
    fallbackImage: "/4.webp"
  },
  {
    id: "05",
    category: "Social Network",
    title: "Noomeera",
    subtitle: "The Challenge",
    description: "The project's primary goal was to increase user retention by enhancing communication features and redesigning the news feed to be more engaging.",
    solution: "I owned a comprehensive redesign of the news feed and introduced a new engagement-focused comments system with likes. To foster deeper connections, I expanded the core messaging experience by developing personal and group chats. Furthermore, I designed and implemented key features to improve discoverability and control, including universal search for content and users, channels, a flexible notification system, and granular privacy settings.",
    tags: ["UX REDESIGN", "DATA-INFORMED", "DESIGN SYSTEMS"],
    imageBg: "bg-bg",
    image: "/5.webp",
    fallbackImage: "/5.webp"
  }
];

export function Projects() {
  return (
    <section id="projects" className="flex flex-col bg-bg">
      {PROJECTS.map((project, index) => (
        <div 
          key={project.id} 
          className="flex flex-col border-b border-line group/item"
        >
          {/* Project Header - Recipe 1 style */}
          <div className="grid grid-cols-4 md:grid-cols-12 p-6 md:px-12 py-8 border-b border-line items-center transition-colors duration-500">
            <div className="col-span-1 md:col-span-1 font-mono text-xs opacity-50">{project.id}</div>
            <div className="col-span-2 md:col-span-4 font-sans text-2xl md:text-4xl font-bold tracking-tight uppercase">{project.title}</div>
            <div className="hidden md:block col-span-4 font-mono text-[10px] tracking-[0.2em] uppercase opacity-50">{project.category}</div>
            <div className="col-span-1 md:col-span-3 text-right">
              <span className="inline-block w-8 h-8 rounded-full border border-current flex items-center justify-center">
                <div className="w-1 h-1 bg-current rounded-full"></div>
              </span>
            </div>
          </div>

          <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[70vh]`}>
            {/* Content Side */}
            <div className="flex-1 p-6 md:p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-line">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8">
                  <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
                    {project.subtitle}
                  </h4>
                  <p className="text-white/90 text-lg font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-12">
                  <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
                    The Solution
                  </h4>
                  <p className="text-muted text-lg font-light leading-relaxed">
                    {project.solution}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1.5 rounded-full border border-line text-[10px] font-bold tracking-widest uppercase text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Image Side */}
            <div className={`flex-1 ${project.imageBg} p-6 md:p-12 lg:p-20 flex items-center justify-center relative overflow-hidden group`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-5xl aspect-[1680/723] rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = project.fallbackImage;
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Behance Link */}
      <div className="p-12 md:p-20 flex justify-center border-b border-line">
        <a 
          href="https://www.behance.net/sasha_nikitin" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-4 text-xl md:text-2xl font-display uppercase tracking-wider hover:text-accent transition-colors"
        >
          <span>→ See more projects from this period on Behance</span>
        </a>
      </div>
    </section>
  );
}
