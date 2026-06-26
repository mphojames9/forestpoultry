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
        className="super-premium-btt"
        aria-label="Scroll to top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <div className="icon-wrapper">
          <svg viewBox="0 0 24 24" className="sleek-arrow-svg">
            <path 
              d="M12 21V3M5.5 9.5L12 3l6.5 6.5" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.25" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <style>{`
        .super-premium-btt {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          padding: 0;
          
          /* Advanced Glassmorphism */
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
          backdrop-filter: blur(24px) saturate(120%);
          -webkit-backdrop-filter: blur(24px) saturate(120%);
          
          /* Metallic / Champagne Rim */
          border: 1px solid rgba(214, 175, 55, 0.15);
          box-shadow: 
            0 4px 24px -1px rgba(0, 0, 0, 0.15),
            inset 0 1px 1px rgba(255, 255, 255, 0.1);
            
          color: #fbfaf6;
          cursor: pointer;
          z-index: 998;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          overflow: hidden;
        }

        /* Ambient Glow Ring */
        .super-premium-btt::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          box-shadow: inset 0 0 20px rgba(214, 175, 55, 0);
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sleek-arrow-svg {
          width: 22px;
          height: 22px;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* High-End Hover Dynamics */
        .super-premium-btt:hover {
          transform: translateY(-8px) scale(1.02);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%);
          border-color: rgba(214, 175, 55, 0.4);
          box-shadow: 
            0 12px 32px -4px rgba(214, 175, 55, 0.15),
            0 4px 12px -2px rgba(0, 0, 0, 0.2),
            inset 0 1px 1px rgba(255, 255, 255, 0.2);
        }

        .super-premium-btt:hover::after {
          box-shadow: inset 0 0 20px rgba(214, 175, 55, 0.15);
        }

        .super-premium-btt:hover .icon-wrapper {
          transform: translateY(-2px);
        }

        .super-premium-btt:hover .sleek-arrow-svg {
          color: #d4af37;
        }

        /* Click/Tap Physics */
        .super-premium-btt:active {
          transform: translateY(-2px) scale(0.96);
          transition: all 0.1s ease-out;
        }

        /* Seamless Responsive Layout */
        @media (max-width: 768px) {
          .super-premium-btt {
            bottom: 24px;
            right: 24px;
            width: 48px;
            height: 48px;
            backdrop-filter: blur(16px) saturate(120%);
            -webkit-backdrop-filter: blur(16px) saturate(120%);
          }
          
          .sleek-arrow-svg {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </>
  );
}
