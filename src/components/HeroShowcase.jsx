import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Award, TrendingUp, Cpu, Globe, MapPin, Sparkles } from 'lucide-react';

export default function HeroShowcase() {
  const featureChips = [
    { label: '50+ Tech & Science Programs', icon: Award },
    { label: '98.4% Placement Record', icon: TrendingUp },
    { label: 'AI & Robotics Research Hub', icon: Cpu },
    { label: '120+ Global Partnerships', icon: Globe },
  ];

  return (
    <div className="relative flex flex-col justify-center min-h-[85vh] py-12 lg:py-20 z-20">
      
      {/* 🟢 Live Campus Status Chip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill-vision w-max mb-8 shadow-xl"
      >
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
        </span>
        <span className="text-xs font-bold tracking-widest text-slate-200 uppercase">
          Live Campus Operations '26
        </span>
      </motion.div>

      {/* Hero Headline with Breathing Room & Soft Text Glow */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-8 drop-shadow-[0_0_35px_rgba(165,180,252,0.25)]"
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
        className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl mb-10"
      >
        Aurora University combines world-class academic rigors, AI quantum research laboratories, 
        and industry-leading placements in a luxury glassmorphism digital campus.
      </motion.p>

      {/* Glass Feature Chips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-wrap gap-3 max-w-xl mb-12"
      >
        {featureChips.map((chip, idx) => {
          const Icon = chip.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill-vision text-xs font-semibold text-slate-200 hover:text-white cursor-default"
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
        className="flex flex-wrap items-center gap-5"
      >
        {/* Primary Button with Light Sweep */}
        <a
          href="#courses"
          className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm font-bold text-white rounded-full overflow-hidden bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 shadow-[0_10px_35px_-5px_rgba(79,70,229,0.5)] hover:shadow-[0_20px_45px_-5px_rgba(99,102,241,0.75)] transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
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

      {/* Floating De-cluttered Premium KPI Glass Cards */}
      <div className="hidden xl:block">
        
        {/* KPI Card 1: 98.4% Placement Rate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="absolute top-[-30px] right-[-20px] p-5 rounded-3xl glass-card-vision animate-float-vision-slow w-64 z-30 pointer-events-auto border border-white/20"
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-300">
              Placement Rate
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Top Tier
            </span>
          </div>
          <div className="text-3xl font-extrabold text-white tracking-tight">
            98.4%
          </div>
          <div className="w-full h-[1px] bg-white/10 my-2" />
          <div className="text-xs font-semibold text-slate-300">
            Top Tier Placements
          </div>
          <div className="text-[11px] text-indigo-300/80 font-medium mt-0.5">
            Average Package ₹18.5 LPA
          </div>
        </motion.div>

        {/* Feature Badge 2: Quantum & AI Lab */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="absolute bottom-[20px] left-[-30px] p-4 rounded-2xl glass-card-vision animate-float-vision-medium z-30 pointer-events-auto flex items-center gap-3 border border-white/20"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500/30 to-cyan-500/30 border border-indigo-400/30 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-cyan-300" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Quantum & Generative AI</div>
            <div className="text-[10px] font-medium text-slate-400">24+ Active Research Labs</div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
