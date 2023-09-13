import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavBarProps } from "../../types/interfaces/NavBarProps";
import "bootstrap/dist/css/bootstrap.min.css";
import { MAIN_ROUTES } from "../../constants/routes";
import { colorPalette } from "../../styles/partials/colors";
import { Link } from "react-router-dom";

function NavBarComp({ pageName, tabItems }: NavBarProps) {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ boxShadow: `0px 6px 12px rgba(20, 63, 156, 0.2)` }}
      sticky="top"
    >
      <Container fluid="xxl">
        <Navbar.Brand
          href={MAIN_ROUTES.HOME}
          style={{ color: colorPalette.strongGreen, fontSize: "1.5rem", fontWeight:"900"}}
        >
          {pageName}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          {tabItems && tabItems.length && (
            <Nav variant="underline">
              {tabItems.map(({ id, label, routePath }) => (
                <Nav.Item key={id}>
                  <Nav.Link
                    key={id}
                    eventKey={id}
                    as={Link}
                    to={routePath}
                    style={{ color: colorPalette.strongestGreen }}
                  >
                    {label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;
