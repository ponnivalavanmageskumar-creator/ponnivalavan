"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Layers,
  Briefcase,
  FolderGit2,
  Cpu,
  Mail,
  Menu,
  X,
  FileDown,
  Sparkles,
  ChevronRight,
  TrendingUp,
  FileText,
} from "lucide-react";
import { GlowButton } from "./ui/GlowButton";

const NAV_ITEMS = [
  { name: "About", href: "#about", icon: BarChart3 },
  { name: "Resume", href: "#resume", icon: FileText },
  { name: "Skills", href: "#skills", icon: Layers },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Services", href: "#services", icon: Sparkles },
  { name: "Showcase", href: "#showcase", icon: TrendingUp },
  { name: "Workflow", href: "#workflow", icon: Cpu },
  { name: "Contact", href: "#contact", icon: Mail },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section calculation
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-1"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-primary via-indigo-500 to-accent p-[1px] shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
              <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-brandGreen rounded-full border-2 border-slate-900 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-accent transition-colors">
                Ponnivalavan M.
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">
                Marketing &bull; Analytics &bull; AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface-card/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 rounded-full -z-10 shadow-sm shadow-primary/40 border border-indigo-400/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <GlowButton
              variant="secondary"
              size="sm"
              href="#contact"
              className="text-xs"
            >
              Hire Me
            </GlowButton>
            <GlowButton
              variant="primary"
              size="sm"
              href="#projects"
              icon={<ChevronRight className="w-3.5 h-3.5" />}
              className="text-xs"
            >
              View Work
            </GlowButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-xl bg-surface-card border border-white/10 text-slate-200 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 lg:hidden p-4 bg-slate-900/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 p-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-primary text-white shadow-md shadow-primary/30"
                        : "bg-surface-card/60 text-slate-200 hover:bg-surface-card"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-accent" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
            <div className="flex gap-2 pt-2 border-t border-white/10">
              <GlowButton
                variant="primary"
                size="md"
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-xs"
              >
                View Projects
              </GlowButton>
              <GlowButton
                variant="secondary"
                size="md"
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-xs"
              >
                Contact Me
              </GlowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
