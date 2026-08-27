"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Target,
  TrendingUp,
  BarChart3,
  LineChart,
  Cpu,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/portfolioData";
import { TiltCard } from "./ui/TiltCard";
import { GlowButton } from "./ui/GlowButton";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Target,
  TrendingUp,
  BarChart3,
  LineChart,
  Cpu,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-secondary/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-primary/30 text-xs font-semibold text-accent mb-3">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>SOLUTIONS &amp; DELIVERABLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Services &amp; <span className="text-gradient-primary">Expertise</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-3">
            Comprehensive full-stack growth solutions from audience acquisition and technical SEO
            to enterprise BI modeling and automated reporting.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = iconMap[service.iconName] || BarChart3;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <TiltCard
                  className="h-full rounded-2xl bg-surface-card/85 backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 shadow-xl hover:shadow-indigo-500/10"
                  maxTilt={6}
                >
                  <div>
                    {/* Card Header: Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${service.accentColor} p-[1px] shadow-lg`}>
                        <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                      <span className="text-2xl font-extrabold font-mono text-white/20 group-hover:text-cyan-400/50 transition-colors">
                        {service.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 pt-4 border-t border-white/5">
                      <span className="text-[10px] font-mono font-semibold uppercase text-slate-400 tracking-wider block mb-2">
                        Key Deliverables:
                      </span>
                      {service.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-8 pt-4 border-t border-white/5">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-cyan-300 transition-colors"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
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
