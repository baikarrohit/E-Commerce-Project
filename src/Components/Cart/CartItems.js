import { Button } from "react-bootstrap";
import classes from "./CartItem.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Context/cart-context";

const CartItems = (props) => {
  const cartCntx = useContext(CartContext);

  const removeItemFromCartHandler = (event) => {
    event.preventDefault();
    const eleId = event.target.id;
    cartCntx.removeItem(eleId);

    
  };

  const quantityHandler = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity >= 1) {
      cartCntx.updateQuantity(props.id, newQuantity);
    }
  };
  return (
    <div>
      <li className={classes.list} key={props.id}>
        <div>
          <img alt="cartImages" src={props.image} />
          <span className={classes.name}>{props.name}</span>
        </div>
        <span className={classes.price}>${props.price}</span>
        <input
          type="number"
          step="1"
          value={props.quantity}
          onChange={quantityHandler}
        />
        <Button
          variant="danger"
          size="sm"
          className={classes.removeButton}
          id={props.index}
          onClick={removeItemFromCartHandler}
        >
          Remove
        </Button>
      </li>
    </div>
  );
};

export default CartItems;
