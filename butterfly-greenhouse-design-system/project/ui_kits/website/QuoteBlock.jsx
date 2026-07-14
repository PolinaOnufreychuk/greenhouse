function QuoteBlock() {
  return (
    <section style={{ background: "var(--surface-canopy)", color: "var(--white)", padding: "var(--space-10) clamp(24px,6vw,80px)", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "var(--orange-600)",
          opacity: 0.18,
          top: "-160px",
          right: "-120px",
        }}
      />
      <blockquote
        style={{
          position: "relative",
          margin: "0 auto",
          maxWidth: "900px",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem,4vw,3.25rem)",
          lineHeight: 1.2,
          textAlign: "center",
        }}
      >
        “My daughter followed one butterfly for twenty minutes and forgot her phone existed.”
      </blockquote>
      <div style={{ textAlign: "center", marginTop: "24px", fontFamily: "var(--font-body)", color: "var(--sand-400)", fontSize: "14px" }}>
        — visitor, opening week
      </div>
    </section>
  );
}
