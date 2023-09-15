import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { colorPalette } from "../../styles/partials/colors";
import { StrongComp } from "../../components/StrongComp/StrongComp";
import img from "../../assets/img/alexmarin.jpg";
import { JsIcon } from "../../components/Icons/JsIcon/JsIcon";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => {
  const headingStyle = {
    fontWeight: 400,
    fontSize: "2.2rem",
    color: colorPalette.strongestGreen,
  };

  const subHeadingStyle = {
    fontWeight: "lighter",
    fontSize: "1.2rem",
  };

  const technologies = [
    <JsIcon />,
    <JsIcon />,
    <JsIcon />,
    <JsIcon />,
    <JsIcon />,
    <JsIcon />,
  ];

  return (
    <Container
      id="home"
      fluid="xxl"
      className="home"
      style={{
        paddingInline: "5%",
        display: "flex",
        height: "100%",
        paddingBlock: "10%",
        marginBottom: "10%",
      }}
    >
      <Container
        style={{
          paddingBlock: "3%",
          backgroundColor: "white",
          height: "min-content",
          boxShadow: `0px 6px 12px rgba(20, 63, 156, 0.2)`,
        }}
      >
        <Row>
          <Col
            lg={3}
            xxl={3}
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              margin: "0 auto",
            }}
          >
            <Image
              src={img}
              style={{
                width: "230px",
                height: "230px",
                margin: "0 auto",
                marginTop: "4px",
                objectFit: "cover",
              }}
              roundedCircle
            />
          </Col>
          <Col
            lg={9}
            xxl={9}
            style={{
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              //alignItems: "center",
            }}
          >
            <h1 style={headingStyle}>
              Hi, my name is{" "}
              <StrongComp color={colorPalette.strongestGreen}>
                Braulio Estrada
              </StrongComp>
              , I am a web developer in Mexico and I offer my web services in{" "}
              <StrongComp color={colorPalette.strongestGreen}>
                Front-end
              </StrongComp>{" "}
              projects.
            </h1>
            <h2
              style={{
                ...subHeadingStyle,
                paddingBlock: "2rem",
              }}
            >
              I help you to build your UI, getting more visibility and relevance
              in the internet.
            </h2>
          </Col>
        </Row>
        <Row>
          <Col xxl="12" className="text-center">
            <h3
              style={{ borderBottom: `2px groove ${colorPalette.strongGreen}` }}
            >
              <StrongComp color={colorPalette.strongestGreen}>Stack</StrongComp>
            </h3>
          </Col>
        </Row>
        <Row style={{ paddingInline: "10%" }}>
          {technologies.map((technology, index) => (
            <Col
              key={index}
              xs={6}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              className="mb-2 d-flex justify-content-center"
            >
              {technology}
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};
