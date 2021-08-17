import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { RootContext } from "../context/RootContext";

const useStyles = makeStyles({
  container: {
    alignItems: "center",
  },
  logoIconWrapper: {
    paddingTop: "1%",
    paddingRight: "2%",
    borderRight: "2px solid #FFFFFF",
  },
  logoIcon: {
    width: "100%",
  },
  logoTextWrapper: {
    paddingLeft: "2%",
  },
  logoText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

const Logo = (props) => {
  const classes = useStyles();
  const { fontSize, width } = props;
  const value = useContext(RootContext);
  const { logoText, logoIcon } = value;

  return (
    <Grid container className={classes.container} style={{ width: width }}>
      <Grid item xs={2} className={classes.logoIconWrapper}>
        <img className={classes.logoIcon} src={logoIcon} alt="logo-icon" />
      </Grid>
      <Grid item xs={10} className={classes.logoTextWrapper}>
        <Typography className={classes.logoText} style={{ fontSize: fontSize }}>
          {logoText}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Logo;
