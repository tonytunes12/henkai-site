"use client";
import { useState } from "react";

// ─── LINKS — paste your URLs here when ready ───────────────────
const HENKAI_X_URL   = "https://x.com/HENKAIworld";
const POST_URL       = "#"; // e.g. https://x.com/HenkaiOfficial/status/123...
// ────────────────────────────────────────────────────────────────

type TaskState = {
  followHenkai:  boolean;
  likedPost:     boolean;
  retweeted:     boolean;
};

type FormState = {
  xUsername:     string;
  discordUsername: string;
  comment:       string;
  qrtLink:       string;
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function PageTasks({ onNext }: { onNext: (data: { xUsername: string; discordUsername: string }) => void }) {
  const [tasks, setTasks] = useState<TaskState>({
    followHenkai:  false,
    likedPost:     false,
    retweeted:     false,
  });

  const [form, setForm] = useState<FormState>({ xUsername: "", discordUsername: "", comment: "", qrtLink: "" });
  const [errors, setErrors] = useState<Errors>({});

  const toggleTask = (key: keyof TaskState) => {
    setTasks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const allTasksDone = Object.values(tasks).every(Boolean);

  const validateAndProceed = () => {
    const newErrors: Errors = {};

    if (!form.xUsername.trim()) {
      newErrors.xUsername = "Xユーザーネームは必須です";
    } else if (!/^@?[A-Za-z0-9_]{1,15}$/.test(form.xUsername.trim())) {
      newErrors.xUsername = "有効なXユーザーネームを入力してください (@YourHandle等)";
    }

    if (!form.discordUsername.trim()) {
      newErrors.discordUsername = "Discordユーザーネームは必須です";
    } else if (form.discordUsername.trim().length < 2 || form.discordUsername.trim().length > 32) {
      newErrors.discordUsername = "Discordユーザーネームは2～32文字である必要があります";
    }

    if (!form.comment.trim()) {
      newErrors.comment = "ポストへのコメントを貼り付けてください";
    } else if (form.comment.trim().length < 5) {
      newErrors.comment = "コメントが短すぎます";
    }

    if (!form.qrtLink.trim()) {
      newErrors.qrtLink = "クォートリツイートリンクを貼り付けてください";
    } else if (!/^https?:\/\/(twitter|x)\.com\/.+/.test(form.qrtLink.trim())) {
      newErrors.qrtLink = "有効なX/Twitterリンクを計数してください (https://x.com/...)";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const username = form.xUsername.trim().startsWith("@")
      ? form.xUsername.trim()
      : "@" + form.xUsername.trim();

    onNext({ xUsername: username, discordUsername: form.discordUsername.trim() });
  };

  const canProceed = Object.values(tasks).every(Boolean) && form.xUsername.trim() && form.discordUsername.trim() && form.comment.trim() && form.qrtLink.trim();

  const taskConfig = [
    {
      key: "followHenkai" as keyof TaskState,
      icon: "𝕏",
      title: "Xで変界をフォロー",
      linkLabel: "Xをフォロー ↗",
      href: HENKAI_X_URL,
    },
    {
      key: "likedPost" as keyof TaskState,
      icon: "❤️",
      title: "ポストにライクを下す",
      linkLabel: "ポストを閲覧 ↗",
      href: POST_URL,
    },
    {
      key: "retweeted" as keyof TaskState,
      icon: "🔁",
      title: "ポストをリツイート",
      linkLabel: "リツイート ↗",
      href: POST_URL,
    },
  ];

  return (
    <div style={{
      position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", padding: "60px 20px", overflow: "hidden",
      background: "radial-gradient(ellipse at 85% 40%, #180635 0%, #040010 55%, #000 100%)",
    }}>
      <div className="corner corner-tl"/><div className="corner corner-tr"/>
      <div className="corner corner-bl"/><div className="corner corner-br"/>

      <div className="fade-up" style={{ width: "100%", maxWidth: 660, textAlign: "center", position: "relative", zIndex: 5 }}>
        <p className="eyebrow">— 儀式を完成させる —</p>
        <h2 className="section-title">忠誠を誓う</h2>
        <p className="section-sub">すべての項目が必須です。 すべての儀式を完結して、変界での場所を獲得してください。</p>

        {/* ── TASK CHECKBOXES ── */}
        <div style={{ marginBottom: 32 }}>
          {taskConfig.map(({ key, icon, title, linkLabel, href }) => (
            <div key={key} style={{
              background: tasks[key]
                ? "linear-gradient(135deg, rgba(61,26,110,0.32), rgba(8,1,18,0.75))"
                : "linear-gradient(135deg, rgba(40,12,80,0.22), rgba(4,0,12,0.7))",
              border: `1px solid ${tasks[key] ? "rgba(168,85,247,0.45)" : "rgba(168,85,247,0.13)"}`,
              borderRadius: 3, padding: "20px 22px", marginBottom: 12,
              display: "flex", alignItems: "center", gap: 16, textAlign: "left",
              position: "relative", overflow: "hidden",
              boxShadow: tasks[key] ? "0 0 20px rgba(123,47,255,0.1)" : "none",
              transition: "all 0.3s",
            }}>
              {/* left accent bar */}
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: "linear-gradient(to bottom, #7b2fff, #c084fc)", opacity: tasks[key] ? 1 : 0.4, transition: "opacity 0.3s" }}/>

              <div style={{ width: 44, height: 44, borderRadius: "50%", background: tasks[key] ? "rgba(123,47,255,0.25)" : "rgba(123,47,255,0.1)", border: `1px solid ${tasks[key] ? "var(--purple-bright)" : "rgba(168,85,247,0.25)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, transition: "all 0.3s" }}>
                {icon}
              </div>

              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: 2, color: "var(--white)", marginBottom: 5 }}>{title}</p>
                <a href={href} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 12, color: "var(--purple-bright)", opacity: 0.75, letterSpacing: "0.5px", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0.75")}
                >
                  {linkLabel}
                </a>
              </div>

              {/* check toggle */}
              <button onClick={() => toggleTask(key)} style={{
                width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                border: `1.5px solid ${tasks[key] ? "var(--purple-bright)" : "rgba(168,85,247,0.3)"}`,
                background: tasks[key] ? "linear-gradient(135deg, #7b2fff, #a855f7)" : "transparent",
                color: tasks[key] ? "#fff" : "transparent", fontSize: 14,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "none", transition: "all 0.3s",
                boxShadow: tasks[key] ? "0 0 12px rgba(123,47,255,0.5)" : "none",
              }}>✓</button>
            </div>
          ))}
        </div>

        {/* ── TEXT INPUTS ── */}
        <div style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: 20, marginBottom: 28 }}>

          {/* X Username */}
          <div>
            <label className="input-label">あなたのXユーザーネーム *</label>
            <input
              className={`henkai-input${errors.xUsername ? " invalid" : form.xUsername ? " valid" : ""}`}
              type="text"
              placeholder="@YourHandle"
              value={form.xUsername}
              onChange={e => { setForm(f => ({ ...f, xUsername: e.target.value })); setErrors(err => ({ ...err, xUsername: undefined })); }}
            />
            {errors.xUsername && <p style={{ fontSize: 11, color: "rgba(255,68,102,0.75)", marginTop: 6, letterSpacing: 1 }}>{errors.xUsername}</p>}
          </div>

          {/* Discord Username */}
          <div>
            <label className="input-label">あなたのDiscordユーザーネーム *</label>
            <input
              className={`henkai-input${errors.discordUsername ? " invalid" : form.discordUsername ? " valid" : ""}`}
              type="text"
              placeholder="YourDiscordName"
              value={form.discordUsername}
              onChange={e => { setForm(f => ({ ...f, discordUsername: e.target.value })); setErrors(err => ({ ...err, discordUsername: undefined })); }}
            />
            {errors.discordUsername && <p style={{ fontSize: 11, color: "rgba(255,68,102,0.75)", marginTop: 6, letterSpacing: 1 }}>{errors.discordUsername}</p>}
          </div>

          {/* Comment on post */}
          <div>
            <label className="input-label">ポストへのあなたのコメント *</label>
            <p style={{ fontSize: 12, color: "rgba(192,132,252,0.45)", letterSpacing: "0.5px", marginBottom: 10, lineHeight: 1.6 }}>
              ポストを閲覧して、コメントを下して、ここいに貼り付けてください。
            </p>
            <textarea
              className={`henkai-input${errors.comment ? " invalid" : form.comment ? " valid" : ""}`}
              rows={3}
              placeholder="コメントをここいに貼り付けてください..."
              value={form.comment}
              onChange={e => { setForm(f => ({ ...f, comment: e.target.value })); setErrors(err => ({ ...err, comment: undefined })); }}
              style={{ resize: "vertical", fontFamily: "'Rajdhani', sans-serif" }}
            />
            {errors.comment && <p style={{ fontSize: 11, color: "rgba(255,68,102,0.75)", marginTop: 6, letterSpacing: 1 }}>{errors.comment}</p>}
          </div>

          {/* QRT link */}
          <div>
            <label className="input-label">あなたのクォートリツイートリンク *</label>
            <p style={{ fontSize: 12, color: "rgba(192,132,252,0.45)", letterSpacing: "0.5px", marginBottom: 10, lineHeight: 1.6 }}>
              ポストをクォートリツイートし、変界について賞賛を署名してから、クォートリツイートリンクをここいに貼り付けてください。
            </p>
            <input
              className={`henkai-input${errors.qrtLink ? " invalid" : form.qrtLink ? " valid" : ""}`}
              type="url"
              placeholder="https://x.com/YourHandle/status/..."
              value={form.qrtLink}
              onChange={e => { setForm(f => ({ ...f, qrtLink: e.target.value })); setErrors(err => ({ ...err, qrtLink: undefined })); }}
            />
            {errors.qrtLink && <p style={{ fontSize: 11, color: "rgba(255,68,102,0.75)", marginTop: 6, letterSpacing: 1 }}>{errors.qrtLink}</p>}
          </div>
        </div>

        {/* ── WARNING if tasks not done ── */}
        {!Object.values(tasks).every(Boolean) && (
          <p style={{ fontSize: 12, color: "rgba(255,180,80,0.65)", letterSpacing: 1, marginBottom: 16, lineHeight: 1.6 }}>
            ⚠️ 一順に進める前に、すべてのタスクを完了としてマークしてください。
          </p>
        )}

        <button
          className="btn-primary"
          onClick={validateAndProceed}
          disabled={!canProceed}
        >
          {canProceed ? "渡源へ進む →" : "すべての儀式を完結して進む"}
        </button>
      </div>
    </div>
  );
}
