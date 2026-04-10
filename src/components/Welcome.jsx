import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FONT_WEIGHT = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, index) => (
    <span
      key={index}
      className={`${className} inline-block will-change-transform`}
      style={{
        fontWeight: baseWeight,
        display: "inline-block",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHT[type];

  const animateLetter = (letter, intensity) => {
    const weight = min + (max - min) * intensity;

    return gsap.to(letter, {
      duration: 0.35,
      ease: "power4.out",

      fontWeight: weight,

      scale: 1 + intensity * 0.8, // 🔥 stronger zoom
      opacity: 0.6 + intensity * 0.4,

      y: -intensity * 25, // 🔥 bigger wave lift

      filter: `
        blur(${(1 - intensity) * 6}px)
        brightness(${1 + intensity * 0.8})
        drop-shadow(0px 0px ${20 * intensity}px rgba(255,255,255,0.8))
      `,
    });
  };

  const handleMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    letters.forEach((letter) => {
      const letterRect = letter.getBoundingClientRect();
      const center = letterRect.left - rect.left + letterRect.width / 2;

      const distance = Math.abs(mouseX - center);

      // 🔥 smoother + wider wave spread
      const intensity = Math.exp(-(distance ** 2) / 1800);

      animateLetter(letter, intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      gsap.to(letter, {
        duration: 0.6,
        ease: "power3.out",

        fontWeight: base,
        scale: 1,
        opacity: 1,
        y: 0,

        filter: "blur(0px) brightness(1) drop-shadow(0 0 0 rgba(0,0,0,0))",
      });
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const titleCleanup = setupTextHover(titleRef.current, "title");
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      titleCleanup && titleCleanup();
      subtitleCleanup && subtitleCleanup();
    };
  }, []);

  return (
    <section id="welcome" className="text-center select-none">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Arun@! Welcome to my",
          "text-2xl md:text-3xl font-georama text-white/80",
          100
        )}
      </p>

      <h1 ref={titleRef} className="mt-6">
        {renderText(
          "portfolio",
          "text-6xl md:text-9xl italic font-georama text-white",
          400
        )}
      </h1>
    </section>
  );
};

export default Welcome;