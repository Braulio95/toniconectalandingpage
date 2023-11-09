import React, { useState } from "react";
import { Linkedin } from "../Icons/LinkedinIcon/Linkedin";
import { colorPalette } from "../../styles/partials/colors";
import { Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { InstagramIcon } from "../Icons/InstagramIcon/InstagramIcon";
import { WhatsAppIcon } from "../Icons/WhatsAppIcon/WhatsAppIcon";
import { EmailIcon } from "../Icons/EmailIcon/EmailIcon";

export const Footer = () => {
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

  const renderTooltip = (message: string) => (
    <Tooltip id="button-tooltip">{message}</Tooltip>
  );

  return (
    <footer
      id="contacto"
      className="bg-light text-center text-lg-start text-muted"
    >
      <div className="mt-auto"></div>
      <div
        className="text-center p-3"
        style={{ background: "rgba(0, 0, 0, 0.05)", position: "relative" }}
      >
        <Container>
          <Row>
            <Col>
              <span
                style={{
                  fontSize: "2rem",
                  color: colorPalette.strongestAzure,
                  fontWeight: "lighter",
                  marginInline: "auto",
                }}
              >
                Contacto
              </span>
            </Col>
          </Row>
          <Row style={{ height: "40%" }}>
            <Col sm={3} style={{ padding: "16px" }}>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 200, hide: 200 }}
                overlay={renderTooltip("Ve nuestro perfil de LinkedIn")}
              >
                <a
                  href="https://www.linkedin.com/company/toniconecta/about/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin
                    onMouseEnter={handleLinkedInMouseEnter}
                    onMouseLeave={handleLinkedInMouseLeave}
                    height="25px"
                    width="25px"
                    color={colorPalette.strongestAzure}
                    style={{
                      marginInline: "4px",
                      cursor: "pointer",
                      transform: LinkedInHovered ? "scale(1.25)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </a>
              </OverlayTrigger>
            </Col>
            <Col sm={3} style={{ padding: "16px" }}>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 200, hide: 200 }}
                overlay={renderTooltip("Visita nuestro Instagram")}
              >
                <a
                  href="https://www.instagram.com/toniconecta/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon
                    onMouseEnter={handleInstagramMouseEnter}
                    onMouseLeave={handleInstagramMouseLeave}
                    height="25px"
                    width="25px"
                    color={colorPalette.strongestAzure}
                    style={{
                      marginInline: "4px",
                      cursor: "pointer",
                      transform: InstagramHovered ? "scale(1.25)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </a>
              </OverlayTrigger>
            </Col>
            <Col sm={3} style={{ padding: "16px" }}>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 200, hide: 200 }}
                overlay={renderTooltip("Envianos un Whatsapp")}
              >
                <a
                  href="https://api.whatsapp.com/send?phone=5550301869"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon
                    onMouseEnter={handleWhatsMouseEnter}
                    onMouseLeave={handleWhatsMouseLeave}
                    height="25px"
                    width="25px"
                    color={colorPalette.strongestAzure}
                    style={{
                      marginInline: "4px",
                      cursor: "pointer",
                      transform: WhatsHovered ? "scale(1.25)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </a>
              </OverlayTrigger>
            </Col>
            <Col sm={3} style={{ padding: "16px" }}>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 200, hide: 200 }}
                overlay={renderTooltip("Envianos un Email")}
              >
                <a
                  href="mailto:hola@toniconecta.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <EmailIcon
                    onMouseEnter={handleEmailMouseEnter}
                    onMouseLeave={handleEmailMouseLeave}
                    height="25px"
                    width="25px"
                    color={colorPalette.strongestAzure}
                    style={{
                      marginInline: "4px",
                      cursor: "pointer",
                      transform: EmailHovered ? "scale(1.25)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </a>
              </OverlayTrigger>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};
