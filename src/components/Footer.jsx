import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        
        {/* BRAND */}
        <div className="footer-brand animate">
          <h2>Forest</h2>
          <p>
            Grown with care, guided by nature, and built for Africa.
            Forest Poultry is a purpose-led producer rooted in integrity,
            sustainability, and long-term nourishment.
          </p>
        </div>

        {/* INTERNAL LINKS */}
        <div className="footer-links animate">
          <h4>Explore</h4>
          <Link to="/about">About Us</Link>
          <Link to="/#values">Our Values</Link>
          <Link to="/#founder">Founder</Link>
          <Link to="/offering">Gallery</Link>
        </div>

        {/* SOCIAL */}
        <div className="footer-social animate">
          <h4>Connect</h4>

          <div className="social-icons">
            
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.25 2.3.42.6.23 1 .5 1.4.9.4.4.7.8.9 1.4.17.4.36 1.1.42 2.3.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.9-.42 2.3-.23.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1.1.36-2.3.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.9-.25-2.3-.42-.6-.23-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.36-1.1-.42-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.9.42-2.3.23-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1.1-.36 2.3-.42C8.4 2.2 8.8 2.2 12 2.2z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-2.9h2V9.7c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.2l-.35 2.9h-1.85v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v15h-4V8zm7.5 0h3.8v2.1h.05c.53-1 1.83-2.1 3.77-2.1 4 0 4.7 2.6 4.7 6v9h-4v-8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1v8.2h-4V8z" />
              </svg>
            </a>

          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom animate">
        <span>
          © {new Date().getFullYear()} Forest Poultry - {" "}
          <span className="slogan"><i>Chicken. Pure Living</i></span>
        </span>
        <span>From the Forest to Your Table</span>
      </div>
    </footer>
  );
}