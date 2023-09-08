import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../modules/Home/Home";
import { Blog } from "../modules/Blog/Blog";
import { Portfolio } from "../modules/Portfolio/Portfolio";
import { Contact } from "../modules/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import NavBarComp from "../components/NavBar/NavBarComp";

export const MainRoutes = () => {
  const navTabs = [
    {
      id: 1,
      label: "Home",
      routePath: "HOME",
    },
    {
      id: 2,
      label: "Blog",
      routePath: "BLOG",
    },
    {
      id: 3,
      label: "Portfolio",
      routePath: "PORTFOLIO",
    },
    {
      id: 4,
      label: "Contact",
      routePath: "CONTACT",
    },
  ];
  return (
    <BrowserRouter>
      {/* Header and navigation */}
      {/* Main Content */}
      <NavBarComp pageName="Braulio Blog" tabItems={navTabs} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
