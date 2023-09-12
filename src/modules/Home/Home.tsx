import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { colorPalette } from "../../styles/partials/colors";
import { StrongComp } from "../../components/StrongComp/StrongComp";
import { LinkComp } from "../../components/LinkComp/LinkComp";
import { WebIcon } from "../../components/Icons/WebIcon/WebIcon";
import { InterfaceIcon } from "../../components/Icons/InterfaceIcon/InterfaceIcon";
import { ApiIcon } from "../../components/Icons/ApiIcon/ApiIcon";

export const Home = () => {
  const containerStyle = {
    minHeight: "82vh",
    padding: "20px",
  };

  const headingStyle = {
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
    fontWeight: 400,
    fontSize: "4rem",
  };

  const subHeadingStyle = {
    color: colorPalette.strongGreen,
    fontWeight: "lighter",
  };

  return (
    <Container className="home" style={{ ...containerStyle }}>
      <Row>
        <Col>
          <WebIcon />
        </Col>
        <Col>
          <InterfaceIcon />
        </Col>
        <Col>
          <ApiIcon />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 style={headingStyle}>
            Hi my name is{" "}
            <StrongComp color={colorPalette.strongestGreen}>
              Braulio Estrada
            </StrongComp>
            , I am a web developer in Mexico and I offer my web services in{" "}
            <StrongComp color={colorPalette.strongestGreen}>
              Front-end
            </StrongComp>{" "}
            projects.
          </h1>
          <h2 style={{ ...subHeadingStyle, paddingBlock: "2rem" }}>
            I help you to build your UI, getting more visibility and relevance
            in the internet.
            <LinkComp link="link">Contact me</LinkComp>
          </h2>
        </Col>
      </Row>
    </Container>
  );
};
