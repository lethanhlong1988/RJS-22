import { Form } from "react-router-dom";
import { useState } from "react";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthHandler() {
    console.log("Log in");
    setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  }
  return (
    <>
      <div>Auth Form</div>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <button type="button" onClick={switchAuthHandler}>
            {isLogin ? "Create new user" : "Login"}
          </button>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}
export default AuthForm;
