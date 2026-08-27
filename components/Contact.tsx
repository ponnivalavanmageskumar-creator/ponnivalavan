"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Linkedin,
  Github,
  Youtube,
  Instagram,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import { portfolioData } from '../data/portfolioData';
import { GlowButton } from "./ui/GlowButton";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Neon Spotlights */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-t from-primary/15 via-secondary/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-primary/30 text-xs font-semibold text-accent mb-3">
            <Mail className="w-3.5 h-3.5 text-accent" />
            <span>START A PROJECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Turn Your <span className="text-gradient-primary">Data Into Growth.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-3">
            Whether you need high-ROAS paid campaign architecture, full-funnel GA4 tracking, or
            enterprise Power BI dashboards, let&apos;s connect.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-surface-card/85 backdrop-blur-xl border border-white/10 p-6 sm:p-7 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Get In Touch</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Open for full-time leadership roles, performance marketing consulting, and business intelligence analytics engagements.
              </p>

              {/* Direct Info list */}
              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center text-primary-light flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Email Me</span>
                    <a
                      href={`mailto:${OWNER_INFO.socialLinks.email}`}
                      className="text-slate-200 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      {OWNER_INFO.socialLinks.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Availability</span>
                    <span className="text-slate-200 font-semibold">
                      Fast Response (&lt; 24 Hours)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <span className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider block mb-3">
                  Professional Channels:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={OWNER_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-primary text-slate-300 hover:text-white border border-white/5 transition-all shadow-md"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={OWNER_INFO.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/5 transition-all shadow-md"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={OWNER_INFO.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white border border-white/5 transition-all shadow-md"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href={OWNER_INFO.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white border border-white/5 transition-all shadow-md"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Glass Contact Card with Animated Gradient Border */}
          <div className="lg:col-span-7">
            <div className="animated-gradient-border p-6 sm:p-8 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, Ponnivalavan will review your message and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono font-medium text-slate-300 block mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-indigo-500 focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono font-medium text-slate-300 block mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-indigo-500 focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono font-medium text-slate-300 block mb-1.5">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Google Ads Audit / Power BI Dashboard / Growth Consulting"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-indigo-500 focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono font-medium text-slate-300 block mb-1.5">
                      Your Message &amp; Goals
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your project, current benchmarks, and timeline goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-indigo-500 focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary via-indigo-600 to-secondary hover:from-indigo-500 hover:to-purple-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-500/25 border border-indigo-400/30 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Start a Conversation &rarr;</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
