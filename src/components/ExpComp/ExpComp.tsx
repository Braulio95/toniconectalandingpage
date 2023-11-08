import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ExpProps } from "../../types/interfaces/ExpProps";

export const ExpComp = ({ experiences, isMobile }: ExpProps) => {
  if (isMobile) {
    return (
      <Container>
        {experiences.map(({ id, autor, description, img }, index) => {
          return (
            <Row key={id}>
              <Col
                xs={12}
                s={6}
                style={{
                  textAlign: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <Image src={img} style={{ width: "200px", margin: "0 auto" }} />
              </Col>
              <Col
                xs={12}
                s={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: "auto",
                  marginBottom: "3rem",
                }}
              >
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
                  {autor}
                </p>
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  } else {
    return (
      <Container style={{ marginTop: "4rem" }}>
        {experiences.map(({ id, autor, description, img }, index) => {
          const isImageOnLeft = index % 2 === 0;
          return (
            <Row key={id} style={{ display: "flex", marginBottom: "6rem" }}>
              <Col
                s={6}
                style={{
                  textAlign: "right",
                }}
              >
                {isImageOnLeft ? (
                  <Image
                    src={img}
                    style={{ width: "200px", margin: "0 auto" }}
                  />
                ) : (
                  <div>
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
                      {autor}
                    </p>
                  </div>
                )}
              </Col>
              <Col
                s={6}
                style={
                  isImageOnLeft
                    ? {
                        display: "flex",
                        flexDirection: "column",
                        overflow: "auto",
                        marginBlock: "auto",
                      }
                    : { textAlign: "left" }
                }
              >
                {isImageOnLeft ? (
                  <>
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
                      {autor}
                    </p>
                  </>
                ) : (
                  <Image
                    src={img}
                    style={{ width: "300px", marginBlock: "0 auto" }}
                  />
                )}
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  }
};
