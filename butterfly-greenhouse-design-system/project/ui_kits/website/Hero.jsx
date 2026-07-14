function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        color: "var(--white)",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1600"
        alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "var(--scrim-dark)" }} />
      <div style={{ position: "absolute", inset: 0, background: "var(--scrim-warm)" }} />

      {/* floating sticker */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          right: "8%",
          background: "var(--amber-500)",
          color: "var(--ink-900)",
          padding: "10px 20px",
          borderRadius: "var(--radius-pill)",
          fontWeight: 800,
          fontSize: "14px",
          transform: "rotate(-6deg)",
          boxShadow: "var(--shadow-sticker)",
        }}
      >
        Open Daily · 9am–6pm
      </div>

      <div style={{ position: "relative", padding: "0 clamp(24px,6vw,80px) 90px", maxWidth: "1100px" }}>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "var(--ls-eyebrow)",
            textTransform: "uppercase",
            color: "var(--amber-500)",
            marginBottom: "18px",
          }}
        >
          Butterfly Greenhouse · A VenGreenery Experience
        </div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,7vw,7.5rem)", lineHeight: 0.98, margin: 0 }}>
          Walk into<br />a living rainbow.
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1.05rem,1.4vw,1.35rem)", maxWidth: "560px", marginTop: "24px", color: "rgba(255,255,255,0.88)" }}>
          Hundreds of free-flying butterflies, tropical blooms and warm humid air —
          twelve steps from the parking lot to the middle of the jungle.
        </p>
        <div style={{ display: "flex", gap: "16px", marginTop: "36px" }}>
          <button style={{ border: "none", borderRadius: "var(--radius-pill)", padding: "17px 34px", fontWeight: 700, fontSize: "16px", background: "var(--accent-primary)", color: "var(--white)", boxShadow: "var(--shadow-md)", cursor: "pointer" }}>
            Get Tickets
          </button>
          <button style={{ border: "1.5px solid rgba(255,255,255,0.5)", borderRadius: "var(--radius-pill)", padding: "17px 34px", fontWeight: 700, fontSize: "16px", background: "transparent", color: "var(--white)", cursor: "pointer" }}>
            Watch the Film
          </button>
        </div>
      </div>
    </section>
  );
}
