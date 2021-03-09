import React from "react";

import "./auth-input.styles.scss";

const AuthInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="auth-group">
      <input
        className={`auth-group__input `}
        onChange={handleChange}
        {...otherProps}
      />
      <label
        className={`auth-group__label ${
          otherProps.value.length ? "auth-group__label--shrink" : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default AuthInput;
