// ================================
// HeroContent.jsx (PART 1)
// ================================

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FONT_WEIGHT = {
  subtitle: {
    min: 100,
    max: 400,
    default: 100,
  },
  title: {
    min: 400,
    max: 900,
    default: 400,
  },
};

const renderLetters = (
  text,
  className = "",
  baseWeight = 400
) =>
  [...text].map((char, index) => (
    <span
      key={index}
      className={`${className} inline-block will-change-transform select-none`}
      style={{
        fontWeight: baseWeight,
        transformOrigin: "center bottom",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

export default function HeroContent() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
  if (
    !titleRef.current ||
    !subtitleRef.current ||
    !containerRef.current ||
    !buttonRef.current ||
    !lineRef.current
  ) {
    return;
  }

  const titleLetters =
    titleRef.current.querySelectorAll("span");

  const subtitleLetters =
    subtitleRef.current.querySelectorAll("span");

  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
    },
  });

  tl.fromTo(
    [...subtitleLetters, ...titleLetters],
    {
      opacity: 0,
      y: 90,
      rotateX: -90,
      filter: "blur(12px)",
    },
    {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      stagger: 0.025,
      duration: 1.3,
    }
  );

  tl.from(
    lineRef.current,
    {
      width: 0,
      opacity: 0,
      duration: 0.8,
    },
    "-=.8"
  );

  tl.from(
    ".hero-designation",
    {
      opacity: 0,
      y: 30,
      duration: 0.9,
    },
    "-=.55"
  );

  tl.from(
    ".hero-description",
    {
      opacity: 0,
      y: 35,
      duration: 0.9,
    },
    "-=.6"
  );

  tl.from(
    buttonRef.current,
    {
      opacity: 0,
      y: 25,
      scale: 0.9,
      duration: 0.8,
    },
    "-=.55"
  );

  const setupHover = (container, type) => {
    const letters = container.querySelectorAll("span");
    const settings = FONT_WEIGHT[type];

    const move = (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;

      letters.forEach((letter) => {
        const bounds = letter.getBoundingClientRect();

        const center =
          bounds.left -
          rect.left +
          bounds.width / 2;

        const distance = Math.abs(center - mouseX);

        const intensity = Math.exp(
          -(distance * distance) / 1800
        );

        gsap.to(letter, {
          fontWeight:
            settings.min +
            (settings.max - settings.min) *
              intensity,
          scale: 1 + intensity * 0.35,
          y: -12 * intensity,
          duration: 0.35,
          overwrite: true,
        });
      });
    };

    const leave = () => {
      gsap.to(letters, {
        fontWeight: settings.default,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.01,
        ease: "elastic.out(1,.7)",
      });
    };

    container.addEventListener(
      "mousemove",
      move
    );

    container.addEventListener(
      "mouseleave",
      leave
    );

    return () => {
      container.removeEventListener(
        "mousemove",
        move
      );

      container.removeEventListener(
        "mouseleave",
        leave
      );
    };
  };

  const cleanTitle = setupHover(
    titleRef.current,
    "title"
  );

  const cleanSubtitle = setupHover(
    subtitleRef.current,
    "subtitle"
  );

  gsap.to(containerRef.current, {
    y: -8,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  const button = buttonRef.current;

  const enter = () => {
    gsap.to(button, {
      backgroundColor: "#d6b27f",
      borderColor: "#d6b27f",
      color: "#111111",
      scale: 1.02,
      duration: 0.35,
    });
  };

  const leaveButton = () => {
    gsap.to(button, {
      backgroundColor: "transparent",
      borderColor: "#d6b27f",
      color: "#ffffff",
      scale: 1,
      duration: 0.35,
    });
  };

  button.addEventListener("mouseenter", enter);
  button.addEventListener("mouseleave", leaveButton);

  return () => {
    cleanTitle();
    cleanSubtitle();

    button.removeEventListener(
      "mouseenter",
      enter
    );

    button.removeEventListener(
      "mouseleave",
      leaveButton
    );
  };
}, []);

  return (
        <div
      ref={containerRef}
      className="
        absolute
        left-[19%]
        top-[47%]
        -translate-y-1/2
        z-30
        flex
        flex-col
        items-start
        max-w-[400px]
      "
    >
      {/* HELLO */}

      <div
        ref={subtitleRef}
        className="
          cursor-default
          uppercase
          text-[10px]
          tracking-[0.75em]
          text-white/60
          mb-4
        "
      >
        {renderLetters(
          "HELLO, I'M",
          "",
          100
        )}
      </div>

      {/* NAME */}

      <div
        ref={titleRef}
        className="
          cursor-default
          leading-none
        "
      >
        {renderLetters(
          "Arun",
          `
            font-serif
            text-[6.4rem]
            xl:text-[6.7rem]
            leading-[0.82]
            tracking-[-0.08em]
            text-white
          `,
          400
        )}
      </div>

      {/* GOLD LINE */}

      <div
        ref={lineRef}
        className="
          mt-6
          h-[2px]
          w-14
          rounded-full
          bg-[#c8a36b]
        "
      />

      {/* DESIGNATION */}

      <h2
        className="
          hero-designation
          mt-5
          uppercase
          text-[18px]
          font-light
          tracking-[0.42em]
          leading-[1.55]
          text-white/90
        "
      >
        Full Stack
        <br />
        Developer
      </h2>

      {/* DESCRIPTION */}

      <p
        className="
          hero-description
          mt-5
          max-w-[320px]
          text-[14px]
          leading-7
          text-white/65
        "
      >
        I build modern web applications
        with clean architecture,
        smooth interactions,
        and elegant user experiences.
      </p>
            {/* BUTTON */}

      <button
        ref={buttonRef}
        className="
          mt-8
          h-[44px]
          px-8
          rounded-full
          border
          border-[#c8a36b]
          bg-transparent
          text-white
          uppercase
          text-[10px]
          font-medium
          tracking-[0.44em]
          transition-all
          duration-500
          ease-out
          hover:bg-[#c8a36b]
          hover:text-black
          hover:shadow-[0_0_20px_rgba(214,178,127,0.30)]
        "
      >
        <span className="flex items-center gap-3">
          Explore My Work
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m13 5 7 7-7 7" />
          </svg>
        </span>
      </button>
    </div>
  );
}       

      