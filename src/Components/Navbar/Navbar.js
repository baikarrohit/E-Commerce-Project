import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { useContext } from "react";
import AuthContext from "../../Context/auth-context";

const NavBar = () => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <div>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand>E-Commerce Website</Navbar.Brand>

          <Nav className={classes.nav}>
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/store">
              Store
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              ContactUS
            </Nav.Link>

            <Cart />
            {authCtx.isLoggedIn && (
              <Button variant="outline-danger" className={classes.btn} onClick={logoutHandler}>
                Logout
              </Button>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
