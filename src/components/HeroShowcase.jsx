import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Award, TrendingUp, Cpu, Globe, Users, CheckCircle2 } from 'lucide-react';

export default function HeroShowcase() {
  const featureChips = [
    { label: '50+ Tech & Science Programs', icon: Award },
    { label: '98.4% Placement Record', icon: TrendingUp },
    { label: 'AI & Robotics Research Hub', icon: Cpu },
    { label: '120+ Global Partnerships', icon: Globe },
  ];

  const floatingCards = [
    {
      title: 'Top Tier Placement',
      value: '98.4%',
      subtitle: 'Average Package ₹18.5 LPA',
      icon: TrendingUp,
      badge: '2025 Tier 1',
      delay: 0.2,
      position: 'top-[-20px] right-0 md:right-[-30px]',
    },
    {
      title: 'Active Research',
      value: '24+ Labs',
      subtitle: 'Quantum & Generative AI',
      icon: Cpu,
      badge: 'Live Operations',
      delay: 0.4,
      position: 'bottom-[40px] left-[10px] md:left-[-20px]',
    },
  ];

  return (
    <div className="relative flex flex-col justify-center min-h-[85vh] py-12 lg:py-20 z-20">
      {/* Top Tagline Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 w-max mb-6 shadow-xl"
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
        </span>
        <span className="text-xs font-bold tracking-widest text-slate-200 uppercase">
          Reimagining Higher Education
        </span>
      </motion.div>

      {/* Hero Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
      >
        Empowering Next-Gen <br className="hidden sm:block" />
        <span className="bg-gradient-to-r from-white via-indigo-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">
          Innovators & Leaders
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl mb-8"
      >
        Welcome to Aurora University. Fostering groundbreaking research, advanced engineering, 
        and business analytics in an ultra-modern luxury campus environment.
      </motion.p>

      {/* Feature Chips Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-wrap gap-2.5 max-w-xl mb-10"
      >
        {featureChips.map((chip, idx) => {
          const Icon = chip.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] backdrop-blur-lg border border-white/10 text-xs font-medium text-slate-200 transition-all duration-300 hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10 cursor-default"
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
        className="flex flex-wrap items-center gap-4"
      >
        {/* Primary Glass Pill Button */}
        <a
          href="#courses"
          className="group relative inline-flex items-center gap-3 px-7 py-3.5 text-sm font-bold text-white rounded-full overflow-hidden bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 shadow-[0_10px_30px_-5px_rgba(79,70,229,0.5)] hover:shadow-[0_15px_40px_-5px_rgba(99,102,241,0.7)] transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
          <span className="relative z-10">Explore Our Programs</span>
          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Secondary Glass Button */}
        <a
          href="#about"
          className="flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white rounded-full bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-xl border border-white/15 transition-all duration-300 hover:shadow-lg active:scale-95"
        >
          <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-400/30">
            <Play className="w-3 h-3 text-indigo-300 fill-indigo-300" />
          </div>
          <span>Virtual Campus Tour</span>
        </a>
      </motion.div>

      {/* Floating Glass Stat Cards Overlay */}
      <div className="hidden xl:block">
        {floatingCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: card.delay, ease: [0.16, 1, 0.3, 1] }}
              className={`absolute ${card.position} p-4 rounded-2xl bg-white/[0.08] backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float-slow hover:border-indigo-400/50 transition-colors w-60 z-30 pointer-events-auto`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-indigo-300" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {card.badge}
                </span>
              </div>
              <div className="text-2xl font-extrabold text-white tracking-tight">
                {card.value}
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-0.5">
                {card.title}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {card.subtitle}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
