import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions/userActions";
import { Redirect } from "react-router-dom";
import "../CSS/login.css";

export class LoginFormContainer extends Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    //console.log("user", this.props);
    if (this.props.user.auth) {
      return <Redirect to="/spaces"></Redirect>;
    } else {
      return (
        <div className="login">
          <LoginForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.users
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
