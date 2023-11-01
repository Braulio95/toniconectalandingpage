import React from "react";
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
  const navTabs = [
    {
      id: 1,
      label: "Home",
      routePath: HOME,
    },
  ];

  return (
    <BrowserRouter>
      {/* Header and navigation */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>ToniConecta</title>
        <link rel="canonical" href={ToniIcon}></link>
        <meta
          name="description"
          content="ToniConecta, digitalizacion, talleres, celulares"
        ></meta>
      </Helmet>
      <NavBarComp pageName="Braulio Blog" tabItems={navTabs} />
      {/* Main Content */}
      <Home />
      {/* Footer and contact info */}
      <Footer />
    </BrowserRouter>
  );
};
