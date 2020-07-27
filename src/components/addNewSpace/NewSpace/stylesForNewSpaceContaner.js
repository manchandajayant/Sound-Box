export const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
  login: {
    color: "white",
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
  },
  Link: {
    color: "black",
    textDecoration: "inherit",
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
  },
  description: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  button: {
    backgroundColor: "rgb(100,100,100)",
  },
  typography: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
  },
  heading: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
});
