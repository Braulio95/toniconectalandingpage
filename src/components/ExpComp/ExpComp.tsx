import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ExpProps } from "../../types/interfaces/ExpProps";
import { colorPalette } from "../../styles/partials/colors";
import centrodeservicio from "../../assets/testimonies/centrodeservicio.png";

export const ExpComp = ({ experiences }: ExpProps) => {
  return (
    <Container>
      {experiences.map(({ id, date, company, role, description }) => {
        return (
          <Row key={id}>
            <Col
              xs={12}
              xxl={6}
              style={{
                textAlign: "right",
              }}
            >
              <Image
                src={centrodeservicio}
                style={{ width: "300px", margin: "0 auto" }}
              />
            </Col>
            <Col xs={10} xxl={6} style={{ overflow: "auto" }}>
              <p
                style={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: 400,
                  marginBottom: 0,
                }}
              >
                {description}
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  marginBottom: 0,
                }}
              >
                {company}
              </p>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};
