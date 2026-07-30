import React, { useEffect, useRef, useState } from 'react';

export default function AmbientBackground() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Tiny Glowing Particles Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particlesCount = Math.min(Math.floor(window.innerWidth / 20), 70);
    const particles = [];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.8 + 0.5,
        color: `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})`,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3 - 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.6)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Existing Background Image Preserved Exactly */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('/download.png')` }}
      />

      {/* Required Subtle Dark Overlay for Optimal Readability */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55))'
        }}
      />

      {/* Secondary Radial Vignette for Depth */}
      <div className="absolute inset-0 z-10 bg-radial from-transparent via-slate-950/20 to-slate-950/70" />

      {/* Mouse Cursor Follow Ambient Spotlight Glow */}
      <div 
        className="absolute z-10 w-[550px] h-[550px] rounded-full transition-transform duration-500 ease-out blur-[120px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(129,140,248,0.35) 0%, rgba(59,130,246,0.15) 50%, transparent 70%)',
          left: `${mousePos.x - 275}px`,
          top: `${mousePos.y - 275}px`,
        }}
      />

      {/* Floating Glass Gradient Orbs */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-600/20 to-cyan-500/20 blur-[100px] animate-pulse-glow z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-purple-600/15 to-blue-600/20 blur-[110px] animate-float-slow z-10" />

      {/* Dynamic Glowing Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-20 opacity-80" />
    </div>
  );
}
