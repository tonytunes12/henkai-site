"use client";

export default function PageAbout({ onNext, isPublic = false }: { onNext: () => void; isPublic?: boolean }) {
  return (
    <div style={{
      position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "flex-start", overflow: "hidden",
      background: "radial-gradient(ellipse at 50% 20%, #2d0a5e 0%, #0b0218 45%, #000 100%)",
      padding: "60px 20px",
    }}>
      <div className="corner corner-tl"/><div className="corner corner-tr"/>
      <div className="corner corner-bl"/><div className="corner corner-br"/>

      <div className="moon"/>
      <div className="moon-halo"/>
      <div className="moon-halo2"/>

      {/* Header Section */}
      <div className="fade-up" style={{ position: "relative", zIndex: 5, textAlign: "center", marginBottom: 50 }}>
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
          margin: 0,
          marginBottom: 16,
        }}>変界について</h1>
        
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(14px, 2vw, 18px)", letterSpacing: "2px", color: "rgba(224,195,255,0.8)", fontStyle: "italic", margin: 0 }}>
          "イーサリアムの下で新しい世界が目覚めています。"
        </p>
      </div>

      {/* Main Content */}
      <div className="fade-up" style={{ 
        position: "relative", zIndex: 5, 
        width: "100%", 
        maxWidth: 840, 
        textAlign: "left",
        marginBottom: 40,
      }}>
        {/* Project Description Card */}
        <div style={{
          background: "linear-gradient(135deg, rgba(61,26,110,0.2), rgba(8,1,18,0.7))",
          border: "2px solid rgba(168,85,247,0.25)", 
          borderRadius: 4,
          padding: "48px 40px",
          position: "relative",
          boxShadow: "0 0 40px rgba(123,47,255,0.15), inset 0 0 20px rgba(123,47,255,0.03)",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #7b2fff, #c084fc, transparent)", borderRadius: "3px 3px 0 0" }}/>
          
          <div style={{ marginBottom: 32 }}>
            <p style={{ 
              fontFamily: "'Cinzel', serif", 
              fontSize: 11, 
              letterSpacing: 3, 
              color: "var(--purple-bright)", 
              opacity: 0.6, 
              margin: "0 0 20px 0", 
              textTransform: "uppercase" 
            }}>
              📜 プロジェクト紹介
            </p>

            <div style={{
              fontSize: "clamp(14px, 1.8vw, 16px)",
              lineHeight: 1.8,
              color: "rgba(210,180,255,0.75)",
              fontWeight: 300,
              letterSpacing: "0.3px",
            }}>
              <p>
                現代のチェーンが台頭するはるか前に、変界として知られる古代文明が現実の境界を超えて存在していました。
              </p>

              <p>
                次元と次元の間に隠れた彼らは、無数の世界の興亡を見守りながら、時間に失われた知識、力、そして物語を保存していました。
              </p>

              <p>
                今、彼らの領域とイーサリアムを分ける結界が崩れ始めています。
              </p>

              <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(168,85,247,0.2), transparent)", margin: "24px 0" }}/>

              <p>
                やがて、変界の住人たちは次々とこの鎖へと渡ってくる。征服者として ではなく、開拓者として。各キャラクターは彼らの世界の歴史、能力、秘密の一片を携えている。彼らは共に新しい文明を樹立し、同志を募り、デジタルフロンティアに散らばった遺物を取り戻そうとしている。
              </p>

              <p>
                謎めいた到来から始まるこの物語は、派閥、英雄、悪役、伝説の遺物、世界を変える出来事にまたがるストーリーへと展開していく。
              </p>

              <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(168,85,247,0.2), transparent)", margin: "24px 0" }}/>

              <p>
                全ての章で変界の宇宙についてさらに詳しく知ることができ、コミュニティはその歴史の拡張に参加し、世界の未来を形作ることへと招待される。
              </p>

              <p style={{ fontSize: "clamp(14px, 1.8vw, 16px)", marginTop: 24, paddingTop: 16, borderTop: "1px solid rgba(168,85,247,0.15)" }}>
                <span style={{ color: "var(--purple-bright)", fontWeight: 600 }}>変界は単なるコレクションではない。</span>
              </p>

              <p>
                それは全てのキャラクターがストーリーを持ち、全てのストーリーが正史となり、全ての章が世界をその宿命に近づけるアニメ的な知的財産である。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="fade-up" style={{ 
        position: "relative", zIndex: 5, 
        width: "100%", 
        maxWidth: 840,
        marginBottom: 50,
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
        }}>
          {[
            { icon: "🌍", title: "生きた世界", desc: "常に進化し、拡大するユニバース" },
            { icon: "⚔️", title: "キャラクター駆動", desc: "各キャラが独自の伝説を持つ" },
            { icon: "🔗", title: "Ethereum統合", desc: "ブロックチェーンベースの遺産" },
            { icon: "📖", title: "コミュニティ主導", desc: "ファンが世界の物語を形作る" },
          ].map((feature, i) => (
            <div key={i} style={{
              background: "linear-gradient(135deg, rgba(123,47,255,0.1), rgba(61,26,110,0.15))",
              border: "1px solid rgba(168,85,247,0.2)",
              borderRadius: 4,
              padding: "24px 20px",
              textAlign: "center",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.background = "linear-gradient(135deg, rgba(123,47,255,0.2), rgba(61,26,110,0.25))";
              el.style.borderColor = "rgba(168,85,247,0.4)";
              el.style.boxShadow = "0 0 20px rgba(123,47,255,0.2)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.background = "linear-gradient(135deg, rgba(123,47,255,0.1), rgba(61,26,110,0.15))";
              el.style.borderColor = "rgba(168,85,247,0.2)";
              el.style.boxShadow = "none";
            }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{feature.icon}</div>
              <h3 style={{ 
                fontFamily: "'Cinzel', serif", 
                fontSize: 14, 
                color: "var(--violet)", 
                margin: "0 0 8px 0", 
                letterSpacing: 1 
              }}>
                {feature.title}
              </h3>
              <p style={{ 
                fontSize: 12, 
                color: "rgba(210,180,255,0.65)", 
                margin: 0, 
                lineHeight: 1.5 
              }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="fade-up" style={{ 
        position: "relative", zIndex: 5, 
        textAlign: "center", 
        marginBottom: 40 
      }}>
        <button
          className="btn-primary"
          onClick={onNext}
          style={{ 
            marginTop: 16, 
            width: "auto", 
            padding: "16px 56px", 
            fontSize: 13, 
            letterSpacing: 3 
          }}
        >
          {isPublic ? "戻る" : "試練に挑戦する"}
        </button>
        <p style={{ 
          fontSize: 12, 
          color: "rgba(168,85,247,0.5)", 
          marginTop: 20, 
          letterSpacing: 1 
        }}>
          {isPublic ? "← 変界への招きを待っています →" : "← 変界の知識を証明してください →"}
        </p>
      </div>

      {/* Social Links */}
      <div style={{
        position: "relative",
        zIndex: 5,
        marginTop: 20,
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
      </div>
    </div>
  );
}
