import React from "react";

const colors = {
  orange: "var(--accent-primary)",
  green: "var(--accent-secondary)",
  magenta: "var(--pink-500)",
  yellow: "var(--amber-500)",
  sky: "var(--sky-500)",
};

export function Sticker({ children, color = "orange", rotate = -4 }) {
  const dark = color === "yellow" || color === "magenta" || color === "sky";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "8px 18px",
        borderRadius: "var(--radius-pill)",
        background: colors[color] || colors.orange,
        color: dark ? "var(--ink-900)" : "var(--white)",
        fontFamily: "var(--font-body)",
        fontWeight: 800,
        fontSize: "13px",
        letterSpacing: "var(--ls-label)",
        textTransform: "uppercase",
        boxShadow: "var(--shadow-sticker)",
        transform: `rotate(${rotate}deg)`,
        border: "2px solid var(--white)",
      }}
    >
      {children}
    </span>
  );
}
