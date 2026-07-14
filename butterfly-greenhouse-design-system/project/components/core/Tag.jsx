import React from "react";

export function Tag({ children, tone = "subtle" }) {
  const styles = {
    subtle: { background: "var(--orange-100)", color: "var(--orange-700)", border: "none" },
    outline: { background: "transparent", color: "var(--text-secondary)", border: "1.5px solid var(--border-default)" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        padding: "5px 13px",
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: "12.5px",
        letterSpacing: "var(--ls-label)",
        ...styles[tone],
      }}
    >
      {children}
    </span>
  );
}
