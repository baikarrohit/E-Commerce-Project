import { Button } from "react-bootstrap";
import classes from "./CartItem.module.css";
import { useContext } from "react";
import CartContext from "../../Context/cart-context";

const CartItems = (props) => {
  const cartCtx = useContext(CartContext);

  const removeFromCartHandler = () => {
    cartCtx.removeItem(props.id);
  };

  return (
    <div>
      <li className={classes.list}>
        <div>
          <img alt="cartImages" src={props.image} />
          <span className={classes.name}>{props.name}</span>
        </div>
        <span className={classes.price}>${props.price.toFixed(2)}</span>
        <input type="number" step="1" value={props.quantity} readOnly />
        <Button
          variant="danger"
          size="sm"
          className={classes.removeButton}
          onClick={removeFromCartHandler}
        >
          Remove
        </Button>
      </li>
    </div>
  );
};

export default CartItems;
