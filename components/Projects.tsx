"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  BarChart3,
  TrendingUp,
  Database,
  Search,
  Cpu,
  Layers,
} from "lucide-react";
import { PROJECTS_DATA, Project } from "@/data/portfolioData";
import { TiltCard } from "./ui/TiltCard";
import { GlowButton } from "./ui/GlowButton";
import { ProjectModal } from "./ProjectModal";

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const categories = ["all", "Business Intelligence", "Performance Marketing", "Organic Growth", "Marketing Analytics", "AI & Automation"];

  const filteredProjects =
    filterCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filterCategory);

  return (
    <section id="projects" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-primary/30 text-xs font-semibold text-accent mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-accent" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-3">
            Interactive marketing intelligence cockpits, paid media optimization engines, relational
            BI models, and generative AI growth pipelines.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filterCategory === cat
                    ? "bg-primary text-white shadow-md shadow-primary/30 border border-primary-light/40"
                    : "bg-surface-card text-slate-300 hover:text-white border border-white/10"
                }`}
              >
                {cat === "all" ? "All Projects (6)" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Glass Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <TiltCard
                className="h-full rounded-2xl bg-surface-card/85 backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 p-6 flex flex-col justify-between group transition-all duration-300 shadow-xl hover:shadow-indigo-500/10 cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                <div>
                  {/* Card Top Pill & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold bg-primary/20 text-indigo-300 px-2.5 py-1 rounded-full border border-primary/30">
                      PROJECT {project.number}
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      {project.stack}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {project.shortDesc}
                  </p>

                  {/* Mini KPI Preview Grid */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-950/60 border border-white/5 mb-5">
                    {project.metrics.slice(0, 2).map((metric, i) => (
                      <div key={i}>
                        <span className="text-[10px] font-mono text-slate-400 block">{metric.label}</span>
                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="text-sm font-bold text-white font-mono">{metric.value}</span>
                          {metric.change && (
                            <span className="text-[9px] font-semibold text-emerald-400 flex items-center">
                              <ArrowUpRight className="w-2.5 h-2.5" />
                              {metric.change}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom CTA bar */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors flex items-center gap-1">
                    View Case Study
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-primary text-slate-300 group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
