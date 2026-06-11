export default function CitySkyline({ opacity = 1 }: { opacity?: number }) {
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "42%", zIndex: 2, pointerEvents: "none", opacity }}>
      <svg viewBox="0 0 1440 380" width="100%" height="100%" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a0a2e" stopOpacity="0.92"/>
            <stop offset="100%" stopColor="#000" stopOpacity="1"/>
          </linearGradient>
          <filter id="glow-city">
            <feGaussianBlur stdDeviation="1.5" result="gb"/>
            <feMerge><feMergeNode in="gb"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <rect x="0" y="180" width="1440" height="200" fill="url(#cg1)"/>
        {/* Buildings */}
        {[
          [0,270,55,110],[60,235,40,145],[110,255,70,125],[190,210,35,170],[235,240,50,140],
          [295,195,65,185],[370,220,80,160],[460,200,38,180],[508,180,60,200],[578,215,45,165],
          [632,175,72,205],[714,205,55,175],[779,170,85,210],[874,198,58,182],[942,225,42,155],
          [994,185,68,195],[1072,208,52,172],[1134,235,80,145],[1224,195,38,185],[1272,215,62,165],
          [1344,180,48,200],[1400,242,40,138],
        ].map(([x,y,w,h],i) => (
          <rect key={i} x={x} y={y} width={w} height={h} fill={i%2===0?"#0a0318":"#0d0520"} opacity="0.9"/>
        ))}
        {/* Torii gate */}
        <rect x="698" y="268" width="9" height="112" fill="#140428" opacity="0.95"/>
        <rect x="748" y="268" width="9" height="112" fill="#140428" opacity="0.95"/>
        <rect x="686" y="262" width="85" height="9"  fill="#140428" opacity="0.95"/>
        <rect x="692" y="276" width="73" height="5"  fill="#140428" opacity="0.95"/>
        {/* Pagoda */}
        <rect x="320" y="200" width="22" height="180" fill="#0d0318" opacity="0.95"/>
        <polygon points="290,200 331,160 372,200" fill="#0a0218" opacity="0.95"/>
        <polygon points="300,165 331,135 362,165" fill="#0a0218" opacity="0.9"/>
        <polygon points="312,140 331,118 350,140" fill="#0a0218" opacity="0.85"/>
        {/* Window glows */}
        {[
          [75,252],[130,268],[148,278],[205,225],[252,258],[310,210],[395,235],[412,248],
          [475,215],[524,195],[543,210],[600,232],[648,190],[665,204],[730,218],[795,185],
          [814,200],[892,213],[960,240],[1010,200],[1028,215],[1090,222],[1155,248],[1240,210],
          [1288,230],[1360,195],
        ].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="1.8"
            fill={["#a855f7","#7b2fff","#c084fc"][i%3]}
            opacity="0.55" filter="url(#glow-city)"/>
        ))}
        <rect x="0" y="340" width="1440" height="40" fill="url(#cg1)" opacity="0.8"/>
      </svg>
      <div className="city-fog"/>
    </div>
  );
}
