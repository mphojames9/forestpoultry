import { useEffect } from "react";

export const useScrollLock = (isLocked) => {
  useEffect(() => {
    // Save the original overflow style to restore it later
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isLocked) {
      // Lock the scroll
      document.body.style.overflow = "hidden";
      // Optional: Prevent iOS bounce effect
      document.body.style.touchAction = "none"; 
    } else {
      // Unlock the scroll
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }

    // Cleanup function to ensure scroll is restored on unmount
    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.touchAction = "auto";
    };
  }, [isLocked]);
};