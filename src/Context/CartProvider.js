import { useState } from "react";
import CartContext from "./cart-context";


const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
   
    const existingItem = items.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItem === -1) {
      setItems([...items, item]);
    } else {
      const temp = [...items];
      temp[existingItem].quantity += parseInt(item.quantity);
      setItems(temp);
    }
  };
  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
