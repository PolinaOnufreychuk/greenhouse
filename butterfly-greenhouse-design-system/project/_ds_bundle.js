/* @ds-bundle: {"format":4,"namespace":"ButterflyGreenhouseDesignSystem_819d97","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"FAQItem","sourcePath":"components/core/FAQItem.jsx"},{"name":"Sticker","sourcePath":"components/core/Sticker.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"StatBlock","sourcePath":"components/marketing/StatBlock.jsx"},{"name":"TicketCard","sourcePath":"components/marketing/TicketCard.jsx"},{"name":"Navigation","sourcePath":"components/navigation/Navigation.jsx"}],"sourceHashes":{"components/core/Button.jsx":"171be0621f5e","components/core/Card.jsx":"1b4d9d9c30f3","components/core/FAQItem.jsx":"07b0a6b6a294","components/core/Sticker.jsx":"8fcc62824b83","components/core/Tag.jsx":"eb19084014b6","components/marketing/StatBlock.jsx":"2ef4b58b7478","components/marketing/TicketCard.jsx":"46a165950cbf","components/navigation/Navigation.jsx":"37c0ceb827a8","ui_kits/website/FAQSection.jsx":"1012c970001a","ui_kits/website/Footer.jsx":"23e0ccd8b5a0","ui_kits/website/Hero.jsx":"ee6fc51fbcdc","ui_kits/website/MeetTheButterflies.jsx":"10915a290e28","ui_kits/website/QuoteBlock.jsx":"b36b9e39e679","ui_kits/website/StatsStrip.jsx":"6275b187afd0","ui_kits/website/TicketsSection.jsx":"cf97a4f5ffa1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ButterflyGreenhouseDesignSystem_819d97 = window.ButterflyGreenhouseDesignSystem_819d97 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick
}) {
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
    opacity: disabled ? 0.5 : 1
  };
  const sizes = {
    md: {
      padding: "12px 24px",
      fontSize: "15px"
    },
    lg: {
      padding: "17px 34px",
      fontSize: "17px"
    }
  };
  const variants = {
    primary: {
      background: "var(--accent-primary)",
      color: "var(--white)",
      boxShadow: "var(--shadow-md)"
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--text-primary)",
      boxShadow: "var(--shadow-sm)",
      border: "1.5px solid var(--border-default)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1.5px solid var(--border-strong)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    transform: hover && !disabled ? "translateY(-2px) scale(1.02)" : "none"
  };
  return /*#__PURE__*/React.createElement("button", {
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
const aspects = {
  portrait: "3 / 4",
  wide: "16 / 10",
  square: "1 / 1"
};
function Card({
  image,
  eyebrow,
  title,
  description,
  aspect = "portrait"
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      aspectRatio: aspects[aspect] || aspects.portrait,
      boxShadow: "var(--shadow-md)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover ? "scale(1.06)" : "scale(1)",
      transition: "transform var(--dur-slow) var(--ease-organic)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-dark)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: "22px"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      fontWeight: 700,
      color: "var(--amber-500)",
      marginBottom: "8px"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-sm)",
      lineHeight: "var(--lh-heading)",
      color: "var(--white)",
      marginBottom: description ? "6px" : 0
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-on-dark-secondary)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/FAQItem.jsx
try { (() => {
function FAQItem({
  question,
  answer,
  defaultOpen = false
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1.5px solid var(--border-default)",
      padding: "20px 0",
      cursor: "pointer"
    },
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "19px",
      color: "var(--text-primary)"
    }
  }, question), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: "28px",
      height: "28px",
      borderRadius: "50%",
      background: "var(--orange-100)",
      color: "var(--accent-primary)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
      fontWeight: 700,
      transform: open ? "rotate(45deg)" : "none",
      transition: "transform var(--dur-base) var(--ease-organic)"
    }
  }, "+")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "12px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--text-secondary)",
      lineHeight: "var(--lh-body)"
    }
  }, answer));
}
Object.assign(__ds_scope, { FAQItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FAQItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Sticker.jsx
try { (() => {
const colors = {
  orange: "var(--accent-primary)",
  green: "var(--accent-secondary)",
  magenta: "var(--pink-500)",
  yellow: "var(--amber-500)",
  sky: "var(--sky-500)"
};
function Sticker({
  children,
  color = "orange",
  rotate = -4
}) {
  const dark = color === "yellow" || color === "magenta" || color === "sky";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "8px 18px",
      borderRadius: "var(--radius-pill)",
      background: colors[color] || colors.orange,
      color: dark ? "var(--ink-900)" : "var(--white)",
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: "13px",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      boxShadow: "var(--shadow-sticker)",
      transform: `rotate(${rotate}deg)`,
      border: "2px solid var(--white)"
    }
  }, children);
}
Object.assign(__ds_scope, { Sticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Sticker.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  tone = "subtle"
}) {
  const styles = {
    subtle: {
      background: "var(--orange-100)",
      color: "var(--orange-700)",
      border: "none"
    },
    outline: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1.5px solid var(--border-default)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      padding: "5px 13px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "12.5px",
      letterSpacing: "var(--ls-label)",
      ...styles[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-md)",
      color: "var(--accent-primary)",
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-secondary)",
      marginTop: "6px"
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TicketCard.jsx
try { (() => {
function TicketCard({
  name,
  price,
  unit = "per person",
  perks = [],
  featured = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-lg)",
      padding: "28px 26px",
      background: featured ? "var(--accent-primary)" : "var(--surface-card)",
      color: featured ? "var(--white)" : "var(--text-primary)",
      boxShadow: featured ? "var(--shadow-lg)" : "var(--shadow-sm)",
      border: featured ? "none" : "1.5px solid var(--border-default)",
      transform: featured ? "translateY(-8px)" : "none"
    }
  }, featured && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "-14px",
      right: "24px",
      background: "var(--amber-500)",
      color: "var(--ink-900)",
      fontSize: "12px",
      fontWeight: 800,
      padding: "6px 14px",
      borderRadius: "var(--radius-pill)",
      transform: "rotate(4deg)",
      boxShadow: "var(--shadow-sticker)"
    }
  }, "Most Popular"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "22px",
      marginBottom: "10px"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "6px",
      marginBottom: "18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "40px"
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      opacity: 0.75
    }
  }, unit)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "0 0 22px",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, perks.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      fontSize: "14px",
      display: "flex",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: featured ? "var(--white)" : "var(--accent-primary)",
      fontWeight: 700
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, p)))), /*#__PURE__*/React.createElement("button", {
    style: {
      width: "100%",
      border: "none",
      borderRadius: "var(--radius-pill)",
      padding: "13px",
      fontWeight: 700,
      fontSize: "15px",
      cursor: "pointer",
      background: featured ? "var(--white)" : "var(--accent-primary)",
      color: featured ? "var(--accent-primary)" : "var(--white)"
    }
  }, "Select"));
}
Object.assign(__ds_scope, { TicketCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TicketCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navigation.jsx
try { (() => {
function Navigation({
  links = ["Visit", "Butterflies", "Plan", "Events", "Membership"],
  scrolled = false,
  ctaLabel = "Get Tickets"
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 28px",
      borderRadius: scrolled ? "var(--radius-pill)" : "0",
      background: scrolled ? "var(--surface-glass)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      boxShadow: scrolled ? "var(--shadow-md)" : "none",
      transition: "all var(--dur-base) var(--ease-organic)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "34px",
      height: "34px",
      borderRadius: "50%",
      background: "var(--accent-primary)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "18px",
      color: scrolled ? "var(--text-primary)" : "var(--white)"
    }
  }, "Butterfly Greenhouse")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "28px"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: "14px",
      fontWeight: 600,
      color: scrolled ? "var(--text-primary)" : "var(--white)"
    }
  }, l))), /*#__PURE__*/React.createElement("button", {
    style: {
      border: "none",
      borderRadius: "var(--radius-pill)",
      padding: "10px 22px",
      background: "var(--accent-primary)",
      color: "var(--white)",
      fontWeight: 700,
      fontSize: "14px",
      cursor: "pointer"
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { Navigation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navigation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FAQSection.jsx
try { (() => {
const faqs = [{
  q: "Can I bring a stroller?",
  a: "Yes — all paths are stroller and wheelchair accessible."
}, {
  q: "Is it safe for toddlers?",
  a: "Absolutely. Butterflies are gentle and every path is fully enclosed."
}, {
  q: "What if it rains outside?",
  a: "The greenhouse stays a warm, dry 26°C year-round, rain or shine."
}, {
  q: "How long does a visit take?",
  a: "Most families spend 45–60 minutes, though many stay longer."
}];
function FAQSection() {
  const {
    FAQItem
  } = window.ButterflyGreenhouseDesignSystem_819d97;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-10) clamp(24px,6vw,80px)",
      background: "var(--cream-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "760px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-md)",
      marginBottom: "12px"
    }
  }, "Curious minds, answered."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "28px"
    }
  }, faqs.map((f, i) => /*#__PURE__*/React.createElement(FAQItem, {
    key: f.q,
    question: f.q,
    answer: f.a,
    defaultOpen: i === 0
  })))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FAQSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink-900)",
      color: "var(--sand-400)",
      padding: "var(--space-9) clamp(24px,6vw,80px) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      gap: "40px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "320px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "22px",
      color: "var(--white)",
      marginBottom: "12px"
    }
  }, "Butterfly Greenhouse"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      lineHeight: "var(--lh-body)"
    }
  }, "A VenGreenery experience. 200 Canopy Way, open daily 9am\u20136pm.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "56px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--white)",
      fontWeight: 700,
      fontSize: "13px",
      marginBottom: "14px",
      letterSpacing: "var(--ls-label)"
    }
  }, "Visit"), ["Tickets", "Hours & Directions", "Membership", "Groups & Schools"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      display: "block",
      color: "var(--sand-400)",
      fontSize: "14px",
      marginBottom: "10px"
    }
  }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--white)",
      fontWeight: 700,
      fontSize: "13px",
      marginBottom: "14px",
      letterSpacing: "var(--ls-label)"
    }
  }, "Explore"), ["The Butterflies", "Events", "Our Story", "Press"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      display: "block",
      color: "var(--sand-400)",
      fontSize: "14px",
      marginBottom: "10px"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "48px auto 0",
      paddingTop: "20px",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      fontSize: "12px",
      color: "var(--ink-300)"
    }
  }, "\xA9 2026 Butterfly Greenhouse \xB7 VenGreenery"));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      overflow: "hidden",
      color: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1600",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-dark)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-warm)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
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
      boxShadow: "var(--shadow-sticker)"
    }
  }, "Open Daily \xB7 9am\u20136pm"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "0 clamp(24px,6vw,80px) 90px",
      maxWidth: "1100px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      fontWeight: 700,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--amber-500)",
      marginBottom: "18px"
    }
  }, "Butterfly Greenhouse \xB7 A VenGreenery Experience"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(3rem,7vw,7.5rem)",
      lineHeight: 0.98,
      margin: 0
    }
  }, "Walk into", /*#__PURE__*/React.createElement("br", null), "a living rainbow."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "clamp(1.05rem,1.4vw,1.35rem)",
      maxWidth: "560px",
      marginTop: "24px",
      color: "rgba(255,255,255,0.88)"
    }
  }, "Hundreds of free-flying butterflies, tropical blooms and warm humid air \u2014 twelve steps from the parking lot to the middle of the jungle."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "16px",
      marginTop: "36px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      border: "none",
      borderRadius: "var(--radius-pill)",
      padding: "17px 34px",
      fontWeight: 700,
      fontSize: "16px",
      background: "var(--accent-primary)",
      color: "var(--white)",
      boxShadow: "var(--shadow-md)",
      cursor: "pointer"
    }
  }, "Get Tickets"), /*#__PURE__*/React.createElement("button", {
    style: {
      border: "1.5px solid rgba(255,255,255,0.5)",
      borderRadius: "var(--radius-pill)",
      padding: "17px 34px",
      fontWeight: 700,
      fontSize: "16px",
      background: "transparent",
      color: "var(--white)",
      cursor: "pointer"
    }
  }, "Watch the Film"))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MeetTheButterflies.jsx
try { (() => {
const specimens = [{
  name: "Blue Morpho",
  zone: "Rainforest Zone",
  img: "https://picsum.photos/seed/blue-morpho/700/900"
}, {
  name: "Owl Butterfly",
  zone: "Canopy Walk",
  img: "https://picsum.photos/seed/owl-butterfly/700/900"
}, {
  name: "Monarch",
  zone: "Garden Trail",
  img: "https://picsum.photos/seed/monarch/700/900"
}];
function MeetTheButterflies() {
  const {
    Card,
    Tag
  } = window.ButterflyGreenhouseDesignSystem_819d97;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-9) clamp(24px,6vw,80px)",
      background: "var(--cream-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: "40px",
      gap: "24px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--accent-primary)",
      marginBottom: "14px"
    }
  }, "Meet the Residents"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-lg)",
      color: "var(--text-primary)"
    }
  }, "Sixty species,", /*#__PURE__*/React.createElement("br", null), "one enclosure.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "360px",
      fontFamily: "var(--font-body)",
      color: "var(--text-secondary)",
      fontSize: "16px"
    }
  }, "From the shimmering Blue Morpho to the eye-spotted Owl Butterfly \u2014 every wing pattern tells a survival story.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px"
    }
  }, specimens.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.name,
    image: s.img,
    eyebrow: s.zone,
    title: s.name,
    aspect: "portrait"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      marginTop: "24px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Diurnal species"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Nocturnal moths"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Caterpillar nursery"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Feeding stations"))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MeetTheButterflies.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/QuoteBlock.jsx
try { (() => {
function QuoteBlock() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-canopy)",
      color: "var(--white)",
      padding: "var(--space-10) clamp(24px,6vw,80px)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: "480px",
      height: "480px",
      borderRadius: "50%",
      background: "var(--orange-600)",
      opacity: 0.18,
      top: "-160px",
      right: "-120px"
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      position: "relative",
      margin: "0 auto",
      maxWidth: "900px",
      fontFamily: "var(--font-display)",
      fontSize: "clamp(2rem,4vw,3.25rem)",
      lineHeight: 1.2,
      textAlign: "center"
    }
  }, "\u201CMy daughter followed one butterfly for twenty minutes and forgot her phone existed.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: "24px",
      fontFamily: "var(--font-body)",
      color: "var(--sand-400)",
      fontSize: "14px"
    }
  }, "\u2014 visitor, opening week"));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StatsStrip.jsx
try { (() => {
function StatsStrip() {
  const stats = [{
    value: "60+",
    label: "Butterfly species"
  }, {
    value: "500",
    label: "Flying today"
  }, {
    value: "26°C",
    label: "Tropical, year-round"
  }, {
    value: "45min",
    label: "Average visit"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--space-8) clamp(24px,6vw,80px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "24px",
      maxWidth: "1200px",
      margin: "0 auto"
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(2.5rem,5vw,4.5rem)",
      color: "var(--accent-primary)",
      lineHeight: 1
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-secondary)",
      marginTop: "8px"
    }
  }, s.label)))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StatsStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TicketsSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tiers = [{
  name: "Single Entry",
  price: "$24",
  unit: "per adult",
  perks: ["Full-day access", "Garden trail map"]
}, {
  name: "Family Pass",
  price: "$68",
  unit: "up to 4 people",
  perks: ["Skip the line", "Free return visit", "Kids activity book"],
  featured: true
}, {
  name: "Annual Membership",
  price: "$120",
  unit: "per year",
  perks: ["Unlimited visits", "Member-only events"]
}];
function TicketsSection() {
  const {
    TicketCard
  } = window.ButterflyGreenhouseDesignSystem_819d97;
  return /*#__PURE__*/React.createElement("section", {
    id: "tickets",
    style: {
      padding: "var(--space-10) clamp(24px,6vw,80px)",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1100px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--accent-primary)",
      marginBottom: "14px"
    }
  }, "Plan Your Visit"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-lg)"
    }
  }, "Pick your pass.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "22px"
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement(TicketCard, _extends({
    key: t.name
  }, t))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TicketsSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FAQItem = __ds_scope.FAQItem;

__ds_ns.Sticker = __ds_scope.Sticker;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.TicketCard = __ds_scope.TicketCard;

__ds_ns.Navigation = __ds_scope.Navigation;

})();
