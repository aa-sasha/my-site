import { Sidebar } from "../components/Sidebar";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";

export function Home() {
  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 relative pt-12 lg:pt-24">
        
        {/* Left Sidebar */}
        <aside className="lg:w-[260px] shrink-0">
          <div className="sticky top-24">
            <Sidebar />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-[700px] flex flex-col gap-24">
          <Hero />
          <Projects />
          <Experience />
        </main>
      </div>
    </div>
  );
}
