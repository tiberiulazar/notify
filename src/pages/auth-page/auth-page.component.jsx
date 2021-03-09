import React, { useState } from "react";

import "./auth-page.styles.scss";

import AuthPageImg from "../../assets/auth-image.png";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const AuthPage = () => {
  const [activeAuth, setActiveAuth] = useState("signup");

  return (
    <div className="auth">
      <div className="auth__state">
        {activeAuth === "signup" ? (
          <SignUp handleComponent={() => setActiveAuth("login")} />
        ) : (
          <SignIn handleComponent={() => setActiveAuth("signup")} />
        )}
      </div>
      <div className="auth__image">
        <img
          className="auth__illustration"
          src={AuthPageImg}
          alt="Auth page illustration"
        />
      </div>
    </div>
  );
};

export default AuthPage;
