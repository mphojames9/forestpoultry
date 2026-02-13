import { useState } from "react";

import logo from "../assets/Image Feb 8, 2026, 09_20_39 AM.png";
import heroImage from "../assets/packing.png";

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
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
          <a href="/about">About</a>
          <a href="/offering">Offering</a>
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
            <a href="/offering">Offering</a>
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
          <span>Contact Us</span>
          <h1>Let’s Grow Together</h1>
          <p>
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
          <h2>Get in Touch</h2>
          <p>
            Forest Poultry is built on transparency, care, and long-term
            relationships. If you have questions about our products,
            partnerships, or supply, we’re here to connect.
          </p>

          <div className="contact-points">
            <div className="contact-point">• Wholesale & Supply Enquiries</div>
            <div className="contact-point">• Retail & Distribution</div>
            <div className="contact-point">• Partnerships & Growth</div>
          </div>
        </div>

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
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