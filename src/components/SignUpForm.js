import React, { Component } from "react";
import { TextField, Button, Container, Typography } from "@material-ui/core";

export default class SignUpForm extends Component {
  render() {
    return (
      <Container>
        <br />
        <br />
        <form onSubmit={this.props.onSubmit}>
          <Typography variant="h5">Username</Typography>
          <TextField
            type="text"
            name="userName"
            placeholder="username"
            onChange={this.props.onChange}
            values={this.props.values}
            variant="filled"
          />
          <br />
          <br />

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

          <Button onClick={this.props.onSubmit}>SUBMIT</Button>
        </form>
      </Container>
    );
  }
}
