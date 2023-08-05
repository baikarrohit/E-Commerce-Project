import { useContext } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../Context/cart-context";
import classes from "./Store.module.css";


const Store = (props) => {
  const cartCntx = useContext(CartContext);
  const addToCartHandler = (item) => {
    cartCntx.addItem({ ...item, quantity: 1 });
  
  };
  
  return (
    <div>
      <Container className={classes.container}>
        <h3>Music</h3>
        <Row xs={1} md={2} className="g-8">
          {props.productsArr.map((item, index) => (
            <Col key={index}>
              <Card className={classes.card}>
                <Link to={`/store/${item.title}`}>
                  <Card.Title className={classes.title}>{item.title}</Card.Title>

                  <Card.Img src={item.imageUrl[0]} className={classes.img} />
                </Link>
                <Card.Body className={classes.footer}>
                  <span>${item.price.toFixed(2)}</span>
                  <Button
                    variant="primary"
                    onClick={() => addToCartHandler(item)}
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      
      <Button variant="secondary" className={classes.seeCartBtn}>
        See the cart
      </Button>
    </div>
  );
};

export default Store;
