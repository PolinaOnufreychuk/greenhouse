function Footer() {
  return (
    <footer style={{ background: "var(--ink-900)", color: "var(--sand-400)", padding: "var(--space-9) clamp(24px,6vw,80px) var(--space-6)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", gap: "40px", flexWrap: "wrap" }}>
        <div style={{ maxWidth: "320px" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--white)", marginBottom: "12px" }}>
            Butterfly Greenhouse
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: "var(--lh-body)" }}>
            A VenGreenery experience. 200 Canopy Way, open daily 9am–6pm.
          </p>
        </div>
        <div style={{ display: "flex", gap: "56px", flexWrap: "wrap" }}>
          <div>
            <div style={{ color: "var(--white)", fontWeight: 700, fontSize: "13px", marginBottom: "14px", letterSpacing: "var(--ls-label)" }}>Visit</div>
            {["Tickets", "Hours & Directions", "Membership", "Groups & Schools"].map((l) => (
              <a key={l} href="#" style={{ display: "block", color: "var(--sand-400)", fontSize: "14px", marginBottom: "10px" }}>{l}</a>
            ))}
          </div>
          <div>
            <div style={{ color: "var(--white)", fontWeight: 700, fontSize: "13px", marginBottom: "14px", letterSpacing: "var(--ls-label)" }}>Explore</div>
            {["The Butterflies", "Events", "Our Story", "Press"].map((l) => (
              <a key={l} href="#" style={{ display: "block", color: "var(--sand-400)", fontSize: "14px", marginBottom: "10px" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "1200px", margin: "48px auto 0", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: "12px", color: "var(--ink-300)" }}>
        © 2026 Butterfly Greenhouse · VenGreenery
      </div>
    </footer>
  );
}
