import React from "react";

export function TicketCard({ name, price, unit = "per person", perks = [], featured = false }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "var(--radius-lg)",
        padding: "28px 26px",
        background: featured ? "var(--accent-primary)" : "var(--surface-card)",
        color: featured ? "var(--white)" : "var(--text-primary)",
        boxShadow: featured ? "var(--shadow-lg)" : "var(--shadow-sm)",
        border: featured ? "none" : "1.5px solid var(--border-default)",
        transform: featured ? "translateY(-8px)" : "none",
      }}
    >
      {featured && (
        <div
          style={{
            position: "absolute",
            top: "-14px",
            right: "24px",
            background: "var(--amber-500)",
            color: "var(--ink-900)",
            fontSize: "12px",
            fontWeight: 800,
            padding: "6px 14px",
            borderRadius: "var(--radius-pill)",
            transform: "rotate(4deg)",
            boxShadow: "var(--shadow-sticker)",
          }}
        >
          Most Popular
        </div>
      )}
      <div style={{ fontFamily: "var(--font-display)", fontSize: "22px", marginBottom: "10px" }}>{name}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "18px" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "40px" }}>{price}</span>
        <span style={{ fontSize: "13px", opacity: 0.75 }}>{unit}</span>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 22px", display: "flex", flexDirection: "column", gap: "8px" }}>
        {perks.map((p) => (
          <li key={p} style={{ fontSize: "14px", display: "flex", gap: "8px" }}>
            <span aria-hidden="true" style={{ color: featured ? "var(--white)" : "var(--accent-primary)", fontWeight: 700 }}>✓</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <button
        style={{
          width: "100%",
          border: "none",
          borderRadius: "var(--radius-pill)",
          padding: "13px",
          fontWeight: 700,
          fontSize: "15px",
          cursor: "pointer",
          background: featured ? "var(--white)" : "var(--accent-primary)",
          color: featured ? "var(--accent-primary)" : "var(--white)",
        }}
      >
        Select
      </button>
    </div>
  );
}
