import { useState } from "react";

import logo from "../assets/Image Feb 8, 2026, 09_20_39 AM.png";
import heroAbout from "../assets/heroAbout.png";
import storyImg1 from "../assets/ourstory.png";
import storyImg2 from "../assets/factoty.png";
import storyImg3 from "../assets/pakaging.png";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
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

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-brand">
          <img src={logo} alt="Forest Poultry" />
        </div>

        <div className="nav-links desktop-only">
          <a href="/">Home</a>
          <a href="#ourstory">Our Story</a>
          <a href="#ourmission">Our Mission</a>
          <a href="/offering">Offering</a>
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
            <a href="#ourstory">Our Story</a>
            <a href="#ourmission">Our Mission</a>
            <a href="/offering">Offering</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      )}

      {/* HERO */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(12,36,25,.85), rgba(12,36,25,.95)), url(${heroAbout})`,
        }}
      >
        <div className="about-hero-content">
          <span>About Forest Poultry</span>
          <h1>
            Farming With Intention.
            <br />
            Guided by Nature.
          </h1>
          <p>
            Forest Poultry Farming is built on balance, resilience, and respect
            for life, producing wholesome poultry through responsible,
            purpose-led agriculture.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="section" id="ourstory">
        {/* ROW 1 */}
        <div className="story-grid">
          <div className={`story-text ${openSections.one ? "open" : ""}`}>
            <h2>Our Story</h2>
            <p>
              Forest Poultry Farming began long before the first chicken coop
              was built...
            </p>

            {openSections.one && (
              <div className="story-more">
                <p>
                  From an early age, Puseletso showed a strong interest and
                  passion in agriculture...
                </p>
              </div>
            )}

            <button
              className="read-more"
              onClick={() => toggleSection("one")}
            >
              {openSections.one ? "Read less" : "Read more"}
            </button>
          </div>

          <div className="story-image">
            <img src={storyImg1} alt="Our story" />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="story-grid reverse">
          <div className={`story-text ${openSections.two ? "open" : ""}`}>
            <p>
              Over time, this understanding evolved into a clear vision...
            </p>

            {openSections.two && (
              <div className="story-more">
                <p>
                  For Puseletso, poultry farming was never simply a commercial
                  pursuit...
                </p>
              </div>
            )}

            <button
              className="read-more"
              onClick={() => toggleSection("two")}
            >
              {openSections.two ? "Read less" : "Read more"}
            </button>
          </div>

          <div className="story-image">
            <img src={storyImg2} alt="Factory" />
          </div>
        </div>

        {/* ROW 3 */}
        <div className="story-grid">
          <div className={`story-text ${openSections.three ? "open" : ""}`}>
            <p>
              Forest Poultry Farming was established on the belief that how
              chickens are farmed directly influences product quality...
            </p>

            {openSections.three && (
              <div className="story-more">
                <p>
                  The business began at home with the simple intention...
                </p>
                <ul className="beliefs">
                  <li>Goodness comes from purity.</li>
                  <li>Healthy chickens create healthy homes.</li>
                  <li>Nature knows the way.</li>
                  <li>Nourishment should be part of every meal.</li>
                </ul>
                <p>
                  <strong>
                    Forest Poultry Farming is more than farming. It is
                    purpose-led agriculture.
                  </strong>
                </p>
              </div>
            )}

            <button
              className="read-more"
              onClick={() => toggleSection("three")}
            >
              {openSections.three ? "Read less" : "Read more"}
            </button>
          </div>

          <div className="story-image">
            <img src={storyImg3} alt="Packaging" />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section philosophy">
        <div className="philosophy-inner">
          <h2>The Forest Philosophy</h2>
          <p>
            Nature does not rush. It grows with intention. Forest Poultry
            applies this principle to farming...
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="section mission" id="ourmission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to build a modern, sustainable poultry enterprise
          grounded in nature...
        </p>

        <div className="values-grid">
          <div className="value-card">
            <h3>Nature First</h3>
            <p>We farm with respect for natural systems.</p>
          </div>

          <div className="value-card">
            <h3>Quality Always</h3>
            <p>Freshness and care at every stage.</p>
          </div>

          <div className="value-card">
            <h3>Community Growth</h3>
            <p>Nourishing families through agriculture.</p>
          </div>

          <div className="value-card">
            <h3>Purpose-Driven</h3>
            <p>Built from passion and belief in Africa’s future.</p>
          </div>
        </div>
      </section>
    </>
  );
}