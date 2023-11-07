import React, { useEffect, useState } from "react";
import { MainRoutes } from "./router/MainRoutes";
import { ParticleBg } from "./components/ParticleBg/ParticleBg";

function App() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= window.innerHeight
  );

  // Function to handle window resize events and determine if the screen has a mobile-like (vertical) or desktop-like (horizontal) aspect ratio.
  const handleResize = () => {
    setIsMobile(window.innerWidth <= window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="App"
      style={{ position: "relative", fontFamily: "Roboto Mono" }}
    >
      <ParticleBg />
      <h1 style={{ display: "none" }}>
        Toni Conecta - Posicionar en Google numero 1 para talleres de reparacion
        - SEO para talleres de reparacion
      </h1>
      <h2 style={{ display: "none" }}>
        Toni Conecta - Aparecer numero 1 en Google para talleres de servicio
        tecnico
      </h2>
      <MainRoutes isMobile={isMobile} />
    </div>
  );
}

export default App;
