function StatsStrip() {
  const stats = [
    { value: "60+", label: "Butterfly species" },
    { value: "500", label: "Flying today" },
    { value: "26°C", label: "Tropical, year-round" },
    { value: "45min", label: "Average visit" },
  ];
  return (
    <section style={{ background: "var(--surface-page)", padding: "var(--space-8) clamp(24px,6vw,80px)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", maxWidth: "1200px", margin: "0 auto" }}>
        {stats.map((s) => (
          <div key={s.label}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4.5rem)", color: "var(--accent-primary)", lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-secondary)", marginTop: "8px" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
