import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  Typography,
  Container,
  Link,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { login } from "../../Store/actions/userActions";
import "./login.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "rgba(100,100,100)",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    marginBottom: "28px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  Typography: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  button: {
    backgroundColor: "rgba(100,100,100)",
    color: "white",
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  Link: {
    color: "black",
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = { password, email };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login(data));
    let s = sessionStorage.setItem("mySession", user);
    console.log(s);
  };

  if (user.auth) {
    return <Redirect to="/spaces"></Redirect>;
  } else {
    return (
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            className={classes.Typography}
          >
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              className={classes.Typography}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              className={classes.Typography}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
              color="primary"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={onSubmit}
              className={classes.button}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2" className={classes.Link}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
};

export default LoginPage;
