import {useContext} from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Album1 from "../../Assets/Music/Album1.jpg";
import Album2 from "../../Assets/Music/Album2.jpg";
import Album3 from "../../Assets/Music/Album3.jpg";
import Album4 from "../../Assets/Music/Album4.jpg";
import Tshirt from "../../Assets/Merch/t-shirt.jpg";
import Cofee from "../../Assets/Merch/cup.jpg";
import CartContext from "../../Context/cart-context";
import classes from './Store.module.css';

const albums = [
  {
    id: "m1",
    name: "Album 1",
    image: Album2,
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
      <Container className={classes.container}>
        <h3>Music</h3>
        <Row xs={1} md={2} className="g-8">
          {albums.map((album, index) => (
            <Col key={index}>
              <Card className={classes.card}>
                <Card.Header className={classes.name}>{album.name}</Card.Header>
                <Card.Body>
                  <Card.Img src={album.image} className={classes.img}/>
                </Card.Body>
                <Card.Footer className={classes.footer}>
                  <span>${album.price.toFixed(2)}</span>
                  <Button variant="primary"  onClick={() => addToCartHandler(album)}>Add To Cart</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className={classes.container}>
        <h3>Merch</h3>
        <Row xs={1} md={2} className="g-8">
          {merchs.map((merch, index) => (
            <Col key={index}>
              <Card className={classes.card}>
                <Card.Header className={classes.name}>{merch.name}</Card.Header>
                <Card.Body>
                  <Card.Img src={merch.image} className={classes.img}/>
                </Card.Body>
                <Card.Footer className={classes.footer}>
                  <span>${merch.price.toFixed(2)}</span>
                  <Button variant="primary"  onClick={() => addToCartHandler(merch)}>Add To Cart</Button>
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
