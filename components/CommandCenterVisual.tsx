"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ArrowUpRight,
  Target,
  BarChart3,
  Search,
  Sparkles,
  Layers,
  Database,
  Activity,
  CheckCircle2,
  Zap,
} from "lucide-react";

export const CommandCenterVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"revenue" | "leads" | "roas">("revenue");
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const chartData = {
    revenue: [
      { month: "Jan", val: 42, label: "$42.0K" },
      { month: "Feb", val: 48, label: "$48.5K" },
      { month: "Mar", val: 56, label: "$56.0K" },
      { month: "Apr", val: 64, label: "$64.2K" },
      { month: "May", val: 79, label: "$78.9K" },
      { month: "Jun", val: 92, label: "$92.4K" },
    ],
    leads: [
      { month: "Jan", val: 820, label: "820" },
      { month: "Feb", val: 960, label: "960" },
      { month: "Mar", val: 1150, label: "1.15K" },
      { month: "Apr", val: 1320, label: "1.32K" },
      { month: "May", val: 1680, label: "1.68K" },
      { month: "Jun", val: 1940, label: "1.94K" },
    ],
    roas: [
      { month: "Jan", val: 3.8, label: "3.8x" },
      { month: "Feb", val: 4.1, label: "4.1x" },
      { month: "Mar", val: 4.2, label: "4.2x" },
      { month: "Apr", val: 4.6, label: "4.6x" },
      { month: "May", val: 4.8, label: "4.8x" },
      { month: "Jun", val: 5.2, label: "5.2x" },
    ],
  };

  const currentDataset = chartData[activeTab];

  // SVG Chart path calculation
  const getSvgPath = () => {
    const points = currentDataset.map((d, i) => {
      const x = 30 + i * 75;
      const minVal = activeTab === "revenue" ? 35 : activeTab === "leads" ? 700 : 3.0;
      const maxVal = activeTab === "revenue" ? 100 : activeTab === "leads" ? 2100 : 5.5;
      const normalized = (d.val - minVal) / (maxVal - minVal);
      const y = 145 - normalized * 110;
      return { x, y };
    });

    const pathD = points.reduce((acc, pt, i) => {
      if (i === 0) return `M ${pt.x} ${pt.y}`;
      const prev = points[i - 1];
      const cp1x = prev.x + (pt.x - prev.x) / 2;
      const cp2x = prev.x + (pt.x - prev.x) / 2;
      return `${acc} C ${cp1x} ${prev.y}, ${cp2x} ${pt.y}, ${pt.x} ${pt.y}`;
    }, "");

    const areaD = `${pathD} L ${points[points.length - 1].x} 155 L ${points[0].x} 155 Z`;

    return { pathD, areaD, points };
  };

  const { pathD, areaD, points } = getSvgPath();

  return (
    <div className="relative w-full max-w-[620px] mx-auto select-none">
      {/* Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />

      {/* Main Glass Cockpit Card */}
      <div className="relative rounded-2xl bg-slate-900/85 backdrop-blur-2xl border border-white/15 p-4 sm:p-6 shadow-2xl shadow-black/60 overflow-hidden">
        {/* Cockpit Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="h-4 w-[1px] bg-white/15 mx-1" />
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brandGreen animate-ping" />
              <span className="text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider">
                Marketing Analytics Command Center
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-primary/20 text-indigo-300 border border-primary/30">
              LIVE TELEMETRY
            </span>
          </div>
        </div>

        {/* Top KPI Ribbon (ROAS, CTR, CVR, CPA) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          <div className="bg-slate-800/60 rounded-xl p-2.5 border border-white/5 hover:border-indigo-500/30 transition-colors">
            <span className="text-[10px] font-mono text-slate-400 block">ROAS</span>
            <div className="flex items-baseline justify-between mt-0.5">
              <span className="text-base font-bold text-white font-mono">4.8x</span>
              <span className="text-[10px] font-semibold text-emerald-400 flex items-center">
                <ArrowUpRight className="w-2.5 h-2.5" /> +1.2x
              </span>
            </div>
          </div>

          <div className="bg-slate-800/60 rounded-xl p-2.5 border border-white/5 hover:border-cyan-500/30 transition-colors">
            <span className="text-[10px] font-mono text-slate-400 block">Avg CTR</span>
            <div className="flex items-baseline justify-between mt-0.5">
              <span className="text-base font-bold text-cyan-300 font-mono">3.62%</span>
              <span className="text-[10px] font-semibold text-emerald-400 flex items-center">
                <ArrowUpRight className="w-2.5 h-2.5" /> +28.4%
              </span>
            </div>
          </div>

          <div className="bg-slate-800/60 rounded-xl p-2.5 border border-white/5 hover:border-purple-500/30 transition-colors">
            <span className="text-[10px] font-mono text-slate-400 block">Conv. Rate</span>
            <div className="flex items-baseline justify-between mt-0.5">
              <span className="text-base font-bold text-purple-300 font-mono">4.85%</span>
              <span className="text-[10px] font-semibold text-emerald-400 flex items-center">
                <ArrowUpRight className="w-2.5 h-2.5" /> +18.7%
              </span>
            </div>
          </div>

          <div className="bg-slate-800/60 rounded-xl p-2.5 border border-white/5 hover:border-emerald-500/30 transition-colors">
            <span className="text-[10px] font-mono text-slate-400 block">Target CPA</span>
            <div className="flex items-baseline justify-between mt-0.5">
              <span className="text-base font-bold text-emerald-400 font-mono">$19.80</span>
              <span className="text-[10px] font-semibold text-emerald-400 flex items-center">
                -31.2%
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Chart Container */}
        <div className="bg-slate-950/70 rounded-xl p-3.5 border border-white/10 mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-semibold text-slate-200">
                {activeTab === "revenue" ? "Revenue Growth ($)" : activeTab === "leads" ? "Qualified Leads (MoM)" : "Return on Ad Spend"}
              </span>
            </div>
            {/* Chart Switcher */}
            <div className="flex bg-slate-800/80 p-0.5 rounded-lg border border-white/10 text-[10px] font-medium">
              <button
                onClick={() => setActiveTab("revenue")}
                className={`px-2 py-0.5 rounded-md transition-all ${
                  activeTab === "revenue"
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Revenue
              </button>
              <button
                onClick={() => setActiveTab("leads")}
                className={`px-2 py-0.5 rounded-md transition-all ${
                  activeTab === "leads"
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Leads
              </button>
              <button
                onClick={() => setActiveTab("roas")}
                className={`px-2 py-0.5 rounded-md transition-all ${
                  activeTab === "roas"
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ROAS
              </button>
            </div>
          </div>

          {/* SVG Animated Chart */}
          <div className="relative w-full h-[155px]">
            <svg viewBox="0 0 435 155" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="commandChartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.45" />
                  <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#0B1120" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#4F46E5" />
                  <stop offset="50%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              <line x1="30" y1="35" x2="405" y2="35" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              <line x1="30" y1="75" x2="405" y2="75" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              <line x1="30" y1="115" x2="405" y2="115" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              <line x1="30" y1="145" x2="405" y2="145" stroke="rgba(255,255,255,0.12)" />

              {/* Area Fill */}
              <motion.path
                key={`${activeTab}-area`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                d={areaD}
                fill="url(#commandChartGradient)"
              />

              {/* Line Stroke */}
              <motion.path
                key={`${activeTab}-line`}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                d={pathD}
                fill="none"
                stroke="url(#strokeGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Data points */}
              {points.map((pt, idx) => (
                <g key={idx} onMouseEnter={() => setHoveredPoint(idx)} onMouseLeave={() => setHoveredPoint(null)}>
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={hoveredPoint === idx ? 6 : 4}
                    className="fill-cyan-400 stroke-slate-900 stroke-2 cursor-pointer transition-all duration-200"
                  />
                  {hoveredPoint === idx && (
                    <g>
                      <rect
                        x={pt.x - 30}
                        y={pt.y - 30}
                        width="60"
                        height="22"
                        rx="4"
                        fill="rgba(15, 23, 42, 0.95)"
                        stroke="rgba(99, 102, 241, 0.6)"
                        strokeWidth="1"
                      />
                      <text
                        x={pt.x}
                        y={pt.y - 15}
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontSize="10"
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        {currentDataset[idx].label}
                      </text>
                    </g>
                  )}
                  <text
                    x={pt.x}
                    y="155"
                    textAnchor="middle"
                    fill="rgba(148, 163, 184, 0.8)"
                    fontSize="9"
                    fontFamily="monospace"
                  >
                    {currentDataset[idx].month}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Live Channel Stream Bar */}
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="bg-slate-800/40 rounded-lg p-2 flex items-center justify-between border border-white/5">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-indigo-400" />
              <span className="text-slate-300 font-medium truncate">Google Ads PMax</span>
            </div>
            <span className="font-mono text-emerald-400 font-bold">$43.4K (5.3x)</span>
          </div>

          <div className="bg-slate-800/40 rounded-lg p-2 flex items-center justify-between border border-white/5">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              <span className="text-slate-300 font-medium truncate">Meta Ads Scale</span>
            </div>
            <span className="font-mono text-emerald-400 font-bold">$29.4K (4.6x)</span>
          </div>
        </div>
      </div>

      {/* 12 FLOATING GLASS CARDS (Positioned in Orbit around Cockpit) */}

      {/* Floating Badge 1: Google Ads */}
      <motion.div
        animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-5 -left-4 sm:-left-8 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-indigo-400/40 shadow-lg shadow-indigo-500/20 flex items-center gap-2 z-20"
      >
        <div className="w-2 h-2 rounded-full bg-blue-400" />
        <span className="text-xs font-semibold text-white">Google Ads</span>
        <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-1 rounded">5.2x</span>
      </motion.div>

      {/* Floating Badge 2: Meta Ads */}
      <motion.div
        animate={{ y: [0, 9, 0], x: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -top-6 -right-4 sm:-right-6 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-purple-400/40 shadow-lg shadow-purple-500/20 flex items-center gap-2 z-20"
      >
        <div className="w-2 h-2 rounded-full bg-purple-400" />
        <span className="text-xs font-semibold text-white">Meta Ads</span>
        <span className="text-[10px] font-mono bg-purple-500/20 text-purple-300 px-1 rounded">+34% Conv</span>
      </motion.div>

      {/* Floating Badge 3: GA4 */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-24 -right-6 sm:-right-10 bg-slate-900/90 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-amber-400/30 shadow-md flex items-center gap-1.5 z-20"
      >
        <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
        <span className="text-[11px] font-semibold text-slate-200">GA4 Analytics</span>
      </motion.div>

      {/* Floating Badge 4: Power BI */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-28 -right-4 sm:-right-8 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-yellow-400/40 shadow-lg flex items-center gap-2 z-20"
      >
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="text-xs font-bold text-yellow-300 font-mono">Power BI</span>
      </motion.div>

      {/* Floating Badge 5: Tableau */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-4 right-8 bg-slate-900/90 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-indigo-400/30 shadow-md flex items-center gap-1.5 z-20"
      >
        <Layers className="w-3.5 h-3.5 text-indigo-400" />
        <span className="text-xs font-medium text-slate-200">Tableau BI</span>
      </motion.div>

      {/* Floating Badge 6: SQL */}
      <motion.div
        animate={{ y: [0, 7, 0], x: [0, 3, 0] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute -bottom-5 left-8 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-cyan-400/40 shadow-lg flex items-center gap-2 z-20"
      >
        <Database className="w-3.5 h-3.5 text-cyan-400" />
        <span className="text-xs font-bold text-cyan-300 font-mono">SQL Queries</span>
      </motion.div>

      {/* Floating Badge 7: Excel */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-24 -left-6 sm:-left-10 bg-slate-900/90 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-emerald-400/40 shadow-lg flex items-center gap-1.5 z-20"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="text-xs font-bold text-emerald-300 font-mono">Excel Models</span>
      </motion.div>

      {/* Floating Badge 8: SEO */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        className="absolute top-28 -left-5 sm:-left-9 bg-slate-900/90 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-teal-400/40 shadow-md flex items-center gap-1.5 z-20"
      >
        <Search className="w-3.5 h-3.5 text-teal-400" />
        <span className="text-[11px] font-semibold text-teal-300">SEO +42.6%</span>
      </motion.div>
    </div>
  );
};
