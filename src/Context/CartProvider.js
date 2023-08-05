import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    const existingItemIndex = items.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // Item already exists in the cart, update its quantity
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += item.quantity;
      setItems(updatedItems);
    } else {
      // Item does not exist in the cart, add it
      setItems([...items, item]);
    }
  };
  const removeItemFromCartHandler = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

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
