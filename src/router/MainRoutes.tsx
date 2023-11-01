import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../modules/Home/Home";
//import { Blog } from "../modules/Blog/Blog";
import { Footer } from "../components/Footer/Footer";
import NavBarComp from "../components/NavBar/NavBarComp";
import { MAIN_ROUTES } from "../constants/routes";

export const MainRoutes = () => {
  const { HOME } = MAIN_ROUTES;
  const navTabs = [
    {
      id: 1,
      label: "Home",
      routePath: HOME,
    },
    {
      id: 2,
      label: "Sobre Nosotros",
      routePath: HOME,
    },
  ];

  return (
    <BrowserRouter>
      {/* Header and navigation */}
      <NavBarComp pageName="Braulio Blog" tabItems={navTabs} />
      {/* Main Content */}
      <Home />
      {/* Footer and contact info */}
      <Footer />
    </BrowserRouter>
  );
};
