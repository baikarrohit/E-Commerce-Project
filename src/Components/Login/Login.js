import { useContext, useRef, useState } from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/auth-context";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();
  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBaY3MlVfz62mVW9IvhxHFv6L1IAjJ_cnM";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBaY3MlVfz62mVW9IvhxHFv6L1IAjJ_cnM";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage;
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken, data.email);
        history("/store", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <section className={classes.auth}>
      {!authCtx.isLoggedIn && <h1>{isLogin ? "Login" : "Sign Up"}</h1>}
      {!authCtx.isLoggedIn && (
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create an account"}</button>
            )}
            {isLoading && <p>Sending Request...</p>}
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      )}
      {authCtx.isLoggedIn && (
        <div className={classes.profile}>
          <h2>Hello!</h2>
          <p>{authCtx.userEmail}</p>
        </div>
      )}
    </section>
  );
};

export default Login;
