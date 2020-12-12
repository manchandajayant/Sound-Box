import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  load: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  bar: {
    paddingTop: "15%",
  },
  heading: {
    fontFamily: "Dosis, sans-serif",
    fontSize: "17px",
    paddingBottom: "10px",
    letterSpacing: "3px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  leafletContainer: {
    width: "100%",
    height: "70vh",
    boxShadow: "black",
  },
}));

export default useStyles;
