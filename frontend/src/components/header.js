import { Navbar, Nav, Container, Badge, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";

export default function Header() {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

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
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <LinkContainer to={"/profile"}>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav>
                {/* <LinkContainer to="/home">
                  <Nav.Link className="btn btn-width btn-login">
                    <span className="btn-login-content">Home</span>
                  </Nav.Link>
                </LinkContainer> */}

                <LinkContainer to="/register">
                  <Nav.Link className="btn btn-width">Sign Up</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/login">
                  <Nav.Link className="btn btn-width btn-login">
                    <span className="btn-login-content">Login</span>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
