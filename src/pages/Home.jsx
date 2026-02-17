import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import logoMain from "../assets/logomain.png";
import rawChicken from "../assets/rawchicken.png";
import rotisserie from "../assets/original-rotisserie-oven-whole-chicken-mobile.jpg";
import aboutImage from "../assets/1fa82492-116b-4a95-bdc8-b884f605501a.png";
import profileImage from "../assets/profile.png";
import logo from "../assets/Image Feb 8, 2026, 09_20_39 AM.png";

export default function Home() {
  /* ---------------- STATE ---------------- */
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const divRef = useRef(null);

  const images = [logoMain, rawChicken, rotisserie];

  /* ---------------- SLIDER ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

    /* ---------------- Intersection Observer ---------------- */
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
    <div className="main" ref={divRef}>
      {/* ================= NAVBAR ================= */}
      <nav className="nav">
        <div className="nav-brand animate">
          <img src={logo} alt="Forest Poultry Logo" />
        </div>

        <div className="nav-links desktop-only">
          <Link to="/about">About</Link>
          <a href="#values">Values</a>
          <a href="#founder">Founder</a>
          <Link to="/offering">Offering</Link>
          <Link to="/contact">Contact Us</Link>
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

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="mobile-menu open">
          <div className="mobile-menu-content">
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <a href="#values" onClick={() => setMenuOpen(false)}>
              Values
            </a>
            <a href="#founder" onClick={() => setMenuOpen(false)}>
              Founder
            </a>
            <Link to="/offering" onClick={() => setMenuOpen(false)}>
              Offering
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}

      {/* ================= HERO ================= */}
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text slide-left">
          <h2 className="slide-left">
            Grown with Care.<br />
            Delivered with Pride.<br />
            From the Forest to Your Table.
          </h2>

          <p className="slide-right">
            Forest Poultry is inspired by nature’s balance, producing wholesome,
            nutritious chicken through ethical, sustainable farming rooted in
            long-term African growth.
          </p>

          <a href="#about" className="btn-main slide-left">
            Explore Our Products
          </a>

          <a href="#founder" className="btn-outline slide-right">
            Meet the Founder
          </a>
        </div>

        {/* IMAGE SLIDER */}
        <div className="hero-images slide-left">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Forest Poultry"
              className={`hero-img ${index === current ? "active" : ""
                }`}
            />
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about">
        <div className="story animate">
          <div>
            <h2 className="section-title slide-left">
              Rooted in Nature. Built for Africa.
            </h2>

            <p className="section-text slide-left">
              Forest Poultry is a purpose-led producer inspired by the forest,
              a system where balance, patience, and care create abundance.
              <br />
              <br />
              We farm responsibly, protect quality, and build a scalable
              poultry business designed for long-term value and nourishment.
            </p>
          </div>

          <img src={aboutImage} className="slide-right" alt="About Forest Poultry" />
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section id="values" className="values">
        <h2 className="section-title slide-left">Our Values</h2>

        <div className="values-grid">
          <div className="value slide-left">
            <h3>Sustainability</h3>
            <p>Farming in harmony with nature.</p>
          </div>

          <div className="value slide-right">
            <h3>Integrity</h3>
            <p>Trust, transparency, responsibility.</p>
          </div>

          <div className="value slide-left">
            <h3>Quality</h3>
            <p>No shortcuts. Ever.</p>
          </div>

          <div className="value slide-right">
            <h3>African Growth</h3>
            <p>Built for scale, rooted in care.</p>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section id="founder">
        <div className="founder slide-left">
          <img src={profileImage} alt="Founder" />

          <div className="slide-right">
            <h2 className="section-title">Puseletso Phala</h2>

            <p className="section-text">
              Forest Poultry was founded on a belief that food must be honest,
              nourishing, and responsibly grown.
              <br />
              <br />
              Inspired by Africa’s land and nature’s resilience, Puseletso built
              Forest Poultry to last, not to rush.
            </p>
          </div>
        </div>
      </section>

      <section className="forest-moment">
        <div className="forest-overlay"></div>

        <div className="forest-content">
          <span className="forest-eyebrow slide-right">The Forest Philosophy</span>

          <h2 className="slide-left">
            Nature Does Not Rush.<br/>
              And Neither Do We.
          </h2>

          <p className="slide-right">
            At Forest Poultry, growth is intentional. Like a forest, we build systems
            that sustain life over time, where care, patience, and balance create
            nourishment you can trust.
            <br/><br/>
              This is not mass production. This is responsible scale.
              Rooted in Africa. Guided by nature.
            </p>

              <div className="forest-actions">
                <a href="#about" className="forest-btn primary slide-left">Our Commitment</a>
                <a href="#founder" className="forest-btn ghost slide-right">Leadership & Vision</a>
              </div>
            </div>

            { /* Decorative floating layers */}
            <div className="forest-orbs slide-right">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>

        </div>
        );
}