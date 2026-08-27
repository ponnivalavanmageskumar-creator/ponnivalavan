"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Filter,
  Activity,
  LayoutDashboard,
  Zap,
  Award,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { WORKFLOW_STEPS } from "@/data/portfolioData";
import { TiltCard } from "./ui/TiltCard";

const iconMap: Record<string, React.ElementType> = {
  DatabaseZap: Database,
  Filter: Filter,
  Activity: Activity,
  LayoutDashboard: LayoutDashboard,
  Zap: Zap,
  Award: Award,
};

export const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="workflow" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-primary/30 text-xs font-semibold text-accent mb-3">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>SYSTEMATIC METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Data Analytics <span className="text-gradient-primary">Workflow</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-3">
            A rigorous 6-stage operational pipeline transforming fragmented raw signals into high-confidence
            growth strategies.
          </p>
        </div>

        {/* Desktop Interactive Horizontal Pipeline */}
        <div className="relative mb-12">
          {/* Animated Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 -translate-y-1/2 bg-slate-800 -z-0 rounded-full overflow-hidden">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            />
          </div>

          {/* 6 Step Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {WORKFLOW_STEPS.map((step, idx) => {
              const Icon = iconMap[step.icon] || Database;
              const isCurrent = activeStep === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left rounded-2xl p-4 transition-all duration-300 relative border flex flex-col justify-between ${
                    isCurrent
                      ? "bg-slate-800/95 border-indigo-400/80 shadow-lg shadow-indigo-500/25 scale-[1.03]"
                      : "bg-surface-card/70 border-white/10 hover:border-white/20 hover:bg-surface-card"
                  }`}
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center ${isCurrent ? "bg-primary text-white" : "bg-white/5 text-slate-400"}`}>
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-0.5">{step.title}</h3>
                    <p className="text-[11px] text-slate-400 font-mono">{step.subtitle}</p>
                  </div>

                  {/* Active Indicator Bar */}
                  <div className={`mt-4 h-1 rounded-full w-full ${isCurrent ? "bg-cyan-400 shadow-sm shadow-cyan-400" : "bg-white/5"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Deep-Dive Inspection Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <TiltCard
            maxTilt={3}
            className="rounded-2xl bg-slate-900/90 border border-white/15 p-6 sm:p-8 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold bg-primary/20 text-indigo-300 px-2.5 py-1 rounded-full border border-primary/30">
                    STAGE {WORKFLOW_STEPS[activeStep].step} OF 06
                  </span>
                  <span className="text-xs font-mono text-cyan-400">
                    {WORKFLOW_STEPS[activeStep].subtitle}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white">
                  {WORKFLOW_STEPS[activeStep].title} Phase
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {WORKFLOW_STEPS[activeStep].description}
                </p>

                {/* Primary Tools Stack in this stage */}
                <div className="pt-2">
                  <span className="text-xs font-mono text-slate-400 block mb-2">
                    Primary Tools &amp; Methods:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {WORKFLOW_STEPS[activeStep].tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-surface-card text-xs font-mono text-slate-200 border border-white/10"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Jump Controls */}
              <div className="md:col-span-4 flex flex-col gap-2 p-4 rounded-xl bg-slate-950/60 border border-white/5">
                <span className="text-xs font-mono text-slate-400 mb-1">Pipeline Navigation:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : WORKFLOW_STEPS.length - 1))}
                    className="w-full py-2 rounded-lg bg-surface-card hover:bg-slate-800 text-xs font-medium text-slate-200 border border-white/10 transition-colors"
                  >
                    &larr; Previous Stage
                  </button>
                  <button
                    onClick={() => setActiveStep((prev) => (prev + 1) % WORKFLOW_STEPS.length)}
                    className="w-full py-2 rounded-lg bg-primary hover:bg-primary-hover text-xs font-medium text-white shadow-md shadow-primary/30 transition-colors"
                  >
                    Next Stage &rarr;
                  </button>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};
