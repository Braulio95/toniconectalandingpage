import React, { Fragment, useState } from "react";
import { NavBarProps } from "../../types/interfaces/NavBarProps";
import { MAIN_ROUTES } from "../../constants/routes";
import Logo from "../../assets/navIcon/logo.png";
import { WhatsAppIcon } from "../Icons/WhatsAppIcon/WhatsAppIcon";
import "./NavBarComp.css";
import { WideScreenMenu } from "./NavBarComponents/WideScreenMenu";
import { HashLink } from "react-router-hash-link";

function NavBarComp({ tabItems, isMobile }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-logo-container" href={`#${MAIN_ROUTES.HOME}`}>
          <img className="navbar-logo" src={Logo} alt="toniconecta-logo" />
        </a>
        {isMobile ? (
          <Fragment>
            <a
              href="https://api.whatsapp.com/send?phone=5550301869"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon width="40px" height="40px" color="#5c81eb" />
            </a>

            <button
              className={`menu-button ${isOpen ? "open" : ""}`}
              onClick={handleToggle}
            >
              <div className="bar"></div>
              <div className="bar middle"></div>
              <div className="bar down"></div>
            </button>
            <div className={`side-menu ${isOpen ? "open" : ""}`}>
              {tabItems && tabItems.length && (
                <ul>
                  {tabItems.map(({ id, label, routePath }) => (
                    <li key={id}>
                      <HashLink className="mobile-item" to={`#${routePath}`}>
                        {label}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Fragment>
        ) : (
          <WideScreenMenu tabItems={tabItems} />
        )}
      </div>
    </nav>
  );
}

export default NavBarComp;
