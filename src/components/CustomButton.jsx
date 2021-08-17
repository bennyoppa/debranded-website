import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Home from "@material-ui/icons/Home";

import { RootContext } from "../context/RootContext";
import backArrow from "../assets/img/back-arrow.svg";
import nextArrow from "../assets/img/next-arrow.svg";
import handPointer from "../assets/img/hand-pointer.svg";

const useStyles = makeStyles({
  basicButton: {
    backgroundColor: "#55C6D7",
    borderRadius: 0,
    width: "55%",
    height: "80%",
  },
  beginBannerButton: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    borderRadius: 0,
    width: "60%",
  },
  selectedMenuButton: {
    color: "#FFFFFF",
    borderBottom: "2px solid #55C6D7",
    borderRadius: 0,
  },
  unselectedMenuButton: {
    color: "#A9A9A9",
    borderRadius: 0,
  },
  backButton: {
    backgroundColor: "#E0E0E0",
    borderRadius: 0,
  },
  nextButton: {
    backgroundColor: "#55C6D7",
    borderRadius: 0,
    filter: `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))`,
  },
  homeIcon: {
    width: "30%",
    paddingRight: "5%",
  },
  beginBanner: {
    alignItems: "center",
    "&:hover": {
      transform: `translateY(-5px)`,
    },
  },
  handPointer: {
    width: "80%",
  },
  beginBannerText: {
    textAlign: "left",
    paddingLeft: "3%",
    color: "#FFFFFF",
    fontSize: "1rem",
  },
});

const CustomButton = (props) => {
  const classes = useStyles();
  const value = useContext(RootContext);
  const { redirectPageHandler } = value;
  const { name, type, selected, url } = props.button;

  let buttonStyle = classes.basicButton;

  let button = (
    <Button className={buttonStyle} onClick={() => redirectPageHandler(url)}>
      <Typography>{name}</Typography>
    </Button>
  );

  if (type === "homeButton" || type === "topicButton") {
    buttonStyle = selected
      ? classes.selectedMenuButton
      : classes.unselectedMenuButton;

    button = (
      <Button className={buttonStyle} onClick={() => redirectPageHandler(url)}>
        {type === "homeButton" && <Home className={classes.homeIcon} />}
        <Typography>{name}</Typography>
      </Button>
    );
  }

  if (type === "backButton" || type === "nextButton") {
    buttonStyle =
      type === "backButton" ? classes.backButton : classes.nextButton;

    button = (
      <Button className={buttonStyle} onClick={() => redirectPageHandler(url)}>
        <Grid container>
          <Grid item xs={12}>
            {type === "backButton" ? (
              <img src={backArrow} alt="back-arrow" />
            ) : (
              <img src={nextArrow} alt="next-arrow" />
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography>{name}</Typography>
          </Grid>
        </Grid>
      </Button>
    );
  }

  if (type === "beginBannerButton") {
    button = (
      <Button
        className={classes.beginBannerButton}
        onClick={() => redirectPageHandler(url)}
      >
        <Grid container className={classes.beginBanner}>
          <Grid item xs={1}>
            <div>
              <img
                className={classes.handPointer}
                src={handPointer}
                alt="hand-pointer"
              />
            </div>
          </Grid>
          <Grid item xs={11}>
            <Typography className={classes.beginBannerText}>{name}</Typography>
          </Grid>
        </Grid>
      </Button>
    );
  }

  return <>{button}</>;
};

export default CustomButton;
