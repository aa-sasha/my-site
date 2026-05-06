import { Sidebar } from "../components/Sidebar";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";

export function Home() {
  return (
    <div className="min-h-screen pb-20">
      {/* Sidebar pinned to viewport edge on desktop, inline on mobile */}
      <Sidebar />

      {/* Main content offset by sidebar width on desktop */}
      <main className="lg:ml-[350px]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 pt-12 lg:pt-24 flex flex-col gap-24">
          <Hero />
          <Projects />
          <Experience />
        </div>
      </main>
    </div>
  );
}
