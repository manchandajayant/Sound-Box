import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
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
  about: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    paddingBottom: "8%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  impulse: {
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
  image: {
    borderWidth: "0",
    height: "auto",
    width: "40px",
  },
  linkedin: {
    textDecoration: "none",
    color: "black",
  },
  github: {
    textDecoration: "none",
    color: "black",
    marginBottom: "2px",
  },
  website: {
    textDecoration: "none",
    color: "black",
  },
}));

export default useStyles;
