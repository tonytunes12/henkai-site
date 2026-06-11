"use client";
import { useState } from "react";
import CitySkyline from "./CitySkyline";
import CharacterCarousel from "./CharacterCarousel";

export default function PageLanding({ onNext, onViewAbout }: { onNext: () => void; onViewAbout: () => void }) {
  const [showCarousel, setShowCarousel] = useState(true);

  return (
    <div style={{
      position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "flex-start", overflow: "hidden",
      background: "radial-gradient(ellipse at 50% 20%, #2d0a5e 0%, #0b0218 45%, #000 100%)",
      padding: "20px",
    }}>
      <div className="corner corner-tl"/><div className="corner corner-tr"/>
      <div className="corner corner-bl"/><div className="corner corner-br"/>

      {/* Title Section */}
      <div className="fade-up" style={{ position: "relative", zIndex: 5, textAlign: "center", marginTop: 30, marginBottom: 20 }}>
        <h1 style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: "clamp(48px, 10vw, 100px)",
          fontWeight: 900,
          letterSpacing: "0.1em",
          background: "linear-gradient(160deg, #ffffff 0%, #e9d5ff 25%, #a855f7 55%, #6d1fd4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 0 50px rgba(168,85,247,0.55))",
          lineHeight: 1,
        }}>HENKAI</h1>

        <p style={{ fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: 7, color: "var(--violet)", opacity: 0.65, marginTop: 8 }}>
          変界 &nbsp;·&nbsp; 境界の彼方
        </p>
      </div>

      {/* Character Carousel */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", width: "100%", maxWidth: "1200px" }}>
        {showCarousel && <CharacterCarousel />}
      </div>

      {/* Story & Action Section */}
      <div className="fade-up" style={{ position: "relative", zIndex: 5, textAlign: "center", marginTop: 30, marginBottom: 40 }}>
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(12px, 2vw, 15px)", letterSpacing: "2.5px", color: "rgba(224,195,255,0.8)", marginTop: 0, marginBottom: 16, fontStyle: "italic" }}>
          "イーサリアムの下で新しい世界が目覚めています。"
        </p>

        <div className="divider-line"/>

        <p style={{ maxWidth: 560, margin: "16px auto 0", fontSize: "clamp(13px, 1.5vw, 14px)", lineHeight: 1.7, color: "rgba(210,180,255,0.65)", fontWeight: 300, letterSpacing: "0.4px" }}>
          現代のチェーンが台頭するはるか前に、変界として知られる古代文明が現実の境界を超えて存在していました。
          次元と次元の間に隠れた彼らは、無数の世界の興亡を見守りながら、時間に失われた知識、力、そして物語を保存していました。
          今、彼らの領域とイーサリアムを分ける結界が崩れ始めています。
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
          <button
            className="btn-primary"
            onClick={onNext}
            style={{ width: "auto", padding: "14px 48px", fontSize: 12, letterSpacing: 3 }}
          >
            招きに応じる
          </button>
          <button
            onClick={onViewAbout}
            style={{
              width: "auto", padding: "14px 48px", fontSize: 12, letterSpacing: 3,
              background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(123,47,255,0.1))",
              border: "1px solid rgba(168,85,247,0.4)",
              borderRadius: 2,
              color: "var(--violet)",
              cursor: "pointer",
              fontFamily: "'Cinzel', serif",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(168,85,247,0.25), rgba(123,47,255,0.15))";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(168,85,247,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(123,47,255,0.1))";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            変界について
          </button>
        </div>
      </div>

      {/* Social Links */}
      <div style={{
        position: "relative",
        zIndex: 5,
        marginTop: 40,
        marginBottom: 20,
        display: "flex",
        gap: 16,
        justifyContent: "center",
        alignItems: "center",
      }}>
        {/* X Link */}
        <a
          href="https://x.com/HENKAIworld"
          target="_blank"
          rel="noopener noreferrer"
          title="Follow us on X"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(123,47,255,0.1))",
            border: "1px solid rgba(168,85,247,0.4)",
            color: "var(--violet)",
            fontSize: 20,
            cursor: "pointer",
            transition: "all 0.3s ease",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(123,47,255,0.2))";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(168,85,247,0.4)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(123,47,255,0.1))";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          𝕏
        </a>

        {/* Discord Link */}
        <a
          href="https://discord.gg/GjMe6VwmQk"
          target="_blank"
          rel="noopener noreferrer"
          title="Join our Discord"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(123,47,255,0.1))",
            border: "1px solid rgba(168,85,247,0.4)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textDecoration: "none",
            padding: 8,
            boxSizing: "border-box",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(123,47,255,0.2))";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(168,85,247,0.4)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(123,47,255,0.1))";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <img
            src="/discord.svg"
            alt="Discord"
            style={{ width: "100%", height: "100%", filter: "brightness(0) saturate(100%) invert(82%) sepia(29%) saturate(745%) hue-rotate(238%) brightness(103%)" }}
          />
        </a>      </div>

      <CitySkyline />
    </div>
  );
}
