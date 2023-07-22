import {useContext} from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Album1 from "../../Assets/Music/Album1.jpg";
import Album2 from "../../Assets/Music/Album2.jpg";
import Album3 from "../../Assets/Music/Album3.jpg";
import Album4 from "../../Assets/Music/Album4.jpg";
import Tshirt from "../../Assets/Merch/t-shirt.jpg";
import Cofee from "../../Assets/Merch/cup.jpg";
import CartContext from "../../Context/cart-context";

const albums = [
  {
    id: "m1",
    name: "Album 1",
    image: Album1,
    price: 12.99,
  },
  {
    id: "m2",
    name: "Album 2",
    image: Album2,
    price: 14.99,
  },
  {
    id: "m3",
    name: "Album 3",
    image: Album3,
    price: 9.99,
  },
  {
    id: "m4",
    name: "Album 4",
    image: Album4,
    price: 19.99,
  },
];

const merchs = [
  {
    id: "m5",
    name: "T-Shirt",
    image: Tshirt,
    price: 19.99,
  },
  {
    id: "m6",
    name: "Cofee Cup",
    image: Cofee,
    price:6.99,
  }
];

const Store = () => {
  const cartCntx = useContext(CartContext);
  const addToCartHandler = (item) => {
    cartCntx.addItem({...item,quantity:1});
    
  }
  return (
    <div>
      <Container>
        <h3 className="mt-4 mb-3 text-center">Music</h3>
        <Row className="g-6">
          {albums.map((album, index) => (
            <Col key={index}>
              <Card style={{ width: "100%" }}>
                <Card.Header>{album.name}</Card.Header>
                <Card.Body>
                  <Card.Img src={album.image} />
                </Card.Body>
                <Card.Footer>
                  <span>${album.price.toFixed(2)}</span>
                  <Button variant="primary" onClick={() => addToCartHandler(album)}>Add To Cart</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container >
        <h3 className="mt-4 mb-3 text-center">Merch</h3>
        <Row className="g-6">
          {merchs.map((merch, index) => (
            <Col key={index}>
              <Card style={{ width: "50%" }}>
                <Card.Header>{merch.name}</Card.Header>
                <Card.Body>
                  <Card.Img src={merch.image} />
                </Card.Body>
                <Card.Footer>
                  <span>${merch.price.toFixed(2)}</span>
                  <Button variant="primary" onClick={() => addToCartHandler(merch)}>Add To Cart</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Button variant="outline-info" className=" my-4 ms-5">See the cart</Button>
    </div>
  );
};

export default Store;
