import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signInWithGoogle } from "../../firebase/firebase.util";

import "./sign-in.styles.scss";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.state({ email: "", password: "" });
  };

  handleChanged = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChanged}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChanged}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton isGoogleSignIn="true" onClick={signInWithGoogle}>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
