import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      <button
        className="premium-back-to-top"
        aria-label="Scroll to corporate apex"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        {/* Minimalist Architectural Arrow */}
        <span className="scroll-ring-line"></span>
        <svg viewBox="0 0 24 24" className="scroll-arrow-svg">
          <path d="M12 4l-6 6h4v10h4v-10h4z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 4v16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M6 10l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <style>{`
        .premium-back-to-top {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(13, 38, 24, 0.45); /* Luxury Moss Glass */
          border: 1px solid rgba(214, 175, 55, 0.25); /* Subtle Champagne Gold */
          color: #fbfaf6;
          cursor: pointer;
          z-index: 998;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(5, 20, 11, 0.15);
        }

        .scroll-arrow-svg {
          width: 18px;
          height: 18px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Ambient Outer Pulse Ring */
        .premium-back-to-top::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid rgba(214, 175, 55, 0);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Premium Kinetic Interactions */
        .premium-back-to-top:hover {
          transform: translateY(-6px);
          border-color: rgba(214, 175, 55, 0.8);
          background: rgba(13, 38, 24, 0.75);
          box-shadow: 0 20px 40px rgba(5, 20, 11, 0.3);
        }

        .premium-back-to-top:hover .scroll-arrow-svg {
          transform: translateY(-4px);
          color: #d4af37;
        }

        .premium-back-to-top:hover::before {
          inset: 0;
          border-color: rgba(214, 175, 55, 0.3);
        }

        @media (max-width: 768px) {
          .premium-back-to-top {
            bottom: 25px;
            right: 25px;
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </>
  );
}
