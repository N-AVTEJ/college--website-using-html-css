import React from 'react';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import HeroShowcase from './components/HeroShowcase';
import GlassLoginCard from './components/GlassLoginCard';
import SectionsShowcase from './components/SectionsShowcase';

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-indigo-500/30 selection:text-white font-sans overflow-x-hidden">
      {/* Background with download.png preserved, dark linear overlay & ambient particle glow */}
      <AmbientBackground />

      {/* Floating Glassmorphism Navbar */}
      <Navbar />

      {/* Main Hero Container - Two Column 60/40 Desktop Layout */}
      <main id="home" className="relative z-20 pt-24 md:pt-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - 60% Width Showcase (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <HeroShowcase />
          </div>

          {/* Right Column - 40% Width Floating Luxury Glass Login Card (lg:col-span-5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <GlassLoginCard />
          </div>

        </div>
      </main>

      {/* Rest of Website Sections (About, History, Courses, Contact, Footer) */}
      <SectionsShowcase />
    </div>
  );
}
