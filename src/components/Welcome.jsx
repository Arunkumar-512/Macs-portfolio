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

    gsap.to(".hero-bg-title", {
      y: 12,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.from(".hero-label", {
      opacity: 0,
      y: 25,
      stagger: 0.15,
      delay: 0.8,
      duration: 1,
      ease: "power3.out",
    });

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
      className="
        relative
        h-screen
        overflow-hidden
        isolate
        text-white
        w-full
      "
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: 'relative',
        top: 'auto',
        left: 'auto',
        transform: 'none',
        paddingLeft: '0',
        paddingRight: '0',
      }}
    >
      {/* BACKGROUND NAME - SAME SIZE */}
      <h1
        className="
          hero-bg-title
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          text-[18vw]
          xl:text-[17rem]
          font-serif
          tracking-[-0.05em]
          leading-none
          text-white/[0.05]
          pointer-events-none
          select-none
          z-0
        "
      >
        ARUN
      </h1>

      {/* ===========================
          MAIN HERO - LEFT ALIGNED (2x SMALLER)
      =========================== */}
      <div 
        className="relative z-20 h-full flex items-center w-full"
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <div 
          className="w-full h-full flex items-center"
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <div
            className="
              flex
              flex-col
              items-start
              justify-center
              text-left
              -translate-y-6
              max-w-[500px]
              w-full
            "
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              textAlign: 'left',
              paddingLeft: 'clamp(3rem, 8vw, 10rem)',
              paddingRight: '2rem',
              maxWidth: '500px',
              width: '100%',
            }}
          >
            {/* HELLO - 2x SMALLER */}
            <div
              ref={subtitleRef}
              className="
                uppercase
                text-[11px]
                tracking-[0.7em]
                text-white/60
                cursor-default
              "
            >
              {renderText("HELLO, I'M", "", 100)}
            </div>

            {/* NAME - 2x SMALLER */}
            <div
              ref={titleRef}
              className="mt-4 cursor-default"
            >
              {renderText(
                "Arun",
                `
                  font-serif
                  text-[4rem]
                  md:text-[4.5rem]
                  lg:text-[5rem]
                  xl:text-[5.5rem]
                  2xl:text-[6rem]
                  leading-[0.82]
                  tracking-[-0.07em]
                  text-white
                `,
                400
              )}
            </div>

            {/* GOLD DIVIDER - 2x SMALLER */}
            <div
              className="
                mt-5
                h-[2px]
                w-20
                rounded-full
                bg-[#d6b27f]
              "
            />

            {/* ROLE - 2x SMALLER */}
            <h2
              className="
                mt-6
                uppercase
                text-[16px]
                lg:text-[18px]
                tracking-[0.4em]
                font-light
                leading-relaxed
                text-white/90
                pb-4
                sm:pb-0
              "
            >
              Full Stack Developer
            </h2>

            {/* DESCRIPTION - 2x SMALLER */}
            <p
              className="
                hidden
                sm:block
                mt-7
                max-w-[500px]
                text-[15px]
                lg:text-[16px]
                leading-[1.9]
                text-white/70
              "
            >
              I craft modern digital experiences through thoughtful
              design, scalable architecture, and smooth interactions.
              Blending engineering with creativity, I build web
              applications that are fast, elegant, and made to leave a
              lasting impression.
            </p>

            {/* CTA - 2x SMALLER */}
            {/* <button
              className="
                mt-10
                px-8
                py-3.5
                rounded-full
                border
                border-[#d6b27f]
                uppercase
                tracking-[0.3em]
                text-[11px]
                transition-all
                duration-500
                hover:bg-[#d6b27f]
                hover:text-black
              "
            >
              Explore My Work →
            </button> */}
          </div>
        </div>
      </div>

      {/* ===========================
          SIDE LABELS - SAME SIZE AS BEFORE
      =========================== */}

      {/* TOP LEFT */}
      <div
        className="
          hero-label
          absolute
          left-6
          md:left-10
          lg:left-16
          top-20
          z-30
          text-[11px]
          uppercase
          tracking-[0.45em]
          leading-7
          text-white/60
        "
      >
        Building
        <br />
        Digital
        <br />
        Experiences
        <div className="mt-6 h-[2px] w-10 bg-[#d6b27f]" />
      </div>

      {/* TOP RIGHT */}
      <div
        className="
          hero-label
          absolute
          right-6
          md:right-10
          lg:right-16
          top-20
          z-30
          text-right
          text-[11px]
          uppercase
          tracking-[0.45em]
          leading-7
          text-white/60
        "
      >
        Frontend
        <br />
        Backend
        <br />
        Cloud
        <div className="mt-6 ml-auto h-[2px] w-10 bg-[#d6b27f]" />
      </div>

      {/* BOTTOM LEFT */}
      <div
        className="
          hero-label
          absolute
          left-6
          md:left-10
          lg:left-16
          bottom-20
          z-30
          text-[11px]
          uppercase
          tracking-[0.45em]
          leading-7
          text-white/60
        "
      >
        React
        <br />
        Next.js
        <br />
        TypeScript
        <div className="mt-6 h-[2px] w-10 bg-[#d6b27f]" />
      </div>

      {/* BOTTOM RIGHT */}
      <div
        className="
          hero-label
          absolute
          right-6
          md:right-10
          lg:right-16
          bottom-20
          z-30
          text-right
          text-[11px]
          uppercase
          tracking-[0.45em]
          leading-7
          text-white/60
        "
      >
        UI / UX
        <br />
        Performance
        <br />
        Clean Code
        <div className="mt-6 ml-auto h-[2px] w-10 bg-[#d6b27f]" />
      </div>

      {/* ===========================
          BOTTOM INFO BAR - SAME SIZE
      =========================== */}
      <div
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          z-30
          flex
          items-center
          gap-5
          text-[11px]
          uppercase
          tracking-[0.45em]
          text-white/45
        "
      >
        <div className="h-px w-16 bg-white/20" />
        <span>Scroll</span>
        <div className="h-px w-16 bg-white/20" />
      </div>

      {/* ===========================
          SCROLL INDICATOR - SAME SIZE
      =========================== */}
      <div
        className="
          absolute
          bottom-20
          left-1/2
          -translate-x-1/2
          z-30
        "
      >
        <div
          className="
            h-12
            w-[22px]
            rounded-full
            border
            border-white/25
            flex
            justify-center
            pt-2
          "
        >
          <div
            className="
              h-2
              w-2
              rounded-full
              bg-[#d6b27f]
              animate-bounce
            "
          />
        </div>
      </div>
    </section>
  );
}