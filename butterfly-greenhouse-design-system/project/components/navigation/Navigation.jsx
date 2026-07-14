import React from "react";

export function Navigation({ links = ["Visit", "Butterflies", "Plan", "Events", "Membership"], scrolled = false, ctaLabel = "Get Tickets" }) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 28px",
        borderRadius: scrolled ? "var(--radius-pill)" : "0",
        background: scrolled ? "var(--surface-glass)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "var(--shadow-md)" : "none",
        transition: "all var(--dur-base) var(--ease-organic)",
        fontFamily: "var(--font-body)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            background: "var(--accent-primary)",
          }}
        />
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "18px", color: scrolled ? "var(--text-primary)" : "var(--white)" }}>
          Butterfly Greenhouse
        </span>
      </div>
      <div style={{ display: "flex", gap: "28px" }}>
        {links.map((l) => (
          <a
            key={l}
            href="#"
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: scrolled ? "var(--text-primary)" : "var(--white)",
            }}
          >
            {l}
          </a>
        ))}
      </div>
      <button
        style={{
          border: "none",
          borderRadius: "var(--radius-pill)",
          padding: "10px 22px",
          background: "var(--accent-primary)",
          color: "var(--white)",
          fontWeight: 700,
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        {ctaLabel}
      </button>
    </nav>
  );
}
