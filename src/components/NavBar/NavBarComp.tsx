import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavBarProps } from "../../types/interfaces/NavBarProps";
import "bootstrap/dist/css/bootstrap.min.css";
import { MAIN_ROUTES } from "../../constants/routes";

function NavBarComp({ pageName, tabItems }: NavBarProps) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href={MAIN_ROUTES.HOME}>{pageName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          {tabItems && tabItems.length && (
            <Nav variant="underline" defaultActiveKey="/">
              {tabItems.map(({ id, label, routePath }) => (
                <Nav.Link key={id} href={routePath}>
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;
