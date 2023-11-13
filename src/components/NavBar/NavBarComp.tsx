import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavBarProps } from "../../types/interfaces/NavBarProps";
import { MAIN_ROUTES } from "../../constants/routes";
import { colorPalette } from "../../styles/partials/colors";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/navIcon/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import { WhatsAppIcon } from "../Icons/WhatsAppIcon/WhatsAppIcon";

function NavBarComp({ tabItems, isMobile }: NavBarProps) {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ boxShadow: `0px 6px 12px rgba(20, 63, 156, 0.2)` }}
      sticky="top"
    >
      <Container fluid="xxl">
        <Navbar.Brand href={`#${MAIN_ROUTES.HOME}`}>
          <Image src={Logo} style={{ width: "180px" }} />
        </Navbar.Brand>
        {isMobile && (
          <a
            href="https://api.whatsapp.com/send?phone=5550301869"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon width="30px" height="30px" color="#5c81eb" />
          </a>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className="justify-content-end">
          {tabItems && tabItems.length && (
            <Nav variant="underline">
              {tabItems.map(({ id, label, routePath }) => (
                <Nav.Item key={id}>
                  <Nav.Link
                    key={id}
                    eventKey={id}
                    as={HashLink}
                    to={`#${routePath}`}
                    style={{
                      color: colorPalette.midAzure,
                    }}
                  >
                    {label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;
