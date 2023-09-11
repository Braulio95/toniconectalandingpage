import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../modules/Home/Home";
import { Blog } from "../modules/Blog/Blog";
import { Portfolio } from "../modules/Portfolio/Portfolio";
import { Contact } from "../modules/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import NavBarComp from "../components/NavBar/NavBarComp";
import { MAIN_ROUTES } from "../constants/routes";
import { Curriculum } from "../modules/curriculum/Curriculum";

export const MainRoutes = () => {
  const { HOME, BLOG, PORTFOLIO, CONTACT, CURRICULUM } = MAIN_ROUTES;
  const navTabs = [
    {
      id: 1,
      label: "Home",
      routePath: HOME,
    },
    {
      id: 2,
      label: "Blog",
      routePath: BLOG,
    },
    {
      id: 3,
      label: "Portfolio",
      routePath: PORTFOLIO,
    },

    {
      id: 4,
      label: "Curriculum",
      routePath: CURRICULUM,
    },
    {
      id: 5,
      label: "Contact",
      routePath: CONTACT,
    },
  ];

  return (
    <BrowserRouter>
      {/* Header and navigation */}
      {/* Main Content */}
      <NavBarComp pageName="Braulio Blog" tabItems={navTabs} />
      <div className="layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={HOME} element={<Home />} />
          <Route path={BLOG} element={<Blog />} />
          <Route path={PORTFOLIO} element={<Portfolio />} />
          <Route path={CURRICULUM} element={<Curriculum />} />
          <Route path={CONTACT} element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
