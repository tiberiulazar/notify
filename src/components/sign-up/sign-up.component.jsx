import React from "react";

import "./sign-up.styles.scss";

import AuthInput from "../auth-input/auth-input.component";
import AuthBtn from "../auth-btn/auth-btn.component";

import {
  auth,
  createUserProfileDocument,
  signInWithGoogle,
} from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <div className="sign-up__main">
          <h2 className="sign-up__title">Sign up now</h2>
          <AuthInput
            name="displayName"
            type="text"
            label="Displayname"
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <AuthInput
            name="email"
            type="email"
            label="Your email adress"
            value={email}
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
          <AuthInput
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />
          <AuthBtn buttonText="Submit Register" onClick={this.handleSubmit} />
        </div>

        <div className="sign-up__others">
          <p className="sign-up__others-text">Sign up using social medias</p>
          <div className="sign-up__social-btn">
            <AuthBtn
              buttonText="Register using google"
              google
              onClick={signInWithGoogle}
            />
          </div>
        </div>
        <div className="sign-up__already">
          Already have an account?
          <button className="switch-auth" onClick={this.props.handleComponent}>
            Log in
          </button>
        </div>
      </div>
    );
  }
}

export default SignUp;
