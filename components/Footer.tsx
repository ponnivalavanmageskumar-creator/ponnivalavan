"use client";

import React from "react";
import { ArrowUp, BarChart3, Heart } from "lucide-react";
import { OWNER_INFO } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-xl text-slate-400 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-white/5">
          {/* Brand & Identity */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-accent p-[1px]">
                <div className="w-full h-full bg-slate-900 rounded-[7px] flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-accent" />
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {OWNER_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Digital Marketing Specialist &bull; Data Analyst &bull; AI &amp; ML &bull; Content Creator
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 flex flex-wrap items-center md:justify-end gap-x-6 gap-y-2 text-xs font-medium">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-slate-500 font-mono">
          <div>
            &copy; 2026 {OWNER_INFO.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-card hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-all group cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
