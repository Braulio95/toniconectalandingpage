import React, { useState } from "react";
import { Linkedin } from "../Icons/LinkedinIcon/Linkedin";
import { colorPalette } from "../../styles/partials/colors";
import { GithubIcon } from "../Icons/GithubIcon/GithubIcon";
import { Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { SubtitleComp } from "../SubtitleComp/SubtitleComp";

export const Footer = () => {
  const [LinkedInHovered, setLinkedInHovered] = useState(false);
  const [GithubHovered, setGithubHovered] = useState(false);

  const handleLinkedInMouseEnter = () => {
    setLinkedInHovered(true);
  };

  const handleLinkedInMouseLeave = () => {
    setLinkedInHovered(false);
  };

  const GithubMouseEnter = () => {
    setGithubHovered(true);
  };

  const GithubMouseLeave = () => {
    setGithubHovered(false);
  };

  const renderTooltip = (message: string) => (
    <Tooltip id="button-tooltip">{message}</Tooltip>
  );

  return (
    <footer className="bg-light text-center text-lg-start text-muted">
      <div className="mt-auto"></div>
      <div
        className="text-center p-3"
        style={{ background: "rgba(0, 0, 0, 0.05)", position: "relative" }}
      >
        <Container>
          <Row>
            <Col>
              <SubtitleComp>Contact</SubtitleComp>
            </Col>
          </Row>
          <Row style={{ height: "40%" }}>
            <Col xxl={12} sm={12} style={{ padding: "16px" }}>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 200, hide: 200 }}
                overlay={renderTooltip("See my LinkedIn profile")}
              >
                <a href="https://www.linkedin.com/in/braulioestradaalfonso/">
                  <Linkedin
                    onMouseEnter={handleLinkedInMouseEnter}
                    onMouseLeave={handleLinkedInMouseLeave}
                    height="25px"
                    width="25px"
                    color={colorPalette.strongestGreen}
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
            <Col xxl={12} sm={12} style={{ padding: "16px" }}>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 200, hide: 200 }}
                overlay={renderTooltip("See my GitHub profile")}
              >
                <a href="https://github.com/Braulio95">
                  <GithubIcon
                    onMouseEnter={GithubMouseEnter}
                    onMouseLeave={GithubMouseLeave}
                    height="25px"
                    width="30px"
                    color={colorPalette.strongestGreen}
                    style={{
                      marginInline: "4px",
                      cursor: "pointer",
                      transform: GithubHovered ? "scale(1.25)" : "scale(1)",
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
