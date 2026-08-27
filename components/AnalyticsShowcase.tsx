"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  BarChart3,
  PieChart,
  Layers,
  Filter,
  Calendar,
  Share2,
  Download,
  CheckCircle2,
  DollarSign,
  Users,
  Target,
} from "lucide-react";
import {
  SHOWCASE_KPIS,
  MONTHLY_TREND_DATA,
  CHANNEL_DATA,
  FUNNEL_DATA,
} from "@/data/analyticsData";
import { TiltCard } from "./ui/TiltCard";

type ViewTab = "performance" | "revenue" | "funnel" | "channels" | "growth";

export const AnalyticsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ViewTab>("performance");
  const [timeRange, setTimeRange] = useState<"7D" | "30D" | "90D" | "1Y">("30D");

  return (
    <section id="showcase" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Neon Spotlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-indigo-500/10 via-accent/5 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-primary/30 text-xs font-semibold text-accent mb-3">
            <BarChart3 className="w-3.5 h-3.5 text-accent" />
            <span>INTERACTIVE DASHBOARD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Turning Data <span className="text-gradient-primary">Into Decisions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-3">
            Live interactive telemetry demonstrating campaign performance, multi-touch attribution,
            conversion funnels, and revenue expansion metrics.
          </p>
        </div>

        {/* 4 Core KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {SHOWCASE_KPIS.map((kpi, idx) => (
            <motion.div
              key={kpi.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <TiltCard
                maxTilt={6}
                className="rounded-2xl bg-surface-card/85 backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 p-5 shadow-xl hover:shadow-indigo-500/10 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400">{kpi.label}</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                    <ArrowUpRight className="w-2.5 h-2.5 mr-0.5" />
                    {kpi.change}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-1 mb-2 tracking-tight">
                  {kpi.value}
                </div>
                <div className="text-[11px] text-slate-400 flex items-center justify-between pt-2 border-t border-white/5">
                  <span>{kpi.description}</span>
                  <span className="text-[10px] font-mono text-indigo-300 font-semibold">
                    {kpi.benchmark}
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Main Interactive Showcase Cockpit */}
        <div className="rounded-2xl bg-slate-900/90 backdrop-blur-2xl border border-white/15 p-5 sm:p-7 shadow-2xl shadow-black/50">
          {/* Cockpit Controls & Tab Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
            {/* View Switcher Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-slate-950/80 p-1.5 rounded-xl border border-white/10">
              {[
                { id: "performance", label: "Campaign Performance", icon: Target },
                { id: "revenue", label: "Revenue Trend", icon: DollarSign },
                { id: "funnel", label: "Conversion Funnel", icon: Filter },
                { id: "channels", label: "Channel Split & ROAS", icon: PieChart },
                { id: "growth", label: "Monthly Growth", icon: TrendingUp },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as ViewTab)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? "bg-primary text-white shadow-md shadow-primary/30 border border-primary-light/40"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Date Range Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">Timeframe:</span>
              <div className="flex bg-slate-950/80 p-1 rounded-lg border border-white/10 text-xs font-mono">
                {(["7D", "30D", "90D", "1Y"] as const).map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      timeRange === range
                        ? "bg-slate-800 text-white font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Content Views */}
          <div className="min-h-[380px]">
            <AnimatePresence mode="wait">
              {/* TAB 1: Campaign Performance & Metric Comparison */}
              {activeTab === "performance" && (
                <motion.div
                  key="tab-perf"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* SVG Multi-Line Chart */}
                    <div className="lg:col-span-2 bg-slate-950/60 p-4 sm:p-5 rounded-xl border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-sm font-bold text-white">
                            Blended Ad Spend vs. Attributed Revenue ($)
                          </h4>
                          <span className="text-[11px] text-slate-400">
                            Tracking efficiency scaling across Google &amp; Meta Ads
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="flex items-center gap-1 text-slate-300">
                            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> Revenue
                          </span>
                          <span className="flex items-center gap-1 text-slate-300">
                            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" /> Ad Spend
                          </span>
                        </div>
                      </div>

                      {/* SVG Chart Graphic */}
                      <div className="relative h-60 w-full">
                        <svg viewBox="0 0 500 200" className="w-full h-full">
                          <defs>
                            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#0B1120" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>

                          {/* Grid Lines */}
                          <line x1="40" y1="40" x2="480" y2="40" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                          <line x1="40" y1="90" x2="480" y2="90" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                          <line x1="40" y1="140" x2="480" y2="140" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                          <line x1="40" y1="180" x2="480" y2="180" stroke="rgba(255,255,255,0.15)" />

                          {/* Revenue Fill Area */}
                          <polygon
                            points="50,180 50,120 130,105 210,88 290,72 370,45 450,25 450,180"
                            fill="url(#revGrad)"
                          />

                          {/* Revenue Path */}
                          <polyline
                            points="50,120 130,105 210,88 290,72 370,45 450,25"
                            fill="none"
                            stroke="#06B6D4"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />

                          {/* Spend Path */}
                          <polyline
                            points="50,160 130,158 210,152 290,148 370,138 450,130"
                            fill="none"
                            stroke="#818CF8"
                            strokeWidth="2.5"
                            strokeDasharray="4 4"
                          />

                          {/* Data points */}
                          {[
                            { x: 50, y: 120, label: "$42K", date: "Jan" },
                            { x: 130, y: 105, label: "$48.5K", date: "Feb" },
                            { x: 210, y: 88, label: "$56K", date: "Mar" },
                            { x: 290, y: 72, label: "$64.2K", date: "Apr" },
                            { x: 370, y: 45, label: "$78.9K", date: "May" },
                            { x: 450, y: 25, label: "$92.4K", date: "Jun" },
                          ].map((pt, i) => (
                            <g key={i}>
                              <circle cx={pt.x} cy={pt.y} r="4" fill="#06B6D4" stroke="#0B1120" strokeWidth="2" />
                              <text x={pt.x} y="195" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="monospace">
                                {pt.date}
                              </text>
                              <text x={pt.x} y={pt.y - 8} textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">
                                {pt.label}
                              </text>
                            </g>
                          ))}
                        </svg>
                      </div>
                    </div>

                    {/* Channel Efficiency Breakdown */}
                    <div className="bg-slate-950/60 p-4 sm:p-5 rounded-xl border border-white/10 flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          Channel ROAS Ranking
                        </h4>
                        <span className="text-[11px] text-slate-400 block mb-4">
                          Efficiency score per acquisition dollar
                        </span>

                        <div className="space-y-3">
                          {CHANNEL_DATA.map((ch) => (
                            <div key={ch.channel} className="space-y-1">
                              <div className="flex justify-between text-xs">
                                <span className="text-slate-300 truncate max-w-[150px]">{ch.channel}</span>
                                <span className="font-mono font-bold text-emerald-400">{ch.roas}x ROAS</span>
                              </div>
                              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div
                                  className="h-full rounded-full"
                                  style={{ width: `${(ch.roas / 12.3) * 100}%`, backgroundColor: ch.color }}
                                />
                              </div>
                              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                                <span>Spend: ${ch.spend.toLocaleString()}</span>
                                <span>CPA: ${ch.cpa.toFixed(2)}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                        <span>Blended ROAS:</span>
                        <span className="text-white font-bold">4.84x (Target Exceeded)</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: Revenue Trend */}
              {activeTab === "revenue" && (
                <motion.div
                  key="tab-rev"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10">
                      <span className="text-xs font-mono text-slate-400">Total Attributed Gross</span>
                      <div className="text-2xl font-bold text-white font-mono mt-1">$382,000</div>
                      <span className="text-xs text-emerald-400 font-mono">+120% YoY Scaling</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10">
                      <span className="text-xs font-mono text-slate-400">Average Customer LTV</span>
                      <div className="text-2xl font-bold text-cyan-300 font-mono">$412.50</div>
                      <span className="text-xs text-emerald-400 font-mono">+18.4% Cohort Lift</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10">
                      <span className="text-xs font-mono text-slate-400">CAC Payback Window</span>
                      <div className="text-2xl font-bold text-indigo-300 font-mono">3.2 Months</div>
                      <span className="text-xs text-emerald-400 font-mono">Fast Capital Recycling</span>
                    </div>
                  </div>

                  {/* Monthly Table / Bar breakdown */}
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-white/10 overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-white/10 text-slate-400 font-mono">
                          <th className="py-2.5 px-3">Month</th>
                          <th className="py-2.5 px-3">Revenue ($)</th>
                          <th className="py-2.5 px-3">Paid Spend ($)</th>
                          <th className="py-2.5 px-3">ROAS</th>
                          <th className="py-2.5 px-3">Leads</th>
                          <th className="py-2.5 px-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 font-mono">
                        {MONTHLY_TREND_DATA.map((row) => (
                          <tr key={row.date} className="hover:bg-white/[0.02]">
                            <td className="py-2.5 px-3 font-bold text-white">{row.date}</td>
                            <td className="py-2.5 px-3 text-cyan-300 font-bold">${row.revenue.toLocaleString()}</td>
                            <td className="py-2.5 px-3 text-slate-300">${row.spend.toLocaleString()}</td>
                            <td className="py-2.5 px-3 text-emerald-400 font-bold">{row.roas}x</td>
                            <td className="py-2.5 px-3 text-purple-300">{row.leads.toLocaleString()}</td>
                            <td className="py-2.5 px-3">
                              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                Scaled
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: Conversion Funnel */}
              {activeTab === "funnel" && (
                <motion.div
                  key="tab-funnel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="bg-slate-950/60 p-5 rounded-xl border border-white/10">
                    <h4 className="text-sm font-bold text-white mb-1">
                      Full-Funnel Drop-Off Forensic Breakdown
                    </h4>
                    <p className="text-xs text-slate-400 mb-6">
                      User progression from Impression → Landing Page → Lead Capture → Checkout → Conversion
                    </p>

                    <div className="space-y-4">
                      {FUNNEL_DATA.map((stage, idx) => (
                        <div key={stage.stage} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded bg-slate-800 flex items-center justify-center font-mono text-[10px] text-slate-300">
                                0{idx + 1}
                              </span>
                              <span className="text-white font-medium">{stage.stage}</span>
                            </div>
                            <div className="flex items-center gap-3 font-mono">
                              <span className="text-slate-300">{stage.users.toLocaleString()} users</span>
                              <span className="text-cyan-300 font-bold">({stage.percentage}%)</span>
                              {stage.dropoffRate !== "0%" && (
                                <span className="text-red-400 text-[11px]">{stage.dropoffRate} drop</span>
                              )}
                            </div>
                          </div>
                          {/* Funnel Visual Bar */}
                          <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${stage.percentage}%` }}
                              transition={{ duration: 0.8, delay: idx * 0.1 }}
                              className={`h-full ${stage.color} rounded-full`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>
                        Landing Page Optimization sprint lifted end-to-end Funnel CVR from 3.2% to 4.85% (+51.5% efficiency).
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 4: Channel Comparison */}
              {activeTab === "channels" && (
                <motion.div
                  key="tab-channels"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {CHANNEL_DATA.map((ch) => (
                    <div
                      key={ch.channel}
                      className="p-5 rounded-xl bg-slate-950/60 border border-white/10 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: ch.color }} />
                          <h4 className="text-sm font-bold text-white">{ch.channel}</h4>
                        </div>
                        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          {ch.roas}x ROAS
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-slate-900/80 text-[11px] font-mono">
                        <div>
                          <span className="text-slate-400 block text-[10px]">Spend</span>
                          <span className="text-white font-bold">${ch.spend.toLocaleString()}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">Revenue</span>
                          <span className="text-cyan-300 font-bold">${ch.revenue.toLocaleString()}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">CPA</span>
                          <span className="text-purple-300 font-bold">${ch.cpa.toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Conversions Generated:</span>
                        <span className="font-mono text-white font-semibold">{ch.conversions} Orders</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* TAB 5: Monthly Growth */}
              {activeTab === "growth" && (
                <motion.div
                  key="tab-growth"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-950/60 p-5 rounded-xl border border-white/10"
                >
                  <h4 className="text-sm font-bold text-white mb-2">
                    Month-over-Month Velocity Analysis
                  </h4>
                  <p className="text-xs text-slate-400 mb-6">
                    Sustained compound growth across all primary acquisition pillars.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 text-center">
                      <span className="text-xs text-slate-400">Revenue Growth</span>
                      <div className="text-3xl font-extrabold text-white font-mono my-1">+120%</div>
                      <span className="text-[11px] text-emerald-400 font-mono">Compounding MoM</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 text-center">
                      <span className="text-xs text-slate-400">Lead Volume Scale</span>
                      <div className="text-3xl font-extrabold text-cyan-300 font-mono">+136%</div>
                      <span className="text-[11px] text-emerald-400 font-mono">820 → 1,940/mo</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 text-center">
                      <span className="text-xs text-slate-400">Organic Visibility</span>
                      <div className="text-3xl font-extrabold text-purple-300 font-mono">+42.6%</div>
                      <span className="text-[11px] text-emerald-400 font-mono">142K Monthly Hits</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
