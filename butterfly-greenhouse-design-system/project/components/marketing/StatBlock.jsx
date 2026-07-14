import React from "react";

export function StatBlock({ value, label }) {
  return (
    <div style={{ textAlign: "left" }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-display-md)", color: "var(--accent-primary)", lineHeight: 1 }}>
        {value}
      </div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-secondary)", marginTop: "6px" }}>
        {label}
      </div>
    </div>
  );
}
