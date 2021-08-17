import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import withPageHeading from "../HOC/WithPageHeading";
import { RootContext } from "../context/RootContext";
import Logo from "../components/Logo";
import PlayBar from "../components/PlayBar";
import CustomButton from "../components/CustomButton";

import globeImg from "../assets/img/globe.png";

const useStyles = makeStyles({
  mainSection: {
    height: "95vh",
    backgroundColor: "#08395B",
  },
  playBarSection: {
    height: "5vh",
    backgroundColor: "#FFFFFF",
    opacity: 0.8,
    padding: "0 20% 0 30%",
    display: "flex",
  },
  contentSection: {
    paddingLeft: "20%",
  },
  titleSection: {
    height: "33vh",
    padding: "20% 0 0 10%",
    color: "#FFFFFF",
  },
  title: {
    fontSize: "2rem",
  },
  logoSection: {
    height: "33vh",
  },
  beginBannerSection: {
    height: "33vh",
  },
  globeImgWrapper: {
    margin: "auto",
  },
  globeImg: {
    width: "95%",
  },
});

const WelcomePage = () => {
  const classes = useStyles();
  const value = useContext(RootContext);
  const { title, beginText, url } = value.pageData.welcomePage;

  const beginBanner = {
    name: beginText,
    type: "beginBannerButton",
    selected: false,
    url: url,
  };

  return (
    <>
      <Grid container className={classes.mainSection}>
        <Grid item xs={6}>
          <Grid container className={classes.contentSection}>
            <Grid className={classes.titleSection} item xs={12}>
              <Typography className={classes.title}>{title}</Typography>
            </Grid>
            <Grid className={classes.logoSection} item xs={12}>
              <Logo fontSize="5.5rem" width="70%" />
            </Grid>
            <Grid className={classes.beginBannerSection} item xs={12}>
              <CustomButton button={beginBanner} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} className={classes.globeImgWrapper}>
          <img className={classes.globeImg} src={globeImg} alt="globe" />
        </Grid>
      </Grid>
      <section className={classes.playBarSection}>
        <PlayBar />
      </section>
    </>
  );
};

export default withPageHeading(WelcomePage);
