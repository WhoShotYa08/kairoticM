import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <header>
      <Navbar expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src="/images/logo.png"
                alt="KairoticM's Logo"
                className="nav-logo"
              />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto"></Nav>

            <Nav>
              <LinkContainer to="/">
                <Nav.Link className="btn btn-width">Sign Up</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/signUp">
                <Nav.Link className="btn btn-width btn-login">
                  <span className="btn-login-content">Login</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
