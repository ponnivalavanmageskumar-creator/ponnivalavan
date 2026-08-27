import React from "react";
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Resume } from '../components/Resume';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Services } from '../components/Services';
import { AnalyticsShowcase } from '../components/AnalyticsShowcase';
import { Toolkit } from '../components/Toolkit';
import { Workflow } from '../components/Workflow';
import { WhyMe } from '../components/WhyMe';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { AuroraBackground } from '../components/ui/AuroraBackground';
export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Ambient background glowing mesh */}
      <AuroraBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <div className="relative z-10">
        <Hero />
        <Toolkit />
        <About />
        <Resume />
        <Skills />
        <AnalyticsShowcase />
        <Experience />
        <Projects />
        <Services />
        <Workflow />
        <WhyMe />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
