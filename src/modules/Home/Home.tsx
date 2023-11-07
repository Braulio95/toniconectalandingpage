import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import HomeImg from "../../assets/homeImg/giftoni.gif";
import number1 from "../../assets/homeImg/number1.png";
import "bootstrap/dist/css/bootstrap.min.css";

interface HomeProps {
  isMobile: boolean;
}
export const Home = ({ isMobile }: HomeProps) => {
  const headingStyle = {
    fontWeight: 400,
    fontSize: "4rem",
    color: "white",
  };

  const headingStyleMobile = {
    fontWeight: 600,
    fontSize: "3rem",
    color: "white",
  };

  return (
    <Container
      id="inicio"
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
          height: "min-content",
        }}
      >
        <Row style={{ display: "flex" }}>
          <Col
            lg={8}
            xxl={8}
            style={
              isMobile
                ? {
                    marginBlock: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }
                : {
                    marginBlock: "5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "right",
                    textAlign: "right",
                  }
            }
          >
            <p style={isMobile ? headingStyleMobile : headingStyle}>
              ¡Tu taller
              <span
                style={{
                  color: "blue",
                  fontWeight: 700,
                  fontSize: "6rem",
                }}
              >
                <Image
                  src={number1}
                  style={{
                    width: `${160}px`,
                    height: `${160}px`,
                    margin: "0 auto",
                    marginTop: "4px",
                    objectFit: "contain",
                  }}
                />
              </span>{" "}
              en <span style={{ color: "#5c81eb" }}>Google</span>!
            </p>
          </Col>
          <Col
            lg={4}
            xxl={4}
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              margin: "0 auto",
            }}
          >
            <Image
              src={HomeImg}
              style={{
                width: `${970 * 0.35}px`,
                height: `${1920 * 0.35}px`,
                margin: "0 auto",
                marginTop: "4px",
                objectFit: "contain",
                rotate: "-5deg",
              }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
