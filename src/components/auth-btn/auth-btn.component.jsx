import React from "react";

import "./auth-btn.styles.scss";

const AuthBtn = ({ buttonText, google, ...otherProps }) => {
  return (
    <button
      className={`auth-btn ${google ? "auth-btn--google" : ""}`}
      {...otherProps}
    >
      {buttonText}
    </button>
  );
};

export default AuthBtn;
