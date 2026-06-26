import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useScrollLock } from "./useScrollLock"

import logo from "../assets/Image Feb 8, 2026, 09_20_39 AM.png";
import heroAbout from "../assets/heroAbout.png";
import storyImg1 from "../assets/ourstory.png";
import storyImg2 from "../assets/factoty.png";
import storyImg3 from "../assets/pakaging.png";
import { FaCheckCircle } from "react-icons/fa";

export default function About() {

  const [menuOpen, setMenuOpen] = useState(false);
  const divRef = useRef(null);
  const [openSections, setOpenSections] = useState({
    one: false,
    two: false,
    three: false,
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  const NAV_TRIGGER_HEIGHT = 180;

  const [navHidden, setNavHidden] = useState(false);
  const [navCompressed, setNavCompressed] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnScroll = () => {
      setMenuOpen(false);
    };

    window.addEventListener("scroll", closeOnScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", closeOnScroll);
    };
  }, [menuOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const now = performance.now();

      const deltaY = currentScrollY - lastScrollY;
      const deltaTime = now - lastTime;

      if (currentScrollY < NAV_TRIGGER_HEIGHT) {
        setNavHidden(false);
        setNavCompressed(false);
        lastScrollY = currentScrollY;
        lastTime = now;
        return;
      }

      setNavCompressed(true);

      if (Math.abs(deltaY) < 6) return;

      if (deltaY > 0) {
        setNavHidden(true);
        setMenuOpen(false); 
      } else {
        setNavHidden(false);
      }

      lastScrollY = currentScrollY;
      lastTime = now;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observerOpts = {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.05,
    };

    const slideObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;

        if (entry.isIntersecting) {
          el.classList.add("visible");
          el.classList.remove("out");

          if (el.classList.contains("slide-left") || el.classList.contains("slide-right") || el.classList.contains("reveal-up")) {
            el.classList.add("in");
          }
        }
      });
    }, observerOpts);

    const targets = divRef.current.querySelectorAll(
      ".reveal, .slide-left, .slide-right, .reveal-up"
    );

    targets.forEach((el) => slideObserver.observe(el));
    return () => slideObserver.disconnect();
  }, []);
      useScrollLock(menuOpen); 

  return (
    <>
      <div className="premium-about-canvas" ref={divRef}>
        {/* Subtle Luxury Film Grain Texture Overlay */}
        <div className="luxury-grain-overlay"></div>

        {/* ================= DYNAMIC GLASS NAVIGATION ================= */}
        <nav className={`ag-nav ${navHidden ? "nav-hidden" : ""} ${navCompressed ? "nav-compressed" : ""}`}>
          <div className="ag-nav-container">
            <Link to="/" className="ag-brand">
              <img src={logo} alt="Forest Poultry Corporate Logo" />
            </Link>

            <div className="ag-links desktop-only">
              <Link to="/">Home</Link>
              <a href="#ourstory">Our Story</a>
              <a href="#ourmission">Our Mission</a>
              <Link to="/offering">Offering</Link>
              <Link to="/contact" className="ag-btn-nav-signature">Contact Us</Link>
            </div>

            <button
              className={`ag-burger ${menuOpen ? "open" : ""}`}
              aria-label="Toggle Interface Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

{/* LUXURY INTERACTIVE ARCHIVAL DRAWER */}
<div className={`ag-mobile-menu ${menuOpen ? "is-open" : ""}`}>
  {/* Glassmorphic Diffusion Layer */}
  <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)}></div>

  {/* The Vault Panel Slider */}
  <div className="mobile-menu-vault">
    {/* Vault Header Components */}
    <div className="vault-header">
      <span className="vault-eyebrow">Archive Directory</span>
      <div className="vault-line"></div>
    </div>

    {/* Kinematic Staggered Link Mechanism */}
    <div className="vault-links">
      <div className="vault-link-wrapper">
        <Link to="/" onClick={() => setMenuOpen(false)} style={{ "--item-idx": 0 }}>
          <span className="link-index">01</span>
          <span className="link-title">Home</span>
        </Link>
      </div>
      <div className="vault-link-wrapper">
        <a href="#ourstory" onClick={() => setMenuOpen(false)} style={{ "--item-idx": 1 }}>
          <span className="link-index">02</span>
          <span className="link-title">Our Story</span>
        </a>
      </div>
      <div className="vault-link-wrapper">
        <a href="#ourmission" onClick={() => setMenuOpen(false)} style={{ "--item-idx": 2 }}>
          <span className="link-index">03</span>
          <span className="link-title">Our Mission</span>
        </a>
      </div>
      <div className="vault-link-wrapper">
        <Link to="/offering" onClick={() => setMenuOpen(false)} style={{ "--item-idx": 3 }}>
          <span className="link-index">04</span>
          <span className="link-title">Offering</span>
        </Link>
      </div>
      <div className="vault-link-wrapper vault-cta-highlight">
        <Link to="/contact" onClick={() => setMenuOpen(false)} style={{ "--item-idx": 4 }}>
          <span className="link-index">05</span>
          <span className="link-title">Contact Us</span>
        </Link>
      </div>
    </div>

    {/* Drawer Footer Archival Data */}
    <div className="vault-footer">
      <p className="vault-manifesto">
        Farming with intention, completely guided by nature.
      </p>
    </div>
  </div>
</div>

        {/* ================= HERO SECTION (IMMERSIVE CINEMATIC) ================= */}
        <section
          className="about-hero-premium"
          style={{
            backgroundImage: `linear-gradient(rgba(5, 20, 11, 0.8), rgba(5, 20, 11, 0.95)), url(${heroAbout})`,
          }}
        >
          <div className="container hero-inner-alignment">
            <div className="about-hero-content reveal-up in">
              <span className="accent-eyebrow gold-glow">About Forest Poultry</span>
              <h1 className="hero-headline">
                Farming With Intention.<br /><span className="gold-italic">Guided by Nature.</span>
              </h1>
              <p className="hero-lead">
                Forest Poultry Farming is built on balance, resilience, and respect
                for life, producing wholesome poultry through responsible,
                purpose-led agriculture.
              </p>
            </div>
          </div>
          <div className="hero-bottom-gradient"></div>
        </section>

        {/* ================= STORY ARCHITECTURE (THE TRIPLE MESH) ================= */}
        <section className="story-structural-section" id="ourstory">
          
          {/* ASYMMETRIC ROW 1: IMAGE RIGHT */}
          <div className="editorial-row container">
            <div className="editorial-text-panel slide-right">
              <span className="panel-index">01 / BRAND ORIGINS</span>
              <h2>Our Story</h2>
              <p className="clear-body">
                Forest Poultry Farming began long before the first chicken coop was built. 
                It started with a young girl who developed a deep appreciation for nature as a system of balance, 
                resilience, and growth – where life develops organically, responsibly and with intent.
              </p>

              <div className={`expandable-narrative-box ${openSections.one ? "is-expanded" : ""}`}>
                <p>
                  From an early age, Puseletso showed a strong interest and passion in agriculture, initially through working with plants. 
                  That early exposure shaped a practical understanding of how quality food is produced and why working 
                  in harmony with the land matters. Growing up in a household where chicken was a staple, particularly 
                  because a family member could not consume other meats, she recognised the central role poultry plays 
                  in providing accessible, nutritious meals that bring people together.
                </p>
              </div>

              <button className="luxury-action-trigger" onClick={() => toggleSection("one")}>
                <span className="trigger-dot"></span>
                <span className="trigger-label">{openSections.one ? "Collate History" : "Read Full Background"}</span>
              </button>
            </div>

            <div className="editorial-image-panel slide-left image-mask-right">
              <div className="porcelain-mat-wrapper">
                <img src={storyImg1} alt="Brand origin framework narrative" className="native-editorial-img" />
                <div className="frame-accent-line"></div>
              </div>
            </div>
          </div>

          {/* ASYMMETRIC ROW 2: IMAGE LEFT (REVERSED MECHANICS) */}
          <div className="editorial-row container reverse-layout">
            <div className="editorial-image-panel slide-right image-mask-left">
              <div className="porcelain-mat-wrapper">
                <img src={storyImg2} alt="Production quality infrastructure" className="native-editorial-img" />
                <div className="frame-accent-line left-accent"></div>
              </div>
            </div>

            <div className="editorial-text-panel slide-left">
              <span className="panel-index">02 / THE VISION ENGINE</span>
              <h2>Evolving Philosophy</h2>
              <p className="clear-body">
                Over time, this understanding evolved into a clear vision: to build a poultry business 
                rooted in natural principles, guided by quality and nutrition, grown with intention, 
                and committed to sustainable farming practices.
              </p>

              <div className={`expandable-narrative-box ${openSections.two ? "is-expanded" : ""}`}>
                <p>
                  For Puseletso, poultry farming was never simply a commercial pursuit. It became an 
                  opportunity to build a business focused on long-term value, prioritising quality production, 
                  responsible land use, and consistency in output. Nature served as both a reference point and 
                  a benchmark, reinforcing the importance of balance, nourishment, and environmental responsibility.
                </p>
              </div>

              <button className="luxury-action-trigger" onClick={() => toggleSection("two")}>
                <span className="trigger-dot"></span>
                <span className="trigger-label">{openSections.two ? "Collate Principles" : "Explore Operational Intent"}</span>
              </button>
            </div>
          </div>

          {/* ASYMMETRIC ROW 3: IMAGE RIGHT */}
          <div className="editorial-row container">
            <div className="editorial-text-panel slide-right">
              <span className="panel-index">03 / CONTINENTAL SCALE</span>
              <h2>Community & Future</h2>
              <p className="clear-body">
                Forest Poultry Farming was established on the belief that how chickens are farmed directly influences product quality. 
                Every chicken reflects this approach: carefully farmed, organically grown, and produced using methods that protect the land, 
                respect ecosystems, and support the health of the communities served.
              </p>

              <div className={`expandable-narrative-box ${openSections.three ? "is-expanded" : ""}`}>
                <p>
                  The business began at home, with the simple intention of providing consistent, nutritious poultry for 
                  family consumption. While the beginnings were modest, the ambition has always been clear. Africa 
                  needs poultry producers that can scale responsibly, delivering high-quality, appetising products 
                  while maintaining sustainable practices.
                </p>
                <p>
                  Forest Poultry Farming is focused on growing into one of Africa’s leading poultry producers without 
                  compromising the principles that define the brand. At its core, the business remains committed to 
                  balanced farming, responsible growth, and building a poultry operation designed for long-term 
                  resilience, trust, and value.
                </p>
                <p className="highlighted-manifesto-quote">
                  At its heart, Forest Poultry Farming is committed to farming the way nature teaches us – 
                  with balance, resilience, respect for life, and care for the planet.
                </p>
                
                <ul className="premium-beliefs-list">
                  <li><FaCheckCircle className="gold-icon" /> <span>Goodness comes from purity.</span></li>
                  <li><FaCheckCircle className="gold-icon" /> <span>Healthy chickens create healthy homes.</span></li>
                  <li><FaCheckCircle className="gold-icon" /> <span>Nature knows the way.</span></li>
                  <li><FaCheckCircle className="gold-icon" /> <span>Nourishment should be part of every meal.</span></li>
                </ul>
                
                <p className="manifesto-signature-note">
                  Forest Poultry Farming is more than farming. It is purpose-led agriculture.
                </p>
              </div>

              <button className="luxury-action-trigger" onClick={() => toggleSection("three")}>
                <span className="trigger-dot"></span>
                <span className="trigger-label">{openSections.three ? "Collate Goals" : "View Entire Manifesto"}</span>
              </button>
            </div>

            <div className="editorial-image-panel slide-left image-mask-right">
              <div className="porcelain-mat-wrapper">
                <img src={storyImg3} alt="Mindful packaging final asset" className="native-editorial-img" />
                <div className="frame-accent-line"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PHILOSOPHY IMMERSIVE PANEL (DARK NATURE) ================= */}
        <section className="immersive-philosophy-banner reveal-up">
          <div className="luxury-tint-shroud"></div>
          <div className="container inner-philosophy-content text-center">
            <span className="accent-eyebrow gold-glow">The Forest Philosophy</span>
            <h2 className="monument-title">Nature Does Not Rush.<br /><span className="gold-italic">It Grows With Intention.</span></h2>
            <p className="philosophy-paragraph-lead">
              Forest Poultry applies this principle to farming, building systems that prioritise quality, 
              animal welfare, and environmental responsibility. Every chicken reflects this approach: 
              carefully farmed, organically grown, and produced in harmony with the land.
            </p>
          </div>
        </section>

        {/* ================= MISSION & VALUES BENTO ARCHITECTURE ================= */}
        <section className="mission-values-section" id="ourmission">
          <div className="container">
            <div className="mission-intro-block reveal-up">
              <span className="accent-eyebrow dark-text">The Corporate Directive</span>
              <div className="asymmetric-mission-split">
                <h2 className="dark-text">Our Mission</h2>
                <p className="dark-text mission-description-lead">
                  Our mission is to build a modern, sustainable poultry enterprise grounded in nature, 
                  driven by quality, and designed for scalable growth into regional and international markets, 
                  without compromising the principles that define us.
                </p>
              </div>
            </div>

            {/* Structured Luxury Values Bento Mesh Grid */}
            <div className="values-luxury-mesh reveal-up">
              <div className="value-premium-node">
                <span className="node-numerical-marker">01</span>
                <h3>Nature First</h3>
                <p>We farm with respect for natural systems and responsible land use.</p>
                <div className="node-hover-vector"></div>
              </div>

              <div className="value-premium-node node-gold-tint">
                <span className="node-numerical-marker">02</span>
                <h3>Quality Always</h3>
                <p>Freshness, cleanliness, and care at every stage of production.</p>
                <div className="node-hover-vector"></div>
              </div>

              <div className="value-premium-node">
                <span className="node-numerical-marker">03</span>
                <h3>Community Growth</h3>
                <p>Nourishing families and creating opportunity through agriculture.</p>
                <div className="node-hover-vector"></div>
              </div>

              <div className="value-premium-node">
                <span className="node-numerical-marker">04</span>
                <h3>Purpose-Driven</h3>
                <p>Built from passion, vision, and belief in Africa’s future.</p>
                <div className="node-hover-vector"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= LUXURY SCALED EMBEDDED CSS ENGINE ================= */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@200;300;400;500;600&display=swap');

          :root {
            --luxury-dark-forest: #05140b;
            --luxury-moss-accent: #0d2618;
            --porcelain-luminous: #fbfaf6;
            --porcelain-matte-base: #f1ede2;
            --signature-metallic-gold: #d4af37;
            
            --serif-editorial: 'Playfair Display', serif;
            --sans-fluid: 'Plus Jakarta Sans', sans-serif;
            --luxury-transition: cubic-bezier(0.16, 1, 0.3, 1);
          }

          .premium-about-canvas {
            background-color: var(--luxury-dark-forest);
            color: var(--porcelain-luminous);
            font-family: var(--sans-fluid);
            position: relative;
            overflow-x: hidden;
          }

          .luxury-grain-overlay {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.035;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          }

          h1, h2, h3, .monument-title {
            font-family: var(--serif-editorial);
            font-weight: 400;
            line-height: 1.15;
            margin: 0 0 1.25rem 0;
            letter-spacing: -0.01em;
          }

          .hero-headline {
            font-size: clamp(2.8rem, 5.2vw, 4.8rem);
            line-height: 1.1;
          }

          .gold-italic {
            color: var(--signature-metallic-gold);
            font-style: italic;
          }

          .monument-title {
            font-size: clamp(2.4rem, 4.5vw, 4rem);
            line-height: 1.15;
          }

          p {
            font-size: 1.05rem;
            line-height: 1.7;
            font-weight: 300;
            margin-bottom: 1.5rem;
          }

          .hero-lead {
            font-size: 1.2rem;
            line-height: 1.65;
            max-width: 600px;
            opacity: 0.9;
          }

          .clear-body {
            font-size: 1.12rem;
            font-weight: 300;
            opacity: 0.9;
          }

          .accent-eyebrow {
            display: block;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 5px;
            color: var(--signature-metallic-gold);
            margin-bottom: 1.5rem;
            font-weight: 600;
          }

          .gold-glow {
            text-shadow: 0 0 15px rgba(212,175,55,0.25);
          }

          /* RESPONSIVE PADDING FIX: Adjusted from % to vw for stronger edge buffer */
          .container {
            max-width: 1440px;
            margin: 0 auto;
            padding-left: 6vw;
            padding-right: 6vw;
          }

          .ag-nav {
            position: fixed;
            top: 0; left: 0; width: 100%;
            z-index: 1000;
            padding: 2.2rem 0;
            background: transparent;
            transition: transform 0.5s var(--luxury-transition), padding 0.4s ease, background 0.4s ease;
          }

          .ag-nav.nav-compressed {
            padding: 1.1rem 0;
            background: rgba(5, 20, 11, 0.85);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255,255,255,0.06);
            box-shadow: 0 10px 40px rgba(0,0,0,0.03);
          }

          .ag-nav.nav-hidden { transform: translateY(-100%); }

          .ag-nav-container {
            max-width: 1550px; margin: 0 auto; padding: 0 6vw;
            display: flex; justify-content: space-between; align-items: center;
          }

          .ag-brand img { height: 38px; display: block; }

          .ag-links { display: flex; gap: 3.2rem; align-items: center; }
          .ag-links a {
            text-decoration: none; font-size: 0.8rem; text-transform: uppercase;
            letter-spacing: 1.5px; color: var(--porcelain-luminous); font-weight: 500; transition: color 0.3s;
          }
          .ag-links a:hover { color: var(--signature-metallic-gold); }

          .ag-btn-nav-signature {
            border: 1px solid var(--porcelain-luminous);
            padding: 0.65rem 1.6rem !important;
            transition: all 0.4s var(--luxury-transition) !important;
          }
          .ag-btn-nav-signature:hover {
            background: var(--porcelain-luminous);
            color: var(--luxury-dark-forest) !important;
          }

          .ag-burger { display: none; background: none; border: none; cursor: pointer; z-index: 1005; }
          .ag-burger span {
            display: block; width: 26px; height: 1px; background: var(--porcelain-luminous);
            margin: 8px 0; transition: transform 0.4s var(--luxury-transition);
          }
          .ag-burger.open span:nth-child(1) { transform: translateY(4.5px) rotate(45deg); }
          .ag-burger.open span:nth-child(2) { transform: translateY(-4.5px) rotate(-45deg); }

          /* ================= LUXURY INTERACTIVE ARCHIVAL DRAWER ================= */
.ag-mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 1010; /* Elevated above nav lines */
  visibility: hidden;
  pointer-events: none;
  transition: visibility 0.6s var(--luxury-transition);
}

.ag-mobile-menu.is-open {
  visibility: visible;
  pointer-events: all;
}

/* Glassmorphic Diffusion Layer */
.mobile-menu-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(5, 20, 11, 0.4);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  opacity: 0;
  transition: opacity 0.6s var(--luxury-transition), backdrop-filter 0.6s var(--luxury-transition), -webkit-backdrop-filter 0.6s var(--luxury-transition);
  cursor: pointer;
}

.ag-mobile-menu.is-open .mobile-menu-backdrop {
  opacity: 1;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

/* The Vault Panel Slider */
.mobile-menu-vault {
  position: absolute;
  top: 0; right: 0;
  width: 88%;
  max-width: 440px;
  height: 100%;
  background: linear-gradient(145deg, var(--luxury-moss-accent, #0d2618) 0%, var(--luxury-dark-forest, #05140b) 100%);
  border-left: 1px solid rgba(214, 175, 55, 0.15);
  padding: clamp(5rem, 12vh, 9rem) clamp(2rem, 6vw, 3.5rem) clamp(3rem, 10vh, 6rem) clamp(2rem, 6vw, 3.5rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateX(105%);
  transition: transform 0.65s var(--luxury-transition);
  box-shadow: -20px 0 60px rgba(0, 0, 0, 0.5);
}

.ag-mobile-menu.is-open .mobile-menu-vault {
  transform: translateX(0);
}

/* Vault Header Components */
.vault-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.vault-eyebrow {
  font-family: var(--sans-fluid);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: var(--signature-metallic-gold, #d4af37);
  font-weight: 600;
  opacity: 0.6;
}

.vault-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, rgba(214,175,55,0.25), transparent);
}

/* Kinematic Staggered Link Mechanism */
.vault-links {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin: 3rem 0;
}

.vault-link-wrapper {
  overflow: hidden;
}

.vault-link-wrapper a {
  display: flex;
  align-items: baseline;
  gap: 1.2rem;
  text-decoration: none;
  transform: translateY(80px);
  opacity: 0;
  transition: transform 0.7s var(--luxury-transition), opacity 0.5s ease;
  transition-delay: calc(var(--item-idx) * 0.07s);
}

.ag-mobile-menu.is-open .vault-link-wrapper a {
  transform: translateY(0);
  opacity: 1;
}

/* Typography States Inside Drawer */
.link-index {
  font-family: var(--sans-fluid);
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--signature-metallic-gold, #d4af37);
  opacity: 0.5;
}

.link-title {
  font-family: var(--serif-editorial);
  font-size: clamp(1.5rem, 5vw, 2rem); 
  color: var(--porcelain-luminous, #fbfaf6);
  font-weight: 400;
  position: relative;
  transition: color 0.3s ease, transform 0.3s var(--luxury-transition);
}

.vault-link-wrapper a:hover .link-title {
  color: var(--signature-metallic-gold, #d4af37);
  transform: translateX(8px);
}

/* Premium Highlight for High-Value CTAs */
.vault-cta-highlight .link-title {
  font-style: italic;
  color: var(--signature-metallic-gold, #d4af37);
}

/* Drawer Footer Archival Data */
.vault-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 1.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease 0.4s, transform 0.8s var(--luxury-transition) 0.4s;
}

.ag-mobile-menu.is-open .vault-footer {
  opacity: 1;
  transform: translateY(0);
}

.vault-manifesto {
  font-family: var(--serif-editorial);
  font-style: italic;
  font-size: 0.85rem;
  line-height: 1.6;
  color: rgba(251, 250, 246, 0.5);
  margin-bottom: 1rem;
}

.vault-footer-meta {
  display: flex;
  justify-content: space-between;
  font-family: var(--sans-fluid);
  font-size: 0.55rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(251, 250, 246, 0.3);
}
          .about-hero-premium {
            height: 82vh;
            min-height: 600px;
            background-size: cover;
            background-position: center;
            position: relative;
            display: flex;
            align-items: center;
            z-index: 2;
          }

          .hero-inner-alignment {
            width: 100%;
            padding-top: 6vh;
          }

          .hero-bottom-gradient {
            position: absolute;
            bottom: 0; left: 0; width: 100%; height: 15vh;
            background: linear-gradient(to bottom, transparent, var(--luxury-dark-forest));
            z-index: 2;
          }

          .story-structural-section {
            padding: 4rem 0;
            background-color: var(--luxury-dark-forest);
          }

          /* RESPONSIVE PADDING FIX: Separated top/bottom padding to preserve the container's horizontal padding */
          .editorial-row {
            display: grid;
            grid-template-columns: 1.12fr 1fr;
            gap: 7vw;
            align-items: center;
            padding-top: 7.5rem;
            padding-bottom: 7.5rem;
          }

          .reverse-layout {
            grid-template-columns: 1fr 1.12fr;
          }

          .panel-index {
            display: block;
            font-family: var(--sans-fluid);
            font-size: 0.72rem;
            color: var(--signature-metallic-gold);
            letter-spacing: 2px;
            margin-bottom: 1.2rem;
            opacity: 0.8;
          }

          .editorial-text-panel h2 {
            font-size: clamp(2.2rem, 3.8vw, 3.2rem);
            margin-bottom: 1.8rem;
          }

          .expandable-narrative-box {
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: max-height 0.8s var(--luxury-transition), opacity 0.8s ease;
          }

          .expandable-narrative-box.is-expanded {
            max-height: 1200px;
            opacity: 1;
            margin-top: 1.5rem;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(255,255,255,0.06);
          }

          .highlighted-manifesto-quote {
            font-family: var(--serif-editorial);
            font-style: italic;
            font-size: 1.35rem;
            line-height: 1.5;
            color: var(--porcelain-matte-base);
            border-left: 2px solid var(--signature-metallic-gold);
            padding-left: 1.5rem;
            margin: 2.2rem 0;
          }

          .premium-beliefs-list {
            list-style: none;
            padding: 0;
            margin: 2rem 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.2rem;
          }

          .premium-beliefs-list li {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            font-size: 0.98rem;
            font-weight: 300;
          }

          .gold-icon {
            color: var(--signature-metallic-gold);
            flex-shrink: 0;
          }

          .manifesto-signature-note {
            font-size: 1.05rem;
            font-weight: 500;
            color: var(--signature-metallic-gold);
            letter-spacing: 0.5px;
            margin-top: 2rem;
          }

          .luxury-action-trigger {
            background: none;
            border: none;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0;
            margin-top: 1.5rem;
            color: var(--porcelain-luminous);
            font-family: var(--sans-fluid);
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 500;
            transition: color 0.3s ease;
          }

          .trigger-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: var(--signature-metallic-gold);
            transition: transform 0.4s var(--luxury-transition);
          }

          .luxury-action-trigger:hover {
            color: var(--signature-metallic-gold);
          }

          .luxury-action-trigger:hover .trigger-dot {
            transform: scale(1.6);
          }

          .porcelain-mat-wrapper {
            position: relative;
            padding: 18px;
            background: #ffffff;
            border: 1px solid rgba(255,255,255,0.03);
            box-shadow: 0 30px 60px rgba(0,0,0,0.3);
          }

          .native-editorial-img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
            max-height: 520px;
          }

          .frame-accent-line {
            position: absolute;
            bottom: -15px;
            right: -15px;
            width: 45%;
            height: 45%;
            border-right: 1px solid var(--signature-metallic-gold);
            border-bottom: 1px solid var(--signature-metallic-gold);
            pointer-events: none;
          }

          .left-accent {
            left: -15px; right: auto;
            border-right: none; border-left: 1px solid var(--signature-metallic-gold);
          }

          .immersive-philosophy-banner {
            position: relative;
            padding: 11.5rem 0;
            background-color: var(--luxury-moss-accent);
            border-top: 1px solid rgba(255,255,255,0.03);
            border-bottom: 1px solid rgba(255,255,255,0.03);
          }

          .inner-philosophy-content {
            position: relative;
            max-width: 860px;
            margin: 0 auto;
            z-index: 5;
          }

          .philosophy-paragraph-lead {
            font-size: 1.18rem;
            line-height: 1.7;
            font-weight: 300;
            opacity: 0.85;
            max-width: 720px;
            margin: 2rem auto 0 auto;
          }

          .mission-values-section {
            background-color: var(--porcelain-luminous);
            padding: 9.5rem 0;
          }

          .mission-intro-block {
            margin-bottom: 5.5rem;
          }

          .asymmetric-mission-split {
            display: grid;
            grid-template-columns: 1.1fr 1fr;
            gap: 5vw;
            align-items: end;
            margin-top: 1rem;
          }

          .asymmetric-mission-split h2 {
            font-size: clamp(2.4rem, 4.2vw, 3.6rem);
            margin: 0;
          }

          .mission-description-lead {
            font-size: 1.15rem;
            line-height: 1.65;
            font-weight: 300;
            margin: 0;
            opacity: 0.85;
          }

          .values-luxury-mesh {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.8rem;
          }

          .value-premium-node {
            background: #ffffff;
            border: 1px solid rgba(5,20,11,0.05);
            padding: 4rem 2.5rem;
            position: relative;
            overflow: hidden;
            transition: transform 0.4s var(--luxury-transition), box-shadow 0.4s ease;
          }

          .node-gold-tint {
            background: #fdfcf7;
            border-color: rgba(214, 175, 55, 0.15);
          }

          .node-numerical-marker {
            display: block;
            font-family: var(--serif-editorial);
            font-size: 1.6rem;
            font-style: italic;
            color: var(--signature-metallic-gold);
            margin-bottom: 2rem;
            line-height: 1;
          }

          .value-premium-node h3 {
            font-family: var(--sans-fluid);
            font-size: 1.22rem;
            font-weight: 500;
            color: var(--luxury-dark-forest);
            margin-bottom: 0.8rem;
          }

          .value-premium-node p {
            font-size: 0.96rem;
            color: var(--luxury-dark-forest);
            opacity: 0.75;
            margin: 0;
            line-height: 1.6;
          }

          .node-hover-vector {
            position: absolute;
            bottom: 0; left: 0; width: 100%; height: 2px;
            background-color: var(--signature-metallic-gold);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.4s var(--luxury-transition);
          }

          .value-premium-node:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 45px rgba(5,20,11,0.04);
          }

          .value-premium-node:hover .node-hover-vector {
            transform: scaleX(1);
          }

          .slide-right, .slide-left, .reveal-up {
            opacity: 0;
            transition: opacity 1.3s var(--luxury-transition), transform 1.3s var(--luxury-transition);
          }

          .slide-right { transform: translateX(-45px); }
          .slide-left { transform: translateX(45px); }
          .reveal-up { transform: translateY(45px); }

          .image-mask-right .porcelain-mat-wrapper {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
            transition: clip-path 1.5s var(--luxury-transition);
          }
          .editorial-image-panel.visible.image-mask-right .porcelain-mat-wrapper {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }

            .dark-text {
  color: var(--luxury-dark-forest) !important;
}

          .image-mask-left .porcelain-mat-wrapper {
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
            transition: clip-path 1.5s var(--luxury-transition);
          }
          .editorial-image-panel.visible.image-mask-left .porcelain-mat-wrapper {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }

          .slide-right.in, .slide-left.in, .reveal-up.in, .visible.slide-right, .visible.slide-left {
            opacity: 1;
            transform: translate(0);
          }

          @media (max-width: 1024px) {
            .editorial-row, .reverse-layout {
              grid-template-columns: 1fr;
              gap: 4rem;
              padding-top: 4.5rem;
              padding-bottom: 4.5rem;
            }
            .reverse-layout {
              display: flex;
              flex-direction: column-reverse;
            }
            .asymmetric-mission-split {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
            .values-luxury-mesh {
              grid-template-columns: repeat(2, 1fr);
            }
            .premium-beliefs-list {
              grid-template-columns: 1fr;
            }
            .desktop-only { display: none; }
            .ag-burger { display: block; }
            .about-hero-premium { height: 70vh; }
            .immersive-philosophy-banner, .mission-values-section { padding: 6rem 0; }
          }

          /* RESPONSIVE PADDING FIX: Further increases the horizontal padding on mobile to ensure a beautiful frame */
          @media (max-width: 640px) {
            .container {
            padding-top: 30vw;
              padding-left: 7vw;
              padding-right: 7vw;
            }
            .value-premium-node {
              padding: 2.5rem 1.8rem;
            }
            .values-luxury-mesh {
              grid-template-columns: 1fr;
            }
            .frame-accent-line {
              display: none;
            }
          }
        `}</style>
      </div>
    </>
  );
}
