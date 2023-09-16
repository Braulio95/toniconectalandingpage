import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../modules/Home/Home";
//import { Blog } from "../modules/Blog/Blog";
import { Portfolio } from "../modules/Portfolio/Portfolio";
import { Footer } from "../components/Footer/Footer";
import NavBarComp from "../components/NavBar/NavBarComp";
import { MAIN_ROUTES } from "../constants/routes";
import { Curriculum } from "../modules/curriculum/Curriculum";

export const MainRoutes = () => {
  const { HOME, BLOG, PORTFOLIO, CURRICULUM } = MAIN_ROUTES;
  const navTabs = [
    {
      id: 1,
      label: "Home",
      routePath: HOME,
    },
    {
      id: 2,
      label: "Portfolio",
      routePath: PORTFOLIO,
    },

    {
      id: 3,
      label: "Curriculum",
      routePath: CURRICULUM,
    },
    {
      id: 4,
      label: "Blog",
      routePath: BLOG,
    },
  ];

  return (
    <BrowserRouter>
      {/* Header and navigation */}
      {/* Main Content */}
      <NavBarComp pageName="Braulio Blog" tabItems={navTabs} />
      <Home />
      <Portfolio />
      <Curriculum />
      <Footer />
    </BrowserRouter>
  );
};
