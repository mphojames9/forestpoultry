import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

// Image Assets strictly imported as requested
import logoMain from "../assets/logomain.png";
import rawChicken from "../assets/rawchicken.png";
import rotisserie from "../assets/original-rotisserie-oven-whole-chicken-mobile.jpg";
import aboutImage from "../assets/1fa82492-116b-4a95-bdc8-b884f605501a.png";
import profileImage from "../assets/profile.png";
import logo from "../assets/Image Feb 8, 2026, 09_20_39 AM.png";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const divRef = useRef(null);
  
  const images = [logoMain, rawChicken, rotisserie];

  const [navScrolled, setNavScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [theme, setTheme] = useState('dark');

  // Advanced Scroll Handler & Dynamic Theme Detection
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      
      setNavScrolled(currentScrollY > 40);

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setNavHidden(true);
        setMenuOpen(false);
      } else {
        setNavHidden(false);
      }
      
      const brightSections = document.querySelectorAll('.theme-bright');
      let isOverBright = false;
      
      brightSections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          isOverBright = true;
        }
      });
      
      setTheme(isOverBright ? 'light' : 'dark');
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Premium Hero Crossfade
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Staggered Intersection Observer 
  useEffect(() => {
    const observerOpts = {
      root: null,
      rootMargin: "0px",
      threshold: 0.01,
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, observerOpts);

    const timeoutId = setTimeout(() => {
      if (divRef.current) {
        const targets = divRef.current.querySelectorAll(".reveal-trigger");
        targets.forEach((el) => revealObserver.observe(el));
      }
    }, 50);
    
    return () => {
      clearTimeout(timeoutId);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="avant-garde-wrapper" ref={divRef}>
      {/* High-end Cinematic Grain Overlay */}
      <div className="cinematic-grain"></div>

      {/* ================= DYNAMIC NAVBAR ================= */}
      <nav className={`ag-nav ${navScrolled ? "nav-scrolled" : ""} ${navHidden ? "nav-hidden" : ""} nav-${theme}`}>
        <div className="ag-nav-container">
          <Link to="/" className="ag-brand">
            <img src={logo} alt="Forest Poultry Logo" />
          </Link>

          <div className="ag-links desktop-only">
            <Link to="/about">About</Link>
            <a href="#values">Values</a>
            <a href="#founder">Founder</a>
            <Link to="/offering">Offering</Link>
            <Link to="/contact" className="ag-btn-outline">Contact Us</Link>
          </div>

          <button 
            className={`ag-burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* ================= LUXURY INTERACTIVE ARCHIVAL DRAWER ================= */}
      <div className={`ag-mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)}></div>

        <div className="mobile-menu-vault">
          <div className="vault-header">
            <span className="vault-eyebrow">Index Menu</span>
            <div className="vault-line"></div>
          </div>

          <div className="vault-links">
            <div className="vault-link-wrapper">
              <Link to="/" onClick={() => setMenuOpen(false)} style={{ "--item-idx": 0 }}>
                <span className="link-index">01</span>
                <span className="link-title">Home</span>
              </Link>
            </div>
            <div className="vault-link-wrapper">
              <Link to="/about" onClick={() => setMenuOpen(false)} style={{ "--item-idx": 1 }}>
                <span className="link-index">02</span>
                <span className="link-title">About</span>
              </Link>
            </div>
            <div className="vault-link-wrapper">
              <a href="#values" onClick={() => setMenuOpen(false)} style={{ "--item-idx": 2 }}>
                <span className="link-index">03</span>
                <span className="link-title">Values</span>
              </a>
            </div>
            <div className="vault-link-wrapper">
              <a href="#founder" onClick={() => setMenuOpen(false)} style={{ "--item-idx": 3 }}>
                <span className="link-index">04</span>
                <span className="link-title">Founder</span>
              </a>
            </div>
            <div className="vault-link-wrapper">
              <Link to="/offering" onClick={() => setMenuOpen(false)} style={{ "--item-idx": 4 }}>
                <span className="link-index">05</span>
                <span className="link-title">Offering</span>
              </Link>
            </div>
            <div className="vault-link-wrapper vault-cta-highlight">
              <Link to="/contact" onClick={() => setMenuOpen(false)} style={{ "--item-idx": 5 }}>
                <span className="link-index">06</span>
                <span className="link-title">Contact Us</span>
              </Link>
            </div>
          </div>

          <div className="vault-footer">
            <p className="vault-manifesto">
              Nature does not rush. It grows with intention.
            </p>
            <div className="vault-footer-meta">
              <span>© 2026 Forest Poultry</span>
              <span>Systems Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= HERO (DARK GREEN) - IMAGE RIGHT ================= */}
      <section className="ag-section theme-dark hero-layout">
        <div className="ag-grid container">
          {/* Text Left */}
          <div className="hero-text-content">
            <div className="reveal-trigger staggered-text">
              <span className="accent-eyebrow">The 2026 Standard</span>
              <h1>Grown with Care.</h1>
              <h1 className="indent">Delivered with Pride.</h1>
              <p className="hero-lead">
                Inspired by nature’s deep forest balance, producing wholesome, 
                nutritious chicken through ethical, sustainable farming rooted in African growth.
              </p>
              <div className="btn-group">
                <Link className="ag-btn-solid" to="/offering">Explore Products</Link>
              </div>
            </div>
          </div>

          {/* Premium Thick 3D Border Block Right */}
          <div className="hero-image-slider reveal-trigger fade-in-up">
            <div className="image-track">
              {images.map((img, index) => (
                <div 
                  key={index} 
                  className={`slide-img ${index === current ? "active" : ""}`}
                  style={{ backgroundImage: `url("${img}")` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      

      {/* ================= ABOUT (BRIGHT CREAM) - IMAGE LEFT ================= */}
      <section id="about" className="ag-section theme-bright padding-huge">
        <div className="ag-grid container reverse-mobile">
          {/* Thick 3D Border Image Left */}
          <div className="about-image reveal-trigger fade-in-up">
            <div className="image-wrapper-premium">
              <img src={aboutImage} alt="Nature Rooted Ecosystem" />
              <div className="premium-overlay-glow"></div>
            </div>
          </div>

          {/* Text Right */}
          <div className="about-text text-right-pad reveal-trigger staggered-text">
            <span className="accent-eyebrow dark-text">Philosophy</span>
            <h2 className="dark-text">Rooted in Nature.<br/>Built for Africa.</h2>
            <p className="dark-text muted">
              Forest Poultry functions precisely like a balanced forest ecosystem—where patience, 
              meticulous care, and time generate infinite abundance.
            </p>
            <p className="dark-text muted">
              We eliminate shortcuts. By building fluid, technologically sound, and highly responsible 
              farming frameworks, we establish foundational nourishment.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VALUES (DARK GREEN) - FULL WIDTH ================= */}
      <section id="values" className="ag-section theme-dark padding-huge">
        <div className="container">
          <div className="text-center reveal-trigger staggered-text mb-large">
            <span className="accent-eyebrow">Architectural Pillars</span>
            <h2>Our Core Values</h2>
          </div>

          <div className="ag-bento-grid reveal-trigger">
            <div className="bento-cell cell-tall">
              <span className="bento-num">01</span>
              <h3>Sustainability</h3>
              <p>Farming strictly in harmony with nature's rhythm.</p>
            </div>
            <div className="bento-cell">
              <span className="bento-num">02</span>
              <h3>Integrity</h3>
              <p>Unwavering trust, transparency, and deep responsibility.</p>
            </div>
            <div className="bento-cell">
              <span className="bento-num">03</span>
              <h3>Quality</h3>
              <p>No shortcuts. The highest possible standard, every single time.</p>
            </div>
            <div className="bento-cell cell-wide">
              <span className="bento-num">04</span>
              <h3>African Growth</h3>
              <p>Built for immense scale, completely rooted in local care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER (BRIGHT CREAM) - IMAGE RIGHT ================= */}
      <section id="founder" className="ag-section theme-bright padding-huge">
        <div className="ag-grid container">
          {/* Text Left */}
          <div className="founder-text reveal-trigger staggered-text">
            <span className="accent-eyebrow dark-text">Visionary</span>
            <h2 className="dark-text">Puseletso Phala</h2>
            <p className="dark-text muted lead-p">
              "Food must remain honest, unapologetically premium, and mindfully cultivated."
            </p>
            <p className="dark-text muted">
              Drawing structural inspiration from Africa's terrain, Puseletso forged 
              Forest Poultry to disrupt standard assembly-line production, focusing strictly on 
              high-integrity legacy scaling.
            </p>
          </div>

          {/* Thick 3D Border Image Right */}
          <div className="founder-image reveal-trigger fade-in-up">
            <div className="image-wrapper-premium">
              <img src={profileImage} alt="Puseletso Phala" />
              <div className="premium-overlay-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOREST MOMENT (DARK IMMERSIVE) ================= */}
      <section className="ag-section theme-dark padding-huge forest-parallax" style={{ backgroundImage: `url("${rotisserie}")` }}>
        <div className="parallax-overlay"></div>
        <div className="container relative z-index-10 text-center reveal-trigger staggered-text">
          <span className="accent-eyebrow">The Infinite Horizon</span>
          <h2 className="mega-title">Nature Does Not Rush.<br/>Neither Do We.</h2>
          <p className="mx-auto max-w-lg mt-md">
            True scale requires immense patience. Like an old-growth forest, we prioritize 
            foundational safety over hasty production. This is hyper-refined scale.
          </p>
          <div className="mt-lg">
            <a href="#about" className="ag-btn-solid">Our Complete Ethos</a>
          </div>
        </div>
      </section>

      <section id="delivery" className="ag-section theme-bright delivery-architecture-row">
        <div className="container">
          
          {/* Section Header */}
          <div className="delivery-grid-header reveal-trigger staggered-text">
            <span className="accent-eyebrow dark-text">Cold-Chain Precision</span>
            <div className="split-title-block">
              <h2 className="dark-text">The Logistics <br />of Freshness.</h2>
              <p className="dark-text delivery-lead">
                True quality requires protective distribution. We have engineered a closed, uncompromising 
                cold-chain infrastructure across Gauteng to secure cellular product integrity from our environment straight to your kitchen.
              </p>
            </div>
          </div>

          {/* Structural Step Framework */}
          <div className="delivery-pipeline-mesh reveal-trigger">
            
            {/* Step 01 */}
            <div className="pipeline-card">
              <div className="card-topline">
                <span className="pipeline-index">01</span>
                <div className="pipeline-status-dot"></div>
              </div>
              <h3>Intelligent Chilling</h3>
              <p>
                We completely eliminate harsh flash-freezing short cuts. Products are stabilized using 
                monitored atmospheric temperature controls to preserve trace nutritional density and pristine tenderness naturally.
              </p>
            </div>

            {/* Step 02 */}
            <div className="pipeline-card card-accent-gold">
              <div className="card-topline">
                <span className="pipeline-index">02</span>
                <div className="pipeline-status-dot dynamic-pulse"></div>
              </div>
              <h3>Telemetry Transit</h3>
              <p>
                Our specialized logistics fleet operates with real-time thermal telemetry mapping. Every cubic meter 
                of cargo space is climate-calibrated continuously to prevent structural variance during regional transit.
              </p>
            </div>

            {/* Step 03 */}
            <div className="pipeline-card">
              <div className="card-topline">
                <span className="pipeline-index">03</span>
                <div className="pipeline-status-dot"></div>
              </div>
              <h3>Sealed Handover</h3>
              <p>
                Arrives enclosed within premium micro-insulated organic fiber casing. Hand-delivered directly by 
                trained custodians to maintain absolute food transparency and a pristine, uncompromised culinary asset.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 2026 CSS ENGINE ================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Manrope:wght@300;400;500;600&display=swap');

        :root {
          --dark-green: #071910;       
          --mid-green: #0e2b1b;        
          --bright-cream: #f4f2eb;     
          --cream-accent: #e8e4d8;     
          --gold-accent: #c4a661;      
          
          --font-serif: 'Playfair Display', serif;
          --font-sans: 'Manrope', sans-serif;
          
          --transition-smooth: 1.2s cubic-bezier(0.19, 1, 0.22, 1);
          --luxury-transition: cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Base Setup */
        .avant-garde-wrapper {
          font-family: var(--font-sans);
          overflow-x: hidden;
          background: var(--dark-green);
        }

        /* Cinematic Grain Overlay */
        .cinematic-grain {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          z-index: 9999;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        /* Typography */
        h1, h2, h3, .mega-title {
          font-family: var(--font-serif);
          font-weight: 400;
          line-height: 1.1;
          margin: 0 0 1.5rem 0;
        }

        h1 { font-size: clamp(3rem, 6vw, 5.5rem); letter-spacing: -1px; }
        .indent { margin-left: 15%; color: var(--gold-accent); font-style: italic; }

        h2 { font-size: clamp(2.5rem, 4vw, 3.8rem); letter-spacing: -0.5px; }
        h3 { font-size: 1.8rem; }

        p {
          font-size: 1.1rem;
          line-height: 1.6;
          font-weight: 300;
          margin-bottom: 1.5rem;
        }
        .lead-p { font-size: 1.4rem; font-family: var(--font-serif); font-style: italic; color: var(--dark-green); }
        .muted { opacity: 0.8; }

        .accent-eyebrow {
          display: block;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: var(--gold-accent);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 5%;
        }

        /* Layout Utility */
        .ag-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6vw;
          align-items: center;
        }

        .padding-huge { padding: 10rem 0; }
        .text-right-pad { padding-left: 4vw; }
        .text-center { text-align: center; }
        .relative { position: relative; }
        .z-index-10 { z-index: 10; }
        .mb-large { margin-bottom: 5rem; }
        .mt-md { margin-top: 2rem; }
        .mt-lg { margin-top: 3rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .max-w-lg { max-width: 700px; }

        /* Themes Switching */
        .theme-dark { background-color: var(--dark-green); color: var(--bright-cream); }
        .theme-bright { background-color: var(--bright-cream); color: var(--dark-green); }
        .dark-text { color: var(--dark-green) !important; }

        /* Buttons */
        .ag-btn-solid, .ag-btn-outline {
          display: inline-block;
          padding: 1.2rem 2.5rem;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          border-radius: 100px;
          transition: all 0.4s ease;
          cursor: pointer;
          text-decoration: none;
        }

        .ag-btn-solid {
          background-color: var(--gold-accent);
          color: var(--dark-green);
          border: 1px solid var(--gold-accent);
        }

        .ag-btn-solid:hover {
          background-color: transparent;
          color: var(--gold-accent);
          transform: translateY(-5px);
        }

        .theme-bright .ag-btn-solid {
          background-color: var(--dark-green);
          color: var(--bright-cream);
          border-color: var(--dark-green);
        }
        .theme-bright .ag-btn-solid:hover {
          background-color: transparent;
          color: var(--dark-green);
        }

        /* Smart Navbar */
        .ag-nav {
          position: fixed;
          top: 0; left: 0; width: 100%;
          z-index: 1000;
          padding: 2.5rem 0;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), padding 0.4s ease, background 0.4s ease;
        }

        .ag-nav.nav-scrolled {
          padding: 1.2rem 0;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .ag-nav.nav-dark.nav-scrolled { background: rgba(7, 25, 16, 0.85); border-bottom: 1px solid rgba(255,255,255,0.05); }
        .ag-nav.nav-light.nav-scrolled { background: rgba(244, 242, 235, 0.9); border-bottom: 1px solid rgba(0,0,0,0.05); }

        .ag-nav.nav-hidden { transform: translateY(-100%); }

        .ag-nav-container {
          max-width: 1500px; margin: 0 auto; padding: 0 4%;
          display: flex; justify-content: space-between; align-items: center;
        }

        .ag-brand img { height: 40px; transition: 0.3s; }
        .nav-light .ag-brand img { filter: invert(1); }

        .ag-links { display: flex; gap: 3rem; align-items: center; }
        .ag-links a {
          text-decoration: none;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--bright-cream);
          transition: 0.3s;
        }

        .nav-light .ag-links a { color: var(--dark-green); }
        .ag-links a:hover { color: var(--gold-accent); }

        .ag-btn-outline {
          border: 1px solid var(--bright-cream);
          padding: 0.8rem 1.8rem;
        }
        .nav-light .ag-btn-outline { border-color: var(--dark-green); }
        .ag-btn-outline:hover { background: var(--bright-cream); color: var(--dark-green) !important; }
        .nav-light .ag-btn-outline:hover { background: var(--dark-green); color: var(--bright-cream) !important; }

        /* Burger Menu */
        .ag-burger {
          display: none; background: none; border: none; cursor: pointer; z-index: 9999;
        }
        .ag-burger span {
          display: block; width: 30px; height: 1px; background: var(--bright-cream);
          margin: 8px 0; transition: 0.4s;
        }
        .nav-light .ag-burger span { background: var(--dark-green); }
        .ag-burger.open span:nth-child(1) { transform: translateY(4.5px) rotate(45deg); background: var(--bright-cream); }
        .ag-burger.open span:nth-child(2) { transform: translateY(-4.5px) rotate(-45deg); background: var(--bright-cream); }

        /* Luxury Archival Drawer */
        .ag-mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 100;
          visibility: hidden;
          pointer-events: none;
          transition: visibility 0.6s var(--luxury-transition);
        }


        .ag-mobile-menu.is-open {
          visibility: visible;
          pointer-events: all;
        }

        .mobile-menu-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(5, 20, 11, 0.4);
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
          opacity: 0;
          transition: opacity 0.6s var(--luxury-transition), backdrop-filter 0.6s var(--luxury-transition);
          cursor: pointer;
        }

        .ag-mobile-menu.is-open .mobile-menu-backdrop {
          opacity: 1;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .mobile-menu-vault {
          position: absolute;
          top: 0; right: 0;
          width: 88%;
          max-width: 440px;
          height: 100%;
          background: linear-gradient(145deg, #0d2618 0%, #05140b 100%);
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

        .vault-header { display: flex; align-items: center; gap: 1.5rem; }
        .vault-eyebrow { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 4px; color: #d4af37; font-weight: 600; opacity: 0.6; }
        .vault-line { flex: 1; height: 1px; background: linear-gradient(90deg, rgba(214,175,55,0.25), transparent); }
        .vault-links { display: flex; flex-direction: column; gap: 1.8rem; margin: 3rem 0; }
        .vault-link-wrapper { overflow: hidden; }

        .vault-link-wrapper a {
          display: flex; align-items: baseline; gap: 1.2rem; text-decoration: none;
          transform: translateY(80px); opacity: 0;
          transition: transform 0.7s var(--luxury-transition), opacity 0.5s ease;
          transition-delay: calc(var(--item-idx) * 0.07s);
        }

        .ag-mobile-menu.is-open .vault-link-wrapper a { transform: translateY(0); opacity: 1; }
        .link-index { font-size: 0.7rem; font-weight: 500; color: #d4af37; opacity: 0.5; }
        .link-title { font-family: var(--font-serif); font-size: clamp(1.5rem, 5vw, 2rem); color: #fbfaf6; font-weight: 400; position: relative; transition: 0.3s; }
        .vault-link-wrapper a:hover .link-title { color: #d4af37; transform: translateX(8px); }
        .vault-cta-highlight .link-title { font-style: italic; color: #d4af37; }

        .vault-footer { border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 1.5rem; opacity: 0; transform: translateY(20px); transition: 0.8s var(--luxury-transition) 0.4s; }
        .ag-mobile-menu.is-open .vault-footer { opacity: 1; transform: translateY(0); }
        .vault-manifesto { font-family: var(--font-serif); font-style: italic; font-size: 0.85rem; line-height: 1.6; color: rgba(251, 250, 246, 0.5); margin-bottom: 1rem; }
        .vault-footer-meta { display: flex; justify-content: space-between; font-size: 0.55rem; text-transform: uppercase; letter-spacing: 2px; color: rgba(251, 250, 246, 0.3); }

        /* ================= THICK PREMIUM 3D BORDER UPGRADES ================= */
        
        .hero-layout { padding-top: 15vh; min-height: 100vh; display: flex; align-items: center; }

        /* 100% Fixed Hero Slider clamped to exactly 500px maximum width */
        .hero-image-slider {
          position: relative; 
          width: 100%;
          max-width: 380px;
          margin: 0 auto;
          height: 75vh; 
          border-radius: 20px; 
          overflow: hidden;
          
          /* Thick 3D Structural Border */
          border: 16px solid #0c2416;
          border-top-color: #12331f; 
          border-left-color: #12331f; 
          border-bottom-color: #051009; 
          border-right-color: #051009; 
          
          /* Deep multi-layered drop shadow & outer gold ring */
          box-shadow: 
            0 0 0 3px var(--gold-accent), 
            0 40px 80px rgba(0, 0, 0, 0.8);
          transform: translateZ(0);
          transition: all 1.2s var(--luxury-transition);
        }

        /* Inner 3D glass shadow layered perfectly over the imagery */
        .hero-image-slider::after {
          content: '';
          position: absolute;
          inset: 0;
          box-shadow: 
            inset 0 0 0 2px rgba(214, 175, 55, 0.3), 
            inset 0 20px 50px rgba(0, 0, 0, 0.6);
          z-index: 10;
          pointer-events: none;
        }

        .hero-image-slider:hover {
          box-shadow: 
            0 0 0 3px var(--gold-accent), 
            0 50px 100px rgba(0, 0, 0, 0.9);
          transform: translateY(-5px);
        }

        .image-track { width: 100%; height: 100%; position: absolute; inset: 0; }
        
        /* EXACTLY parent size. Zero overflowing. Zero scaling animations. */
        .slide-img {
          position: absolute; 
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover; 
          background-position: center center;
          background-repeat: no-repeat;
          opacity: 0; 
          transition: opacity 1.5s ease;
          will-change: opacity;
        }
        .slide-img.active { opacity: 1; }

        .slider-badge {
          position: absolute; bottom: 30px; left: -20px; background: var(--bright-cream);
          color: var(--dark-green); padding: 1rem 2rem; font-size: 0.8rem; text-transform: uppercase;
          letter-spacing: 2px; font-weight: 600;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          z-index: 15;
        }

        /* 3D Premium Wrappers clamped to exactly 500px maximum width */
        .image-wrapper-premium {
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
          aspect-ratio: 4 / 5;
          
          /* Thick 3D Structural Border */
          border-radius: 20px;
          border: 16px solid #0c2416;
          border-top-color: #12331f; 
          border-left-color: #12331f;
          border-bottom-color: #051009;
          border-right-color: #051009;
          
          box-shadow: 
            0 0 0 3px var(--gold-accent), 
            0 35px 70px rgba(0, 0, 0, 0.6);
          transform: translateZ(0);
          transition: all 1s var(--luxury-transition);
        }

        /* 3D Frame color adjustments for bright theme panels */
        .theme-bright .image-wrapper-premium {
          border-color: #e8e4d8;
          border-top-color: #ffffff;
          border-left-color: #ffffff;
          border-bottom-color: #c7c4b8;
          border-right-color: #c7c4b8;
          box-shadow: 
            0 0 0 3px var(--gold-accent), 
            0 35px 70px rgba(7, 25, 16, 0.25);
        }

        /* Inner 3D depth shadow overlay */
        .image-wrapper-premium::after {
          content: '';
          position: absolute;
          inset: 0;
          box-shadow: 
            inset 0 0 0 2px rgba(214, 175, 55, 0.3), 
            inset 0 20px 50px rgba(0, 0, 0, 0.5);
          z-index: 10;
          pointer-events: none;
        }

        .image-wrapper-premium:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 0 0 3px var(--gold-accent), 
            0 45px 90px rgba(0, 0, 0, 0.7);
        }

        .theme-bright .image-wrapper-premium:hover {
          box-shadow: 
            0 0 0 3px var(--gold-accent), 
            0 45px 90px rgba(7, 25, 16, 0.35);
        }

        /* Body images are explicitly exactly 100% boundary locked inside the 500px wrapper */
        .image-wrapper-premium img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: saturate(1.05) contrast(1.05);
        }

        /* Subtle pulsing grid overlay for futuristic premium feel */
        .premium-overlay-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(214, 175, 55, 0) 50%, rgba(214, 175, 55, 0.05) 100%);
          z-index: 5;
          pointer-events: none;
        }

        /* Bento Grid */
        .ag-bento-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2vw; }
        .bento-cell { background: var(--mid-green); padding: 3.5rem; border-radius: 12px; position: relative; transition: transform 0.6s var(--luxury-transition), box-shadow 0.6s ease; border: 1px solid rgba(255,255,255,0.02); }
        .bento-cell:hover { transform: translateY(-10px); background: #123622; box-shadow: 0 20px 40px rgba(0,0,0,0.3); border-color: rgba(214,175,55,0.15); }
        .cell-tall { grid-row: span 2; display: flex; flex-direction: column; justify-content: center; }
        .cell-wide { grid-column: span 2; }

        .bento-num { position: absolute; top: 20px; right: 25px; font-family: var(--font-serif); font-size: 2rem; color: rgba(196, 166, 97, 0.2); font-style: italic; transition: color 0.4s ease; }
        .bento-cell:hover .bento-num { color: rgba(196, 166, 97, 0.4); }

        /* Parallax Moment */
        .forest-parallax {
          background-attachment: fixed; 
          background-size: cover; 
          background-position: center;
          position: relative; 
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .parallax-overlay {
          position: absolute; inset: 0; background: linear-gradient(to top, var(--dark-green) 0%, rgba(7,25,16,0.6) 50%, var(--dark-green) 100%);
        }

        /* ================= KINETIC ANIMATIONS ================= */
        /* Text Stagger Reveal */
        .staggered-text > * { opacity: 0; transform: translateY(30px); transition: all 1s var(--transition-smooth); }
        .is-revealed.staggered-text > *:nth-child(1) { transition-delay: 0.1s; }
        .is-revealed.staggered-text > *:nth-child(2) { transition-delay: 0.2s; }
        .is-revealed.staggered-text > *:nth-child(3) { transition-delay: 0.3s; }
        .is-revealed.staggered-text > *:nth-child(4) { transition-delay: 0.4s; }
        .is-revealed.staggered-text > * { opacity: 1; transform: translateY(0); }

        /* Sleek structural fade up for elements */
        .fade-in-up { opacity: 0; transform: translateY(40px); transition: opacity 1.2s ease, transform 1.2s var(--luxury-transition); will-change: opacity, transform; }
        .is-revealed.fade-in-up { opacity: 1; transform: translateY(0); }

        /* Bento Stagger */
        .ag-bento-grid.is-revealed .bento-cell { animation: fadeUp 1s var(--transition-smooth) forwards; opacity: 0; transform: translateY(40px); }
        .ag-bento-grid.is-revealed .bento-cell:nth-child(1) { animation-delay: 0.1s; }
        .ag-bento-grid.is-revealed .bento-cell:nth-child(2) { animation-delay: 0.2s; }
        .ag-bento-grid.is-revealed .bento-cell:nth-child(3) { animation-delay: 0.3s; }
        .ag-bento-grid.is-revealed .bento-cell:nth-child(4) { animation-delay: 0.4s; }

        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

        /* Cold Chain Logistics Row */
        .delivery-architecture-row { background-color: #fbfaf6; padding: 9.5rem 0; position: relative; }
        .delivery-grid-header { margin-bottom: 5.5rem; }
        .split-title-block { display: grid; grid-template-columns: 1.2fr 1fr; gap: 4vw; align-items: end; margin-top: 1rem; }
        .delivery-lead { font-size: 1.15rem; font-weight: 300; line-height: 1.65; opacity: 0.85; margin: 0; }
        .delivery-pipeline-mesh { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; border-top: 1px solid rgba(5, 20, 11, 0.08); padding-top: 4rem; position: relative; }
        .pipeline-card { position: relative; transition: all 0.4s var(--luxury-transition); }
        .card-topline { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
        .pipeline-index { font-family: var(--font-serif); font-size: 2.2rem; font-style: italic; color: #05140b; line-height: 1; }
        .pipeline-status-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(5, 20, 11, 0.2); }
        .card-accent-gold .pipeline-index { color: #d4af37; }
        .card-accent-gold .pipeline-status-dot.dynamic-pulse { background: #d4af37; box-shadow: 0 0 0 4px rgba(214, 175, 55, 0.15); animation: pulse 2s infinite; }
        .pipeline-card h3 { font-size: 1.3rem; font-weight: 500; color: #05140b; margin: 0 0 1rem 0; letter-spacing: -0.01em; }
        .pipeline-card p { font-size: 1.02rem; line-height: 1.65; font-weight: 300; color: #05140b; opacity: 0.75; margin: 0; }
        .pipeline-card:hover { transform: translateY(-6px); }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(214, 175, 55, 0.4); }
          70% { box-shadow: 0 0 0 8px rgba(214, 175, 55, 0); }
          100% { box-shadow: 0 0 0 0 rgba(214, 175, 55, 0); }
        }

        /* Responsive Breakpoints & Ultra-Responsive Mobile Fallbacks */
        @media (max-width: 768px) {
          .ag-grid { grid-template-columns: 1fr; gap: 4rem; }
          .hero-image-slider { height: 50vh; }
          .ag-bento-grid { grid-template-columns: 1fr; }
          .cell-tall, .cell-wide { grid-column: auto; grid-row: auto; }
          .indent { margin-left: 0; }
          .desktop-only { display: none; }
          .ag-burger { display: block; }
          .reverse-mobile { display: flex; flex-direction: column-reverse; }
          .text-right-pad { padding-left: 0; }
          
          .split-title-block { grid-template-columns: 1fr; gap: 1.5rem; }
          .delivery-pipeline-mesh { grid-template-columns: 1fr; gap: 4rem; padding-top: 3rem; }
          .delivery-architecture-row { padding: 6rem 0; }
          .pipeline-card { border-bottom: 1px solid rgba(5, 20, 11, 0.05); padding-bottom: 2.5rem; }
          .pipeline-card:last-child { border-bottom: none; padding-bottom: 0; }
          
          .forest-parallax { background-attachment: scroll !important; }
        }

        /* Scaled specifically to preserve geometry on ultra-small displays down to 330px width */
        @media (max-width: 400px) {
          .padding-huge { padding: 6rem 0; }
          .hero-layout { padding-top: 12vh; min-height: 85vh; }
          
          .hero-image-slider { 
            height: 45vh; 
            min-height: 320px; 
            border-width: 10px; /* Thinner 3D border for small screens */
          }
          .image-wrapper-premium { 
            border-width: 10px;
            aspect-ratio: 1 / 1.15;
          }
          
          h1 { font-size: clamp(2.5rem, 9vw, 3rem); }
          h2 { font-size: clamp(2.2rem, 8vw, 2.5rem); }
          .bento-cell { padding: 2.5rem 1.5rem; }
        }

                @media (max-width:560px){
  .image-wrapper-premium, .hero-image-slider {
    max-width: 280px;
  }
}
      `}</style>
    </div>
  );
}
