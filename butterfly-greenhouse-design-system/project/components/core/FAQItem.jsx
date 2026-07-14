import React from "react";

export function FAQItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div
      style={{
        borderBottom: "1.5px solid var(--border-default)",
        padding: "20px 0",
        cursor: "pointer",
      }}
      onClick={() => setOpen(!open)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "19px", color: "var(--text-primary)" }}>{question}</span>
        <span
          style={{
            flexShrink: 0,
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "var(--orange-100)",
            color: "var(--accent-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            fontWeight: 700,
            transform: open ? "rotate(45deg)" : "none",
            transition: "transform var(--dur-base) var(--ease-organic)",
          }}
        >
          +
        </span>
      </div>
      {open && (
        <div style={{ marginTop: "12px", fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-secondary)", lineHeight: "var(--lh-body)" }}>
          {answer}
        </div>
      )}
    </div>
  );
}
