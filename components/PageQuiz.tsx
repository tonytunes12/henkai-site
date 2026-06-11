"use client";
import { useState } from "react";

const QUESTIONS = [
  {
    question: "変界はどのチェーンの上に存在し、デジタルの最前線の下に隠れているのでしょうか?",
    answers: ["ビットコイン", "イーサリアム", "ソラナ", "ポリゴン"],
    correctIndex: 1,
  },
  {
    question: "変界の住民たちめがイーサリアムへの渡源をどのように表現しているのでしょうか?",
    answers: [
      "新しい士地を下した整理者として",
      "破壊から遭難した難民として",
      "新しい文明を確立したパイオニアとして",
      "利益を探求した商人として",
    ],
    correctIndex: 2,
  },
  {
    question: "変界の住民、すべてが由世界から持っているものは何でしょうか?",
    answers: [
      "詳世、能力、細密の続き",
      "次元的火で锻えた兵器",
      "隐れた宝物への地図",
      "不死を編む封符",
    ],
    correctIndex: 0,
  },
  {
    question: "変界というものを超えて、どのように記載されているのでしょうか?",
    answers: [
      "イーサリアム上の取引プラットフォーム",
      "いきいきとしたアニメ活洋的知的財産",
      "分散制取引程プロトコル",
      "門店秘右その他プロジェクト",
    ],
    correctIndex: 1,
  },
];

export default function PageQuiz({ onPass }: { onPass: () => void }) {
  const [currentQ, setCurrentQ]     = useState(0);
  const [selected, setSelected]     = useState<number | null>(null);
  const [revealed, setRevealed]     = useState(false);
  const [showFail, setShowFail]     = useState(false);

  const q   = QUESTIONS[currentQ];
  const pct = (currentQ / QUESTIONS.length) * 100;

  const handleSelect = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
  };

  const handleNext = () => {
    if (selected === null || revealed) return;
    setRevealed(true);

    if (selected !== q.correctIndex) {
      setTimeout(() => setShowFail(true), 700);
      return;
    }

    setTimeout(() => {
      if (currentQ + 1 >= QUESTIONS.length) {
        onPass();
      } else {
        setCurrentQ(c => c + 1);
        setSelected(null);
        setRevealed(false);
      }
    }, 800);
  };

  const retry = () => {
    setCurrentQ(0);
    setSelected(null);
    setRevealed(false);
    setShowFail(false);
  };

  const optClass = (i: number) => {
    let base = "answer-opt";
    if (!revealed) return selected === i ? base + " selected" : base;
    if (i === q.correctIndex) return base + " correct";
    if (i === selected)       return base + " wrong";
    return base;
  };

  return (
    <div style={{
      position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", padding: "60px 20px", overflow: "hidden",
      background: "radial-gradient(ellipse at 15% 60%, #1c0840 0%, #050010 55%, #000 100%)",
    }}>
      <div className="corner corner-tl"/><div className="corner corner-tr"/>
      <div className="corner corner-bl"/><div className="corner corner-br"/>

      {/* Fail overlay - Game Over Screen */}
      {showFail && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 500,
          display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)",
        }}>
          <div className="fade-up" style={{
            background: "linear-gradient(135deg, #2d0a1f, #1e0830, #12042a)",
            border: "2px solid rgba(255,68,102,0.4)", borderRadius: 4,
            padding: "60px 48px", maxWidth: 480, width: "90%", textAlign: "center",
            boxShadow: "0 0 80px rgba(255,68,102,0.25), inset 0 0 30px rgba(255,68,102,0.05)", 
            position: "relative",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, transparent, #ff4466, #ff8899, transparent)" }}/>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, transparent, #ff4466, transparent)" }}/>
            
            <div style={{ fontSize: 48, marginBottom: 20, animation: "pulse 2s ease-in-out infinite" }}>⛩️</div>
            
            <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: 24, color: "var(--danger)", marginBottom: 8, letterSpacing: 2 }}>
              結界 封鎖
            </div>
            
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: 3, color: "rgba(255,180,180,0.6)", marginBottom: 24, textTransform: "uppercase" }}>
              答えが間違っています
            </div>

            <p style={{ fontSize: 14, color: "rgba(255,180,180,0.75)", lineHeight: 1.8, marginBottom: 12, fontStyle: "italic" }}>
              "あなたの回答は変界の伝説と一致していません。"
            </p>

            <p style={{ fontSize: 13, color: "rgba(255,180,180,0.65)", lineHeight: 1.7, marginBottom: 32 }}>
              ヘンカイの伝説を研究してください — 選ばれた者だけが結界を超えることができます。<br/>
              <span style={{ fontSize: 11, opacity: 0.8 }}>真の知識の道を歩みてください。</span>
            </p>

            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <button className="btn-primary" onClick={retry} style={{
                width: "auto", padding: "14px 36px", fontSize: 12, letterSpacing: 2,
                background: "linear-gradient(135deg, #8b0000, #cc2244)",
                borderColor: "rgba(255,68,102,0.6)",
                boxShadow: "0 0 24px rgba(255,68,102,0.4)",
              }}>
                もう一度試す
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fade-up" style={{ width: "100%", maxWidth: 720, textAlign: "center", position: "relative", zIndex: 5 }}>
        {/* Quest Header */}
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: 3, color: "rgba(168,85,247,0.5)", textTransform: "uppercase", marginBottom: 8 }}>
            ⚔️ アクティブクエスト
          </p>
          <h2 style={{ 
            fontFamily: "'Cinzel Decorative', serif", 
            fontSize: "clamp(28px, 5vw, 40px)", 
            color: "var(--glow)", 
            marginBottom: 6,
            letterSpacing: 2,
          }}>
            知識の試練
          </h2>
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: 12, color: "rgba(224,195,255,0.6)", marginBottom: 16, letterSpacing: 1 }}>
            変界の試練
          </p>
          <p style={{ fontSize: 13, color: "rgba(210,180,255,0.65)", lineHeight: 1.6 }}>
            古代の知識を証明し、結界を超えてください。
          </p>
        </div>

        {/* Progress Bar & Counter */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ width: "100%", height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden", marginBottom: 16, border: "1px solid rgba(168,85,247,0.1)" }}>
            <div style={{ height: "100%", width: pct + "%", background: "linear-gradient(to right, #7b2fff, #c084fc)", borderRadius: 2, boxShadow: "0 0 16px rgba(168,85,247,0.7)", transition: "width 0.5s ease" }}/>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, flex: 1 }}>
              {QUESTIONS.map((_, i) => (
                <div key={i} style={{
                  width: 10, height: 10, borderRadius: "50%",
                  border: "1px solid rgba(168,85,247,0.35)",
                  background: i < currentQ ? "rgba(68,255,170,0.5)" : i === currentQ ? "var(--purple-bright)" : "transparent",
                  boxShadow: i === currentQ ? "0 0 12px rgba(168,85,247,0.9)" : i < currentQ ? "0 0 8px rgba(68,255,170,0.5)" : "none",
                  transform: i === currentQ ? "scale(1.3)" : "scale(1)",
                  transition: "all 0.3s",
                }}/>
              ))}
            </div>
            <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 11, color: "rgba(168,85,247,0.6)", letterSpacing: 1 }}>
              {currentQ + 1} / {QUESTIONS.length}
            </span>
          </div>
        </div>

        {/* Question Card */}
        <div style={{
          background: "linear-gradient(135deg, rgba(61,26,110,0.3), rgba(8,1,18,0.8))",
          border: "2px solid rgba(168,85,247,0.2)", borderRadius: 4,
          padding: "40px 44px", textAlign: "left", position: "relative", marginBottom: 28,
          boxShadow: "0 0 40px rgba(123,47,255,0.15), inset 0 0 20px rgba(123,47,255,0.03)",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #7b2fff, #c084fc, transparent)", borderRadius: "3px 3px 0 0" }}/>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div>
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: 10, letterSpacing: 3, color: "var(--purple-bright)", opacity: 0.6, margin: 0, textTransform: "uppercase" }}>
                チャレンジ
              </p>
            </div>
            <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 11, color: "rgba(168,85,247,0.5)", background: "rgba(123,47,255,0.1)", padding: "4px 12px", borderRadius: 3, border: "1px solid rgba(168,85,247,0.2)" }}>
              Q {String(currentQ + 1).padStart(2, "0")} / {String(QUESTIONS.length).padStart(2, "0")}
            </span>
          </div>

          <p style={{ fontSize: 18, fontWeight: 600, color: "var(--white)", letterSpacing: "0.3px", lineHeight: 1.6, marginBottom: 32 }}>
            {q.question}
          </p>

          {/* Answer Options */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {q.answers.map((a, i) => (
              <div 
                key={i} 
                className={optClass(i)} 
                onClick={() => handleSelect(i)} 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 16, 
                  padding: "16px 20px", 
                  border: "2px solid rgba(168,85,247,0.15)", 
                  borderRadius: 4, 
                  cursor: revealed ? "default" : "pointer", 
                  transition: "all 0.25s", 
                  background: "rgba(123,47,255,0.03)", 
                  userSelect: "none",
                }}
              >
                <div style={{ width: 36, height: 36, borderRadius: "50%", border: "2px solid rgba(168,85,247,0.35)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cinzel Decorative', serif", fontSize: 14, color: "var(--violet)", flexShrink: 0, background: "rgba(123,47,255,0.05)" }}>
                  {["A","B","C","D"][i]}
                </div>
                <span style={{ fontSize: 15, color: "rgba(220,190,255,0.85)", fontWeight: 500 }}>{a}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button
          className="btn-primary"
          onClick={handleNext}
          disabled={selected === null || revealed}
          style={{ fontSize: 13, letterSpacing: 2 }}
        >
          {selected === null ? "回答を選択してください" : currentQ < QUESTIONS.length - 1 ? "次の試練 →" : "試練を完了 →"}
        </button>
      </div>

      <style>{`
        .answer-opt {
          position: relative;
          overflow: hidden;
        }

        .answer-opt::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.1), transparent);
          transition: left 0.5s ease;
          pointer-events: none;
        }

        .answer-opt:hover::before {
          left: 100%;
        }

        .answer-opt:hover { 
          border-color: rgba(168,85,247,0.55) !important; 
          background: rgba(123,47,255,0.15) !important; 
          box-shadow: 0 0 20px rgba(123,47,255,0.2) !important;
          transform: translateX(4px);
        }

        .answer-opt.selected { 
          border-color: rgba(168,85,247,0.8) !important; 
          background: rgba(123,47,255,0.25) !important; 
          box-shadow: 0 0 24px rgba(123,47,255,0.35) !important;
        }

        .answer-opt.correct { 
          border-color: var(--success) !important; 
          background: rgba(68,255,170,0.12) !important; 
          box-shadow: 0 0 24px rgba(68,255,170,0.3) !important;
        }

        .answer-opt.wrong { 
          border-color: var(--danger) !important; 
          background: rgba(255,68,102,0.12) !important; 
          box-shadow: 0 0 24px rgba(255,68,102,0.3) !important;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
