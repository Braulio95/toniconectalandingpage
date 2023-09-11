import React from "react";
import { FooterProps } from "../../types/interfaces/FooterProps";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = ({ ToolsUsed, Contacts }: FooterProps) => {
  return (
    <footer className="bg-light text-center text-lg-start text-muted">
      <div className="mt-auto">
        <Container>
          <Row>
            <Col md={6}>
              <h6>Tools Used</h6>
              <ul className="list-unstyled">
                {ToolsUsed.map(({ label }) => {
                  return (
                    <li>
                      <a href="#!" className="text-reset">
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col md={6}>
              <h6>Contacts</h6>
              <ul className="list-unstyled">
                {Contacts.map(({ label }) => {
                  return (
                    <li>
                      <i className="fas fa-map-marker-alt me-2">{label}</i>
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="text-center p-3"
        style={{ background: "rgba(0, 0, 0, 0.05)" }}
      >
        © {new Date().getFullYear()} Nombre de tu empresa
      </div>
    </footer>
  );
};
