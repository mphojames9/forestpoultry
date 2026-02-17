import { useEffect, useState, useRef } from "react";

import logo from "../assets/Image Feb 8, 2026, 09_20_39 AM.png";
import heroImage from "../assets/original-rotisserie-oven-whole-chicken-mobile.jpg";

export default function Offering() {
  const [menuOpen, setMenuOpen] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
      const observerOpts = {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.1, 0.5],
      };
  
      const slideObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
  
          if (entry.isIntersecting && entry.intersectionRatio > 0.08) {
            el.classList.add("visible");
            el.classList.remove("out");
  
            if (el.classList.contains("slide-left") || el.classList.contains("slide-right")) {
              el.classList.add("in");
            }
          } else {
            el.classList.remove("in");
            el.classList.add("out");
            el.classList.remove("visible");
          }
        });
      }, observerOpts);
  
      const targets = divRef.current.querySelectorAll(
        ".reveal, .slide-left, .slide-right"
      );
  
      targets.forEach((el) => slideObserver.observe(el));
      return () => slideObserver.disconnect();
    }, []);
    

  return (
    <>
    <div className="main" ref={divRef}>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-brand">
          <img src={logo} alt="Forest Poultry" />
        </div>

        <div className="nav-links desktop-only">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact Us</a>
        </div>

        <button
          className="hamburger"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu open">
          <div className="mobile-menu-content">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      )}

      {/* HERO */}
      <section
        className="product-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(12,36,25,.88), rgba(12,36,25,.95)), url(${heroImage})`,
        }}
      >
        <div className="product-hero-content">
          <span className="slide-left">Our Offering</span>
          <h1 className="slide-left">
            Quality Poultry.
            <br />
            Grown With Care.
          </h1>
          <p className="slide-right">
            Forest Poultry specialises in high-quality chickens farmed
            responsibly, monitored for freshness, consistency, and nutritional
            integrity, from our farm to your table.
          </p>
        </div>
      </section>

      {/* CURRENT OFFERING */}
      <section className="section">
        <h2 className="section-title slide-left">What We Supply Today</h2>
        <p className="section-sub slide-right">
          Our current focus is deliberate and disciplined, ensuring quality,
          reliability, and trust at every stage of production.
        </p>

        <div className="offer-grid">
          <div className="offer-card slide-left">
            <h3>Whole Fresh Chickens</h3>
            <p>
              Carefully farmed, organically grown whole chickens, produced with
              strict attention to animal welfare, hygiene, and nutritional
              quality.
            </p>
          </div>

          <div className="offer-card slide-right">
            <h3>Organic & Natural</h3>
            <p>
              Raised using responsible farming methods that protect the land,
              respect ecosystems, and support healthy growth.
            </p>
          </div>

          <div className="offer-card slide-left">
            <h3>Consistency & Freshness</h3>
            <p>
              Each batch is monitored to ensure consistent quality, freshness,
              and dependable supply for our customers.
            </p>
          </div>
        </div>
      </section>

      {/* PACKAGING */}
      <section className="section packaging">
        <h2 className="section-title slide-right">Packaging Options</h2>
        <p className="section-sub slide-left">
          Our packaging approach reflects our current stage of growth, simple,
          clean, and practical.
        </p>

        <div className="packaging-grid">
          <div className="packaging-card slide-left">
            <h3>Fresh Basic Packaging</h3>
            <p>
              Clean, functional packaging designed to preserve freshness while
              supporting efficient handling and delivery.
            </p>
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="section future">
        <h2 className="section-title slide-right">Coming Soon</h2>
        <p className="section-sub slide-left">
          As Forest Poultry grows, we are developing a dedicated processing and
          packaging line that will enable expanded offerings without compromising
          quality.
        </p>

        <div className="future-grid">
          <div className="future-card slide-right">
            <h3>Processed Poultry Cuts</h3>
            <p>
              Carefully portioned chicken cuts prepared under strict quality and
              hygiene standards.
            </p>
          </div>

          <div className="future-card slide-left">
            <h3>Enhanced Packaging Solutions</h3>
            <p>
              Improved packaging options designed for retail, bulk supply, and
              extended freshness.
            </p>
          </div>

          <div className="future-card slide-right">
            <h3>Scalable Distribution</h3>
            <p>
              Infrastructure built to support regional and future international
              market expansion.
            </p>
          </div>
        </div>
      </section>
      </div>

    </>
  );
}