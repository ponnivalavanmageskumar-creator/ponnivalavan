"use client";

import React from "react";
import {
  Layers,
  Database,
  BarChart3,
  Search,
  Sparkles,
  TrendingUp,
  Share2,
  Video,
  FileSpreadsheet,
  Palette,
} from "lucide-react";
import { TOOLKIT_ITEMS } from "@/data/portfolioData";

export const Toolkit: React.FC = () => {
  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...TOOLKIT_ITEMS, ...TOOLKIT_ITEMS];

  return (
    <section className="relative py-16 border-y border-white/10 bg-slate-950/50 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-slate-400">
          PROVEN ENTERPRISE TOOLKIT &bull; PLATFORMS &bull; APIS &bull; BI ENGINES
        </span>
      </div>

      {/* Infinite Scrolling Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex items-center group">
        {/* Left Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

        {/* Right Fade Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee Content */}
        <div className="flex shrink-0 animate-marquee items-center gap-4 group-hover:[animation-play-state:paused]">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-surface-card/90 border border-white/10 hover:border-indigo-500/50 shadow-md hover:shadow-indigo-500/20 transition-all duration-300 select-none flex-shrink-0"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center text-cyan-400">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white tracking-tight whitespace-nowrap">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400 whitespace-nowrap">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
