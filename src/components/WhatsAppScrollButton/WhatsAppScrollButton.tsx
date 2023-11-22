import React, { useEffect, useState } from "react";
import whatsAppIcon from "../../assets/whatsIcon/whatslogo.png";

export const WhatsAppScrollButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldFade, setShouldFade] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const footerElement = document.getElementById("contacto"); // ID del footer

      if (footerElement) {
        const footerPosition = footerElement.getBoundingClientRect().top;
        setShouldFade(windowHeight >= footerPosition);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        opacity: shouldFade ? 0 : 1,
        transition: "opacity 0.3s ease",
      }}
    >
      <a
        href="https://api.whatsapp.com/send?phone=5550301869"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          backgroundColor: "white",
          padding: "2px",
          borderRadius: "20%",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          transform: isHovered ? "scale(1.25)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={whatsAppIcon}
          alt="WhatsApp"
          style={{
            margin: "0 auto",
            width: "45px",
          }}
        />
      </a>
    </div>
  );
};
