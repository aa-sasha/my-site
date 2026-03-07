/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
