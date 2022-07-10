import React from "react";
import "./Login.css";
import { signInWithGoogle } from "../../firebase";

function Login() {
  const handleLogin = async () => {
    const res = await signInWithGoogle();
    console.log(res);
  };
  return (
    <div
      className="login"
      style={{ background: "url('/assets/images/bg.jpg')" }}
    >
      <div className="login__left">
        <h1 className="login__heading">itsme</h1>
        <p className="login__desc">
          The best solution to store and share all your social media links.
        </p>
        <button className="login__btn" onClick={handleLogin}>
          <div className="loginBtn__icon">
            <ion-icon name="logo-google"></ion-icon>
          </div>
          <p>Login with google</p>
        </button>
      </div>
      <div className="login__right">
        <img src="/assets/images/character.png" alt="character" />
      </div>
    </div>
  );
}

export default Login;
