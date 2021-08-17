import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { RootContext } from "../context/RootContext";
import playButton from "../assets/img/play-button.svg";
import volumnButton from "../assets/img/volumn-button.svg";

const useStyles = makeStyles({
  container: {
    alignItems: "center",
  },
  cardBar: {
    height: 2,
    width: "90%",
    border: "1px solid grey",
    display: "flex",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "grey",
  },
  cardBarFilling: {
    height: 4,
    backgroundColor: "#08395B",
    borderRadius: 18,
    width: "30%",
  },
  transcript: {
    fontSize: "1rem",
  },
});

const PlayBar = () => {
  const classes = useStyles();
  const value = useContext(RootContext);
  const { playBarText } = value.pageData.welcomePage;

  return (
    <Grid container className={classes.container}>
      <Grid item xs={1}>
        <img src={playButton} alt="play-button" />
      </Grid>
      <Grid item xs={8}>
        <div className={classes.cardBar}>
          <div className={classes.cardBarFilling} />
        </div>
      </Grid>
      <Grid item xs={1}>
        <img src={volumnButton} alt="volumn-button" />
      </Grid>
      <Grid item xs={2}>
        <Typography className={classes.transcript}>{playBarText}</Typography>
      </Grid>
    </Grid>
  );
};

export default PlayBar;
