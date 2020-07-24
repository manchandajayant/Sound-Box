import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
  description: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    textAlign: "justify",
    textJustify: "inter-word ",
    paddingBottom: "10%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  About: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    paddingBottom: "8%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  Impulse: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    paddingBottom: "3%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  container: {
    paddingBottom: "10%",
  },
  anchor: {
    paddingBottom: "10%",
  },
}));

export default useStyles;
