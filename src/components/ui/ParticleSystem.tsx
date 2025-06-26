"use client";

import { useEffect, useRef, useCallback, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export default function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);

  const colors = ["#D19EA3", "#9C92AC", "#E5E7EB", "#F3F4F6", "#D1D5DB"];

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const scale = 0.5; // Lower resolution canvas
    canvas.width = window.innerWidth * scale;
    canvas.height = window.innerHeight * scale;
    const ctx = canvas.getContext("2d");
    ctx?.scale(scale, scale);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isDesktop = window.innerWidth > 768;
    if (!isDesktop) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    handleResize();

    let resizeTimeout: NodeJS.Timeout;
    const throttledResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", throttledResize);

    const particles: Particle[] = [];
    const count = 6; // Small number for performance
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 20 + 15,
        opacity: Math.random() * 0.4 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      if (!isVisibleRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= p.size || p.x >= window.innerWidth - p.size) p.vx *= -1;
        if (p.y <= p.size || p.y >= window.innerHeight - p.size) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // Simple glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size + 2, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * 0.1;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    return () => {
      window.removeEventListener("resize", throttledResize);
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [handleResize]);

  // Only render on desktop
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);

  if (!isDesktop) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-5"
      style={{ background: "transparent", width: "100%", height: "100%" }}
    />
  );
}
