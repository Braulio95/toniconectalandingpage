import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../modules/Home/Home";
import { Footer } from "../components/Footer/Footer";
import NavBarComp from "../components/NavBar/NavBarComp";
import { MAIN_ROUTES } from "../constants/routes";
import { Testimonies } from "../modules/Testimonies/Testimonies";

interface MainRoutesProps {
  isMobile: boolean;
}

export const MainRoutes = ({ isMobile }: MainRoutesProps) => {
  const { HOME, ABOUTUS, TESTIMONIES, CONTACT } = MAIN_ROUTES;
  const navTabs = [
    {
      id: 1,
      label: "Inicio",
      routePath: HOME,
    },
    {
      id: 3,
      label: "Testimonios",
      routePath: TESTIMONIES,
    },
    {
      id: 4,
      label: "Contacto",
      routePath: CONTACT,
    },
  ];

  return (
    <BrowserRouter>
      {/* Header and navigation */}
      <NavBarComp pageName="Braulio Blog" tabItems={navTabs} />
      {/* Main Content */}
      {/* Tags for SEO */}
      <h1 style={{ display: "none" }}>
        Toni Conecta - Posicionar en Google numero 1 para talleres de reparacion
        - SEO para talleres de reparacion
      </h1>
      <h2 style={{ display: "none" }}>
        Toni Conecta - Aparecer numero 1 en Google para talleres de servicio
        tecnico
      </h2>
      <Home isMobile={isMobile} />
      {/* Footer and contact info */}
      <Testimonies isMobile={isMobile} />
      <Footer />
    </BrowserRouter>
  );
};
