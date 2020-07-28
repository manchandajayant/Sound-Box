import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
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
      paddingBottom: "10px",
      letterSpacing: "5px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
      },
    },
    leafletContainer: {
      width: "100%",
      height: "70vh",
      boxShadow: "black",
    },
  })
);

export default useStyles;
