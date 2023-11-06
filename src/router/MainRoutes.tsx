import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../modules/Home/Home";
//import { Blog } from "../modules/Blog/Blog";
import { Footer } from "../components/Footer/Footer";
import NavBarComp from "../components/NavBar/NavBarComp";
import { MAIN_ROUTES } from "../constants/routes";
import { Helmet } from "react-helmet";
import ToniIcon from "../assets/navIcon/logo.png";

export const MainRoutes = () => {
  const { HOME } = MAIN_ROUTES;
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= window.innerHeight
  );

  const handleResize = () => {
    setIsMobile(window.innerWidth < window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navTabs = [
    {
      id: 1,
      label: "Inicio",
      routePath: HOME,
    },
  ];

  return (
    <BrowserRouter>
      {/* Header and navigation */}
      <Helmet>
        <link rel="canonical" href={ToniIcon}></link>
      </Helmet>
      <NavBarComp pageName="ToniConecta" tabItems={navTabs} />
      {/* Main Content */}
      <h1 style={{ display: "none" }}>
        Toni Conecta - Posicionar en Google numero 1 para talleres de reparacion
        - SEO para talleres de reparacion
      </h1>
      <h2 style={{ display: "none" }}>
        Toni Conecta - Aparecer numero 1 en Google para talleres de servicio
        tecnico
      </h2>

      <Home />
      {/* Footer and contact info */}
      <Footer />
    </BrowserRouter>
  );
};
