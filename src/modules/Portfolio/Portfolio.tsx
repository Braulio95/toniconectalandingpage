import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardComp from "../../components/CardComp/CardComp";
import { StrongComp } from "../../components/StrongComp/StrongComp";
import { colorPalette } from "../../styles/partials/colors";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      img: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18a9104d840%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18a9104d840%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      title: "Proyecto Uno",
      linkLiveDemo: "https://example.com/demo1",
      LinkGitHubRepo: "https://github.com/example/repo1",
    },
    {
      id: 2,
      img: "https://example.com/image2.jpg",
      title: "Proyecto Dos",
      linkLiveDemo: "https://example.com/demo2",
      LinkGitHubRepo: "https://github.com/example/repo2",
    },
    {
      id: 3,
      img: "https://example.com/image3.jpg",
      title: "Proyecto Tres",
      linkLiveDemo: "https://example.com/demo3",
    },
  ];
  return (
    <Container
      id="portfolio"
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
              Portfolio
            </StrongComp>
          </h2>
        </Col>
      </Row>
      <Row>
        {projects.map(
          ({ id, title, img, linkLiveDemo, LinkGitHubRepo }, index) => {
            return (
              <Col
                key={index}
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={4}
                className="mb-2 d-flex justify-content-center"
                style={{ marginBlock: "1.2rem" }}
              >
                <CardComp
                  id={id}
                  title={title}
                  img={img}
                  linkLiveDemo={linkLiveDemo}
                  LinkGitHubRepo={LinkGitHubRepo}
                />
              </Col>
            );
          }
        )}
      </Row>
    </Container>
  );
};
