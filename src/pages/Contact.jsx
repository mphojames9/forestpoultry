import { useEffect, useState, useRef } from "react";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import logo from "../assets/Image Feb 8, 2026, 09_20_39 AM.png";
import heroImage from "../assets/packing.png";
import { Link } from "react-router-dom";

export default function Contact() {
  const formRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const divRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const NAV_TRIGGER_HEIGHT = 180;
  const [navHidden, setNavHidden] = useState(false);
  const [navCompressed, setNavCompressed] = useState(false);

  // Navigation state management
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", closeOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, [menuOpen]);

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

  // Performance-Optimized Intersection Observer
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
          // Unobserve after triggering to prevent layout thrashing and animation lag
          observer.unobserve(entry.target);
        }
      });
    }, observerOpts);

    const targets = divRef.current.querySelectorAll(".reveal-up, .slide-left, .slide-right");
    targets.forEach((el) => slideObserver.observe(el));
    
    return () => slideObserver.disconnect();
  }, []);

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.loading("Encrypting & Dispatching...", { id: "contact-send" });

    emailjs
      .sendForm(
        "service_fplafvo",
        "template_rwzn3jr",
        formRef.current,
        "rBAVJPpAlYdFA3_1D"
      )
      .then(() => {
        toast.success("Transmission Confirmed. We will be in touch.", {
          id: "contact-send",
          style: { background: '#05140b', color: '#d4af37', border: '1px solid #d4af37' }
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        toast.error("Network disruption. Please try again.", {
          id: "contact-send",
          style: { background: '#3b0000', color: '#fff' }
        });
      });
  };

  return (
    <div className="premium-contact-canvas" ref={divRef}>
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
            <Link to="/offering">Offering</Link>
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
      <span className="vault-eyebrow">Communication Hub</span>
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
        <Link to="/about" onClick={() => setMenuOpen(false)} style={{ "--item-idx": 1 }}>
          <span className="link-index">02</span>
          <span className="link-title">About</span>
        </Link>
      </div>
      <div className="vault-link-wrapper">
        <Link to="/offering" onClick={() => setMenuOpen(false)} style={{ "--item-idx": 2 }}>
          <span className="link-index">03</span>
          <span className="link-title">Offering</span>
        </Link>
      </div>
    </div>

    {/* Drawer Footer Archival Data */}
    <div className="vault-footer">
      <p className="vault-manifesto">
        Direct telemetry channel. Payload systems active.
      </p>
      <div className="vault-footer-meta">
        <span>© 2026 Forest Poultry</span>
        <span>Secure Terminal</span>
      </div>
    </div>
  </div>
</div>

      {/* ================= HERO SECTION (CINEMATIC) ================= */}
      <section
        className="contact-hero-premium"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 20, 11, 0.85), rgba(5, 20, 11, 0.98)), url(${heroImage})`,
        }}
      >
        <div className="container hero-inner-alignment">
          <div className="contact-hero-content reveal-up">
            <span className="accent-eyebrow gold-glow">Direct Channel</span>
            <h1 className="hero-headline">
              Let’s Grow <br /><span className="gold-italic">Together.</span>
            </h1>
            <p className="hero-lead">
              Whether you are a customer, supplier, or partner, we’d love to hear from you. 
              Reach out and let’s build something rooted in trust and purpose.
            </p>
          </div>
        </div>
        <div className="hero-bottom-gradient"></div>
      </section>

      {/* ================= ASYMMETRIC BENTO CONTACT MESH ================= */}
      <section className="contact-matrix-section">
        <div className="container contact-editorial-row">
          
          {/* LEFT: EDITORIAL INFO PANEL */}
          <div className="contact-info-panel slide-right">
            <h2 className="monument-title">Global Reach,<br />Personal Touch.</h2>
            <p className="clear-body">
              Forest Poultry is built on transparency, care, and long-term relationships. 
              If you have questions about our products, partnerships, or supply logistics, 
              our dedicated team is ready to connect.
            </p>

            <div className="contact-capabilities">
              <div className="capability-node">
                <FaCheckCircle className="gold-icon" size={18} /> 
                <span>Wholesale & Supply Enquiries</span>
              </div>
              <div className="capability-node">
                <FaCheckCircle className="gold-icon" size={18} /> 
                <span>Retail & Distribution Partners</span>
              </div>
              <div className="capability-node">
                <FaCheckCircle className="gold-icon" size={18} /> 
                <span>Strategic Ecosystem Growth</span>
              </div>
            </div>

            {/* UPGRADED LUXURY WHATSAPP BUTTON */}
            <a
              href="https://wa.me/27684518292"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-whatsapp-trigger"
            >
              <div className="whatsapp-icon-wrapper">
                <FaWhatsapp size={22} />
              </div>
              <span className="whatsapp-label">Initiate Secure Chat</span>
              <div className="hover-glare"></div>
            </a>
          </div>

          {/* RIGHT: GLASSMORPHIC FORM INTERFACE */}
          <div className="contact-form-panel slide-left">
            <div className="form-glass-card">
              <div className="form-header">
                <h3>Digital Dispatch</h3>
                <span className="status-indicator">
                  <span className="pulse-dot"></span> Systems Online
                </span>
              </div>

              <form ref={formRef} className="premium-form-grid" onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label htmlFor="name">Legal Name / Entity</label>
                  <div className="focus-border"></div>
                </div>

                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label htmlFor="email">Encrypted Email Address</label>
                  <div className="focus-border"></div>
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label htmlFor="subject">Subject Directive</label>
                  <div className="focus-border"></div>
                </div>

                <div className="input-group textarea-group">
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="message">Detailed Transmission</label>
                  <div className="focus-border"></div>
                </div>

                <button type="submit" className="luxury-submit-btn">
                  <span>Transmit Payload</span>
                  <div className="btn-sweep"></div>
                </button>
              </form>
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
          --signature-metallic-gold: #d4af37;
          --form-glass: rgba(255, 255, 255, 0.02);
          --form-border: rgba(255, 255, 255, 0.08);
          
          --serif-editorial: 'Playfair Display', serif;
          --sans-fluid: 'Plus Jakarta Sans', sans-serif;
          --luxury-transition: cubic-bezier(0.16, 1, 0.3, 1);
        }

        .premium-contact-canvas {
          background-color: var(--luxury-dark-forest);
          color: var(--porcelain-luminous);
          font-family: var(--sans-fluid);
          position: relative;
          overflow-x: hidden;
          min-height: 100vh;
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

        .container {
          max-width: 1440px;
          margin: 0 auto;
          padding-left: 6vw;
          padding-right: 6vw;
        }

        /* --- NAVIGATION --- */
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
        /* --- HERO --- */
        .contact-hero-premium {
          height: 65vh;
          min-height: 550px;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          z-index: 2;
        }

        .hero-inner-alignment { width: 100%; padding-top: 8vh; }

        .accent-eyebrow {
          display: block; font-size: 0.75rem; text-transform: uppercase;
          letter-spacing: 5px; color: var(--signature-metallic-gold);
          margin-bottom: 1.5rem; font-weight: 600;
        }

        .gold-glow { text-shadow: 0 0 15px rgba(212,175,55,0.25); }
        .gold-italic { color: var(--signature-metallic-gold); font-style: italic; }

        .hero-headline { font-size: clamp(3rem, 5.5vw, 5rem); line-height: 1.1; }
        .hero-lead { font-size: 1.2rem; line-height: 1.65; max-width: 550px; opacity: 0.9; font-weight: 300; }

        .hero-bottom-gradient {
          position: absolute; bottom: 0; left: 0; width: 100%; height: 15vh;
          background: linear-gradient(to bottom, transparent, var(--luxury-dark-forest));
          z-index: 2;
        }

        /* --- CONTACT MATRIX --- */
        .contact-matrix-section { padding: 6rem 0 10rem 0; }

        .contact-editorial-row {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 8vw;
          align-items: center;
        }

        .monument-title { font-size: clamp(2.4rem, 4vw, 3.6rem); margin-bottom: 1.5rem; }
        .clear-body { font-size: 1.1rem; line-height: 1.7; font-weight: 300; opacity: 0.85; margin-bottom: 3rem; }

        .contact-capabilities {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-bottom: 3.5rem;
          border-left: 1px solid rgba(255,255,255,0.1);
          padding-left: 2rem;
        }

        .capability-node {
          display: flex; align-items: center; gap: 1rem;
          font-size: 1rem; font-weight: 300; letter-spacing: 0.5px;
        }
        .gold-icon { color: var(--signature-metallic-gold); }

        /* --- PREMIUM WHATSAPP TRIGGER --- */
        .premium-whatsapp-trigger {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: rgba(37, 211, 102, 0.1);
          border: 1px solid rgba(37, 211, 102, 0.3);
          padding: 0.8rem 1.8rem 0.8rem 0.8rem;
          border-radius: 50px;
          text-decoration: none;
          color: #fff;
          overflow: hidden;
          transition: all 0.4s var(--luxury-transition);
        }

        .whatsapp-icon-wrapper {
          background: #25D366;
          border-radius: 50%;
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 20px rgba(37, 211, 102, 0.4);
        }

        .whatsapp-label {
          font-family: var(--sans-fluid);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
        }

        .hover-glare {
          position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: skewX(-20deg);
          transition: left 0.6s ease;
        }

        .premium-whatsapp-trigger:hover {
          background: rgba(37, 211, 102, 0.15);
          border-color: rgba(37, 211, 102, 0.6);
          transform: translateY(-3px);
        }

        .premium-whatsapp-trigger:hover .hover-glare { left: 200%; }

        /* --- GLASSMORPHIC FORM --- */
        .form-glass-card {
          background: var(--form-glass);
          border: 1px solid var(--form-border);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 3.5rem;
          border-radius: 2px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.4);
        }

        .form-header {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 3rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 1.5rem;
        }

        .form-header h3 {
          font-family: var(--sans-fluid);
          font-size: 0.9rem; text-transform: uppercase; letter-spacing: 3px;
          margin: 0; color: var(--signature-metallic-gold);
        }

        .status-indicator {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,0.5);
        }

        .pulse-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #25D366;
          box-shadow: 0 0 10px #25D366;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }

        .premium-form-grid {
          display: flex; flex-direction: column; gap: 2.5rem;
        }

        .input-group { position: relative; }

        .input-group input, .input-group textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          padding: 1rem 0;
          color: var(--porcelain-luminous);
          font-family: var(--sans-fluid);
          font-size: 1.05rem;
          font-weight: 300;
          outline: none;
          transition: border-color 0.3s;
        }

        .input-group textarea {
          resize: none;
          height: 80px;
        }

        .input-group label {
          position: absolute;
          top: 1rem; left: 0;
          font-size: 1rem;
          color: rgba(255,255,255,0.4);
          pointer-events: none;
          transition: all 0.3s var(--luxury-transition);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.8rem;
        }

        .input-group input:focus ~ label,
        .input-group input:not(:placeholder-shown) ~ label,
        .input-group textarea:focus ~ label,
        .input-group textarea:not(:placeholder-shown) ~ label {
          top: -12px;
          font-size: 0.65rem;
          color: var(--signature-metallic-gold);
        }

        .focus-border {
          position: absolute;
          bottom: 0; left: 0; width: 100%; height: 1px;
          background: var(--signature-metallic-gold);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.5s var(--luxury-transition);
        }

        .input-group input:focus ~ .focus-border,
        .input-group textarea:focus ~ .focus-border {
          transform: scaleX(1);
        }

        .luxury-submit-btn {
          position: relative;
          background: transparent;
          border: 1px solid var(--signature-metallic-gold);
          color: var(--signature-metallic-gold);
          padding: 1.2rem 2rem;
          font-family: var(--sans-fluid);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          overflow: hidden;
          margin-top: 1rem;
          transition: color 0.4s;
        }

        .luxury-submit-btn span { position: relative; z-index: 2; font-weight: 500; }

        .btn-sweep {
          position: absolute; inset: 0; background: var(--signature-metallic-gold);
          transform: translateY(100%); transition: transform 0.4s var(--luxury-transition);
          z-index: 1;
        }

        .luxury-submit-btn:hover { color: var(--luxury-dark-forest); }
        .luxury-submit-btn:hover .btn-sweep { transform: translateY(0); }

        /* --- ANIMATIONS --- */
        .reveal-up, .slide-left, .slide-right {
          opacity: 0;
          transition: opacity 1.2s var(--luxury-transition), transform 1.2s var(--luxury-transition);
        }

        .reveal-up { transform: translateY(40px); }
        .slide-right { transform: translateX(-40px); }
        .slide-left { transform: translateX(40px); }

        .reveal-up.in, .slide-right.in, .slide-left.in {
          opacity: 1; transform: translate(0);
        }

        /* --- RESPONSIVE LOGIC --- */
        @media (max-width: 1024px) {
          .contact-editorial-row { grid-template-columns: 1fr; gap: 5rem; }
          .desktop-only { display: none; }
          .ag-burger { display: block; }
          .form-glass-card { padding: 2.5rem 2rem; }
        }

        @media (max-width: 640px) {
          .contact-hero-premium { height: 55vh; }
          .hero-headline { font-size: clamp(2.5rem, 8vw, 3rem); }
        }
      `}</style>
    </div>
  );
}
