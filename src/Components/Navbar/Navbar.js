import { Navbar, Container, Nav } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';

const Header = () => {
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
            <Cart />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
