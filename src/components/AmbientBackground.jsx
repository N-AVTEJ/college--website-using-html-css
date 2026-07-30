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

  // Tiny Floating Glass Particles Canvas
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

    const particlesCount = Math.min(Math.floor(window.innerWidth / 22), 65);
    const particles = [];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.6 + 0.6,
        color: `rgba(255, 255, 255, ${Math.random() * 0.35 + 0.15})`,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25 - 0.08,
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
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Existing Background Image (Preserved 100% Intact) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-[1.02]"
        style={{ backgroundImage: `url('/download.png')` }}
      />

      {/* 2. Black Overlay (35%) */}
      <div className="absolute inset-0 z-10 bg-black/35 backdrop-brightness-[0.92]" />

      {/* 3. Purple Glow Layer */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[130px] z-10 animate-float-vision-slow" />

      {/* 4. Blue / Cyan Glow Layer */}
      <div className="absolute bottom-1/3 right-1/4 w-[550px] h-[550px] rounded-full bg-cyan-500/20 blur-[140px] z-10 animate-pulse" />

      {/* 5. Noise Texture (2% - 4% opacity) for Apple VisionOS / Mica Depth */}
      <div className="absolute inset-0 z-20 bg-noise pointer-events-none opacity-60" />

      {/* 6. Cursor Follow Glowing Spotlight */}
      <div 
        className="absolute z-20 w-[500px] h-[500px] rounded-full transition-transform duration-700 ease-out blur-[110px] opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(165,180,252,0.4) 0%, rgba(59,130,246,0.15) 55%, transparent 75%)',
          left: `${mousePos.x - 250}px`,
          top: `${mousePos.y - 250}px`,
        }}
      />

      {/* 7. Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-30 opacity-75" />
    </div>
  );
}
