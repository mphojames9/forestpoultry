import { useEffect, useState, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import logo from "../assets/Image Feb 8, 2026, 09_20_39 AM.png";
import heroImage from "../assets/packing.png";

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
        <div className="mobile-menu open">
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