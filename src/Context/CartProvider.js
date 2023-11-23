import { useContext, useEffect, useState } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";
import axios from "axios";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    setItems([]);
  }, [authCtx.userEmail]);

  const fetchCartItemsFromBackend = async () => {
    try {
      const email = authCtx.userEmail.replace(/[@.]/g, "");
      const response = await axios.get(
        `https://crudcrud.com/api/684c6c305da14417b54ea6536a1d00f0/cart${email}`
      );

      const fetchedItems = response.data.reduce((accumulator, element) => {
        if (element.cartItems.length !== 0) {
          const existingItemIndex = accumulator.findIndex(
            (cartItem) => cartItem.id === element.cartItems[0].id
          );

          if (existingItemIndex !== -1) {
            accumulator[existingItemIndex].quantity +=
              element.cartItems[0].quantity;
          } else {
            accumulator.push(element.cartItems[0]);
          }
        }
        return accumulator;
      }, []);

      setItems(fetchedItems);
    } catch (err) {
      console.log("Error while fetching cart items from backend", err);
    }
  };
  useEffect(() => {
    fetchCartItemsFromBackend();
  }, [authCtx.userEmail]);

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
      setItems((prevItems) => [...prevItems, item]);
    }
    saveCartItemsToBackend(item);
  };

  const removeItemFromCart = async (index) => {
    try {
      const email = authCtx.userEmail.replace(/[@.]/g, "");
      const response = await axios.get(
        `https://crudcrud.com/api/684c6c305da14417b54ea6536a1d00f0/cart${email}`
      );
      const resData = await response.data;
      let backendId;
      let cartItemId;

      resData.forEach((element) => {
        element.cartItems.forEach((cartItem) => {
          if (cartItem.id === items[index].id) {
            backendId = element._id;
            cartItemId = cartItem.id;
          }
        });
      });
      if (backendId) {
        await axios.delete(
          `https://crudcrud.com/api/684c6c305da14417b54ea6536a1d00f0/cart${email}/${backendId}`
        );
        console.log("delete successful");
      }

      // Delete the item from local state

      setItems((prevItems) => {
        const updatedItems = prevItems.map((item) => {
          if (item.id === cartItemId && item.quantity >= 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        return updatedItems.filter((item) => item.quantity >= 1);
      });
    } catch (err) {
      console.log("Error while removing item from cart or backend", err);
    }
  };

  const saveCartItemsToBackend = async (cartItems) => {
    try {
      if (!authCtx.userEmail) {
        return;
      }
      const email = authCtx.userEmail.replace(/[@.]/g, "");
      const response = await axios.post(
        `https://crudcrud.com/api/684c6c305da14417b54ea6536a1d00f0/cart${email}`,
        {
          cartItems: [cartItems],
        }
      );
      console.log("cart items saved in backend", response.data);
    } catch (err) {
      console.log("Error while saving the cart to backend", err);
    }
  };
  const updateQuantityHandler = (id, newQuantity) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };
  // useEffect(() => {
  //   // Save cart items to backend whenever 'items' state is updated
  //   saveCartItemsToBackend(items.filter((item) => item.quantity > 0));
  // }, [items]);

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCart,
    onLogin: fetchCartItemsFromBackend,
    updateQuantity: updateQuantityHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
