import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

import { RootContext } from "../context/RootContext";
import withPageHeading from "../HOC/WithPageHeading";
import CustomButton from "../components/CustomButton";
import Accordions from "../components/Accordions";
import CustomDrawer from "../components/CustomDrawer";

const useStyles = makeStyles({
  background: {
    backgroundSize: "cover",
    height: "100vh",
  },
  leftSection: {
    padding: "0 5% 0 2%",
    background: `linear-gradient(90deg, black 70%, transparent 100%)`,
  },
  titleWrapper: {
    height: "20vh",
    paddingTop: "25%",
  },
  title: {
    color: "#FFFFFF",
    fontSize: "2.5rem",
    fontWeight: "bold",
    lineHeight: 1,
  },
  subtitleWrapper: {
    height: "6vh",
  },
  subtitle: {
    color: "#E0E0E0",
    fontSize: "1.3rem",
    lineHeight: 1,
  },
  paragraphWrapper: {
    paddingLeft: "2%",
    borderLeft: "3px solid #55C6D7",
  },
  paragraph: {
    color: "#FFFFFF",
    fontSize: "1rem",
  },
  buttons: {
    position: "fixed",
    bottom: 0,
    right: 0,
    display: "flex",
    alignItems: "flex-end",
  },
  accordionSection: {
    padding: "4% 45% 4% 5%",
    height: "100vh",
    overflow: "auto",
  },
  hamburgerButton: {
    position: "fixed",
    top: 0,
    right: 0,
    backgroundColor: "#9F9A99",
    color: "#FFFFFF",
    borderRadius: 0,
    height: "5%",
  },
});

const AccordionPage = (props) => {
  const classes = useStyles();
  const value = useContext(RootContext);
  const { openDrawerHandler } = value;

  const {
    title,
    subtitle,
    paragraph,
    backButtonUrl,
    nextButtonUrl,
    accordionPageBackground,
    accordions,
  } = props.page;

  const backButton = {
    name: "back",
    selected: false,
    type: "backButton",
    url: backButtonUrl,
  };

  const nextButton = {
    name: "next",
    selected: false,
    type: "nextButton",
    url: nextButtonUrl,
  };

  return (
    <React.Fragment>
      <Button className={classes.hamburgerButton} onClick={openDrawerHandler}>
        <MenuIcon />
      </Button>
      <CustomDrawer />
      <Grid
        container
        className={classes.background}
        style={{
          backgroundImage: `url(${accordionPageBackground})`,
        }}
      >
        <Grid item xs={3} className={classes.leftSection}>
          <Grid container>
            <Grid item xs={12} className={classes.titleWrapper}>
              <Typography className={classes.title}>{title}</Typography>
            </Grid>
            <Grid item xs={12} className={classes.subtitleWrapper}>
              <Typography className={classes.subtitle}>{subtitle}</Typography>
            </Grid>
            <Grid item xs={12} className={classes.paragraphWrapper}>
              <Typography className={classes.paragraph}>{paragraph}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9} className={classes.accordionSection}>
          <Accordions accordions={accordions} />
        </Grid>
      </Grid>
      <div className={classes.buttons}>
        <CustomButton button={backButton} />
        <CustomButton button={nextButton} />
      </div>
    </React.Fragment>
  );
};

export default withPageHeading(AccordionPage);
