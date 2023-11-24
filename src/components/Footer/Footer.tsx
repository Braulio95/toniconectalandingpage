import React, { useState } from "react";
import { Linkedin } from "../Icons/LinkedinIcon/Linkedin";
import { colorPalette } from "../../styles/partials/colors";
import { InstagramIcon } from "../Icons/InstagramIcon/InstagramIcon";
import { WhatsAppIcon } from "../Icons/WhatsAppIcon/WhatsAppIcon";
import { EmailIcon } from "../Icons/EmailIcon/EmailIcon";
import "./Footer.css";

interface FooterProps {
  isMobile: boolean;
}

export const Footer = ({ isMobile }: FooterProps) => {
  const [LinkedInHovered, setLinkedInHovered] = useState(false);
  const [InstagramHovered, setInstagramHovered] = useState(false);
  const [WhatsHovered, setWhatsHovered] = useState(false);
  const [EmailHovered, setEmailHovered] = useState(false);

  const handleLinkedInMouseEnter = () => {
    setLinkedInHovered(true);
  };

  const handleLinkedInMouseLeave = () => {
    setLinkedInHovered(false);
  };

  const handleInstagramMouseEnter = () => {
    setInstagramHovered(true);
  };

  const handleInstagramMouseLeave = () => {
    setInstagramHovered(false);
  };

  const handleWhatsMouseLeave = () => {
    setWhatsHovered(false);
  };

  const handleWhatsMouseEnter = () => {
    setWhatsHovered(true);
  };

  const handleEmailMouseLeave = () => {
    setEmailHovered(false);
  };

  const handleEmailMouseEnter = () => {
    setEmailHovered(true);
  };

  return (
    <footer id="contacto" className="footer">
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="row">
            <div className="col">
              <span
                className="footer-title"
                style={{
                  color: colorPalette.strongestAzure,
                  fontWeight: "lighter",
                }}
              >
                Contacto
              </span>
            </div>
          </div>
          <div
            style={{
              width: isMobile ? "100%" : "60%",
              height: "40%",
              margin: "auto",
              paddingBlock: "2rem",
            }}
          >
            <div className="row">
              <div className="col" style={{ padding: "1rem" }}>
                <a
                  href="https://www.linkedin.com/company/toniconecta/about/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin
                    onMouseEnter={handleLinkedInMouseEnter}
                    onMouseLeave={handleLinkedInMouseLeave}
                    height="35px"
                    width="35px"
                    color={colorPalette.strongestAzure}
                    style={{
                      marginInline: "4px",
                      cursor: "pointer",
                      transform: LinkedInHovered ? "scale(1.25)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </a>
              </div>
              <div className="col" style={{ padding: "1rem" }}>
                <a
                  href="https://www.instagram.com/toniconecta/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon
                    onMouseEnter={handleInstagramMouseEnter}
                    onMouseLeave={handleInstagramMouseLeave}
                    height="35px"
                    width="35px"
                    color={colorPalette.strongestAzure}
                    style={{
                      marginInline: "4px",
                      cursor: "pointer",
                      transform: InstagramHovered ? "scale(1.25)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </a>
              </div>
              <div className="col" style={{ padding: "1rem" }}>
                <a
                  href="https://api.whatsapp.com/send?phone=5550301869"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon
                    onMouseEnter={handleWhatsMouseEnter}
                    onMouseLeave={handleWhatsMouseLeave}
                    height="35px"
                    width="35px"
                    color={colorPalette.strongestAzure}
                    style={{
                      marginInline: "4px",
                      cursor: "pointer",
                      transform: WhatsHovered ? "scale(1.25)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </a>
              </div>
              <div className="col" style={{ padding: "1rem" }}>
                <a
                  href="mailto:hola@toniconecta.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <EmailIcon
                    onMouseEnter={handleEmailMouseEnter}
                    onMouseLeave={handleEmailMouseLeave}
                    height="35px"
                    width="35px"
                    color={colorPalette.strongestAzure}
                    style={{
                      marginInline: "4px",
                      cursor: "pointer",
                      transform: EmailHovered ? "scale(1.25)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
