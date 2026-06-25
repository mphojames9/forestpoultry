import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const observerOpts = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.1, 0.4],
    };

    const slideObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;

        if (entry.isIntersecting && entry.intersectionRatio > 0.05) {
          el.classList.add("visible");
          el.classList.remove("out");

          if (el.classList.contains("slide-left") || el.classList.contains("slide-right") || el.classList.contains("reveal-up")) {
            el.classList.add("in");
          }
        } else {
          el.classList.remove("in");
          el.classList.add("out");
          el.classList.remove("visible");
        }
      });
    }, observerOpts);

    const targets = footerRef.current.querySelectorAll(
      ".reveal, .slide-left, .slide-right, .reveal-up"
    );

    targets.forEach((el) => slideObserver.observe(el));
    return () => slideObserver.disconnect();
  }, []);

  return (
    <footer className="site-footer-luxury" ref={footerRef}>
      {/* Decorative Top Accent Border */}
      <div className="footer-top-divider">
        <div className="divider-gold-line"></div>
      </div>

      <div className="footer-canvas-container">
        <div className="footer-editorial-grid">
          
          {/* COLUMN 1: BRAND MANIFESTO */}
          <div className="footer-brand-block reveal-up">
            <span className="footer-eyebrow">The Origin</span>
            <h2 className="footer-brand-title">Forest</h2>
            <p className="footer-manifesto-text">
              Grown with care, guided by nature, and built for Africa. 
              Forest Poultry is a purpose-led producer rooted in absolute integrity, 
              sustainability, and structural, long-term nourishment.
            </p>
          </div>

          {/* COLUMN 2: INTERNAL CURATED LINKS */}
          <div className="footer-links-block slide-right">
            <span className="footer-eyebrow">Navigation</span>
            <div className="luxury-nav-list">
              <Link to="/about" className="luxury-link-item">
                <span className="link-num">01</span> About Us
              </Link>
              <Link to="/offering" className="luxury-link-item">
                <span className="link-num">02</span> Our Offering
              </Link>
              <Link to="/contact" className="luxury-link-item">
                <span className="link-num">03</span> Contact Us
              </Link>
            </div>
          </div>

          {/* COLUMN 3: INTENTIONAL SOCIAL CONNECTIVITY */}
          <div className="footer-social-block slide-left">
            <span className="footer-eyebrow">Connect</span>
            <p className="social-descriptor">Follow our seasonal growth updates across our official networks.</p>

            <div className="premium-social-rings">
              
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-ring-link"
              >
                <svg viewBox="0 0 24 24" className="social-svg">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.25 2.3.42.6.23 1 .5 1.4.9.4.4.7.8.9 1.4.17.4.36 1.1.42 2.3.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.9-.42 2.3-.23.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1.1.36-2.3.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.9-.25-2.3-.42-.6-.23-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.36-1.1-.42-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.9.42-2.3.23-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1.1-.36 2.3-.42C8.4 2.2 8.8 2.2 12 2.2zm0 3.3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm0 10.7a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4zm6.7-10.9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-ring-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-2.9h2V9.7c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.2l-.35 2.9h-1.85v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-ring-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v15h-4V8zm7.5 0h3.8v2.1h.05c.53-1 1.83-2.1 3.77-2.1 4 0 4.7 2.6 4.7 6v9h-4v-8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1v8.2h-4V8z" />
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* MONUMENTAL BACKGROUND TEXT STAMP */}
        <div className="footer-monumental-stamp">
          POULTRY
        </div>

        {/* CLOSING BASELINE STATEMENT */}
        <div className="footer-luxury-bottom reveal-up">
          <div className="bottom-meta-left">
            <span>© {new Date().getFullYear()} Forest Poultry</span>
            <span className="meta-separator">•</span>
            <span className="luxury-slogan"><i>Chicken. Pure Living</i></span>
          </div>
          <div className="bottom-meta-right">
            <span className="editorial-tag">From the Forest to Your Table</span>
          </div>
        </div>
      </div>

      {/* FOOTER EXTRA-PREMIUM STYLESHEET */}
      <style>{`
        :root {
          --footer-bg: #05140b;         /* Deep luxury forest green */
          --footer-card-bg: #0d2618;    /* Saturated moss green accent */
          --footer-cream: #fbfaf6;      /* High-end bright alabaster text */
          --footer-gold: #d4af37;       /* Metallic premium champagne gold */
          
          --footer-serif: 'Playfair Display', serif;
          --footer-sans: 'Plus Jakarta Sans', sans-serif;
          --footer-bezier: cubic-bezier(0.16, 1, 0.3, 1);
        }

        .site-footer-luxury {
          background-color: var(--footer-bg);
          color: var(--footer-cream);
          font-family: var(--footer-sans);
          position: relative;
          padding-top: 6rem;
          padding-bottom: 2.5rem;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.03);
        }

        .footer-canvas-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 6%;
          position: relative;
          z-index: 5;
        }

        /* Top Divider Architecture */
        .footer-top-divider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.05);
        }
        .divider-gold-line {
          width: 80px;
          height: 1px;
          background: var(--footer-gold);
          margin: 0 auto;
          position: relative;
          top: -1px;
        }

        /* Main Editorial Layout Grid */
        .footer-editorial-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 6vw;
          align-items: start;
          padding-bottom: 6rem;
        }

        .footer-eyebrow {
          display: block;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: var(--footer-gold);
          margin-bottom: 1.8rem;
          font-weight: 600;
        }

        /* Brand Column Block */
        .footer-brand-title {
          font-family: var(--footer-serif);
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 400;
          margin: 0 0 1.2rem 0;
          letter-spacing: -0.02em;
        }

        .footer-manifesto-text {
          font-size: 1.02rem;
          line-height: 1.65;
          font-weight: 300;
          opacity: 0.8;
          max-width: 480px;
          margin: 0;
        }

        /* Nav Curated Links Column Block */
        .luxury-nav-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .luxury-link-item {
          color: var(--footer-cream);
          text-decoration: none;
          font-size: 1.05rem;
          font-weight: 300;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          transition: transform 0.4s var(--footer-bezier), color 0.4s ease;
        }

        .link-num {
          font-family: var(--footer-serif);
          font-size: 0.8rem;
          font-style: italic;
          color: var(--footer-gold);
          opacity: 0.7;
        }

        .luxury-link-item:hover {
          color: var(--footer-gold);
          transform: translateX(6px);
        }

        /* Social Ring Networks Block */
        .social-descriptor {
          font-size: 0.95rem;
          font-weight: 300;
          opacity: 0.75;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }

        .premium-social-rings {
          display: flex;
          gap: 1rem;
        }

        .social-ring-link {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid rgba(251, 250, 246, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--footer-cream);
          transition: all 0.4s var(--footer-bezier);
          background: transparent;
        }

        .social-svg {
          width: 18px;
          height: 18px;
          fill: currentColor;
          transition: transform 0.4s var(--footer-bezier);
        }

        .social-ring-link:hover {
          border-color: var(--footer-gold);
          color: var(--footer-gold);
          background-color: rgba(214, 175, 55, 0.03);
          transform: translateY(-3px);
        }
        
        .social-ring-link:hover .social-svg {
          transform: scale(1.08);
        }

        /* Monumental Background Artistic Typography */
        .footer-monumental-stamp {
          position: absolute;
          bottom: 0rem;
          right: -2%;
          font-family: var(--footer-serif);
          font-size: clamp(6rem, 16vw, 15rem);
          font-weight: 700;
          line-height: 0.75;
          letter-spacing: 0.05em;
          color: rgba(251, 250, 246, 0.015);
          pointer-events: none;
          z-index: 1;
          user-select: none;
        }

        /* Footer Structural Baseline Meta */
        .footer-luxury-bottom {
          border-top: 1px solid rgba(251, 250, 246, 0.06);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.88rem;
          font-weight: 300;
          opacity: 0.8;
          position: relative;
          z-index: 10;
        }

        .bottom-meta-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .meta-separator {
          color: var(--footer-gold);
          opacity: 0.5;
        }

        .luxury-slogan i {
          font-family: var(--footer-serif);
          color: var(--footer-gold);
        }

        .editorial-tag {
          letter-spacing: 1px;
          text-transform: uppercase;
          font-size: 0.78rem;
          font-weight: 400;
          color: var(--footer-cream);
          opacity: 0.9;
        }

        /* ================= 2026 INTERSECTION SYSTEM OVERRIDES ================= */
        .slide-right, .slide-left, .reveal-up {
          opacity: 0;
          transition: opacity 1.2s var(--footer-bezier), transform 1.2s var(--footer-bezier);
        }

        .slide-right { transform: translateX(-40px); }
        .slide-left { transform: translateX(40px); }
        .reveal-up { transform: translateY(40px); }

        .slide-right.in, .slide-left.in, .reveal-up.in {
          opacity: 1;
          transform: translate(0);
        }

        /* Fluid Responsiveness Overrides */
        @media (max-width: 1024px) {
          .footer-editorial-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
            padding-bottom: 4rem;
          }
          .site-footer-luxury {
            padding-top: 4rem;
          }
          .footer-luxury-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.2rem;
          }
          .footer-monumental-stamp {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
}
