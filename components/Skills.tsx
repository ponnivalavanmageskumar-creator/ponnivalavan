"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Megaphone,
  Target,
  Search,
  Database,
  BarChart3,
  TrendingUp,
  Cpu,
  CheckCircle2,
  Sparkles,
  Layers,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { TiltCard } from "./ui/TiltCard";

const iconMap: Record<string, React.ElementType> = {
  Megaphone,
  Target,
  Search,
  Database,
  BarChart3,
  TrendingUp,
  Cpu,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCategories =
    selectedCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-secondary/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-primary/30 text-xs font-semibold text-accent mb-3">
            <Layers className="w-3.5 h-3.5 text-accent" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical &amp; Strategic <span className="text-gradient-primary">Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-3">
            Specialized toolkit spanning high-yield paid acquisition, search engine domination,
            relational SQL modeling, and executive BI dashboards.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-4xl">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-primary text-white shadow-md shadow-primary/30 border border-primary-light/40"
                  : "bg-surface-card text-slate-300 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              All Skills ({SKILL_CATEGORIES.length})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-primary text-white shadow-md shadow-primary/30 border border-primary-light/40"
                    : "bg-surface-card text-slate-300 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCategories.map((category, idx) => {
              const Icon = iconMap[category.iconName] || BarChart3;
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <TiltCard
                    className="h-full rounded-2xl bg-surface-card/85 backdrop-blur-xl p-6 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-indigo-500/10"
                    maxTilt={6}
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${category.color} p-[1px] shadow-md`}>
                            <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                              <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-white tracking-wide">
                              {category.title}
                            </h3>
                            <span className="text-[10px] font-mono text-slate-400">
                              {category.skills.length} Specialized Capabilities
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                        {category.description}
                      </p>

                      {/* Skill Items List */}
                      <div className="space-y-3">
                        {category.skills.map((skill) => (
                          <div key={skill.name} className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-200 font-medium flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                                <span>{skill.name}</span>
                              </span>
                              {skill.featured && (
                                <span className="text-[9px] font-mono font-bold bg-primary/20 text-indigo-300 px-1.5 py-0.5 rounded border border-primary/30">
                                  CORE
                                </span>
                              )}
                            </div>
                            {/* Skill Progress Meter */}
                            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer Badge */}
                    <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Proficiency</span>
                      <span className="text-emerald-400 font-semibold">Expert Grade</span>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
