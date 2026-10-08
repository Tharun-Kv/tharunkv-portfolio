'use client';

import React, { useEffect, useRef } from 'react';

export function BackgroundAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let scrollY = window.scrollY;

    const respectReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // State
    const mouse = { x: w / 2, y: h / 2, targetX: w / 2, targetY: h / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    // 1. Neural Network / Data Particles
    const particles = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * 3000,
      z: Math.random() * 0.4 + 0.1,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      radius: Math.random() * 1.2 + 0.5,
    }));

    // 2. Computer Vision Bounding Boxes
    const cvBoxes = Array.from({ length: 12 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * 4000,
      w: Math.random() * 80 + 40,
      h: Math.random() * 80 + 40,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.01 + 0.005,
      z: Math.random() * 0.3 + 0.1
    }));

    // 3. Floating Data Streams
    const dataStreams = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * 4000,
      length: Math.random() * 100 + 50,
      speed: Math.random() * 0.5 + 0.2,
      z: Math.random() * 0.5 + 0.2
    }));

    const render = (time: number) => {
      ctx.clearRect(0, 0, w, h);

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Draw Engineering Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      const gridOffsetY = (scrollY * 0.15) % gridSize;
      
      ctx.beginPath();
      for (let x = 0; x < w; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = -gridSize; y < h + gridSize; y += gridSize) {
        ctx.moveTo(0, y - gridOffsetY);
        ctx.lineTo(w, y - gridOffsetY);
      }
      ctx.stroke();

      // Draw Data Streams
      ctx.lineWidth = 1.5;
      dataStreams.forEach(stream => {
        if (!respectReducedMotion) stream.y += stream.speed;
        if (stream.y > 4000) stream.y = -200;

        const sy = stream.y - scrollY * stream.z;
        if (sy > -200 && sy < h + 200) {
          const gradient = ctx.createLinearGradient(0, sy, 0, sy + stream.length);
          gradient.addColorStop(0, 'rgba(204, 255, 0, 0)');
          gradient.addColorStop(0.5, 'rgba(204, 255, 0, 0.03)');
          gradient.addColorStop(1, 'rgba(204, 255, 0, 0)');
          
          ctx.beginPath();
          ctx.moveTo(stream.x, sy);
          ctx.lineTo(stream.x, sy + stream.length);
          ctx.strokeStyle = gradient;
          ctx.stroke();
        }
      });

      // Draw Computer Vision Boxes
      cvBoxes.forEach(box => {
        if (!respectReducedMotion) box.phase += box.speed;
        const alpha = (Math.sin(box.phase) * 0.5 + 0.5) * 0.04;
        
        const bx = box.x;
        let by = box.y - scrollY * box.z;
        
        if (by < -500) box.y += 4500;
        if (by > h + 500) box.y -= 4500;

        if (by > -200 && by < h + 200) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.lineWidth = 1;
          const s = 8;
          
          ctx.beginPath();
          ctx.moveTo(bx, by + s); ctx.lineTo(bx, by); ctx.lineTo(bx + s, by);
          ctx.moveTo(bx + box.w - s, by); ctx.lineTo(bx + box.w, by); ctx.lineTo(bx + box.w, by + s);
          ctx.moveTo(bx, by + box.h - s); ctx.lineTo(bx, by + box.h); ctx.lineTo(bx + s, by + box.h);
          ctx.moveTo(bx + box.w, by + box.h - s); ctx.lineTo(bx + box.w, by + box.h); ctx.lineTo(bx + box.w - s, by + box.h);
          ctx.stroke();
          
          if (alpha > 0.03) {
             ctx.beginPath();
             ctx.moveTo(bx + box.w/2 - 3, by + box.h/2); ctx.lineTo(bx + box.w/2 + 3, by + box.h/2);
             ctx.moveTo(bx + box.w/2, by + box.h/2 - 3); ctx.lineTo(bx + box.w/2, by + box.h/2 + 3);
             ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.5})`;
             ctx.stroke();
          }
        }
      });

      // Draw Neural Network (Nodes & Lines)
      particles.forEach((p, i) => {
        if (!respectReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
        }
        
        if (p.x < -100) p.x = w + 100;
        if (p.x > w + 100) p.x = -100;
        
        if (p.y < 0) p.y = 3000;
        if (p.y > 3000) p.y = 0;

        let screenY = p.y - scrollY * p.z;
        
        if (screenY < -500) p.y += 3500;
        if (screenY > h + 500) p.y -= 3500;
        
        const dx = mouse.x - p.x;
        const dy = mouse.y - screenY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let interactX = 0, interactY = 0;
        if (dist < 200 && !respectReducedMotion) {
          const force = (200 - dist) / 200;
          interactX = -(dx / dist) * force * 10 * p.z;
          interactY = -(dy / dist) * force * 10 * p.z;
        }

        const renderX = p.x + interactX;
        const renderY = screenY + interactY;

        if (renderY > -100 && renderY < h + 100) {
          ctx.beginPath();
          ctx.arc(renderX, renderY, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
          ctx.fill();

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const p2ScreenY = p2.y - scrollY * p2.z;
            
            const d2x = mouse.x - p2.x;
            const d2y = mouse.y - p2ScreenY;
            const dist2Mouse = Math.sqrt(d2x*d2x + d2y*d2y);
            let i2x = 0, i2y = 0;
            if (dist2Mouse < 200 && !respectReducedMotion) {
               const force2 = (200 - dist2Mouse) / 200;
               i2x = -(d2x / dist2Mouse) * force2 * 10 * p2.z;
               i2y = -(d2y / dist2Mouse) * force2 * 10 * p2.z;
            }

            const r2X = p2.x + i2x;
            const r2Y = p2ScreenY + i2y;

            const distNodes = Math.hypot(renderX - r2X, renderY - r2Y);

            if (distNodes < 180) {
              const alpha = (1 - distNodes / 180) * 0.04;
              
              ctx.beginPath();
              ctx.moveTo(renderX, renderY);
              ctx.lineTo(r2X, r2Y);
              
              if (Math.random() < 0.0005 && !respectReducedMotion) {
                ctx.strokeStyle = `rgba(204, 255, 0, 0.25)`;
                ctx.lineWidth = 1.5;
              } else {
                ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.lineWidth = 1;
              }
              ctx.stroke();
            }
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#030303] overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />

      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-60"
        style={{ filter: 'blur(0.5px)', mixBlendMode: 'screen' }}
      />

      {/* Layer 6: Vignette / Gradients */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: 'radial-gradient(ellipse at center, transparent 0%, #030303 85%)' }}
      />
      
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none" style={{ background: 'linear-gradient(to top, #030303, transparent)' }} />
    </div>
  );
}
