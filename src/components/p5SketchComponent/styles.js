import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  description: {
    color: "black",
    textDecoration: "inherit",
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  sketch: {
    width: "100%",
    paddingBottom: "3%",
    paddingTop: "3%",
  },
}));

export default useStyles;
