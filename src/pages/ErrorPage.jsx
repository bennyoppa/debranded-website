import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { RootContext } from "../context/RootContext";
import withPageHeading from "../HOC/WithPageHeading";
import CustomButton from "../components/CustomButton";

const useStyles = makeStyles({
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  errorContainer: {
    width: "25%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  buttonWrapper: {
    width: "50%",
    textAlign: "center",
    margin: "auto",
  },
});

const ErrorPage = () => {
  const classes = useStyles();
  const value = useContext(RootContext);
  const { errorMessage, backButtonText, backUrl } = value.pageData.errorPage;

  const backHomeButton = {
    name: backButtonText,
    type: "",
    selected: false,
    url: backUrl,
  };

  return (
    <div className={classes.pageContainer}>
      <Grid container className={classes.errorContainer}>
        <Grid item xs={12}>
          <Typography variant="h3">{errorMessage}</Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.buttonWrapper}>
            <CustomButton button={backHomeButton} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withPageHeading(ErrorPage);
