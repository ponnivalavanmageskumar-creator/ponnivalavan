"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Eye,
  Download,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Briefcase,
  Award,
  Zap,
} from "lucide-react";
import { TiltCard } from "./ui/TiltCard";
import { GlowButton } from "./ui/GlowButton";
import { OWNER_INFO } from "@/data/portfolioData";

export const Resume: React.FC = () => {
  const resumeUrl = "/Ponnivalavan-Resume.pdf";

  const highlights = [
    "5+ Years Experience in Digital Marketing & Data Analytics",
    "Proven Track Record in Google Ads, Meta Ads & GA4",
    "Expert in SQL Data Modeling, Excel, Power BI & Tableau",
    "AI-Powered Workflow Automation & Executive MIS Reporting",
    "ATS-Compliant & Formatted for Enterprise Leadership Roles",
  ];

  return (
    <section id="resume" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-primary/30 text-xs font-semibold text-accent mb-3">
            <FileText className="w-3.5 h-3.5 text-accent" />
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-primary">Resume</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-3">
            Review my complete career trajectory, verified performance marketing achievements,
            data analytics competencies, and technical credentials.
          </p>
        </div>

        {/* Resume Glassmorphism Main Card */}
        <div className="max-w-4xl mx-auto">
          <TiltCard
            maxTilt={4}
            className="rounded-3xl bg-slate-900/85 backdrop-blur-2xl border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Document Details & Key Highlights */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-accent p-[1px] shadow-lg shadow-indigo-500/25">
                    <div className="w-full h-full bg-slate-900 rounded-[15px] flex items-center justify-center">
                      <FileText className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {OWNER_INFO.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-300">
                      Ponnivalavan-Resume.pdf &bull; PDF Document
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Comprehensive professional resume detailing 5+ years of digital marketing
                  campaign execution, relational SQL database modeling, executive Power BI
                  dashboards, and AI growth workflows.
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono font-semibold uppercase text-slate-400 tracking-wider block mb-1">
                    Resume Highlights:
                  </span>
                  {highlights.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex items-center gap-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Action Box & 2 Big Attractive Buttons */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="rounded-2xl bg-slate-950/70 border border-white/10 p-6 flex flex-col items-center text-center space-y-5">
                  {/* Verified Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified &amp; Up to Date</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-sm font-bold text-white block">
                      Ready for Immediate Review
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      Click below to view in a new tab or save locally.
                    </span>
                  </div>

                  {/* 2 ATTRACTIVE BUTTONS */}
                  <div className="w-full space-y-3">
                    {/* 1. View Resume (opens PDF in a new tab) */}
                    <GlowButton
                      variant="primary"
                      size="md"
                      href={resumeUrl}
                      target="_blank"
                      icon={<Eye className="w-4 h-4" />}
                      className="w-full justify-center shadow-lg shadow-indigo-500/25"
                    >
                      View Resume
                    </GlowButton>

                    {/* 2. Download Resume (downloads PDF) */}
                    <GlowButton
                      variant="secondary"
                      size="md"
                      href={resumeUrl}
                      download="Ponnivalavan-Resume.pdf"
                      icon={<Download className="w-4 h-4 text-cyan-400" />}
                      className="w-full justify-center hover:border-cyan-500/50"
                    >
                      Download Resume
                    </GlowButton>
                  </div>

                  {/* Document Meta Note */}
                  <div className="pt-2 text-[10px] font-mono text-slate-500">
                    Format: PDF &bull; Compatible with All Devices
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};
