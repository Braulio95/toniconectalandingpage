import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { StrongComp } from "../../components/StrongComp/StrongComp";
import { colorPalette } from "../../styles/partials/colors";

export const Curriculum = () => {
  return (
    <Container
      id="curriculum"
      fluid="xxl"
      className="home"
      style={{
        paddingInline: "5%",
        height: "100%",
        paddingBottom: "10%",
        marginBottom: "10%",
      }}
    >
      <Row>
        <Col xxl="12">
          <h2>
            <StrongComp color={colorPalette.strongestGreen}>
              Curriculum
            </StrongComp>
          </h2>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h3>Work Experience</h3>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "right", borderRight: `1px solid black` }}>
            <p>February 2023 - August 2024</p>
          </Col>
          <Col>
            <h3>The Ksquare Group</h3> <h4>Trainee software developer</h4>{" "}
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis, rem explicabo. Ea veritatis earum consectetur accusamus
              est dolorem ipsa ipsum unde, assumenda rerum amet voluptatibus
              esse ratione illo a qui.
            </p>{" "}
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "right", borderRight: `1px solid black` }}>
            <p>February 2023 - August 2024</p>
          </Col>
          <Col>
            <h3>The Ksquare Group</h3> <h4>Trainee software developer</h4>{" "}
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis, rem explicabo. Ea veritatis earum consectetur accusamus
              est dolorem ipsa ipsum unde, assumenda rerum amet voluptatibus
              esse ratione illo a qui.
            </p>{" "}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h3>Education</h3>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "right", borderRight: `1px solid black` }}>
            <p>February 2023 - August 2024</p>
          </Col>
          <Col>
            <h3>The Ksquare Group</h3> <h4>Trainee software developer</h4>{" "}
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis, rem explicabo. Ea veritatis earum consectetur accusamus
              est dolorem ipsa ipsum unde, assumenda rerum amet voluptatibus
              esse ratione illo a qui.
            </p>{" "}
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "right", borderRight: `1px solid black` }}>
            <p>February 2023 - August 2024</p>
          </Col>
          <Col>
            <h3>The Ksquare Group</h3> <h4>Trainee software developer</h4>{" "}
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis, rem explicabo. Ea veritatis earum consectetur accusamus
              est dolorem ipsa ipsum unde, assumenda rerum amet voluptatibus
              esse ratione illo a qui.
            </p>{" "}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
