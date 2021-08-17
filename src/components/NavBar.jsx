import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { RootContext } from "../context/RootContext";
import CustomButton from "./CustomButton";

const useStyles = makeStyles({
  navBar: {
    position: "fixed",
    bottom: 0,
    paddingBottom: "2%",
  },
  menuButton: {
    textAlign: "center",
  },
});

export default function NavBar() {
  const classes = useStyles();
  const value = useContext(RootContext);
  const { menuButtons, validUrls, currentUrl } = value;

  return (
    validUrls.includes(currentUrl) && (
      <Grid container className={classes.navBar}>
        {menuButtons.map((button, i) => (
          <Grid className={classes.menuButton} item xs={2} key={i}>
            <CustomButton button={button} />
          </Grid>
        ))}
      </Grid>
    )
  );
}
