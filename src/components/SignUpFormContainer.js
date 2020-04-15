import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { signUpUser } from "../actions/userActions";
import { Redirect } from "react-router";
import "../CSS/login.css";
import { Typography } from "@material-ui/core";
export class SignUpFormContainer extends Component {
  state = {
    email: "",
    password: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.signUpUser(this.state);
    this.setState({
      email: "",
      password: "",
    });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    // console.log(this.props.user);
    if (!this.props.user.newUser) {
      return (
        <div>
          <Typography variant="h4">SIGN UP</Typography>
          <SignUpForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        </div>
      );
    } else {
      return (
        <div>
          {/* <h1>You have signed up {this.props.users[0].email}</h1> */}
          <Redirect to="/">CLICK HERE TO LOGIN</Redirect>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  user: state.users,
});

const mapDispatchToProps = {
  signUpUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpFormContainer);
