import React from "react";
import { NavBarProps } from "../../../types/interfaces/NavBarProps";
import { HashLink } from "react-router-hash-link";
import { colorPalette } from "../../../styles/partials/colors";

export const WideScreenMenu = ({ tabItems }: NavBarProps) => {
  return (
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
  );
};
