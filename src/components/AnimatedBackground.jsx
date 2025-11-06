// src/components/AnimatedBackground.jsx
import React, { useEffect, useRef } from "react";

/**
 * AnimatedBackground
 * - Full-screen canvas with subtle floating particles
 * - Light CPU/GPU usage, adapts to screen size
 * - Parallax reacts to mouse movement
 * - Respects prefers-reduced-motion
 */
export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const reduceMotion = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotion.current = mq.matches;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      spawnParticles();
    }

    function handleMouseMove(e) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const density = Math.min(0.00012 * width * height, 120); // cap particle count

    function spawnParticles() {
      const count = Math.floor(density);
      const pr = window.devicePixelRatio || 1;
      ctx.setTransform(pr, 0, 0, pr, 0, 0);
      canvas.width = Math.floor(width * pr);
      canvas.height = Math.floor(height * pr);
      ctx.scale(pr, pr);

      particlesRef.current = new Array(count).fill(0).map(() => newParticle());
    }

    function newParticle() {
      // Colors tuned to your gradient palette (blue/indigo/slate)
      const palette = [
        "rgba(59,130,246,0.4)", // blue-500
        "rgba(99,102,241,0.35)", // indigo-500
        "rgba(14,165,233,0.3)", // sky-500
        "rgba(2,132,199,0.25)", // cyan-600
        "rgba(148,163,184,0.25)", // slate-400
      ];
      const size = rand(1.2, 3.2);
      const speed = rand(0.15, 0.6);
      const angle = rand(0, Math.PI * 2);
      return {
        x: rand(0, width),
        y: rand(0, height),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size,
        color: palette[Math.floor(rand(0, palette.length))],
        wobble: rand(0.5, 1.5),
        wobblePhase: rand(0, Math.PI * 2),
      };
    }

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      const { x: mx, y: my } = mouseRef.current;
      const cx = width / 2;
      const cy = height / 2;
      const parallaxX = ((mx || cx) - cx) / 50; // subtle parallax shift
      const parallaxY = ((my || cy) - cy) / 50;

      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // update
        if (!reduceMotion.current) {
          p.x += p.vx;
          p.y += p.vy;
          p.wobblePhase += 0.015 * p.wobble;
        }

        // Wrap around edges for an infinite flow effect
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // draw
        const wobbleX = Math.cos(p.wobblePhase) * 1.2;
        const wobbleY = Math.sin(p.wobblePhase) * 1.2;
        const drawX = p.x + parallaxX + wobbleX;
        const drawY = p.y + parallaxY + wobbleY;

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    }

    spawnParticles();
    rafRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* optional radial vignette for depth */}
      <div className="" />
    </div>
  );
}
