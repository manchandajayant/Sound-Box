import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { signUpUser } from "../actions/userActions";
import LoginFormContainer from "./LoginFormContainer";
import "../CSS/login.css";
import { Typography } from "@material-ui/core";
export class SignUpFormContainer extends Component {
  state = {
    email: "",
    password: "",
    userName: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.signUpUser(this.state);
    this.setState({
      email: "",
      password: "",
      userName: "",
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
          <Typography varaint="h4">
            Welcome {this.props.user.newUser.email} <br />
            Now Login to conitnue
          </Typography>
          <LoginFormContainer />
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
