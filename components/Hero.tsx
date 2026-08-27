"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FolderGit2,
  FileDown,
  Mail,
  Sparkles,
  TrendingUp,
  BarChart2,
  CheckCircle,
  Award,
  Zap,
} from "lucide-react";
import { GlowButton } from './GlowButton';
import { CommandCenterVisual } from "./CommandCenterVisual";
import { OWNER_INFO } from "@/data/portfolioData";

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const roles = OWNER_INFO.typingRoles;

  useEffect(() => {
    const fullText = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && charIndex <= fullText.length) {
      // Typing forward
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 70);
    } else if (!isDeleting && charIndex > fullText.length) {
      // Pause at full word
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && charIndex >= 0) {
      // Deleting back
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 35);
    } else if (isDeleting && charIndex < 0) {
      // Next word
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning, Heading, Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-indigo-500/30 shadow-inner mb-6 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brandGreen" />
              </span>
              <span className="text-xs font-semibold text-slate-200 tracking-wide">
                Available for High-Impact Roles &amp; Growth Projects
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
              Hi, I&apos;m{" "}
              <span className="text-gradient-primary block sm:inline">
                {OWNER_INFO.name}
              </span>
            </h1>

            {/* Animated Typing Role */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient-accent">
                {currentText}
              </span>
              <span className="w-1 h-7 sm:h-8 bg-cyan-400 ml-1.5 animate-pulse rounded-sm" />
            </div>

            {/* EXACT HERO BIO (Required by prompt) */}
            <div className="relative mb-4 pl-4 border-l-2 border-primary/60 py-1 bg-white/[0.02] rounded-r-xl max-w-xl">
              <blockquote className="text-sm sm:text-base italic text-slate-300 font-medium leading-relaxed">
                &ldquo;{OWNER_INFO.heroBio}&rdquo;
              </blockquote>
            </div>

            {/* Hero Description */}
            <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-xl leading-relaxed">
              {OWNER_INFO.heroDescription}
            </p>

            {/* 3 CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              {/* Primary: View Projects */}
              <GlowButton
                variant="primary"
                size="md"
                href="#projects"
                icon={<FolderGit2 className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                View Projects
              </GlowButton>

              {/* Secondary: Download Resume */}
              <GlowButton
                variant="secondary"
                size="md"
                href="/Ponnivalavan-Resume.pdf"
                download="Ponnivalavan-Resume.pdf"
                icon={<FileDown className="w-4 h-4 text-cyan-400" />}
                className="w-full sm:w-auto"
              >
                Download Resume
              </GlowButton>

              {/* Ghost: Contact Me */}
              <GlowButton
                variant="ghost"
                size="md"
                href="#contact"
                icon={<Mail className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Contact Me
              </GlowButton>
            </div>

            {/* Key Quick Badges */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg pt-4 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-brandGreen flex-shrink-0" />
                <span>5+ Yrs Exp</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <BarChart2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>ROAS &amp; BI Focus</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span>AI Automation</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Marketing Analytics Command Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center"
          >
            <CommandCenterVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
