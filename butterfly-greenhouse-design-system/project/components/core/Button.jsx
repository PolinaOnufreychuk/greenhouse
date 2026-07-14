import React from "react";

export function Button({ children, variant = "primary", size = "md", disabled = false, onClick }) {
  const base = {
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    letterSpacing: "var(--ls-label)",
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    borderRadius: "var(--radius-pill)",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    transition: "transform var(--dur-fast) var(--ease-organic), box-shadow var(--dur-fast) var(--ease-organic), background var(--dur-fast)",
    opacity: disabled ? 0.5 : 1,
  };
  const sizes = {
    md: { padding: "12px 24px", fontSize: "15px" },
    lg: { padding: "17px 34px", fontSize: "17px" },
  };
  const variants = {
    primary: {
      background: "var(--accent-primary)",
      color: "var(--white)",
      boxShadow: "var(--shadow-md)",
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--text-primary)",
      boxShadow: "var(--shadow-sm)",
      border: "1.5px solid var(--border-default)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1.5px solid var(--border-strong)",
    },
  };
  const [hover, setHover] = React.useState(false);
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    transform: hover && !disabled ? "translateY(-2px) scale(1.02)" : "none",
  };
  return (
    <button
      style={style}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  );
}
