"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Award,
  BarChart3,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { EXPERIENCE_DATA } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-primary/30 text-xs font-semibold text-accent mb-3">
            <Briefcase className="w-3.5 h-3.5 text-accent" />
            <span>TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-3">
            5+ years of delivering high-ROAS marketing campaigns, scalable automation, and executive
            data analytics solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-50" />

          {/* Timeline Item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-12 sm:pl-20 mb-8"
          >
            {/* Timeline Node Icon */}
            <div className="absolute -left-1 sm:left-3.5 top-2 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent p-[2px] shadow-lg shadow-indigo-500/30">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-cyan-400" />
              </div>
            </div>

            {/* Experience Card */}
            <TiltCard
              maxTilt={4}
              className="rounded-2xl bg-surface-card/90 backdrop-blur-xl p-6 sm:p-8 border border-white/10 hover:border-indigo-500/40 shadow-2xl transition-all"
            >
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5 mb-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent mb-1 bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20">
                    <Calendar className="w-3 h-3" />
                    {EXPERIENCE_DATA.period}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                    {EXPERIENCE_DATA.role}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> High Performance
                  </span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {EXPERIENCE_DATA.summary}
              </p>

              {/* Key Impact Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-950/60 border border-white/5 mb-6">
                {EXPERIENCE_DATA.keyMetrics.map((km) => (
                  <div key={km.label} className="text-center sm:text-left">
                    <span className="text-[10px] font-mono text-slate-400 block">{km.label}</span>
                    <span className="text-base font-bold text-white font-mono mt-0.5 block text-gradient-primary">
                      {km.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Responsibilities Grid List */}
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Key Responsibilities &amp; Direct Impact
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {EXPERIENCE_DATA.responsibilities.map((resp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.02 }}
                      className="flex items-start gap-2.5 text-xs text-slate-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{resp}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
