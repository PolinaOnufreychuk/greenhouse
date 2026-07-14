const tiers = [
  { name: "Single Entry", price: "$24", unit: "per adult", perks: ["Full-day access", "Garden trail map"] },
  { name: "Family Pass", price: "$68", unit: "up to 4 people", perks: ["Skip the line", "Free return visit", "Kids activity book"], featured: true },
  { name: "Annual Membership", price: "$120", unit: "per year", perks: ["Unlimited visits", "Member-only events"] },
];

function TicketsSection() {
  const { TicketCard } = window.ButterflyGreenhouseDesignSystem_819d97;
  return (
    <section id="tickets" style={{ padding: "var(--space-10) clamp(24px,6vw,80px)", background: "var(--surface-page)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 700, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--accent-primary)", marginBottom: "14px" }}>
            Plan Your Visit
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-display-lg)" }}>Pick your pass.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}>
          {tiers.map((t) => (
            <TicketCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
