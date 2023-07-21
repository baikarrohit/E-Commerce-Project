import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const Cart = () => {
  const [show, setShow] = useState(false);
  const closeHandler = () => {
    setShow(false);
  };

  const showHandler = () => {
    setShow(true);
  };
  return (
    <div>
      <Button variant="outline-info" onClick={showHandler}>
        Cart
      </Button>

      <Modal show={show} onHide={closeHandler} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ul>
            {cartElements.map((cart) => (
              <li className="list-unstyled">
                {cart.title} - {cart.price} - {cart.quantity}{" "}
                <Button variant="danger">Remove</Button>
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Purchase</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
