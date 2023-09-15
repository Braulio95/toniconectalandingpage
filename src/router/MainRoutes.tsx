import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../modules/Home/Home";
//import { Blog } from "../modules/Blog/Blog";
import { Portfolio } from "../modules/Portfolio/Portfolio";
//import { Contact } from "../modules/Contact/Contact";
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
      label: "Contact",
      routePath: CONTACT,
    },
    {
      id: 5,
      label: "Blog",
      routePath: BLOG,
    },
  ];

  return (
    <BrowserRouter>
      {/* Header and navigation */}
      {/* Main Content */}
      <div
        className="bg-sunset"
        style={{
          backgroundColor: "rgba(203, 213, 192, 0.2)",
          fontFamily: 'sans-serif, "Times New Roman", Times, serif',
        }}
      >
        <NavBarComp pageName="Braulio Blog" tabItems={navTabs} />
        {/*<Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={BLOG} element={<Blog />} />
      </Routes>*/}
        <Home />
        <Portfolio />
        <Curriculum />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
