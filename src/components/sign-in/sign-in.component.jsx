import React from "react";

import "./sign-in.styles.scss";

import AuthInput from "../auth-input/auth-input.component";
import AuthBtn from "../auth-btn/auth-btn.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  test = () => {
    console.log("test");
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <div className="sign-in__main">
          <h2 className="sign-in__title">Sign in now</h2>
          <AuthInput
            name="email"
            type="email"
            value={email}
            label="Your email adress"
            onChange={this.handleChange}
            required
          />
          <AuthInput
            name="password"
            type="password"
            label="Password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <AuthBtn buttonText="Sign in" onClick={this.handleSubmit} />
        </div>
        <div className="sign-in__others">
          <p className="sign-in__others-text">Sign up using social medias</p>
          <div className="sign-in__social-btn">
            <AuthBtn
              buttonText="Sign in using google"
              google
              onClick={signInWithGoogle}
            />
          </div>
        </div>
        <div className="sign-in__already">
          Don't have an account?
          <button className="switch-auth" onClick={this.props.handleComponent}>
            Register now!
          </button>
        </div>
      </div>
    );
  }
}

export default SignIn;
