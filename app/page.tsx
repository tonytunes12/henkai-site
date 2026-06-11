"use client";
import { useState } from "react";
import StarField    from "@/components/StarField";
import Cursor       from "@/components/Cursor";
import Particles    from "@/components/Particles";
import PageLanding  from "@/components/PageLanding";
import PageAbout    from "@/components/PageAbout";
import PageQuiz     from "@/components/PageQuiz";
import PageTasks    from "@/components/PageTasks";
import PageEth      from "@/components/PageEth";
import PageSuccess  from "@/components/PageSuccess";

import PageGame      from "@/components/PageGame";

type Step = "landing" | "public-about" | "about" | "quiz" | "tasks" | "eth" | "success" | "game";

export default function Home() {
  const [step, setStep]               = useState<Step>("landing");
  const [xUsername, setXUsername]     = useState("");
  const [discordUsername, setDiscordUsername] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const handleTasksNext = ({ xUsername, discordUsername }: { xUsername: string; discordUsername: string }) => {
    setXUsername(xUsername);
    setDiscordUsername(discordUsername);
    setStep("eth");
  };

  const handleEthNext = (address: string) => {
    setWalletAddress(address);
    setStep("success");
  };

  const handleBackToLanding = () => {
    setStep("landing");
  };

  return (
    <>
      <StarField />
      <Cursor />
      <Particles />
      <div className="scanline" />

      {step === "landing" && <PageLanding onNext={() => setStep("about")} onViewAbout={() => setStep("public-about")} />}
      {step === "public-about" && <PageAbout onNext={handleBackToLanding} isPublic={true} />}
      {step === "about"   && <PageAbout   onNext={() => setStep("quiz")} isPublic={false} />}
      {step === "quiz"    && <PageQuiz    onPass={() => setStep("tasks")} />}
      {step === "tasks"   && <PageTasks   onNext={handleTasksNext} />}
      {step === "eth"     && <PageEth     xUsername={xUsername} discordUsername={discordUsername} onNext={handleEthNext} />}
      {step === "success" && <PageSuccess xUsername={xUsername} discordUsername={discordUsername} walletAddress={walletAddress} onViewGame={() => setStep("game")} onBack={() => setStep("landing")} />}
      {step === "game" && <PageGame onBack={() => setStep("success")} />}
    </>
  );
}
