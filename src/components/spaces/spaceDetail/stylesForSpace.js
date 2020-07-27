import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
  description: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
    textAlign: "justify",
    textJustify: "inter-word ",
    paddingBottom: "8%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  title: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
    paddingBottom: "8%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  link: {
    color: "black",
    textDecoration: "inherit",
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
  image: {
    maxWidth: "100%",
    Height: "auto",
    paddingBottom: "8%",
    filter: "grayscale(20%)",
  },
  typo: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
    paddingBottom: "6%",
  },
}));

export default useStyles;
