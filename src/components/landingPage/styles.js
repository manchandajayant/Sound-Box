import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    fontSize: 85,
    fontFamily: "Dosis, sans-serif",
    color: "black",
    letterSpacing: "30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "70px",
    },
  },
  Typo: {
    fontFamily: "Dosis, sans-serif",
    color: "black",
    letterSpacing: "5px",
    textAlign: "justify",
    textJustify: "inter-word ",
    paddingBottom: "10%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  Link: {
    color: "black",
    textDecoration: "inherit",
    fontSize: "50px",
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "70px",
    },
  },
  container: {
    paddingBottom: "8%",
  },
}));

export default useStyles;
