import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";

import { RootContext } from "../context/RootContext";
import CustomButton from "../components/CustomButton";

const useStyles = makeStyles({
  paperAnchorRight: {
    width: "20%",
    backgroundColor: "#0A0A0A",
  },
  buttonRoot: {
    backgroundColor: "#E5A1AA",
    margin: 8,
    color: "white",
    width: 150,
  },
  logo: {
    height: "25vh",
  },
  menuButtonContainer: {
    height: "100%",
    padding: "30% 0",
  },
  menuButton: {
    textAlign: "center",
  },
});

const CustomDrawer = () => {
  const value = useContext(RootContext);
  const { openDrawer, drawerCloseHandler, menuButtons } = value;

  const classes = useStyles();

  return (
    <Drawer
      classes={{ paperAnchorRight: classes.paperAnchorRight }}
      anchor={"right"}
      open={openDrawer}
      onClose={drawerCloseHandler}
    >
      <Grid container className={classes.menuButtonContainer}>
        {menuButtons.map((button, i) => (
          <Grid className={classes.menuButton} item xs={12} key={i}>
            <CustomButton button={button} />
          </Grid>
        ))}
      </Grid>
    </Drawer>
  );
};

export default CustomDrawer;
