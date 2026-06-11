"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./CharacterCarousel.module.css";

interface Character {
  id: string;
  name: string;
  title: string;
  level: number;
  rarity: string;
  role: string;
  faction: string;
  stats: {
    hp: number;
    atk: number;
    def: number;
    spd: number;
    crit: number;
    critDmg: number;
  };
  description: string;
  imageUrl: string;
}

const CHARACTERS: Character[] = [
  {
    id: "hk-07-19-m",
    name: "HK-07-19",
    title: "旅人",
    level: 99,
    rarity: "伝説級",
    role: "暗殺者",
    faction: "蝕の秩序",
    stats: {
      hp: 8920,
      atk: 1478,
      def: 768,
      spd: 132,
      crit: 24,
      critDmg: 172,
    },
    description: "彼方からの旅人。蝕の印を身に纏い、未知の道を歩む。その存在は影であり、虚無が彼の盟友だ。",
    imageUrl: "/character/male.jpg",
  },
  {
    id: "hk-07-19-f",
    name: "HK-07-19",
    title: "放浪者",
    level: 99,
    rarity: "伝説級",
    role: "暗殺者",
    faction: "蝕の秩序",
    stats: {
      hp: 9520,
      atk: 1325,
      def: 845,
      spd: 118,
      crit: 23,
      critDmg: 167,
    },
    description: "彼方からの旅人。蝕の印を身に纏い、未知の道を歩む。その沈黙は武器であり、虚無が彼女の盟友だ。",
    imageUrl: "/character/female.jpg",
  },
];

export default function CharacterCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotate, setIsAutoRotate] = useState(true);

  useEffect(() => {
    if (!isAutoRotate) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CHARACTERS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoRotate]);

  const handlePrev = () => {
    setIsAutoRotate(false);
    setActiveIndex((prev) => (prev - 1 + CHARACTERS.length) % CHARACTERS.length);
  };

  const handleNext = () => {
    setIsAutoRotate(false);
    setActiveIndex((prev) => (prev + 1) % CHARACTERS.length);
  };

  const character = CHARACTERS[activeIndex];

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        {/* Left Navigation */}
        <button className={styles.navBtn} onClick={handlePrev} aria-label="前のキャラクター">
          <span>◀</span>
        </button>

        {/* Character Card */}
        <div className={styles.cardWrapper}>
          <div className={`${styles.card} ${styles.slideIn}`}>
            {/* Frame Corner Decorations */}
            <div className={styles.frameCorner + " " + styles.cornerTL}></div>
            <div className={styles.frameCorner + " " + styles.cornerTR}></div>
            <div className={styles.frameCorner + " " + styles.cornerBL}></div>
            <div className={styles.frameCorner + " " + styles.cornerBR}></div>

            {/* Character Image Area */}
            <div className={styles.imageArea}>
              <Image
                src={character.imageUrl}
                alt={`${character.name} - ${character.title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                className={styles.characterImage}
                priority
              />
              <div className={styles.glow}></div>
            </div>

            {/* Stats Section */}
            <div className={styles.statsSection}>
              <div className={styles.header}>
                <div>
                  <h2 className={styles.charName}>{character.name}</h2>
                  <p className={styles.charTitle}>{character.title}</p>
                </div>
                <div className={styles.levelBadge}>
                  Lv. <span>{character.level}</span>
                  <span className={styles.maxLabel}>MAX</span>
                </div>
              </div>

              {/* Basic Info Grid */}
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.label}>勢力</span>
                  <span className={styles.value}>{character.faction}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>レアリティ</span>
                  <span className={styles.rarity}>{character.rarity}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>職業</span>
                  <span className={styles.value}>{character.role}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>ID</span>
                  <span className={styles.value}>{character.id}</span>
                </div>
              </div>

              {/* Stats Display */}
              <div className={styles.statsDisplay}>
                <div className={styles.statRow}>
                  <div className={styles.stat}>
                    <span className={styles.statIcon}>❤️</span>
                    <span className={styles.statLabel}>HP</span>
                    <span className={styles.statValue}>{character.stats.hp}</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statIcon}>⚔️</span>
                    <span className={styles.statLabel}>攻撃</span>
                    <span className={styles.statValue}>{character.stats.atk}</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statIcon}>🛡️</span>
                    <span className={styles.statLabel}>防御</span>
                    <span className={styles.statValue}>{character.stats.def}</span>
                  </div>
                </div>
                <div className={styles.statRow}>
                  <div className={styles.stat}>
                    <span className={styles.statIcon}>💨</span>
                    <span className={styles.statLabel}>速度</span>
                    <span className={styles.statValue}>{character.stats.spd}</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statIcon}>✨</span>
                    <span className={styles.statLabel}>会心</span>
                    <span className={styles.statValue}>{character.stats.crit}%</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statIcon}>⚡</span>
                    <span className={styles.statLabel}>会心ダメ</span>
                    <span className={styles.statValue}>{character.stats.critDmg}%</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className={styles.description}>{character.description}</p>
            </div>
          </div>
        </div>

        {/* Right Navigation */}
        <button className={styles.navBtn} onClick={handleNext} aria-label="次のキャラクター">
          <span>▶</span>
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className={styles.indicators}>
        {CHARACTERS.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === activeIndex ? styles.active : ""}`}
            onClick={() => {
              setIsAutoRotate(false);
              setActiveIndex(index);
            }}
            aria-label={`キャラクター${index + 1}へ移動`}
          ></button>
        ))}
      </div>
    </div>
  );
}
