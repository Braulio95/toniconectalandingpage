import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../modules/Home/Home";
import { Footer } from "../components/Footer/Footer";
import NavBarComp from "../components/NavBar/NavBarComp";
import { MAIN_ROUTES } from "../constants/routes";
import { Testimonies } from "../modules/Testimonies/Testimonies";
import { WhatsAppScrollButton } from "../components/WhatsAppScrollButton/WhatsAppScrollButton";
import { AboutUs } from "../modules/AboutUs/AboutUs";
import { HowItWorks } from "../modules/HowItWorks/HowItWorks";

interface MainRoutesProps {
  isMobile: boolean;
}

export const MainRoutes = ({ isMobile }: MainRoutesProps) => {
  const { TESTIMONIES, CONTACT, ABOUTUS } = MAIN_ROUTES;
  const navTabs = [
    {
      id: 2,
      label: "Sobre nosotros",
      routePath: ABOUTUS,
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
      {isMobile === false && <WhatsAppScrollButton />}
      <NavBarComp tabItems={navTabs} isMobile={isMobile} />
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
      <HowItWorks isMobile={isMobile} />
      <Testimonies isMobile={isMobile} />
      <AboutUs isMobile={isMobile} />
      {/* Footer and contact info */}
      <Footer isMobile={isMobile} />
    </BrowserRouter>
  );
};
