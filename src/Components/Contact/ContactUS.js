import { useRef, useState } from "react";
import classes from "./ContactUS.module.css";

const ContactUS = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneNumberRef = useRef("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const contactsObj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
    };

    try {
      await fetch(
        "https://ecommerce-http-bb6d7-default-rtdb.firebaseio.com/contacts.json",
        {
          method: "POST",
          body: JSON.stringify(contactsObj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
    } catch (error) {
      console.log("Something bad happened");
    }
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneNumberRef.current.value = "";
  };
  return (
    <div>
      <h1 className={classes.title}>Contact US</h1>
      {isSubmitted && (
        <p
          className={classes.successMsg}
        >
          Your response submitted successfully!
        </p>
      )}
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div>
          <label>Name:</label>
          <input type="text" ref={nameRef} />
        </div>
        <div>
          <label>Email ID:</label>
          <input type="text" ref={emailRef} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="number" ref={phoneNumberRef} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUS;
