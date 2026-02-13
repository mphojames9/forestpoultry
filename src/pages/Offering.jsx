import { useState } from "react";

import logo from "../assets/Image Feb 8, 2026, 09_20_39 AM.png";
import heroImage from "../assets/original-rotisserie-oven-whole-chicken-mobile.jpg";

export default function Offering() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
        <div className="mobile-menu">
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
          <span>Our Offering</span>
          <h1>
            Quality Poultry.
            <br />
            Grown With Care.
          </h1>
          <p>
            Forest Poultry specialises in high-quality chickens farmed
            responsibly, monitored for freshness, consistency, and nutritional
            integrity, from our farm to your table.
          </p>
        </div>
      </section>

      {/* CURRENT OFFERING */}
      <section className="section">
        <h2 className="section-title">What We Supply Today</h2>
        <p className="section-sub">
          Our current focus is deliberate and disciplined — ensuring quality,
          reliability, and trust at every stage of production.
        </p>

        <div className="offer-grid">
          <div className="offer-card">
            <h3>Whole Fresh Chickens</h3>
            <p>
              Carefully farmed, organically grown whole chickens, produced with
              strict attention to animal welfare, hygiene, and nutritional
              quality.
            </p>
          </div>

          <div className="offer-card">
            <h3>Organic & Natural</h3>
            <p>
              Raised using responsible farming methods that protect the land,
              respect ecosystems, and support healthy growth.
            </p>
          </div>

          <div className="offer-card">
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
        <h2 className="section-title">Packaging Options</h2>
        <p className="section-sub">
          Our packaging approach reflects our current stage of growth — simple,
          clean, and practical.
        </p>

        <div className="packaging-grid">
          <div className="packaging-card">
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
        <h2 className="section-title">Coming Soon</h2>
        <p className="section-sub">
          As Forest Poultry grows, we are developing a dedicated processing and
          packaging line that will enable expanded offerings without compromising
          quality.
        </p>

        <div className="future-grid">
          <div className="future-card">
            <h3>Processed Poultry Cuts</h3>
            <p>
              Carefully portioned chicken cuts prepared under strict quality and
              hygiene standards.
            </p>
          </div>

          <div className="future-card">
            <h3>Enhanced Packaging Solutions</h3>
            <p>
              Improved packaging options designed for retail, bulk supply, and
              extended freshness.
            </p>
          </div>

          <div className="future-card">
            <h3>Scalable Distribution</h3>
            <p>
              Infrastructure built to support regional and future international
              market expansion.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <h2>Forest</h2>
            <p>
              Grown with care, guided by nature, and built for Africa.
              Forest Poultry is a purpose-led producer rooted in integrity,
              sustainability, and long-term nourishment.
            </p>
          </div>

          <div className="footer-links">
            <h4>Explore</h4>
            <a href="/about">About Us</a>
            <a href="/about#ourmission">Our Values</a>
            <a href="/">Home</a>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="LinkedIn">IN</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 Forest Poultry -{" "}
            <span className="Slogan">Chicken. Pure Living</span>
          </span>
          <span>From the Forest to Your Table</span>
        </div>
      </footer>
    </>
  );
}