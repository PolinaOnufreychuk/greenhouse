const specimens = [
  { name: "Blue Morpho", zone: "Rainforest Zone", img: "https://picsum.photos/seed/blue-morpho/700/900" },
  { name: "Owl Butterfly", zone: "Canopy Walk", img: "https://picsum.photos/seed/owl-butterfly/700/900" },
  { name: "Monarch", zone: "Garden Trail", img: "https://picsum.photos/seed/monarch/700/900" },
];

function MeetTheButterflies() {
  const { Card, Tag } = window.ButterflyGreenhouseDesignSystem_819d97;
  return (
    <section style={{ padding: "var(--space-9) clamp(24px,6vw,80px)", background: "var(--cream-200)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", gap: "24px", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 700, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--accent-primary)", marginBottom: "14px" }}>
              Meet the Residents
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-display-lg)", color: "var(--text-primary)" }}>
              Sixty species,<br />one enclosure.
            </h2>
          </div>
          <p style={{ maxWidth: "360px", fontFamily: "var(--font-body)", color: "var(--text-secondary)", fontSize: "16px" }}>
            From the shimmering Blue Morpho to the eye-spotted Owl Butterfly — every wing pattern tells a survival story.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {specimens.map((s) => (
            <Card key={s.name} image={s.img} eyebrow={s.zone} title={s.name} aspect="portrait" />
          ))}
        </div>
        <div style={{ display: "flex", gap: "10px", marginTop: "24px", flexWrap: "wrap" }}>
          <Tag tone="outline">Diurnal species</Tag>
          <Tag tone="outline">Nocturnal moths</Tag>
          <Tag tone="outline">Caterpillar nursery</Tag>
          <Tag tone="outline">Feeding stations</Tag>
        </div>
      </div>
    </section>
  );
}
