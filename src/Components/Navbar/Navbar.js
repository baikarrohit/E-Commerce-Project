import {Navbar, Container, Nav} from 'react-bootstrap';
import Cart from '../Cart/Cart';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand>E-Commerce Website</Navbar.Brand>
          
            <Nav >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#store">Store</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Cart/>
            </Nav>
          
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;