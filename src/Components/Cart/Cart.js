import { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import CartContext from "../../Context/cart-context";
import classes from "./Cart.module.css";

// const cartElements = [
//   {
//     title: "Colors",

//     price: 100,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

//     quantity: 2,
//   },

//   {
//     title: "Black and white Colors",

//     price: 50,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

//     quantity: 3,
//   },

//   {
//     title: "Yellow and Black Colors",

//     price: 70,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

//     quantity: 1,
//   },
// ];

const Cart = () => {
  const cartCntx = useContext(CartContext);
  const [show, setShow] = useState(false);
  let cartCount = 0;
  let total = 0;

  const closeHandler = () => {
    setShow(false);
  };

  const showHandler = () => {
    setShow(true);
  };

  cartCntx.items.forEach((ele) => {
    cartCount += Number(ele.quantity);
    total += Number(ele.price) * Number(ele.quantity);
  });

  return (
    <div>
      <Button variant="outline-info" onClick={showHandler}>
        Cart {cartCount}
      </Button>

      <Modal show={show} onHide={closeHandler} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className={classes.title}>Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className={classes.heading}>
            <span>ITEM</span>
            <span>Price</span>
            <span>Quantity</span>
          </div>
          <ul>
            {cartCntx.items.map((cart, idx) => (
              <li className={classes.list} key={idx}>
                <div>
                  <img alt="images" src={cart.image} />
                  <span>{cart.name}</span>
                </div>
                <span>{cart.price}</span>
                <Form.Control size="sm" type="text" value={cart.quantity}/>
                <Button variant="danger" size="sm">
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <div className={classes.total}>
            <h5>Total</h5>
            <span>${total.toFixed(2)}</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Purchase</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
