import { useState, useEffect, useRef } from "react";

/* ── helpers ── */
function useInView(t = 0.08) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: t });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return [ref, v];
}
const an = (v, d = 0, dir = "u") => ({
  opacity: v ? 1 : 0,
  transform: v ? "translate(0)" : dir === "l" ? "translateX(-30px)" : dir === "r" ? "translateX(30px)" : "translateY(30px)",
  transition: `opacity .7s ${d}s ease, transform .7s ${d}s ease`,
});

/* ── NAV ── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <span className="nav-logo">Elementum</span>
        <div className="nav-mid">
          {["Studio", "Services", "Contact", "FAQs"].map(l => (
            <a key={l} href="#">{l}</a>
          ))}
        </div>
        <div className="nav-ham" onClick={() => setMenuOpen(true)}>
          <span /><span />
        </div>
      </nav>
      {/* Mobile menu overlay */}
      <div className={`mob-menu${menuOpen ? " open" : ""}`}>
        <button className="mob-close" onClick={() => setMenuOpen(false)}>✕</button>
        {["Studio", "Services", "Contact", "FAQs"].map(l => (
          <a key={l} href="#" onClick={() => setMenuOpen(false)}>{l}</a>
        ))}
      </div>
    </>
  );
}

/* ── HERO ── */
const PHOTOS = [
  { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=220&h=220&fit=crop&crop=face", w: 108, bottom: 0, left: "2%" },
  { src: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=220&h=220&fit=crop&crop=face", w: 128, bottom: 28, left: "14%" },
  { src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=220&h=220&fit=crop&crop=face", w: 148, top: 0, left: "27%" },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=220&h=220&fit=crop&crop=face", w: 118, bottom: 16, left: "44%" },
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=220&h=220&fit=crop&crop=face", w: 136, bottom: 0, left: "57%" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=220&h=220&fit=crop&crop=face", w: 110, top: 20, left: "71%" },
  { src: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=220&h=220&fit=crop&crop=face", w: 130, bottom: 8, left: "84%" },
];

function Hero() {
  return (
    <section className="hero">
      <svg className="hero-lines" viewBox="0 0 70 200" fill="none">
        <path d="M55,8 Q12,50 55,95 Q98,140 36,178 Q10,196 24,198" stroke="#111" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M38,8 Q-5,50 38,95 Q80,140 18,178 Q-8,196 6,198" stroke="#E84545" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity=".6" />
      </svg>
      <div className="hero-drop" />

      <h1 className="hero-h1">
        The <span className="hl-yel">thinkers</span> and<br />
        doers were <span className="hl-pink">changing</span><br />
        the <span className="hl-green">status</span> Quo with
      </h1>

      <p className="hero-sub">
        We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
      </p>

      <div className="photo-row">
        {PHOTOS.map((p, i) => (
          <div key={i} className="pc" style={{
            width: p.w, height: p.w,
            ...(p.top !== undefined ? { top: p.top } : {}),
            ...(p.bottom !== undefined ? { bottom: p.bottom } : {}),
            left: p.left,
          }}>
            <img src={p.src} alt="" />
          </div>
        ))}
      </div>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
    </section>
  );
}

/* ── SQUIGGLE underline ── */
const Sq = () => <span className="sq-line" />;

/* ── ABOUT ── */
function About() {
  const [ref, v] = useInView();
  return (
    <section ref={ref} className="sec">
      <div className="about-blob" />
      <div className="about-sq" />
      <div className="two-col">
        <div style={an(v, 0, "l")}>
          <h2 className="h2">
            <span className="sq-wrap">Tomorrow<Sq /></span> should<br />
            be better than <span className="hl-green">today</span>
          </h2>
          <p className="body-txt">We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.</p>
          <a href="#" className="read-link">Read more ——→</a>
        </div>
        <div className="flip-mobile" style={{ ...an(v, .15, "r"), display: "flex", justifyContent: "center" }}>
          <img className="round-img" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=760&h=760&fit=crop" alt="Team" />
        </div>
      </div>
      {/* wavy connector — hidden on mobile via pointer-events:none */}
      <svg style={{ position: "absolute", bottom: -72, right: 80, width: 400, height: 160, pointerEvents: "none", zIndex: 5, overflow: "visible" }} viewBox="0 0 400 160" fill="none">
        <path d="M360,0 Q320,72 220,108 Q120,144 30,128 Q0,120 8,160" stroke="#E84545" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    </section>
  );
}

/* ── PROGRESS ── */
function Progress() {
  const [ref, v] = useInView();
  return (
    <section ref={ref} className="sec" style={{ paddingTop: 120 }}>
      <div className="tri" style={{ top: 80, left: 80, borderLeft: "22px solid transparent", borderRight: "22px solid transparent", borderBottom: "40px solid #E84545" }} />
      <div className="tri" style={{ bottom: 50, left: 150, borderLeft: "38px solid transparent", borderRight: "38px solid transparent", borderBottom: "66px solid #E84545" }} />
      <div className="two-col">
        <div style={{ ...an(v, 0, "l"), display: "flex", justifyContent: "center" }}>
          <img className="round-img" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=740&h=740&fit=crop" alt="Progress" />
        </div>
        <div style={an(v, .15, "r")}>
          <h2 className="h2">
            <span className="hl-green">See</span> how we can<br />
            help you <span className="sq-wrap">progress<Sq /></span>
          </h2>
          <p className="body-txt">We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms and social research.</p>
          <a href="#" className="read-link">Read more ——→</a>
        </div>
      </div>
    </section>
  );
}

/* ── SERVICES ── */
const SVCS = [
  { cat: "Office of multiple\ninterest content", title: "Collaborative & partnership" },
  { cat: "The hanger US Air force\ndigital experimental", title: "We talk about our weight" },
  { cat: "Delta faucet content,\nsocial, digital", title: "Piloting digital confidence" },
];
function Services() {
  const [ref, v] = useInView(.1);
  const [hov, setHov] = useState(null);
  return (
    <section ref={ref} className="svc-sec">
      <div className="svc-inner">
        <h2 className="offer-h rv" style={an(v)}>
          What we <span className="hl-green" style={{ fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit" }}>can</span><br />
          <span className="offer-word">offer</span> you!
        </h2>
        {SVCS.map((s, i) => (
          <div key={i} className="svc-row" style={an(v, .05 + i * .1)}
            onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}>
            <div className="svc-cat" style={{ whiteSpace: "pre-line" }}>{s.cat}</div>
            <div className="svc-title" style={{ color: hov === i ? "#E84545" : "#111" }}>{s.title}</div>
            <span className="svc-arr" style={{ transform: hov === i ? "translateX(6px)" : "none" }}>→</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── TESTIMONIALS ── */
const TL = [
  { src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&h=120&fit=crop&crop=face", s: 60 },
  { src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop&crop=face", s: 78 },
  { src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=120&h=120&fit=crop&crop=face", s: 54 },
];
const TR = [
  { src: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=120&h=120&fit=crop&crop=face", s: 68 },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face", s: 54 },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face", s: 84 },
];
function Testimonials() {
  const [ref, v] = useInView(.1);
  return (
    <section ref={ref} className="testi-sec">
      <div className="testi-inner">
        <h2 className="testi-h" style={an(v)}>
          <span className="hl-green" style={{ fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit" }}>What</span> our customer<br />
          says <span className="ul-yel">About Us</span>
        </h2>
        <div className="testi-layout" style={an(v, .12)}>
          <div className="t-side">
            {TL.map((p, i) => <img key={i} className="sp" src={p.src} alt="" style={{ width: p.s, height: p.s }} />)}
          </div>
          <div className="testi-card">
            <div className="qq-top">"</div>
            <p>Elementum delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.</p>
            <div className="qq-bot">"</div>
          </div>
          <div className="t-side t-side-r">
            {TR.map((p, i) => <img key={i} className="sp" src={p.src} alt="" style={{ width: p.s, height: p.s }} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── NEWSLETTER ── */
function Newsletter() {
  const [ref, v] = useInView();
  return (
    <section ref={ref} className="nl-sec">
      <svg style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-15%)", width: 160, pointerEvents: "none" }} viewBox="0 0 160 68" fill="none">
        <path d="M38,10 Q54,44 22,60" stroke="#E84545" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M22,60 L12,58 L18,49" stroke="#E84545" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M82,4 Q100,38 68,56" stroke="#E84545" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M68,56 L58,53 L64,44" stroke="#E84545" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <div className="nl-leaf" />
      <div className="nl-inner" style={an(v)}>
        <h2 className="nl-h">Subscribe to<br />our newsletter</h2>
        <p className="nl-sub">To make your stay special and even more memorable</p>
        <button className="nl-btn" type="button"
          onMouseEnter={e => e.target.style.background = "#E84545"}
          onMouseLeave={e => e.target.style.background = "#111"}>Subscribe Now</button>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
const FCOLS = [
  { h: "Company", links: ["Home", "Studio", "Service", "Blog"] },
  { h: "Terms & Policies", links: ["Privacy Policy", "Terms & Conditions", "Explore", "Accessibility"] },
  { h: "Follow Us", links: ["Instagram", "LinkedIn", "Youtube", "Twitter"] },
  { h: "Terms & Policies", info: ["1498w Fluton ste, STE 2D Chicago, IL 63867.", "(123) 456789000", "info@elementum.com"] },
];
function Footer() {
  return (
    <footer>
      <div className="ft-grid">
        {FCOLS.map((c, i) => (
          <div key={i} className="ft-col">
            <div className="ft-h">{c.h}</div>
            {c.links ? c.links.map(l => <a key={l} href="#">{l}</a>)
              : c.info.map((t, j) => <p key={j}>{t}</p>)}
          </div>
        ))}
      </div>
      <p className="ft-copy">©2023 Elementum. All rights reserved</p>
    </footer>
  );
}

/* ── APP ── */
export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".rv,.rv-l,.rv-r").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return <><Nav /><Hero /><About /><Progress /><Services /><Testimonials /><Newsletter /><Footer /></>;
}


