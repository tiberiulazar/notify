import React from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/Notify.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import "./header.styles.scss";
import AuthBtn from "../auth-btn/auth-btn.component";

const Header = ({ user, history }) => {
  return (
    <div className="header">
      <Logo
        className="header__logo"
        onClick={() => {
          history.push("/dashboard");
        }}
      />
      {user ? (
        <h1 className="header__message">Hello, {user.displayName}</h1>
      ) : null}
      {user ? (
        <img
          src={` ${
            user.photoURL
              ? user.photoURL
              : "https://uifaces.co/our-content/donated/vIqzOHXj.jpg"
          }`}
          alt="My profile"
          className="header__profile"
        />
      ) : null}
      {user ? (
        <FontAwesomeIcon
          icon={faSignOutAlt}
          onClick={() => auth.signOut()}
          className="header__logout"
        />
      ) : null}
    </div>
  );
};

export default withRouter(Header);
