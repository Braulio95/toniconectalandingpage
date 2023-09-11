import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start text-muted">
      <div className="mt-auto"></div>
      <div
        className="text-center p-3"
        style={{ background: "rgba(0, 0, 0, 0.05)" }}
      >
        © {new Date().getFullYear()} Made by Braulio Estrada - FrontEnd
        Developer
      </div>
    </footer>
  );
};
