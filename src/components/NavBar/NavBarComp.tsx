import React, { Fragment } from "react";
import { NavBarProps } from "../../types/interfaces/NavBarProps";
import { MAIN_ROUTES } from "../../constants/routes";
import { colorPalette } from "../../styles/partials/colors";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/navIcon/logo.png";
import { WhatsAppIcon } from "../Icons/WhatsAppIcon/WhatsAppIcon";

function NavBarComp({ tabItems, isMobile }: NavBarProps) {
  return (
    <nav
      className="navbar bg-body-tertiary"
      style={{
        boxShadow: `0px 6px 12px rgba(20, 63, 156, 0.2)`,
        position: "sticky",
        top: 0,
      }}
    >
      <div className="container-fluid">
        <a href={`#${MAIN_ROUTES.HOME}`}>
          <img src={Logo} alt="Logo" style={{ width: "180px" }} />
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
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
