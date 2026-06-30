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

const renderText = (text, className, baseWeight = 400) =>
  [...text].map((char, index) => (
    <span
      key={index}
      className={`${className} inline-block will-change-transform`}
      style={{ fontWeight: baseWeight }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

export default function Welcome() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const titleLetters = titleRef.current.querySelectorAll("span");
    const subtitleLetters = subtitleRef.current.querySelectorAll("span");

    /* Intro Animation */

    gsap.fromTo(
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
        duration: 1.3,
        stagger: 0.025,
        ease: "expo.out",
      }
    );

    /* Floating Background Word */

    gsap.to(".hero-bg-title", {
      y: 12,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    /* Decorative Labels */

    gsap.from(".hero-label", {
      opacity: 0,
      y: 25,
      stagger: 0.12,
      delay: 0.9,
      duration: 1,
      ease: "power3.out",
    });

    /* Letter Hover */

    const setupHover = (container, type) => {
      const letters = container.querySelectorAll("span");

      const {
        min,
        max,
        default: base,
      } = FONT_WEIGHT[type];

      const move = (e) => {
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;

        letters.forEach((letter) => {
          const r = letter.getBoundingClientRect();

          const center =
            r.left -
            rect.left +
            r.width / 2;

          const distance = Math.abs(center - mouseX);

          const intensity = Math.exp(
            -(distance * distance) / 1800
          );

          gsap.to(letter, {
            fontWeight:
              min +
              (max - min) * intensity,
            scale: 1 + intensity * 0.42,
            y: -10 * intensity,
            duration: 0.35,
            overwrite: true,
          });
        });
      };

      const leave = () => {
        gsap.to(letters, {
          fontWeight: base,
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

    return () => {
      cleanTitle();
      cleanSubtitle();
    };
  });

  return (
    <section
      ref={containerRef}
      id="welcome"
      className="relative h-screen overflow-hidden text-white isolate"
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* Gradient */}

      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.08), rgba(0,0,0,.18))",
        }}
      />

      {/* Warm Glow */}

      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 58% 55%, rgba(214,178,127,.20), transparent 42%)",
        }}
      />

      {/* Huge Background Name */}

      <h1
        className="
          hero-bg-title
          absolute
          left-[49%]
          top-[48%]
          -translate-x-1/2
          -translate-y-1/2
          text-[22vw]
          xl:text-[21rem]
          font-serif
          tracking-[-0.10em]
          leading-none
          text-white/[0.06]
          pointer-events-none
          select-none
          z-10
        "
      >
        ARUN
      </h1>

      {/* Hero Content */}

      <div className="relative z-30 flex h-full items-center">
        <div
          className="
            ml-[21%]
            max-w-[500px]
            -translate-y-14
            flex
            flex-col
            items-start
          "
        >
          {/* Hello */}

          <div
            ref={subtitleRef}
            className="
              uppercase
              tracking-[0.82em]
              text-[12px]
              text-white/70
              mb-5
              cursor-default
            "
          >
            {renderText("HELLO, I'M", "", 100)}
          </div>

          {/* Name */}

          <div
            ref={titleRef}
            className="cursor-default"
          >
            {renderText(
              "Arun",
              `
                font-serif
                text-[6.6rem]
                md:text-[7.2rem]
                leading-[0.82]
                tracking-[-0.06em]
                text-white
              `,
              400
            )}
          </div>

          {/* Gold Line */}

          <div className="mt-5 h-[2px] w-20 rounded-full bg-[#d6b27f]" />

          {/* Subtitle */}

          <h2
            className="
              mt-7
              uppercase
              text-[23px]
              tracking-[0.28em]
              leading-[1.5]
              font-light
              text-white/90
            "
          >
            Full Stack Developer
          </h2>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-[410px]
              text-[18px]
              leading-8
              text-white/70
            "
          >
            I build scalable web applications with modern
            technologies and elegant user experiences.
          </p>

          {/* Button */}

          <button
            className="
              mt-10
              px-10
              py-4
              rounded-full
              border
              border-[#d6b27f]
              uppercase
              tracking-[0.30em]
              text-sm
              transition-all
              duration-500
              hover:bg-[#d6b27f]
              hover:text-black
            "
          >
            Explore My Work →
          </button>
                  </div>
      </div>

      {/* =========================
          TOP LEFT LABEL
      ========================== */}

      <div
        className="
          hero-label
          absolute
          left-[16%]
          top-[18%]
          z-30
          text-[11px]
          uppercase
          tracking-[0.45em]
          leading-6
          text-white/60
        "
      >
        Building
        <br />
        Digital
        <br />
        Experiences

        <div className="mt-5 h-[2px] w-8 bg-[#d6b27f]" />
      </div>

      {/* =========================
          TOP RIGHT LABEL
      ========================== */}

      <div
        className="
          hero-label
          absolute
          right-[15%]
top-[15%]
          z-30
          text-right
          text-[11px]
          uppercase
          tracking-[0.45em]
          leading-6
          text-white/70
        "
      >
        Full Stack
        <br />
        Developer

        <div className="mt-5 ml-auto h-[2px] w-8 bg-[#d6b27f]" />
      </div>

      {/* =========================
          BOTTOM LEFT
      ========================== */}

      <div
        className="
          hero-label
          absolute
          left-[16%]
          bottom-[13%]
          z-30
          text-[11px]
          uppercase
          tracking-[0.45em]
          leading-6
          text-white/60
        "
      >
        Passionate
        <br />
        Creative
        <br />
        Problem Solver

        <div className="mt-5 h-[2px] w-8 bg-[#d6b27f]" />
      </div>

      {/* =========================
          BOTTOM RIGHT
      ========================== */}

      <div
        className="
          hero-label
          absolute
         right-[15%]
bottom-[14%]
          z-30
          text-right
          text-[11px]
          uppercase
          tracking-[0.45em]
          leading-6
          text-white/60
        "
      >
        Clean Code
        <br />
        Thoughtful Design
        <br />
        Real Impact

        <div className="mt-5 ml-auto h-[2px] w-8 bg-[#d6b27f]" />
      </div>

      {/* =========================
          GOLD GLOW
      ========================== */}

      <div
        className="
          absolute
         right-[18%]
          top-[18%]
          w-[620px]
          h-[620px]
          blur-[170px]
          rounded-full
          bg-[#d6b27f]/10
          pointer-events-none
          z-10
        "
      />

      {/* =========================
          VIGNETTE
      ========================== */}

      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background:
            "radial-gradient(circle, transparent 55%, rgba(0,0,0,.45) 100%)",
        }}
      />

      {/* =========================
          NOISE TEXTURE
      ========================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.025]
          mix-blend-soft-light
          z-40
        "
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.5) .6px, transparent .6px)",
          backgroundSize: "5px 5px",
        }}
      />
    </section>
  );
}