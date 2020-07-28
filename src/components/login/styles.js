import { makeStyles } from "@material-ui/core/styles";

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

export default useStyles;
