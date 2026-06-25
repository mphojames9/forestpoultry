import { useEffect, useState, useRef } from "react";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa"; // Added FaWhatsapp
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show loading toast
    toast.loading("Sending message...", { id: "contact-send" });

    emailjs
      .sendForm(
        "service_fplafvo",
        "template_rwzn3jr",
        formRef.current,
        "rBAVJPpAlYdFA3_1D"
      )
      .then(() => {
        // Success toast
        toast.success("Message sent successfully", {
          id: "contact-send",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        // Error toast
        toast.error("Failed to send message. Please try again.", {
          id: "contact-send",
        });
      });
  };

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
      {/* NAV */}
      <div className="main" ref={divRef}>
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
            <Link to="/about">About</Link>
            <Link to="/offering">Offering</Link>
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
              <Link to="/about">About</Link>
              <Link to="/offering">Offering</Link>
            </div>
          </div>
        )}

        {/* HERO */}
        <section
          className="contact-hero"
          style={{
            backgroundImage: `linear-gradient(rgba(12,36,25,.88), rgba(12,36,25,.95)), url(${heroImage})`,
          }}
        >
          <div className="contact-hero-content">
            <span className="slide-left">Contact Us</span>
            <h1 className="slide-right">Let’s Grow Together</h1>
            <p className="slide-left">
              Whether you are a customer, supplier, or partner, we’d love to hear
              from you. Reach out and let’s build something rooted in trust and
              purpose.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section">
          {/* INFO */}
          <div className="contact-info">
            <h2 className="slide-right">Get in Touch</h2>
            <p className="slide-left">
              Forest Poultry is built on transparency, care, and long-term
              relationships. If you have questions about our products,
              partnerships, or supply, we’re here to connect.
            </p>

            <div className="contact-points slide-left">
              <div className="contact-point"><FaCheckCircle size={16} /> Wholesale & Supply Enquiries</div>
              <div className="contact-point"><FaCheckCircle size={16} /> Retail & Distribution</div>
              <div className="contact-point"><FaCheckCircle size={16} /> Partnerships & Growth</div>
            </div>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/27684518292"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn slide-left"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#25D366",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                marginTop: "24px",
                fontSize: "16px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
              }}
            >
              <FaWhatsapp size={22} />
              Chat on WhatsApp
            </a>
          </div>

          {/* FORM */}
          <form
            ref={formRef}
            className="contact-form slide-right"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Tell us more about your enquiry..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </section>
      </div>
    </>
  );
}
