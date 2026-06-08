import { useState, useEffect, useRef } from "react";

// ── Utility: intersection observer hook ──
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ── Nav ──
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "18px 48px", display: "flex", alignItems: "center",
      justifyContent: "space-between",
      background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
      transition: "all 0.4s ease",
    }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#111", letterSpacing: -0.5 }}>
        Elementum
      </div>
      <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
        {["Home", "Studio", "Service", "Blog"].map(l => (
          <a key={l} href="#" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#333", textDecoration: "none", fontWeight: 400, transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "#E84545"}
            onMouseLeave={e => e.target.style.color = "#333"}>{l}</a>
        ))}
      </div>
      <button style={{
        background: "#111", color: "#fff", border: "none",
        padding: "10px 24px", borderRadius: 4, fontFamily: "'DM Sans', sans-serif",
        fontSize: 13, fontWeight: 600, cursor: "pointer", letterSpacing: 0.3,
        transition: "background 0.2s",
      }}
        onMouseEnter={e => e.target.style.background = "#E84545"}
        onMouseLeave={e => e.target.style.background = "#111"}>
        Contact Us
      </button>
    </nav>
  );
}

// ── Hero Section ──
function Hero() {
  const [ref, inView] = useInView(0.1);
  const photos = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face",
  ];
  return (
    <section ref={ref} style={{
      minHeight: "100vh", background: "#fff", position: "relative",
      display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "120px 48px 80px", overflow: "hidden",
    }}>
      {/* Decorative organic shapes */}
      <div style={{ position: "absolute", top: 80, right: -60, width: 180, height: 220, border: "2px solid rgba(232,69,69,0.25)", borderRadius: "60% 40% 55% 45%", transform: "rotate(15deg)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 140, right: 60, width: 80, height: 100, background: "rgba(232,69,69,0.08)", borderRadius: "50%", transform: "rotate(-10deg)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: 30, top: "55%", width: 3, height: 120, background: "#111", borderRadius: 2, transform: "rotate(-8deg)", pointerEvents: "none" }} />
      {/* Small coloured rectangles */}
      <div style={{ position: "absolute", top: 200, right: 80, width: 28, height: 36, background: "#E84545", borderRadius: 4, transform: "rotate(12deg)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 240, right: 110, width: 20, height: 28, background: "#7B61FF", borderRadius: 4, transform: "rotate(-8deg)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        {/* Headline */}
        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 6vw, 76px)",
          fontWeight: 700, lineHeight: 1.1, color: "#111", maxWidth: 700,
          opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          position: "relative", zIndex: 2,
        }}>
          The thinkers and doers were{" "}
          <span style={{ position: "relative", display: "inline-block" }}>
            changing the status Quo
            <svg style={{ position: "absolute", bottom: -4, left: 0, width: "100%", height: 8, overflow: "visible" }} viewBox="0 0 400 8">
              <path d="M0,6 Q100,0 200,6 Q300,0 400,6" fill="none" stroke="#E84545" strokeWidth="2.5" />
            </svg>
          </span>{" "}with
        </h1>

        {/* Subtext */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#666",
          maxWidth: 380, lineHeight: 1.7, marginTop: 24, marginBottom: 48,
          opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s 0.2s ease, transform 0.8s 0.2s ease",
        }}>
          We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
        </p>

        {/* Circular photo cluster */}
        <div style={{
          position: "relative", height: 280, width: "100%",
          opacity: inView ? 1 : 0, transition: "opacity 1s 0.3s ease",
        }}>
          {[
            { img: photos[0], size: 90, top: 0, left: 80, delay: "0s" },
            { img: photos[1], size: 110, top: 30, left: 220, delay: "0.1s" },
            { img: photos[2], size: 100, top: 80, left: 360, delay: "0.15s" },
            { img: photos[3], size: 120, top: 10, left: 500, delay: "0.2s" },
            { img: photos[4], size: 95, top: 100, left: 640, delay: "0.25s" },
            { img: photos[5], size: 85, top: 160, left: 420, delay: "0.3s" },
          ].map((p, i) => (
            <div key={i} style={{
              position: "absolute", top: p.top, left: p.left,
              width: p.size, height: p.size, borderRadius: "50%",
              overflow: "hidden", border: "3px solid #fff",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              transition: `transform 0.3s ease ${p.delay}`,
              cursor: "pointer",
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
              <img src={p.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
          {/* Small decorative shapes between photos */}
          <div style={{ position: "absolute", top: 60, left: 170, width: 16, height: 16, background: "#E84545", borderRadius: 2, transform: "rotate(15deg)" }} />
          <div style={{ position: "absolute", top: 120, left: 310, width: 12, height: 12, background: "#111", borderRadius: "50%" }} />
        </div>
      </div>
    </section>
  );
}

// ── About Section: "Tomorrow should be better than today" ──
function About() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ background: "#fff", padding: "100px 48px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div style={{
          opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, color: "#111", lineHeight: 1.2, marginBottom: 20 }}>
            Tomorrow should be better than today
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 16 }}>
            We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
          </p>
          <a href="#" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600,
            color: "#111", textDecoration: "none", borderBottom: "1.5px solid #111",
            paddingBottom: 2, transition: "color 0.2s, border-color 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.color = "#E84545"; e.currentTarget.style.borderColor = "#E84545"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "#111"; e.currentTarget.style.borderColor = "#111"; }}>
            Read more ——
          </a>
        </div>
        <div style={{
          opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(40px)",
          transition: "opacity 0.8s 0.2s ease, transform 0.8s 0.2s ease",
          position: "relative",
        }}>
          {/* Pink blob behind image */}
          <div style={{ position: "absolute", top: -20, right: -20, width: "70%", height: "70%", background: "rgba(232,69,69,0.08)", borderRadius: "50%", zIndex: 0 }} />
          {/* Red triangle decoration */}
          <div style={{ position: "absolute", bottom: 20, left: -10, width: 0, height: 0, borderLeft: "22px solid transparent", borderRight: "22px solid transparent", borderBottom: "38px solid #E84545", zIndex: 2 }} />
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop"
            alt="Team collaboration"
            style={{ width: "100%", borderRadius: 16, objectFit: "cover", height: 380, position: "relative", zIndex: 1, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
          />
        </div>
      </div>
    </section>
  );
}

// ── Progress Section: "See how we can help you progress" ──
function Progress() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ background: "#fafafa", padding: "100px 48px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div style={{
          opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-40px)",
          transition: "opacity 0.8s 0.1s ease, transform 0.8s 0.1s ease",
          position: "relative",
        }}>
          <div style={{ position: "absolute", top: -15, left: -15, width: "60%", height: "60%", background: "rgba(123,97,255,0.07)", borderRadius: "50%", zIndex: 0 }} />
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
            alt="Progress"
            style={{ width: "100%", borderRadius: 16, objectFit: "cover", height: 380, position: "relative", zIndex: 1, boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}
          />
        </div>
        <div style={{
          opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(40px)",
          transition: "opacity 0.8s 0.2s ease, transform 0.8s 0.2s ease",
        }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, color: "#111", lineHeight: 1.2, marginBottom: 20 }}>
            See how we can help you progress
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 8 }}>
            We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms and social research.
          </p>
          <a href="#" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600,
            color: "#111", textDecoration: "none", borderBottom: "1.5px solid #111",
            paddingBottom: 2, marginTop: 16, transition: "color 0.2s, border-color 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.color = "#E84545"; e.currentTarget.style.borderColor = "#E84545"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "#111"; e.currentTarget.style.borderColor = "#111"; }}>
            Read more ——
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Services Section: "What we can offer you!" ──
const services = [
  { category: "Office of multiple interest content", title: "Collaborative & partnership", desc: "Building meaningful partnerships that drive innovation and create lasting impact across industries." },
  { category: "The hanger US Air force digital experimental", title: "We talk about our weight", desc: "Strategic weight — giving every project the gravitas and consideration it deserves." },
  { category: "Delta faucet content, social, digital", title: "Piloting digital confidence", desc: "Navigating the digital landscape with confidence, clarity, and creative precision." },
];

function Services() {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(null);
  return (
    <section ref={ref} style={{ background: "#fff", padding: "100px 48px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 58px)",
          fontWeight: 700, color: "#111", lineHeight: 1.15, marginBottom: 64,
          opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
          What we can<br />
          <span style={{ fontStyle: "italic", color: "#E84545" }}>offer</span> you!
        </h2>
        <div>
          {services.map((s, i) => (
            <div key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "grid", gridTemplateColumns: "220px 1fr auto",
                alignItems: "center", gap: 40, padding: "28px 0",
                borderBottom: "1px solid rgba(0,0,0,0.1)",
                cursor: "pointer",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 0.6s ${0.15 * i + 0.1}s ease, transform 0.6s ${0.15 * i + 0.1}s ease, background 0.2s`,
                borderRadius: 8,
                background: hovered === i ? "rgba(232,69,69,0.03)" : "transparent",
                marginLeft: -16, paddingLeft: 16, paddingRight: 16,
              }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#999", lineHeight: 1.5 }}>{s.category}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 600, color: hovered === i ? "#E84545" : "#111", transition: "color 0.2s" }}>{s.title}</div>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                border: `1.5px solid ${hovered === i ? "#E84545" : "#ccc"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "border-color 0.2s, background 0.2s",
                background: hovered === i ? "#E84545" : "transparent", flexShrink: 0,
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke={hovered === i ? "#fff" : "#999"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ──
const testimonials = [
  {
    text: "Elementum delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
  },
];

const sidePhotos = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
];

function Testimonials() {
  const [ref, inView] = useInView(0.1);
  return (
    <section ref={ref} style={{ background: "#fafafa", padding: "100px 48px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 700, color: "#111", textAlign: "center", marginBottom: 16,
          opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
          What our customer says{" "}
          <span style={{ fontStyle: "italic", textDecoration: "underline", textDecorationColor: "#E84545" }}>About Us</span>
        </h2>

        <div style={{
          display: "grid", gridTemplateColumns: "80px 1fr 80px",
          gap: 32, alignItems: "center", marginTop: 60,
          opacity: inView ? 1 : 0, transition: "opacity 0.8s 0.2s ease",
        }}>
          {/* Left scattered photos */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
            {sidePhotos.slice(0, 3).map((p, i) => (
              <img key={i} src={p} alt="" style={{ width: 52 + i * 8, height: 52 + i * 8, borderRadius: "50%", objectFit: "cover", border: "3px solid #fff", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginLeft: i % 2 === 0 ? 0 : 12 }} />
            ))}
          </div>

          {/* Central testimonial card */}
          <div style={{
            background: "#fff", borderRadius: 16, padding: "36px 40px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)", position: "relative",
          }}>
            <div style={{ fontSize: 72, color: "#E84545", lineHeight: 0.7, fontFamily: "serif", marginBottom: 16, opacity: 0.3 }}>"</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#555", lineHeight: 1.8, marginBottom: 24, textAlign: "center" }}>
              {testimonials[0].text}
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{ fontSize: 72, color: "#E84545", lineHeight: 0.7, fontFamily: "serif", opacity: 0.3 }}>"</div>
            </div>
          </div>

          {/* Right scattered photos */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
            {sidePhotos.slice(2, 5).map((p, i) => (
              <img key={i} src={p} alt="" style={{ width: 56 - i * 6, height: 56 - i * 6, borderRadius: "50%", objectFit: "cover", border: "3px solid #fff", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginLeft: i % 2 === 0 ? 0 : -12 }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Newsletter ──
function Newsletter() {
  const [ref, inView] = useInView();
  const [email, setEmail] = useState("");
  return (
    <section ref={ref} style={{ background: "#C8F0D8", padding: "80px 48px", position: "relative", overflow: "hidden" }}>
      {/* Decorative shape */}
      <div style={{ position: "absolute", right: 80, top: "50%", transform: "translateY(-50%)", width: 80, height: 110, background: "#7B61FF", borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%", opacity: 0.7 }} />
      <div style={{ position: "absolute", right: 140, bottom: 20, width: 40, height: 40, border: "2px solid rgba(0,0,0,0.15)", borderRadius: "50%" }} />

      <div style={{
        maxWidth: 600, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1,
        opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#111", marginBottom: 12 }}>
          Subscribe to<br />our newsletter
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#444", marginBottom: 32 }}>
          To make your day special and even more memorable
        </p>
        <div style={{ display: "flex", gap: 0, maxWidth: 400, margin: "0 auto", borderRadius: 4, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email address"
            style={{
              flex: 1, padding: "14px 18px", border: "none", outline: "none",
              fontFamily: "'DM Sans', sans-serif", fontSize: 13, background: "#fff", color: "#333",
            }}
          />
          <button style={{
            background: "#111", color: "#fff", border: "none",
            padding: "14px 22px", fontFamily: "'DM Sans', sans-serif",
            fontSize: 13, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap",
            transition: "background 0.2s",
          }}
            onMouseEnter={e => e.target.style.background = "#E84545"}
            onMouseLeave={e => e.target.style.background = "#111"}>
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Footer ──
function Footer() {
  const cols = [
    { title: "Company", links: ["Home", "Studio", "Service", "Blog"] },
    { title: "Terms & Policies", links: ["Privacy Policy", "Terms & Conditions", "Explore", "Accessibility"] },
    { title: "Follow Us", links: ["Instagram", "LinkedIn", "Notlist", "Twitter"] },
    { title: "Terms & Policies", info: ["148 Mulford ave, STE 20, Chicago, IL 5001", "123-456789059", "info@elementum.com"] },
  ];
  return (
    <footer style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.08)", padding: "60px 48px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 48, marginBottom: 48 }}>
          {cols.map((col, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#999", marginBottom: 20 }}>{col.title}</div>
              {col.links ? col.links.map(l => (
                <a key={l} href="#" style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#444", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#E84545"}
                  onMouseLeave={e => e.target.style.color = "#444"}>{l}</a>
              )) : col.info.map((line, j) => (
                <p key={j} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#666", marginBottom: 8, lineHeight: 1.5 }}>{line}</p>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#aaa" }}>©2025 Elementum. All rights reserved.</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#111" }}>Elementum</span>
        </div>
      </div>
    </footer>
  );
}

// ── App root ──
export default function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <About />
      <Progress />
      <Services />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

