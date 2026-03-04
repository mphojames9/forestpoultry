import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

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
      const velocity = Math.abs(deltaY / deltaTime);

      // Always reset near top
      if (currentScrollY < NAV_TRIGGER_HEIGHT) {
        setNavHidden(false);
        setNavCompressed(false);
        lastScrollY = currentScrollY;
        lastTime = now;
        return;
      }

      // Compression zone
      setNavCompressed(true);

      // Ignore tiny noise
      if (Math.abs(deltaY) < 6) return;

      // Scroll down
      if (deltaY > 0) {
        // Scrolling down
        setNavHidden(true);
        setMenuOpen(false); // 🔥 FORCE mobile menu closed
      } else {
        // Scrolling up
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
        <nav
          className={`nav
    ${navHidden ? "nav-hidden" : ""}
    ${navCompressed ? "nav-compressed" : ""}
  `}
        >
          <div className="nav-brand">
            <img src={logo} alt="Forest Poultry" />
          </div>

          <div className="nav-links desktop-only">
            <Link to="/">Home</Link>
            <a href="#ourstory">Our Story</a>
            <a href="#ourmission">Our Mission</a>
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

        {menuOpen && (
          <div className="mobile-menu open">
            <div className="mobile-menu-content">
            <Link to="/">Home</Link>
            <a href="#ourstory">Our Story</a>
            <a href="#ourmission">Our Mission</a>
            <Link to="/about">About</Link>
            <Link to="/offering">Offering</Link>
            <Link to="/contact">Contact Us</Link>
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
            <span className="slide-left">About Forest Poultry</span>
            <h1 className="slide-right">
              Farming With Intention.
              <br />
              Guided by Nature.
            </h1>
            <p className="slide-left">
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
            <div className={`story-text slide-right ${openSections.one ? "open" : ""}`}>
              <h2>Our Story</h2>
              <p>
                Forest Poultry Farming began long before the first chicken coop was built.
                It started with a young girl who developed a deep appreciation for nature as a system of balance,
                resilience, and growth – where life develops organically, responsibly and with intent.
              </p>

              {openSections.one && (
                <div className="story-more slide-left">
                  <p>
                    From an early age, Puseletso showed a strong interest and passion in agriculture, initially through working with plants.
                    That early exposure shaped a practical understanding of how quality food is produced and why working
                    in harmony with the land matters. Growing up in a household where chicken was a staple, particularly
                    because a family member could not consume other meats, she recognised the central role poultry plays
                    in providing accessible, nutritious meals that bring people together.
                  </p>
                </div>
              )}

              <button
                className="read-more slide-right"
                onClick={() => toggleSection("one")}
              >
                {openSections.one ? "Read less" : "Read more"}
              </button>
            </div>

            <div className="story-image slide-left">
              <img src={storyImg1} alt="Our story" />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="story-grid reverse">
            <div className={`story-text   ${openSections.two ? "open" : ""}`}>
              <p className="slide-right">
                Over time, this understanding evolved into a clear vision: to build a poultry business
                rooted in natural principles, guided by quality and nutrition, grown with intention,
                and committed to sustainable farming practices.
              </p>

              {openSections.two && (
                <div className="story-more">
                  <p className="slide-left">
                    For Puseletso, poultry farming was never simply a commercial pursuit. It became an
                    opportunity to build a business focused on long-term value, prioritising quality production,
                    responsible land use, and consistency in output. Nature served as both a reference point and
                    a benchmark, reinforcing the importance of balance, nourishment, and environmental responsibility.
                  </p>
                </div>
              )}

              <button
                className="read-more slide-right"
                onClick={() => toggleSection("two")}
              >
                {openSections.two ? "Read less" : "Read more"}
              </button>
            </div>

            <div className="story-image slide-left">
              <img src={storyImg2} alt="Factory" />
            </div>
          </div>

          {/* ROW 3 */}
          <div className="story-grid">
            <div className={`story-text ${openSections.three ? "open" : ""}`}>
              <p className="slide-right">
                Forest Poultry Farming was established on the belief that how chickens are farmed directly influences product quality.
                Every chicken reflects this approach: carefully farmed, organically grown, and produced using methods that protect the land,
                respect ecosystems, and support the health of the communities served.
              </p>

              {openSections.three && (
                <div className="story-more">
                  <p className="slide-left">
                    The business began at home, with the simple intention of providing consistent, nutritious poultry for
                    family consumption. While the beginnings were modest, the ambition has always been clear. Africa
                    needs poultry producers that can scale responsibly, delivering high-quality, appetising products
                    while maintaining sustainable practices.
                  </p>

                  <p className="slide-right">
                    Forest Poultry Farming is focused on growing into one of Africa’s leading poultry producers without
                    compromising the principles that define the brand. At its core, the business remains committed to
                    balanced farming, responsible growth, and building a poultry operation designed for long-term
                    resilience, trust, and value.
                  </p>

                  <p className="slide-left">
                    At its heart, Forest Poultry Farming is committed to farming the way nature teaches us –
                    with balance, resilience, respect for life, and care for the planet.
                  </p>
                  <ul className="beliefs slide-right">
                    <li><FaCheckCircle size={16} /> Goodness comes from purity.</li>
                    <li><FaCheckCircle size={16} /> Healthy chickens create healthy homes.</li>
                    <li><FaCheckCircle size={16} /> Nature knows the way.</li>
                    <li><FaCheckCircle size={16} /> Nourishment should be part of every meal.</li>
                  </ul>
                  <p>
                    <strong className="slide-left">
                      Forest Poultry Farming is more than farming. It is
                      purpose-led agriculture.
                    </strong>
                  </p>
                </div>
              )}

              <button
                className="read-more slide-right"
                onClick={() => toggleSection("three")}
              >
                {openSections.three ? "Read less" : "Read more"}
              </button>
            </div>

            <div className="story-image slide-left">
              <img src={storyImg3} alt="Packaging" />
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="section philosophy">
          <div className="philosophy-inner">
            <h2 className="slide-right">The Forest Philosophy</h2>
            <p className="slide-left">
              Nature does not rush. It grows with intention.
              Forest Poultry applies this principle to farming,
              building systems that prioritise quality, animal welfare,
              and environmental responsibility.
              <br /><br />
              Every chicken reflects this approach: carefully farmed,
              organically grown, and produced in harmony with the land.
            </p>
          </div>
        </section>

        {/* MISSION */}
        <section className="section mission slide-left" id="ourmission">
          <h2 className="slide-right">Our Mission</h2>
          <p className="slide-left">
            Our mission is to build a modern, sustainable poultry enterprise
            grounded in nature, driven by quality, and designed for scalable
            growth into regional and international markets,
            without compromising the principles that define us.
          </p>

          <div className="values-grid">
            <div className="value-card slide-right">
              <h3>Nature First</h3>
              <p>We farm with respect for natural systems and responsible land use.</p>
            </div>

            <div className="value-card slide-left">
              <h3>Quality Always</h3>
              <p>Freshness, cleanliness, and care at every stage of production.</p>
            </div>

            <div className="value-card slide-right">
              <h3>Community Growth</h3>
              <p>Nourishing families and creating opportunity through agriculture.</p>
            </div>

            <div className="value-card slide-left">
              <h3>Purpose-Driven</h3>
              <p>Built from passion, vision, and belief in Africa’s future.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}