"use client";
import { useState } from "react";
import CitySkyline from "./CitySkyline";

const ETH_REGEX = /^(0x)?[0-9a-fA-F]{40}$/;

export default function PageEth({ xUsername, discordUsername, onNext }: { xUsername: string; discordUsername: string; onNext: (address: string) => void }) {
  const [address, setAddress]   = useState("");
  const [status, setStatus]     = useState<"idle" | "valid" | "invalid">("idle");
  const [loading, setLoading]   = useState(false);
  const [serverErr, setServerErr] = useState("");

  const handleChange = (val: string) => {
    setAddress(val);
    setServerErr("");
    if (!val.trim()) { setStatus("idle"); return; }
    setStatus(ETH_REGEX.test(val.trim()) ? "valid" : "invalid");
  };

  const handleSubmit = async () => {
    if (status !== "valid") return;
    setLoading(true);
    setServerErr("");

    const wallet = address.trim().startsWith("0x") ? address.trim() : "0x" + address.trim();

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ xUsername, discordUsername, walletAddress: wallet, timestamp: new Date().toISOString() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Server error");
      onNext(wallet);
    } catch (err: unknown) {
      setServerErr(err instanceof Error ? err.message : "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", padding: "60px 20px", overflow: "hidden",
      background: "radial-gradient(ellipse at 50% 75%, #1f0845 0%, #060015 55%, #000 100%)",
    }}>
      <div className="corner corner-tl"/><div className="corner corner-tr"/>
      <div className="corner corner-bl"/><div className="corner corner-br"/>

      <div className="fade-up" style={{ width: "100%", maxWidth: 560, textAlign: "center", position: "relative", zIndex: 5 }}>
        <p className="eyebrow">— 最後のステップ —</p>
        <h2 className="section-title">変界に渡る</h2>
        <p className="section-sub">ETHアドレスをドロップし、新しい世界での場所を要求してください。</p>

        {/* floating ETH gem */}
        <svg className="float" style={{ width: 90, height: 90, margin: "0 auto 28px", display: "block", filter: "drop-shadow(0 0 24px rgba(168,85,247,0.7))" }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,6 88,36 50,94 12,36" fill="none" stroke="#a855f7" strokeWidth="1.5"/>
          <polygon points="50,6 88,36 50,48 12,36" fill="rgba(123,47,255,0.35)"/>
          <polygon points="50,48 88,36 50,94"      fill="rgba(75,20,180,0.45)"/>
          <polygon points="50,48 12,36 50,94"      fill="rgba(55,10,150,0.35)"/>
          <line x1="50" y1="6"  x2="50" y2="94" stroke="rgba(168,85,247,0.25)" strokeWidth="0.6"/>
          <line x1="12" y1="36" x2="88" y2="36" stroke="rgba(168,85,247,0.25)" strokeWidth="0.6"/>
        </svg>

        <p style={{ fontSize: 15, color: "rgba(200,165,255,0.6)", lineHeight: 1.8, marginBottom: 32, letterSpacing: "0.4px" }}>
          あなたは試練を越えました。<br/>あなたは誓いを立てました。<br/><br/>
          イーサリアムウォレットアドレスを入力して、変界の年代記に永遠に記録されてください。
        </p>

        {/* submitting as */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 20px", background: "rgba(123,47,255,0.1)", border: "1px solid rgba(168,85,247,0.25)", borderRadius: 3, marginBottom: 28 }}>
          <span style={{ fontSize: 18 }}>𝕏</span>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: 12, color: "var(--violet)", letterSpacing: 2 }}>{xUsername}</span>
        </div>

        {/* wallet input */}
        <div style={{ textAlign: "left", marginBottom: 14 }}>
          <label className="input-label">イーサリアムウォレットアドレス *</label>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", fontFamily: "'Rajdhani', monospace", fontSize: 15, color: "rgba(168,85,247,0.45)", pointerEvents: "none", letterSpacing: 1 }}>0x</span>
            <input
              className={`henkai-input${status === "valid" ? " valid" : status === "invalid" ? " invalid" : ""}`}
              type="text"
              placeholder="ウォレットアドレスをここいに貼り付けてください"
              value={address}
              onChange={e => handleChange(e.target.value)}
              style={{ paddingLeft: 44, fontFamily: "'Rajdhani', monospace", letterSpacing: "1.5px" }}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
            />
          </div>
          <p style={{ fontSize: 11, color: status === "valid" ? "rgba(68,255,170,0.55)" : status === "invalid" ? "rgba(255,68,102,0.65)" : "rgba(192,132,252,0.38)", letterSpacing: 1, marginTop: 8 }}>
            {status === "valid"   ? "✓ 有効なイーサリアムアドレス" :
             status === "invalid" ? "無効です — 0x + 40個の16進数である必要があります" :
             "有効なイーサリアムアドレスである必要があります (0x + 40個の16進数)"}
          </p>
        </div>

        {serverErr && (
          <p style={{ fontSize: 12, color: "rgba(255,68,102,0.8)", letterSpacing: 1, marginBottom: 14 }}>⚠️ {serverErr}</p>
        )}

        <button
          className="btn-primary"
          onClick={handleSubmit}
          disabled={status !== "valid" || loading}
          style={{ marginTop: 8 }}
        >
          {loading ? "Recording..." : "Enter the New World"}
        </button>

        <p style={{ marginTop: 16, fontSize: 11, color: "rgba(168,85,247,0.35)", letterSpacing: "1.2px" }}>
          Your address is stored securely. No transaction required.
        </p>
      </div>

      <CitySkyline opacity={0.35} />
    </div>
  );
}
