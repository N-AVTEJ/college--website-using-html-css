import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, User, GraduationCap, ArrowRight, Check, Sparkles } from 'lucide-react';

export default function GlassLoginCard() {
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'register'
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    department: 'Engineering & CS',
  });

  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Mouse Hover 3D Tilt Effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`[Demo Mode] ${activeTab === 'login' ? 'Signing in' : 'Creating account'} with ${formData.email}`);
  };

  return (
    <div className="relative flex items-center justify-center py-6 lg:py-12 z-30">
      {/* 3D Tilt Container */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="relative w-full max-w-[440px] rounded-[32px] p-8 md:p-10 glass-panel border border-white/15 overflow-hidden group shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6),0_0_40px_rgba(255,255,255,0.06)]"
      >
        {/* Subtle Glass Reflection Line */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />
        <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Tabs */}
        <div className="flex items-center justify-between p-1 rounded-2xl bg-white/[0.05] border border-white/10 mb-8 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${
              activeTab === 'login'
                ? 'bg-gradient-to-r from-indigo-500/80 to-cyan-500/80 text-white shadow-lg border border-white/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('register')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${
              activeTab === 'register'
                ? 'bg-gradient-to-r from-indigo-500/80 to-cyan-500/80 text-white shadow-lg border border-white/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-6 text-center">
          <motion.h2
            key={activeTab}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-extrabold text-white tracking-tight"
          >
            {activeTab === 'login' ? 'Welcome Back' : 'Join Aurora University'}
          </motion.h2>
          <p className="text-xs text-slate-300/80 mt-1.5 font-medium">
            {activeTab === 'login'
              ? 'Access your student, faculty & applicant dashboard'
              : 'Start your academic journey with us today'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <AnimatePresence mode="wait">
            {activeTab === 'register' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                {/* Full Name Input */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Full Name
                  </label>
                  <div className="relative flex items-center">
                    <User className="absolute left-4 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 text-sm text-white placeholder-slate-400/60 rounded-2xl glass-input outline-none"
                    />
                  </div>
                </div>

                {/* Department Selection */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Department
                  </label>
                  <div className="relative flex items-center">
                    <GraduationCap className="absolute left-4 w-4 h-4 text-slate-400" />
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 text-sm text-white bg-slate-900/90 rounded-2xl glass-input outline-none cursor-pointer"
                    >
                      <option value="Engineering & CS">Engineering & CS</option>
                      <option value="AI & Data Science">AI & Data Science</option>
                      <option value="Sciences & Fintech">Sciences & Fintech</option>
                      <option value="Business Management">Business Management</option>
                      <option value="Fine Arts & Design">Fine Arts & Design</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Email Input */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-4 w-4 h-4 text-slate-400" />
              <input
                type="email"
                required
                placeholder="student@aurora.edu.in"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-11 pr-4 py-3 text-sm text-white placeholder-slate-400/60 rounded-2xl glass-input outline-none"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300">
                Password
              </label>
              {activeTab === 'login' && (
                <a
                  href="#forgot"
                  onClick={(e) => { e.preventDefault(); alert("Password reset link has been sent to your email!"); }}
                  className="text-xs font-semibold text-indigo-300 hover:text-white transition-colors"
                >
                  Forgot Password?
                </a>
              )}
            </div>
            <div className="relative flex items-center">
              <Lock className="absolute left-4 w-4 h-4 text-slate-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-11 pr-11 py-3 text-sm text-white placeholder-slate-400/60 rounded-2xl glass-input outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-slate-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          {activeTab === 'login' && (
            <div className="flex items-center gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => setRememberMe(!rememberMe)}
                className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all ${
                  rememberMe
                    ? 'bg-indigo-500 border-indigo-400 text-white'
                    : 'border-white/20 bg-white/5 hover:border-white/40'
                }`}
              >
                {rememberMe && <Check className="w-3 h-3 stroke-[3]" />}
              </button>
              <span className="text-xs text-slate-300 font-medium">
                Keep me signed in on this device
              </span>
            </div>
          )}

          {/* Primary Action Button */}
          <button
            type="submit"
            className="group relative w-full py-3.5 mt-2 text-sm font-bold text-white rounded-full overflow-hidden bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 shadow-[0_10px_25px_-5px_rgba(99,102,241,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(99,102,241,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-white/25 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>{activeTab === 'login' ? 'Sign In to Portal' : 'Create Student Account'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <span className="relative px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-900/60 backdrop-blur-md rounded-full border border-white/10">
            Or Continue With
          </span>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => alert("Google Sign-In initiated.")}
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/15 text-xs font-semibold text-slate-200 hover:text-white transition-all duration-200 active:scale-95"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.9 5 12 5z" />
              <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z" />
              <path fill="#FBBC05" d="M5.3 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.6 7.3C.6 9.3 0 10.6 0 12s.6 2.7 1.6 4.7l3.7-1.9z" />
              <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.3-6.7-5.3L1.6 16C3.5 19.8 7.4 23 12 23z" />
            </svg>
            <span>Google</span>
          </button>

          <button
            type="button"
            onClick={() => alert("GitHub Sign-In initiated.")}
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/15 text-xs font-semibold text-slate-200 hover:text-white transition-all duration-200 active:scale-95"
          >
            <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </button>
        </div>

        {/* Bottom Toggle Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-300 font-medium">
            {activeTab === 'login' ? "Don't have an account?" : 'Already registered?'}
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'login' ? 'register' : 'login')}
              className="ml-1.5 font-bold text-indigo-300 hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>{activeTab === 'login' ? 'Create Account' : 'Sign In'}</span>
              <Sparkles className="w-3 h-3 text-cyan-300" />
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
