// src/components/hero/HeroBackgroundEffects.jsx

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

export default function HeroBackgroundEffects() {
  useGSAP(() => {
    // Floating Background Name
    gsap.to(".hero-bg-title", {
      y: 14,
      duration: 6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Gold Glow
    gsap.to(".hero-main-glow", {
      scale: 1.08,
      opacity: 0.18,
      duration: 5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Secondary Glow
    gsap.to(".hero-small-glow", {
      scale: 1.15,
      opacity: 0.08,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Noise Flicker
    gsap.to(".hero-noise", {
      opacity: 0.05,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  });

  return (
    <>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Cinematic Gradient */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,.06),
              rgba(0,0,0,.22),
              rgba(0,0,0,.38)
            )
          `,
        }}
      />

      {/* Warm Light */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(circle at 62% 45%, rgba(214,178,127,.14), transparent 38%)",
        }}
      />

      {/* Main Glow */}
      <div
        className="
          hero-main-glow
          absolute
          right-[8%]
          top-[18%]
          w-[700px]
          h-[700px]
          rounded-full
          bg-[#d6b27f]
          opacity-[0.12]
          blur-[220px]
          pointer-events-none
          z-[2]
        "
      />

      {/* Secondary Glow */}
      <div
        className="
          hero-small-glow
          absolute
          right-[20%]
          top-[28%]
          w-[340px]
          h-[340px]
          rounded-full
          bg-[#d6b27f]
          opacity-[0.06]
          blur-[120px]
          pointer-events-none
          z-[2]
        "
      />

      {/* Huge Background Text */}
      <h1
        className="
          hero-bg-title
          absolute
          left-1/2
          top-[48%]
          -translate-x-1/2
          -translate-y-1/2
          font-serif
          text-[22vw]
          xl:text-[21rem]
          font-medium
          leading-none
          tracking-[-0.09em]
          text-white/[0.08]
          pointer-events-none
          select-none
          z-[3]
        "
      >
        ARUN
      </h1>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[4]"
        style={{
          background:
            "radial-gradient(circle, transparent 48%, rgba(0,0,0,.58) 100%)",
        }}
      />

      {/* Film Grain */}
      <div
        className="
          hero-noise
          absolute
          inset-0
          pointer-events-none
          opacity-[0.03]
          mix-blend-soft-light
          z-[5]
        "
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.6) .6px, transparent .6px)",
          backgroundSize: "5px 5px",
        }}
      />
    </>
  );
}