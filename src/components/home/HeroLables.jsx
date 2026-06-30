import React from "react";

function Label({
  title,
  align = "left",
  className = "",
}) {
  return (
    <div
      className={`
        absolute
        z-30
        uppercase
        text-[10px]
        tracking-[0.45em]
        leading-6
        text-white/55
        select-none
        ${align === "right" ? "text-right" : ""}
        ${className}
      `}
    >
      {title.map((line, index) => (
        <div key={index}>{line}</div>
      ))}

      <div
        className={`
          mt-5
          h-[2px]
          w-10
          rounded-full
          bg-[#d6b27f]
          ${align === "right" ? "ml-auto" : ""}
        `}
      />
    </div>
  );
}

export default function HeroLabels() {
  return (
    <>
      {/* Top Left */}
      <Label
        className="
          left-[8%]
          top-[12%]
        "
        title={[
          "Creative",
          "Developer",
        ]}
      />

      {/* Top Right */}
      <Label
        align="right"
        className="
          right-[8%]
          top-[12%]
        "
        title={[
          "Modern",
          "Experiences",
        ]}
      />

      {/* Bottom Left */}
      <Label
        className="
          left-[8%]
          bottom-[10%]
        "
        title={[
          "UI / UX",
          "Focused",
        ]}
      />

      {/* Bottom Right */}
      <Label
        align="right"
        className="
          right-[8%]
          bottom-[10%]
        "
        title={[
          "Portfolio",
          "2025",
        ]}
      />
    </>
  );
}