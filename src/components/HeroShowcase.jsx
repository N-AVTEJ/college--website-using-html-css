import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Award, TrendingUp, Cpu, Globe, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HeroShowcase() {
  const featureChips = [
    { label: '50+ Tech & Science Programs', icon: Award },
    { label: '98.4% Placement Record', icon: TrendingUp },
    { label: 'AI & Robotics Research Hub', icon: Cpu },
    { label: '120+ Global Partnerships', icon: Globe },
  ];

  return (
    <div className="relative flex flex-col justify-center min-h-[85vh] py-12 lg:py-16 z-20">
      
      {/* 🟢 Live Campus Status Chip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill-vision w-max mb-6 shadow-xl"
      >
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
        </span>
        <span className="text-xs font-bold tracking-widest text-slate-200 uppercase">
          Live Campus Operations '26
        </span>
      </motion.div>

      {/* Hero Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 drop-shadow-[0_0_35px_rgba(165,180,252,0.25)]"
      >
        Empowering <br />
        Next-Generation <br />
        <span className="bg-gradient-to-r from-white via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
          Innovators & Leaders
        </span>
      </motion.h1>

      {/* Subtitle Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl mb-8"
      >
        Aurora University combines world-class academic rigors, AI quantum research laboratories, 
        and industry-leading placements in a luxury glassmorphism digital campus.
      </motion.p>

      {/* Glass Feature Chips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-wrap gap-2.5 max-w-xl mb-8"
      >
        {featureChips.map((chip, idx) => {
          const Icon = chip.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-vision text-xs font-semibold text-slate-200 hover:text-white cursor-default"
            >
              <Icon className="w-3.5 h-3.5 text-indigo-400" />
              <span>{chip.label}</span>
            </div>
          );
        })}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-wrap items-center gap-4 mb-8"
      >
        {/* Primary Button */}
        <a
          href="#courses"
          className="group relative inline-flex items-center gap-3 px-7 py-3.5 text-sm font-bold text-white rounded-full overflow-hidden bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 shadow-[0_10px_35px_-5px_rgba(79,70,229,0.5)] hover:shadow-[0_20px_45px_-5px_rgba(99,102,241,0.75)] transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-light-sweep pointer-events-none" />
          <span className="relative z-10">Explore Our Programs</span>
          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Floating Glass Campus Tour Badge */}
        <a
          href="#about"
          className="group flex items-center gap-3 px-5 py-3 rounded-full glass-pill-vision text-xs font-bold text-slate-200 hover:text-white transition-all duration-300 hover:scale-105"
        >
          <div className="w-7 h-7 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center group-hover:bg-indigo-500/40">
            <Play className="w-3 h-3 text-cyan-300 fill-cyan-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold leading-tight">Virtual Campus Tour</span>
            <span className="text-[9px] text-slate-400 font-medium flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5 text-indigo-400" /> Main Campus
            </span>
          </div>
        </a>
      </motion.div>

      {/* Relocated Placement KPI Glass Banner (Relocated right below the CTA buttons for clean layout) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="p-5 rounded-3xl glass-panel-vision border border-white/15 max-w-xl grid grid-cols-3 gap-4 items-center shadow-2xl"
      >
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">98.4%</span>
          <span className="text-[11px] font-bold text-indigo-300 mt-0.5">Placement Rate</span>
        </div>
        
        <div className="flex flex-col border-x border-white/10 px-4">
          <span className="text-sm sm:text-base font-bold text-white flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Top Tier
          </span>
          <span className="text-[11px] font-medium text-slate-300 mt-0.5">Placements</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm sm:text-base font-extrabold text-emerald-300">₹18.5 LPA</span>
          <span className="text-[11px] font-medium text-slate-300 mt-0.5">Average Package</span>
        </div>
      </motion.div>

    </div>
  );
}
