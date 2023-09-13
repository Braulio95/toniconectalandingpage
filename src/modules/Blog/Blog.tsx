import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import blogimg from "../../assets/img/shrek.jpg";
import imgjimmy from "../../assets/img/fkf6z28qynf91.jpg";
import { colorPalette } from "../../styles/partials/colors";
import { BlogEntrieComp } from "../../components/BlogEntrieComp/BlogEntrieComp";

export const Blog = () => {
  const headingStyle = {
    fontWeight: 400,
    fontSize: "4rem",
    color: colorPalette.strongGreen,
  };

  const entries = [
    {
      title: "Title 1",
      img: blogimg,
      date: "05/10/1995",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, odit. Unde, inventore incidunt tenetur, nisi officia ea nobis quis, cupiditate modi et odit in? Est odio repudiandae labore quibusdam. Officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquam quis fuga quia? Dolore dignissimos voluptatibus saepe earum praesentium illum. Fuga autem ad eveniet quibusdam odio aut. Recusandae, necessitatibus ducimus?",
    },
    {
      title: "Title 2",
      img: imgjimmy,
      date: "09/10/1995",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, odit. Unde, inventore incidunt tenetur, nisi officia ea nobis quis, cupiditate modi et odit in? Est odio repudiandae labore quibusdam. Officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquam quis fuga quia? Dolore dignissimos voluptatibus saepe earum praesentium illum. Fuga autem ad eveniet quibusdam odio aut. Recusandae, necessitatibus ducimus?",
    },
    {
      title: "Title 3",
      img: blogimg,
      date: "09/10/2000",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, odit. Unde, inventore incidunt tenetur, nisi officia ea nobis quis, cupiditate modi et odit in? Est odio repudiandae labore quibusdam. Officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquam quis fuga quia? Dolore dignissimos voluptatibus saepe earum praesentium illum. Fuga autem ad eveniet quibusdam odio aut. Recusandae, necessitatibus ducimus?",
    },
  ];
  return (
    <Container
      fluid
      className="blog"
      style={{
        minHeight: "82vh",
        padding: "20px",
      }}
    >
      <Row>
        <Col>
          <h2 style={headingStyle}>Blog</h2>
        </Col>
      </Row>
      {entries.length ? (
        entries.map(({ title, date, content, img }) => {
          return (
            <BlogEntrieComp
              title={title}
              date={date}
              content={content}
              img={img}
            />
          );
        })
      ) : (
        <>no entries</>
      )}
    </Container>
  );
};
