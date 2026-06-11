"use client";

export default function PageSuccess({ xUsername, discordUsername, walletAddress, onViewGame, onBack }: { xUsername: string; discordUsername: string; walletAddress: string; onViewGame?: () => void; onBack?: () => void }) {
  return (
    <div style={{
      position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", padding: "60px 20px", overflow: "hidden",
      background: "radial-gradient(ellipse at 50% 50%, #1f0845 0%, #060015 55%, #000 100%)",
    }}>
      <div className="corner corner-tl"/><div className="corner corner-tr"/>
      <div className="corner corner-bl"/><div className="corner corner-br"/>

      <div className="fade-up" style={{ textAlign: "center", maxWidth: 580, position: "relative", zIndex: 5 }}>

        {/* rune icon */}
        <div className="float" style={{
          width: 100, height: 100, margin: "0 auto 30px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.3), rgba(123,47,255,0.1))",
          border: "1px solid rgba(168,85,247,0.5)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 44, boxShadow: "0 0 40px rgba(168,85,247,0.4)",
        }}>⛩️</div>

        <h2 style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: "clamp(22px, 5vw, 40px)",
          background: "linear-gradient(135deg, #fff, #c084fc)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          marginBottom: 16, filter: "drop-shadow(0 0 20px rgba(168,85,247,0.4))",
        }}>あなたが渡った</h2>

        <div className="divider-line" style={{ width: 80, margin: "0 auto 24px" }}/>

        <p style={{ fontSize: 15, color: "rgba(210,175,255,0.65)", lineHeight: 1.8, letterSpacing: "0.5px", maxWidth: 460, margin: "0 auto 32px" }}>
          変界へようこそ。 あなたのアドレスは年代記に記録されました。<br/><br/>
          結界があなたを受け入れました。 次の章を見守ってください — 領域は毎日近づいています。
        </p>

        {/* confirmed details */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center", marginBottom: 28 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 24px", background: "rgba(123,47,255,0.12)", border: "1px solid rgba(168,85,247,0.3)", borderRadius: 3 }}>
            <span style={{ fontSize: 18 }}>𝕏</span>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: 13, color: "var(--violet)", letterSpacing: 2 }}>{xUsername}</span>
          </div>

          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 24px", background: "rgba(123,47,255,0.12)", border: "1px solid rgba(168,85,247,0.3)", borderRadius: 3 }}>
            <span style={{ fontSize: 18 }}>💜</span>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: 13, color: "var(--violet)", letterSpacing: 2 }}>{discordUsername}</span>
          </div>

          <div style={{ padding: "12px 24px", background: "rgba(123,47,255,0.1)", border: "1px solid rgba(168,85,247,0.25)", borderRadius: 3, fontFamily: "'Rajdhani', monospace", fontSize: 13, color: "var(--violet)", letterSpacing: "1.5px", wordBreak: "break-all", maxWidth: "100%" }}>
            {walletAddress}
          </div>
        </div>

        <p style={{ fontSize: 11, color: "rgba(192,132,252,0.35)", letterSpacing: "2px" }}>
          変界の年代記に記録されました
        </p>

        {/* decorative bottom line */}
        <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 16, justifyContent: "center", opacity: 0.4 }}>
          <div style={{ height: 1, width: 60, background: "linear-gradient(to left, var(--purple-bright), transparent)" }}/>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: 4, color: "var(--violet)" }}>変界</span>
          <div style={{ height: 1, width: 60, background: "linear-gradient(to right, var(--purple-bright), transparent)" }}/>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 40, flexWrap: "wrap", position: "relative", zIndex: 10 }}>
          {onViewGame && (
            <button
              className="btn-primary"
              onClick={onViewGame}
              style={{ width: "auto", padding: "14px 48px", fontSize: 12, letterSpacing: 3, pointerEvents: "auto", cursor: "pointer" }}
            >
              変界を探索する
            </button>
          )}
          <button
            onClick={onBack || (() => {})}
            style={{
              width: "auto",
              padding: "14px 48px",
              fontSize: 12,
              letterSpacing: 3,
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
            ホームへ戻る
          </button>
        </div>
      </div>
    </div>
  );
}
