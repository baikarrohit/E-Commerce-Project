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
        <h3>Men's Cloth Section</h3>
        <Row xs={1} md={2} className="g-8">
          {props.productsArr.map((item, index) => (
            <Col key={index}>
              <Card className={classes.card}>
                <Link to={`/store/${item.title}`}>
                  <Card.Img src={item.imageUrl[0]} className={classes.img} />
                </Link>
                <Card.Body
                  className={`${classes.footer} ${classes.productCard}`}
                >
                  <div className={classes.productInfo}>
                    <div className={classes.brand}>{item.brand}</div>
                    <div className={classes.title}>{item.title}</div>
                    <div className={classes.price}>
                      ${item.price.toFixed(2)}
                    </div>
                    <span className={classes.size}>Size: S, M, L, XL</span>
                  </div>

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
