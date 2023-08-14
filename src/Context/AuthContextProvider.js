import AuthContext from "./auth-context";
import { useContext, useState } from "react";
import CartContext from "./cart-context";

const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("userEmail");
  const [token, setToken] = useState(initialToken);
  const [userEmail, setUserEmail] = useState(initialEmail);
  const cartCntx = useContext(CartContext);

  const userIsLoggedIn = !!token;

  const loginHandler = (token,email) => {
    setToken(token);
    setUserEmail(email);
    cartCntx.onLogin();
    localStorage.setItem("token", token);
    localStorage.setItem("userEmail", email);
  };

  const logoutHandler = () => {
    setToken(null);
    setUserEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    userEmail: userEmail,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
