"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Layers,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Target,
  FileText,
} from "lucide-react";
import { Project } from "@/data/portfolioData";
import { GlowButton } from "./ui/GlowButton";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-white/15 rounded-2xl shadow-2xl overflow-y-auto z-10 custom-scrollbar p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close Project Modal"
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono font-bold bg-primary/20 text-indigo-300 px-2.5 py-1 rounded-full border border-primary/30">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
              {project.stack}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            {project.title}
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            {project.overview}
          </p>

          {/* Metrics Highlight Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-950/70 border border-white/10 mb-6">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center sm:text-left">
                <span className="text-[10px] font-mono text-slate-400 block">{m.label}</span>
                <span className="text-lg font-bold text-white font-mono text-gradient-primary block">
                  {m.value}
                </span>
                {m.change && (
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center justify-center sm:justify-start gap-0.5">
                    <ArrowUpRight className="w-2.5 h-2.5" /> {m.change}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
              <h4 className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" /> Challenge
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">{project.challenge}</p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
              <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Solution
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
              Key Features &amp; Architecture:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results & Business ROI */}
          <div className="mb-6 p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/30">
            <h4 className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-indigo-400" /> Measurable Business Results
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-200">
              {project.results.map((res, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">&bull;</span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Technologies */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool) => (
                <span key={tool} className="px-2.5 py-1 rounded-md bg-slate-800 text-[11px] font-mono text-slate-300 border border-white/5">
                  {tool}
                </span>
              ))}
            </div>

            <GlowButton variant="primary" size="sm" onClick={onClose}>
              Close Preview
            </GlowButton>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
