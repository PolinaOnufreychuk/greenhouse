const faqs = [
  { q: "Can I bring a stroller?", a: "Yes — all paths are stroller and wheelchair accessible." },
  { q: "Is it safe for toddlers?", a: "Absolutely. Butterflies are gentle and every path is fully enclosed." },
  { q: "What if it rains outside?", a: "The greenhouse stays a warm, dry 26°C year-round, rain or shine." },
  { q: "How long does a visit take?", a: "Most families spend 45–60 minutes, though many stay longer." },
];

function FAQSection() {
  const { FAQItem } = window.ButterflyGreenhouseDesignSystem_819d97;
  return (
    <section style={{ padding: "var(--space-10) clamp(24px,6vw,80px)", background: "var(--cream-200)" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-display-md)", marginBottom: "12px" }}>Curious minds, answered.</h2>
        <div style={{ marginTop: "28px" }}>
          {faqs.map((f, i) => (
            <FAQItem key={f.q} question={f.q} answer={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
