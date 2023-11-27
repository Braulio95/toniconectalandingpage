import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { NavBarProps } from "../../types/interfaces/NavBarProps";
import { MAIN_ROUTES } from "../../constants/routes";
import Logo from "../../assets/navIcon/logo.png";
import { WhatsAppIcon } from "../Icons/WhatsAppIcon/WhatsAppIcon";
import "./NavBarComp.css";
import { WideScreenMenu } from "./NavBarComponents/WideScreenMenu";
import { HashLink } from "react-router-hash-link";

function NavBarComp({ tabItems, isMobile }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const sideMenuRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const closeSideMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        sideMenuRef.current &&
        !(sideMenuRef.current as Element).contains(event.target as Node)
      ) {
        closeSideMenu();
      }
    },
    [sideMenuRef, closeSideMenu]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <a href={`#${MAIN_ROUTES.HOME}`}>
            <img className="navbar-logo" src={Logo} alt="toniconecta-logo" />
          </a>
        </div>
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
            <div
              className={`side-menu ${isOpen ? "open" : ""}`}
              ref={sideMenuRef}
            >
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
