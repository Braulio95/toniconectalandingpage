import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavBarProps } from "../../types/interfaces/NavBarProps";

function NavBarComp({ pageName, tabItems }: NavBarProps) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{ flexGrow: 5 }}>
          {pageName}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {tabItems && tabItems.length && (
            <Nav className="me-auto">
              {tabItems.map(({ label }) => (
                <Nav.Link href="#home">{label}</Nav.Link>
              ))}
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;
