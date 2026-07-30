import React, { useState } from 'react';
import { Sparkles, Compass, BookOpen, GraduationCap, Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Compass },
    { name: 'About', href: '#about', icon: ShieldCheck },
    { name: 'History', href: '#history', icon: BookOpen },
    { name: 'Courses', href: '#courses', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <motion.header 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5 rounded-full bg-white/[0.06] backdrop-blur-2xl border border-white/15 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-white/[0.08]">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-slate-950/90 backdrop-blur-md flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-indigo-300 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-wider text-white bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
              AURORA
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-indigo-300/80 -mt-1 uppercase">
              University
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-all duration-200"
              >
                <Icon className="w-4 h-4 text-indigo-400/80" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Badge */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Admissions Open '26</span>
          </div>

          <a 
            href="#courses"
            className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 rounded-full group overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] active:scale-95"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <span className="relative z-10 flex items-center gap-1.5">
              Explore Campus
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-white/10 text-white border border-white/15 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 max-w-7xl mx-auto bg-slate-950/90 backdrop-blur-3xl border border-white/15 rounded-3xl p-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-200 hover:text-white rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 transition-all"
                  >
                    <Icon className="w-5 h-5 text-indigo-400" />
                    <span>{link.name}</span>
                  </a>
                );
              })}

              <a
                href="#courses"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full text-center py-3 text-sm font-bold uppercase tracking-wider text-white rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/30"
              >
                Explore Campus
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
