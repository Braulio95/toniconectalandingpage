import React, { Fragment } from "react";
import { NavBarProps } from "../../types/interfaces/NavBarProps";
import { MAIN_ROUTES } from "../../constants/routes";
import { colorPalette } from "../../styles/partials/colors";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/navIcon/logo.png";
import { WhatsAppIcon } from "../Icons/WhatsAppIcon/WhatsAppIcon";
import "./NavBarComp.css";

function NavBarComp({ tabItems, isMobile }: NavBarProps) {
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
              <WhatsAppIcon width="30px" height="30px" color="#5c81eb" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </Fragment>
        ) : (
          <div className="tabs-container" id="navbarNav">
            {tabItems && tabItems.length && (
              <ul className="navbar-nav">
                {tabItems.map(({ id, label, routePath }) => (
                  <li className="nav-item" key={id}>
                    <HashLink
                      className="nav-link"
                      to={`#${routePath}`}
                      style={{
                        color: colorPalette.midAzure,
                      }}
                    >
                      {label}
                    </HashLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBarComp;
