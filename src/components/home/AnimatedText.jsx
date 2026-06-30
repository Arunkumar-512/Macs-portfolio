import React from "react";

export const FONT_WEIGHT = {
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

export const renderLetters = (
  text,
  className = "",
  baseWeight = 400
) =>
  [...text].map((char, index) => (
    <span
      key={index}
      className={`
        ${className}
        inline-block
        will-change-transform
        select-none
      `}
      style={{
        fontWeight: baseWeight,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  );