import AuthContext from "./auth-context";
import { useState } from "react";

const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [userEmail, setUserEmail] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (token,email) => {
    setToken(token);
    setUserEmail(email);
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
