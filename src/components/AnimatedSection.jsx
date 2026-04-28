import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

/**
 * Wrapper component that animates children when they scroll into view.
 * @param {string} animation - CSS class for the animation type
 * @param {number} delay - delay in ms before animation starts
 * @param {React.ReactNode} children
 * @param {string} className - additional CSS classes
 */
function AnimatedSection({ animation = "fade-up", delay = 0, children, className = "", ...props }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`animated-element ${isVisible ? `animate-${animation}` : "animate-hidden"} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;
