import React from "react";

const aspects = {
  portrait: "3 / 4",
  wide: "16 / 10",
  square: "1 / 1",
};

export function Card({ image, eyebrow, title, description, aspect = "portrait" }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        aspectRatio: aspects[aspect] || aspects.portrait,
        boxShadow: "var(--shadow-md)",
        cursor: "pointer",
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: hover ? "scale(1.06)" : "scale(1)",
          transition: "transform var(--dur-slow) var(--ease-organic)",
        }}
      />
      <div style={{ position: "absolute", inset: 0, background: "var(--scrim-dark)" }} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "22px" }}>
        {eyebrow && (
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-eyebrow)",
              letterSpacing: "var(--ls-eyebrow)",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "var(--amber-500)",
              marginBottom: "8px",
            }}
          >
            {eyebrow}
          </div>
        )}
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-display-sm)",
            lineHeight: "var(--lh-heading)",
            color: "var(--white)",
            marginBottom: description ? "6px" : 0,
          }}
        >
          {title}
        </div>
        {description && (
          <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--text-on-dark-secondary)" }}>
            {description}
          </div>
        )}
      </div>
    </div>
  );
}
