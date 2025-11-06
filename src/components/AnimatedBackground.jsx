// src/components/AnimatedBackground.jsx
import React, { useEffect, useRef } from "react";

/**
 * AnimatedBackground — Code Syntax Drift
 * - Full-screen canvas rendering gently drifting code tokens (keywords, braces, operators)
 * - Subtle motion with parallax; low visual noise for readability behind content
 * - Respects prefers-reduced-motion
 */
export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const itemsRef = useRef([]);
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
      spawnItems();
    }

    function handleMouseMove(e) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // density scales with area but is capped for performance
    const baseDensity = 0.00005; // lower than particles for subtlety
    function getCount() {
      const count = Math.min(Math.floor(baseDensity * width * height), 90);
      return reduceMotion.current ? Math.floor(count * 0.4) : count;
    }

    const tokenPalette = [
      // keywords
      { text: "const", color: "rgba(99,102,241,0.55)" }, // indigo-500
      { text: "let", color: "rgba(99,102,241,0.55)" },
      { text: "</>", color: "rgba(99,102,241,0.55)" },
      { text: "return", color: "rgba(99,102,241,0.55)" },
      // types / identifiers
      { text: "<div>", color: "rgba(56,189,248,0.45)" }, // sky-400
      { text: "props", color: "rgba(148,163,184,0.5)" }, // slate-400
      { text: "state", color: "rgba(148,163,184,0.5)" },
      // strings / numbers
      { text: '"hello"', color: "rgba(244,114,182,0.45)" }, // pink-400
      { text: "101", color: "rgba(250,204,21,0.45)" }, // yellow-400
      // operators / braces
      { text: "()", color: "rgba(148,163,184,0.45)" },
      { text: "{}", color: "rgba(148,163,184,0.45)" },
      { text: "=>", color: "rgba(148,163,184,0.45)" },
      { text: "===", color: "rgba(148,163,184,0.45)" },
      { text: "[]", color: "rgba(148,163,184,0.45)" },
    ];

    function spawnItems() {
      const count = getCount();
      const pr = window.devicePixelRatio || 1;
      ctx.setTransform(pr, 0, 0, pr, 0, 0);
      canvas.width = Math.floor(width * pr);
      canvas.height = Math.floor(height * pr);
      ctx.scale(pr, pr);

      itemsRef.current = new Array(count).fill(0).map(() => newToken());
    }

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    function pick(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function newToken() {
      const t = pick(tokenPalette);
      const size = random(12, 20); // px
      const speed = random(0.12, 0.45);
      const angle = random(-Math.PI / 8, Math.PI / 8); // slight tilt
      const dir = Math.random() < 0.5 ? -1 : 1;
      return {
        x: random(0, width),
        y: random(0, height),
        vx: dir * speed * random(0.4, 1),
        vy: speed,
        size,
        text: t.text,
        color: t.color,
        rotate: angle,
        wobble: random(0.3, 1.2),
        wobblePhase: random(0, Math.PI * 2),
        alpha: random(0.5, 0.95),
      };
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      const { x: mx, y: my } = mouseRef.current;
      const cx = width / 2;
      const cy = height / 2;
      const parallaxX = ((mx || cx) - cx) / 60; // very subtle
      const parallaxY = ((my || cy) - cy) / 60;

      const items = itemsRef.current;

      for (let i = 0; i < items.length; i++) {
        const it = items[i];

        if (!reduceMotion.current) {
          it.x += it.vx;
          it.y += it.vy;
          it.wobblePhase += 0.012 * it.wobble;
        }

        // wrap around
        const margin = 20;
        if (it.x < -margin) it.x = width + margin;
        if (it.x > width + margin) it.x = -margin;
        if (it.y > height + margin) {
          // respawn near the top to keep flow downward
          it.y = -margin;
          it.x = random(0, width);
        }

        // draw
        const wobbleX = Math.cos(it.wobblePhase) * 1.1;
        const wobbleY = Math.sin(it.wobblePhase) * 0.6;
        const drawX = it.x + parallaxX + wobbleX;
        const drawY = it.y + parallaxY + wobbleY;

        ctx.save();
        ctx.globalAlpha = it.alpha;
        ctx.translate(drawX, drawY);
        ctx.rotate(it.rotate);
        ctx.fillStyle = it.color;
        ctx.font = `${it.size}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(it.text, 0, 0);
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(step);
    }

    spawnItems();
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
      {/* subtle radial vignette for depth */}
      <div />
    </div>
  );
}
