"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Target,
  BrainCircuit,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { WHY_WORK_WITH_ME } from "@/data/portfolioData";
import { TiltCard } from "./ui/TiltCard";

const iconMap: Record<string, React.ElementType> = {
  PieChart,
  Target,
  BrainCircuit,
  Sparkles,
};

export const WhyMe: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-primary/30 text-xs font-semibold text-accent mb-3">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>VALUE PROPOSITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Work <span className="text-gradient-primary">With Me</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-3">
            The unique intersection of mathematical rigor, performance marketing obsession, and
            next-generation AI automation.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_WORK_WITH_ME.map((item, idx) => {
            const Icon = iconMap[item.icon] || Target;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <TiltCard
                  maxTilt={6}
                  className="h-full rounded-2xl bg-surface-card/85 backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 p-6 flex flex-col justify-between group transition-all duration-300 shadow-xl hover:shadow-indigo-500/10"
                >
                  <div>
                    {/* Icon Badge */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <span className="text-[11px] font-mono text-cyan-400 block mb-3 font-semibold">
                      {item.tagline}
                    </span>

                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Stat Callout */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Impact</span>
                    <span className="text-xs font-bold text-white font-mono bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {item.stat}
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
