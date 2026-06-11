"use client";
import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    type Star = { x: number; y: number; r: number; alpha: number; delta: number; speed: number };
    let stars: Star[] = [];
    let raf: number;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 320 }, () => ({
        x:     Math.random() * canvas.width,
        y:     Math.random() * canvas.height,
        r:     Math.random() * 1.4 + 0.2,
        alpha: Math.random(),
        delta: (Math.random() * 0.018 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
        speed: Math.random() * 0.07,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        s.alpha += s.delta;
        if (s.alpha > 1 || s.alpha < 0.02) s.delta *= -1;
        s.y -= s.speed;
        if (s.y < -2) s.y = canvas.height + 2;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210,185,255,${Math.max(0, Math.min(1, s.alpha))})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      suppressHydrationWarning
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
    />
  );
}
