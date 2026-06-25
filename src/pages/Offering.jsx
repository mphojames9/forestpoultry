import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/Image Feb 8, 2026, 09_20_39 AM.png";
import heroImage from "../assets/original-rotisserie-oven-whole-chicken-mobile.jpg";

export default function Offering() {
  const [menuOpen, setMenuOpen] = useState(false);
  const divRef = useRef(null);
  const NAV_TRIGGER_HEIGHT = 180;

  const [navHidden, setNavHidden] = useState(false);
  const [navCompressed, setNavCompressed] = useState(false);

  // Interface Toggle Logic
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", closeOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, [menuOpen]);

  // Premium Scroll Navigation Controller
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const now = performance.now();
      const deltaY = currentScrollY - lastScrollY;

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

  // High-Performance Intersection Observer (Zero Lag)
  useEffect(() => {
    const observerOpts = {
      root: null,
      rootMargin: "0px 0px -5% 0px",
      threshold: 0.1,
    };

    const slideObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          // Unobserve to prevent frame dropping and layout thrashing
          observer.unobserve(entry.target);
        }
      });
    }, observerOpts);

    const targets = divRef.current.querySelectorAll(".reveal-up, .slide-left, .slide-right");
    targets.forEach((el) => slideObserver.observe(el));
    
    return () => slideObserver.disconnect();
  }, []);

  return (
    <div className="premium-offering-canvas" ref={divRef}>
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
            <Link to="/about">About</Link>
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

      {/* LUXURY MOBILE INTERFACE DRAWER[cite: 3] */}
{/* LUXURY INTERACTIVE ARCHIVAL DRAWER */}
<div className={`ag-mobile-menu ${menuOpen ? "is-open" : ""}`}>
  {/* Shroud backdrop that handles click-to-close interactions */}
  <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)}></div>
  
  <div className="mobile-menu-vault">
    <div className="vault-header">
      <span className="vault-eyebrow">Navigation Matrix</span>
      <div className="vault-line"></div>
    </div>

    <div className="vault-links">
      <div className="vault-link-wrapper" style={{ "--item-idx": 1 }}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <span className="link-index">01</span>
          <span className="link-title">Home Base</span>
        </Link>
      </div>

      <div className="vault-link-wrapper" style={{ "--item-idx": 2 }}>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          <span className="link-index">02</span>
          <span className="link-title">Our Story</span>
        </Link>
      </div>

      <div className="vault-link-wrapper" style={{ "--item-idx": 3 }}>
        <Link to="/offering" onClick={() => setMenuOpen(false)}>
          <span className="link-index">03</span>
          <span className="link-title">The Offering</span>
        </Link>
      </div>

      <div className="vault-link-wrapper" style={{ "--item-idx": 4 }}>
        <Link to="/contact" onClick={() => setMenuOpen(false)} className="vault-cta-highlight">
          <span className="link-index">04</span>
          <span className="link-title">Secure Portal</span>
        </Link>
      </div>
    </div>

    <div className="vault-footer">
      <p className="vault-manifesto">Farming With Intention. Guided by Nature.</p>
      <div className="vault-footer-meta">
        <span>© 2026 Forest Poultry</span>
        <span>v2.0.30</span>
      </div>
    </div>
  </div>
</div>

      {/* ================= HERO SECTION (IMMERSIVE CINEMATIC)[cite: 3] ================= */}
      <section
        className="offering-hero-premium"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 20, 11, 0.65), rgba(5, 20, 11, 0.95)), url(${heroImage})`,
        }}
      >
        <div className="container hero-inner-alignment">
          <div className="offering-hero-content reveal-up">
            <span className="accent-eyebrow gold-glow">Our Offering</span>
            <h1 className="hero-headline">
              Quality Poultry.<br /><span className="gold-italic">Grown With Care.</span>
            </h1>
            <p className="hero-lead">
              Forest Poultry specialises in high-quality chickens farmed responsibly, 
              monitored for freshness, consistency, and nutritional integrity, 
              from our farm to your table.
            </p>
          </div>
        </div>
        <div className="hero-bottom-gradient"></div>
      </section>

      {/* ================= CURRENT OFFERING (LIGHT PORCELAIN BENTO)[cite: 3] ================= */}
      <section className="current-offering-matrix">
        <div className="container">
          <div className="editorial-header slide-right">
            <span className="accent-eyebrow dark-text">Active Production</span>
            <h2 className="monument-title dark-text">What We Supply Today</h2>
            <p className="section-lead dark-text">
              Our current focus is deliberate and disciplined, ensuring quality, 
              reliability, and trust at every stage of production.
            </p>
          </div>

          <div className="offering-bento-grid">
            <div className="bento-card light-card slide-left">
              <span className="node-numerical-marker">01</span>
              <h3>Whole Fresh Chickens</h3>
              <p>
                Carefully farmed, organically grown whole chickens, produced with 
                strict attention to animal welfare, hygiene, and nutritional quality.
              </p>
              <div className="card-hover-line"></div>
            </div>

            <div className="bento-card light-card reveal-up">
              <span className="node-numerical-marker">02</span>
              <h3>Organic & Natural</h3>
              <p>
                Raised using responsible farming methods that protect the land, 
                respect ecosystems, and support healthy growth.
              </p>
              <div className="card-hover-line"></div>
            </div>

            <div className="bento-card light-card slide-right">
              <span className="node-numerical-marker">03</span>
              <h3>Consistency & Freshness</h3>
              <p>
                Each batch is monitored to ensure consistent quality, freshness, 
                and dependable supply for our customers.
              </p>
              <div className="card-hover-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGING INTERMISSION (MID-PANEL)[cite: 3] ================= */}
      <section className="packaging-intermission reveal-up">
        <div className="container packaging-flex">
          <div className="packaging-text-panel slide-right">
            <span className="accent-eyebrow">Logistics & Preservation</span>
            <h2 className="monument-title">Packaging Options</h2>
            <p className="clear-body">
              Our packaging approach reflects our current stage of growth, simple, 
              clean, and practical.
            </p>
          </div>
          
          <div className="packaging-feature-card slide-left">
            <div className="feature-card-inner">
              <h3>Fresh Basic Packaging</h3>
              <p>
                Clean, functional packaging designed to preserve freshness while 
                supporting efficient handling and delivery.
              </p>
              <div className="corner-accent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FUTURE HORIZON (DARK METALLIC GRID)[cite: 3] ================= */}
      <section className="future-horizon-section">
        <div className="container">
          <div className="editorial-header text-center reveal-up">
            <span className="accent-eyebrow gold-glow">The Roadmap</span>
            <h2 className="monument-title">Coming Soon</h2>
            <p className="section-lead mx-auto">
              As Forest Poultry grows, we are developing a dedicated processing and 
              packaging line that will enable expanded offerings without compromising quality.
            </p>
          </div>

          <div className="future-bento-grid">
            <div className="bento-card dark-card slide-right">
              <div className="future-icon-node"></div>
              <h3>Processed Poultry Cuts</h3>
              <p>
                Carefully portioned chicken cuts prepared under strict quality and hygiene standards.
              </p>
            </div>

            <div className="bento-card dark-card reveal-up">
              <div className="future-icon-node"></div>
              <h3>Enhanced Packaging Solutions</h3>
              <p>
                Improved packaging options designed for retail, bulk supply, and extended freshness.
              </p>
            </div>

            <div className="bento-card dark-card slide-left">
              <div className="future-icon-node"></div>
              <h3>Scalable Distribution</h3>
              <p>
                Infrastructure built to support regional and future international market expansion.
              </p>
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

        .premium-offering-canvas {
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

        .container {
          max-width: 1440px;
          margin: 0 auto;
          padding-left: 6vw;
          padding-right: 6vw;
        }

        /* --- TYPOGRAPHY FOUNDATIONS --- */
        h1, h2, h3, .monument-title {
          font-family: var(--serif-editorial);
          font-weight: 400;
          line-height: 1.15;
          margin: 0 0 1.25rem 0;
          letter-spacing: -0.01em;
        }

        .monument-title { font-size: clamp(2.4rem, 4.5vw, 4rem); }
        .hero-headline { font-size: clamp(3rem, 5.5vw, 5rem); line-height: 1.1; }
        
        .gold-italic { color: var(--signature-metallic-gold); font-style: italic; }
        
        .accent-eyebrow {
          display: block; font-size: 0.75rem; text-transform: uppercase;
          letter-spacing: 5px; color: var(--signature-metallic-gold);
          margin-bottom: 1.5rem; font-weight: 600;
        }
        
        .gold-glow { text-shadow: 0 0 15px rgba(212,175,55,0.25); }
        
        .clear-body { font-size: 1.12rem; line-height: 1.7; font-weight: 300; opacity: 0.9; }
        .hero-lead { font-size: 1.2rem; line-height: 1.65; max-width: 600px; opacity: 0.9; font-weight: 300; }
        .section-lead { font-size: 1.15rem; line-height: 1.65; max-width: 700px; font-weight: 300; opacity: 0.85; margin-bottom: 3.5rem; }
        
        .dark-text { color: var(--luxury-dark-forest) !important; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .text-center { text-align: center; }

        /* --- NAVIGATION --- */
        .ag-nav {
          position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;
          padding: 2.2rem 0; background: transparent;
          transition: transform 0.5s var(--luxury-transition), padding 0.4s ease, background 0.4s ease;
        }
        .ag-nav.nav-compressed {
          padding: 1.1rem 0; background: rgba(5, 20, 11, 0.85);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .ag-nav.nav-hidden { transform: translateY(-100%); }
        .ag-nav-container { max-width: 1550px; margin: 0 auto; padding: 0 6vw; display: flex; justify-content: space-between; align-items: center; }
        .ag-brand img { height: 38px; display: block; }
        .ag-links { display: flex; gap: 3.2rem; align-items: center; }
        .ag-links a {
          text-decoration: none; font-size: 0.8rem; text-transform: uppercase;
          letter-spacing: 1.5px; color: var(--porcelain-luminous); font-weight: 500; transition: color 0.3s;
        }
        .ag-links a:hover { color: var(--signature-metallic-gold); }
        .ag-btn-nav-signature {
          border: 1px solid var(--porcelain-luminous); padding: 0.65rem 1.6rem !important;
          transition: all 0.4s var(--luxury-transition) !important;
        }
        .ag-btn-nav-signature:hover { background: var(--porcelain-luminous); color: var(--luxury-dark-forest) !important; }
        .ag-burger { display: none; background: none; border: none; cursor: pointer; z-index: 1005; }
        .ag-burger span {
          display: block; width: 26px; height: 1px; background: var(--porcelain-luminous);
          margin: 8px 0; transition: transform 0.4s var(--luxury-transition);
        }
        .ag-burger.open span:nth-child(1) { transform: translateY(4.5px) rotate(45deg); }
        .ag-burger.open span:nth-child(2) { transform: translateY(-4.5px) rotate(-45deg); }
        /* ================= LUXURY INTERACTIVE ARCHIVAL DRAWER ================= */
/* ================= LUXURY INTERACTIVE ARCHIVAL DRAWER ================= */
.ag-mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 999;
  visibility: hidden;
  pointer-events: none;
  padding: 1rem;
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
  background: rgba(5, 20, 11, 0.3);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  opacity: 0;
  transition: opacity 0.6s var(--luxury-transition), backdrop-filter 0.6s var(--luxury-transition), -webkit-backdrop-filter 0.6s var(--luxury-transition);
}

.ag-mobile-menu.is-open .mobile-menu-backdrop {
  opacity: 1;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

/* The Vault Panel Slider */
.mobile-menu-vault {
  position: absolute;
  top: 0; right: 0;
  width: 88%;
  max-width: 460px;
  height: 100%;
  background: linear-gradient(145deg, var(--luxury-moss-accent) 0%, var(--luxury-dark-forest) 100%);
  border-left: 1px solid rgba(214, 175, 55, 0.12);
  
  /* OVERHAULED PADDING: Massive negative space that scales fluidly */
  padding: clamp(5rem, 12vh, 9rem) clamp(.5rem, 8vw, 4.5rem) clamp(3rem, 10vh, 6rem) clamp(2.5rem, 8vw, 4.5rem);
  
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
  font-size: 0.6rem; /* Reduced for elegance */
  text-transform: uppercase;
  letter-spacing: 4px; /* Increased tracking */
  color: var(--signature-metallic-gold);
  font-weight: 600;
  opacity: 0.5;
}

.vault-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, rgba(214,175,55,0.2), transparent);
}

/* Kinematic Staggered Link Mechanism */
.vault-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* Tightened gap to balance smaller text */
  margin: 5rem 0; /* Increased margin to push links toward the center */
}

.vault-link-wrapper {
  overflow: hidden;
}

.vault-link-wrapper a {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  text-decoration: none;
  transform: translateY(100px);
  opacity: 0;
  transition: transform 0.7s var(--luxury-transition), opacity 0.5s ease;
  transition-delay: calc(var(--item-idx) * 0.06s);
}

.ag-mobile-menu.is-open .vault-link-wrapper a {
  transform: translateY(0);
  opacity: 1;
}

/* Typography States Inside Drawer */
.link-index {
  font-family: var(--sans-fluid);
  font-size: 0.7rem; /* Reduced */
  font-weight: 500;
  color: var(--signature-metallic-gold);
  opacity: 0.5;
}

.link-title {
  font-family: var(--serif-editorial);
  /* OVERHAULED FONT SIZE: Scaled down and fluid for perfect breaks */
  font-size: clamp(1.4rem, 5vw, 1.8rem); 
  color: var(--porcelain-luminous);
  font-weight: 400;
  position: relative;
  transition: color 0.3s ease, transform 0.3s var(--luxury-transition);
}

.vault-link-wrapper a:hover .link-title {
  color: var(--signature-metallic-gold);
  transform: translateX(8px);
}

/* Premium Highlight for High-Value CTAs */
.vault-cta-highlight .link-title {
  font-style: italic;
  color: var(--signature-metallic-gold);
}

/* Drawer Footer Archival Data */
.vault-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease 0.4s, transform 0.8s var(--luxury-transition) 0.4s;
}

.vault-manifesto {
  font-family: var(--serif-editorial);
  font-style: italic;
  font-size: 0.85rem; /* Reduced */
  line-height: 1.6;
  color: rgba(251, 250, 246, 0.6);
  margin-bottom: 1.25rem;
}

.vault-footer-meta {
  display: flex;
  justify-content: space-between;
  font-family: var(--sans-fluid);
  font-size: 0.55rem; /* Reduced */
  text-transform: uppercase;
  letter-spacing: 2px; /* Increased tracking */
  color: rgba(251, 250, 246, 0.3);
}
        /* --- HERO --- */
        .offering-hero-premium {
          height: 75vh; min-height: 600px;
          background-size: cover; background-position: center;
          position: relative; display: flex; align-items: center; z-index: 2;
        }
        .hero-inner-alignment { width: 100%; padding-top: 6vh; }
        .hero-bottom-gradient {
          position: absolute; bottom: 0; left: 0; width: 100%; height: 15vh;
          background: linear-gradient(to bottom, transparent, var(--porcelain-luminous));
          z-index: 2;
        }

        /* --- CURRENT OFFERING (PORCELAIN) --- */
        .current-offering-matrix {
          background-color: var(--porcelain-luminous);
          padding: 8rem 0;
          position: relative;
          z-index: 3;
        }
        .editorial-header { margin-bottom: 4rem; max-width: 800px; }
        
        .offering-bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        .bento-card {
          padding: 3.5rem 2.5rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.5s var(--luxury-transition), box-shadow 0.5s ease;
        }
        
        .light-card {
          background: #ffffff;
          border: 1px solid rgba(5,20,11,0.05);
        }
        
        .light-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(5,20,11,0.06);
        }

        .node-numerical-marker {
          display: block; font-family: var(--serif-editorial); font-size: 1.6rem;
          font-style: italic; color: var(--signature-metallic-gold); margin-bottom: 2rem; line-height: 1;
        }

        .light-card h3 { font-family: var(--sans-fluid); font-size: 1.25rem; font-weight: 500; color: var(--luxury-dark-forest); margin-bottom: 1rem; }
        .light-card p { font-size: 1rem; color: var(--luxury-dark-forest); opacity: 0.8; margin: 0; line-height: 1.6; font-weight: 300; }

        .card-hover-line {
          position: absolute; bottom: 0; left: 0; width: 100%; height: 3px;
          background-color: var(--signature-metallic-gold);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.5s var(--luxury-transition);
        }
        .light-card:hover .card-hover-line { transform: scaleX(1); }

        /* --- PACKAGING INTERMISSION --- */
        .packaging-intermission {
          background-color: var(--luxury-moss-accent);
          padding: 7rem 0;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .packaging-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6vw;
        }

        .packaging-text-panel { flex: 1; }
        
        .packaging-feature-card {
          flex: 1;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 3rem;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          position: relative;
        }

        .feature-card-inner h3 { font-size: 1.5rem; color: var(--signature-metallic-gold); margin-bottom: 1rem; }
        .feature-card-inner p { font-size: 1.05rem; font-weight: 300; opacity: 0.9; margin: 0; line-height: 1.6; }

        .corner-accent {
          position: absolute; top: -1px; right: -1px;
          width: 30px; height: 30px;
          border-top: 2px solid var(--signature-metallic-gold);
          border-right: 2px solid var(--signature-metallic-gold);
        }

        /* --- FUTURE HORIZON --- */
        .future-horizon-section {
          background-color: var(--luxury-dark-forest);
          padding: 9rem 0;
        }

        .future-bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 4rem;
        }

        .dark-card {
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .dark-card:hover { background: rgba(255,255,255,0.03); border-color: rgba(212,175,55,0.3); }

        .future-icon-node {
          width: 12px; height: 12px;
          background: var(--signature-metallic-gold);
          border-radius: 50%;
          margin-bottom: 2rem;
          box-shadow: 0 0 15px rgba(212,175,55,0.4);
        }

        .dark-card h3 { font-family: var(--sans-fluid); font-size: 1.15rem; font-weight: 400; color: var(--porcelain-luminous); margin-bottom: 1rem; letter-spacing: 0.5px; }
        .dark-card p { font-size: 0.95rem; color: rgba(255,255,255,0.6); margin: 0; line-height: 1.6; font-weight: 300; }

        /* --- ANIMATIONS --- */
        .reveal-up, .slide-left, .slide-right {
          opacity: 0;
          transition: opacity 1.2s var(--luxury-transition), transform 1.2s var(--luxury-transition);
        }

        .reveal-up { transform: translateY(40px); }
        .slide-right { transform: translateX(-40px); }
        .slide-left { transform: translateX(40px); }

        .reveal-up.in, .slide-right.in, .slide-left.in { opacity: 1; transform: translate(0); }

        /* --- RESPONSIVE LOGIC --- */
        @media (max-width: 1024px) {
          .offering-bento-grid, .future-bento-grid { grid-template-columns: repeat(2, 1fr); }
          .packaging-flex { flex-direction: column; align-items: stretch; gap: 3rem; }
          .desktop-only { display: none; }
          .ag-burger { display: block; }
        }

        @media (max-width: 768px) {
          .offering-bento-grid, .future-bento-grid { grid-template-columns: 1fr; }
          .offering-hero-premium { height: 60vh; }
          .hero-headline { font-size: clamp(2.5rem, 8vw, 3.2rem); }
          .packaging-feature-card { padding: 2rem; }
        }
      `}</style>
    </div>
  );
}
