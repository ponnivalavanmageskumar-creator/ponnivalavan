"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Sparkles,
  Award,
  Layers,
  CheckCircle2,
  PieChart,
  ArrowUpRight,
  Zap,
} from "lucide-react";
import { CountUp } from "./ui/CountUp";
import { TiltCard } from "./ui/TiltCard";
import { ABOUT_EXPERTISE, OWNER_INFO } from "@/data/portfolioData";

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Section Accent */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Pill */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-primary/30 text-xs font-semibold text-accent mb-3">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>EXECUTIVE PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-primary">My Approach</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-3">
            Bridging the gap between creative marketing strategy and statistical business intelligence.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Expertise Chips */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Digital Marketing meets{" "}
                <span className="text-gradient-accent">Data Analytics.</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                I combine marketing strategy, performance marketing, analytics, and data-driven
                decision-making to help businesses understand what is working, identify performance
                gaps, and improve measurable results.
              </p>
            </div>

            {/* Expertise Grid Chips */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">
                My Expertise Spans:
              </h4>
              <div className="flex flex-wrap gap-2">
                {ABOUT_EXPERTISE.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-card hover:bg-slate-800 text-xs font-medium text-slate-200 border border-white/10 hover:border-indigo-500/40 transition-colors shadow-sm"
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    <span>{skill}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Statistics & Mini KPI Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            {/* 4 Big Stat Cards */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {OWNER_INFO.stats.map((stat, idx) => (
                <TiltCard
                  key={stat.label}
                  className="rounded-2xl bg-surface-card/80 backdrop-blur-xl p-5 border border-white/10 hover:border-indigo-500/40 transition-all shadow-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center text-primary-light">
                      {idx === 0 && <Award className="w-4 h-4 text-amber-400" />}
                      {idx === 1 && <Layers className="w-4 h-4 text-cyan-400" />}
                      {idx === 2 && <TrendingUp className="w-4 h-4 text-purple-400" />}
                      {idx === 3 && <PieChart className="w-4 h-4 text-emerald-400" />}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                      VERIFIED
                    </span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs font-bold text-slate-200 mt-1">{stat.label}</div>
                  <div className="text-[11px] text-slate-400">{stat.sublabel}</div>
                </TiltCard>
              ))}
            </div>

            {/* Mini Animated Live Analytics Snapshot Card */}
            <div className="rounded-2xl bg-slate-900/90 border border-white/10 p-4 shadow-xl">
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs font-semibold text-slate-200">
                    Continuous Optimization Impact
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Top 5% Performance
                </span>
              </div>

              {/* Progress Bars for Core Performance Dimensions */}
              <div className="space-y-2.5 text-xs">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-300 font-medium">ROAS &amp; Revenue Scaling</span>
                    <span className="text-indigo-300 font-mono font-bold">4.8x (96%)</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "96%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-primary to-indigo-400 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-300 font-medium">SQL &amp; BI Dashboard Accuracy</span>
                    <span className="text-cyan-300 font-mono font-bold">98% Match</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-300 font-medium">AI Automation Workflow Integration</span>
                    <span className="text-purple-300 font-mono font-bold">94% Automated</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "94%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
