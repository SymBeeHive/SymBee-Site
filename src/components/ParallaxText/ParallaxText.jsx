import React, { useEffect, useState } from "react";
import "./ParallaxText.css";

const ParallaxText = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-container">
      <h1
        className="scroll-text"
        style={{
          transform: `translateX(${scrollPosition * 0.9}px)`,
          opacity: 1 - Math.min(scrollPosition / 8000, 5),
        }}
      >
        CONEXÕES!
      </h1>
    </div>
  );
};

export default ParallaxText;
