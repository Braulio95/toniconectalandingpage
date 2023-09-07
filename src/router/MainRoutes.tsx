import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../modules/Home/Home";
import { Blog } from "../modules/Blog/Blog";
import { Portfolio } from "../modules/Portfolio/Portfolio";
import { Contact } from "../modules/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import NavBarComp from "../components/NavBar/NavBarComp";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      {/* Header and navigation */}
      {/* Main Content */}
      <NavBarComp />
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
