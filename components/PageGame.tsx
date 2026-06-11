"use client";
import { useState } from "react";

export default function PageGame({ onBack }: { onBack: () => void }) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const characters = [
    { name: "陰の存在", role: "暗黒の力", desc: "次元の狭間から現れた謎めいた力" },
    { name: "光の守り手", role: "秩序の象徴", desc: "世界の均衡を保つ者" },
    { name: "混沌の子", role: "変化の使者", desc: "境界を超える存在" },
  ];

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      overflow: "hidden",
      background: "radial-gradient(ellipse at 50% 50%, #1f0845 0%, #060015 55%, #000 100%)",
      padding: "60px 20px",
    }}>
      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />

      <div className="moon" />
      <div className="moon-halo" />
      <div className="moon-halo2" />

      {/* Banner Section */}
      <div
        className="fade-up"
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          maxWidth: 1000,
          marginBottom: 60,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            borderRadius: 8,
            overflow: "hidden",
            border: "2px solid rgba(168,85,247,0.3)",
            boxShadow: "0 0 60px rgba(168,85,247,0.3), inset 0 0 30px rgba(123,47,255,0.1)",
            aspectRatio: "16/9",
            backgroundImage: "url('/henkai-banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          } as React.CSSProperties}
        >
          {/* Overlay gradient */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(0,0,0,0.4), rgba(123,47,255,0.2), rgba(0,0,0,0.4))",
              backdropFilter: "blur(0px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center", zIndex: 10 }}>
              <h2
                style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: "clamp(32px, 8vw, 64px)",
                  fontWeight: 900,
                  background: "linear-gradient(160deg, #ffffff 0%, #e9d5ff 25%, #a855f7 55%, #6d1fd4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 30px rgba(168,85,247,0.6))",
                  margin: 0,
                  textShadow: "0 0 40px rgba(168,85,247,0.5)",
                  letterSpacing: "0.15em",
                }}
              >
                HENKAI
              </h2>
              <p
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(12px, 2vw, 18px)",
                  letterSpacing: "3px",
                  color: "rgba(224,195,255,0.9)",
                  marginTop: 12,
                  fontStyle: "italic",
                }}
              >
                変界の領域へようこそ
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Characters Section */}
      <div
        className="fade-up"
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          maxWidth: 1000,
          marginBottom: 60,
        }}
      >
        <h3
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(24px, 4vw, 40px)",
            background: "linear-gradient(160deg, #ffffff 0%, #e9d5ff 25%, #a855f7 55%, #6d1fd4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textAlign: "center",
            marginBottom: 40,
            filter: "drop-shadow(0 0 20px rgba(168,85,247,0.4))",
          }}
        >
          変界の住人たち
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {characters.map((char, i) => (
            <div
              key={i}
              style={{
                background:
                  hoveredCard === i
                    ? "linear-gradient(135deg, rgba(29, 13, 51, 0.95) 0%, rgba(13, 5, 32, 0.95) 50%, rgba(5, 2, 15, 0.98) 100%)"
                    : "linear-gradient(135deg, rgba(29, 13, 51, 0.8) 0%, rgba(13, 5, 32, 0.8) 50%, rgba(5, 2, 15, 0.9) 100%)",
                border: hoveredCard === i ? "2px solid rgba(168,85,247,0.6)" : "2px solid rgba(168,85,247,0.3)",
                borderRadius: 4,
                padding: 32,
                textAlign: "center",
                position: "relative",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow:
                  hoveredCard === i
                    ? "0 0 50px rgba(168,85,247,0.5), inset 0 0 30px rgba(168,85,247,0.1), 0 0 80px rgba(123,47,255,0.25)"
                    : "0 0 30px rgba(168,85,247,0.3), inset 0 0 30px rgba(168,85,247,0.05), 0 0 60px rgba(123,47,255,0.15)",
              }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Frame Corner Decorations */}
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  width: 20,
                  height: 20,
                  border: "2px solid rgba(168, 85, 247, 0.6)",
                  borderRight: "none",
                  borderBottom: "none",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  width: 20,
                  height: 20,
                  border: "2px solid rgba(168, 85, 247, 0.6)",
                  borderLeft: "none",
                  borderBottom: "none",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  width: 20,
                  height: 20,
                  border: "2px solid rgba(168, 85, 247, 0.6)",
                  borderRight: "none",
                  borderTop: "none",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  width: 20,
                  height: 20,
                  border: "2px solid rgba(168, 85, 247, 0.6)",
                  borderLeft: "none",
                  borderTop: "none",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  fontSize: 48,
                  marginBottom: 16,
                  filter: hoveredCard === i ? "drop-shadow(0 0 15px rgba(168,85,247,0.5))" : "none",
                  transition: "filter 0.3s ease",
                }}
              >
                ⛩️
              </div>
              <h4
                style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: 20,
                  color: "var(--violet)",
                  marginBottom: 8,
                }}
              >
                {char.name}
              </h4>
              <p
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 12,
                  color: "var(--purple-bright)",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                {char.role}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(210,180,255,0.7)",
                  lineHeight: 1.6,
                }}
              >
                {char.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div
        className="fade-up"
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          maxWidth: 1000,
          marginBottom: 60,
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, rgba(61,26,110,0.2), rgba(8,1,18,0.7))",
            border: "2px solid rgba(168,85,247,0.25)",
            borderRadius: 6,
            padding: 40,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
            textAlign: "center",
          }}
        >
          {[
            { stat: "∞", label: "古い歴史" },
            { stat: "7", label: "つの派閥" },
            { stat: "∞", label: "終わらないストーリー" },
          ].map((item, i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: 40,
                  background: "linear-gradient(160deg, #ffffff 0%, #a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: 8,
                }}
              >
                {item.stat}
              </div>
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: 12, color: "rgba(210,180,255,0.7)", letterSpacing: 1 }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div
        className="fade-up"
        style={{
          position: "relative",
          zIndex: 5,
          display: "flex",
          gap: 16,
          justifyContent: "center",
          marginBottom: 40,
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={onBack}
          style={{
            width: "auto",
            padding: "14px 48px",
            fontSize: 12,
            letterSpacing: 3,
            background: "linear-gradient(135deg, rgba(123,47,255,0.2), rgba(61,26,110,0.15))",
            border: "1px solid rgba(168,85,247,0.4)",
            borderRadius: 2,
            color: "var(--violet)",
            cursor: "pointer",
            fontFamily: "'Cinzel', serif",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, rgba(123,47,255,0.3), rgba(61,26,110,0.25))";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(168,85,247,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, rgba(123,47,255,0.2), rgba(61,26,110,0.15))";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          戻る
        </button>
      </div>
    </div>
  );
}
