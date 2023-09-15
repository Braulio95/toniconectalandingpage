import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { colorPalette } from "../../styles/partials/colors";
import { ExpComp } from "../../components/ExpComp/ExpComp";
import { SubtitleComp } from "../../components/SubtitleComp/SubtitleComp";

export const Curriculum = () => {
  const workExperience = [
    {
      id: 1,
      date: "date",
      company: "The ksquare group",
      role: "Developer",
      description:
        "lorem asdasdasdasdasdasdas sdfffffff sdfsdf sfsf sdfsdfsdfsdf sdfskldjfksjdfs sdlkfjskldfsklfjsfd adasdasdasdasdas",
    },
    {
      id: 2,
      date: "date2",
      company: "Company XYZ",
      role: "Designer",
      description: "lorem ipsum dolor sit amet",
    },
    {
      id: 3,
      date: "date3",
      company: "Tech Solutions Inc.",
      role: "Software Engineer",
      description: "consectetur adipiscing elit",
    },
    {
      id: 4,
      date: "date4",
      company: "ABC Corporation",
      role: "Project Manager",
      description: "sed do eiusmod tempor incididunt",
    },
  ];

  const education = [
    {
      id: 1,
      date: "date",
      company: "The ksquare group",
      role: "Developer",
      description:
        "lorem asdasdasdasdasdasdas sdfffffff sdfsdf sfsf sdfsdfsdfsdf sdfskldjfksjdfs sdlkfjskldfsklfjsfd adasdasdasdasdas",
    },
  ];
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
          <SubtitleComp>Curriculum</SubtitleComp>
        </Col>
      </Row>
      <ExpComp experiences={workExperience} type="Work Experience" />
      <ExpComp experiences={education} type="Education" />
    </Container>
  );
};
