import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

export default class LoginForm extends Component {
  render() {
    //console.log(this.props.onSubmit);
    return (
      <Container>
        <br />

        <br />
        <form onSubmit={this.props.onSubmit}>
          <Typography variant="h5">Email</Typography>
          <TextField
            type="text"
            name="email"
            placeholder="email"
            onChange={this.props.onChange}
            values={this.props.values}
            variant="filled"
          />
          <br />
          <br />
          <Typography variant="h5">Password</Typography>
          <TextField
            type="password"
            name="password"
            placeholder="password"
            onChange={this.props.onChange}
            values={this.props.values}
            variant="filled"
          />
          <br />
          <br />
          <Button onClick={this.props.onSubmit}>Login</Button>
        </form>
        <Typography>
          <Link
            style={{ color: "black", textDecoration: "inherit" }}
            to="/signup"
          >
            SIGN UP FOR A NEW ACCOUNT
          </Link>
        </Typography>
      </Container>
    );
  }
}
