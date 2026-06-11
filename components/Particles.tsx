"use client";
import { useEffect } from "react";

const COLORS = [
  "rgba(168,85,247,0.55)",
  "rgba(123,47,255,0.45)",
  "rgba(192,132,252,0.38)",
  "rgba(255,255,255,0.22)",
  "rgba(100,50,200,0.4)",
];

export default function Particles() {
  useEffect(() => {
    const spawn = () => {
      const p = document.createElement("div");
      p.className = "particle";
      const size = Math.random() * 4 + 1;
      const dur  = Math.random() * 18 + 12;
      const del  = Math.random() * 4;
      p.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}vw;
        background:${COLORS[Math.floor(Math.random() * COLORS.length)]};
        animation-duration:${dur}s;
        animation-delay:${del}s;
        box-shadow:0 0 ${size * 2}px rgba(168,85,247,0.4);
      `;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), (dur + del) * 1000 + 1000);
    };

    for (let i = 0; i < 24; i++) spawn();
    const iv = setInterval(spawn, 2200);
    return () => clearInterval(iv);
  }, []);

  return null;
}
