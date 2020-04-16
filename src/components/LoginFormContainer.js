import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions/userActions";
import { Redirect } from "react-router-dom";
import "../CSS/login.css";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    flexGrow: 1,
  },
};

export class LoginFormContainer extends Component {
  state = { email: "", password: "" };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state);
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
    // const { classes } = this.props;
    //console.log("user", this.props);
    if (this.props.user.auth) {
      return <Redirect to="/spaces"></Redirect>;
    } else {
      return (
        <Grid>
          <LoginForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        </Grid>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.users,
});

const mapDispatchToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LoginFormContainer));
