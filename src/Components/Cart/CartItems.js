import { Button, Form } from "react-bootstrap";
import classes from './CartItem.module.css';

const CartItems = (props) => {
  return (
    <div>
      <li className={classes.list} key={props.id}>
        <div>
          <img alt="cartImages" src={props.image} />
          <span>{props.name}</span>
        </div>
        <span>{props.price}</span>
        <Form size="sm" type="text" value={props.quantity} />
        <Button variant="danger" size="sm">
          Remove
        </Button>
      </li>
    </div>
  );
};

export default CartItems;
