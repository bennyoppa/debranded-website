import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import withPageHeading from "../HOC/WithPageHeading";
import CustomButton from "../components/CustomButton";
import Logo from "../components/Logo";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  pageSection: {
    height: "100vh",
  },
  contentSection: {
    backgroundColor: "#172843",
  },
  content: {
    height: "76vh",
    backgroundColor: "#23334C",
    padding: "0 10%",
  },
  logoWrapper: {
    height: "20vh",
    paddingTop: "10%",
  },
  titleWrapper: {
    height: "15vh",
  },
  title: {
    color: "#FFFFFF",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  buttonWrapper: {
    height: "5vh",
  },
  contentSectionBottom: {
    height: "24vh",
    background: `linear-gradient(360deg, rgba(0, 0, 0, 0.95) 5%, rgba(18, 18, 18, 0) 100%)`,
  },
  background: {
    backgroundSize: "cover",
    height: "90vh",
  },
  bottomSection: {
    backgroundColor: "#0A0A0A",
    height: "10vh",
  },
});

const TopicPage = (props) => {
  const classes = useStyles();
  const { title, beginButtonUrl, topicPageBackground } = props.page;

  const button = {
    name: "begin",
    selected: false,
    type: "beginButton",
    url: beginButtonUrl,
  };

  return (
    <Grid className={classes.pageSection} container>
      <Grid className={classes.contentSection} item xs={3}>
        <Grid container>
          <Grid item xs={12} className={classes.content}>
            <Grid container>
              <Grid item xs={12} className={classes.logoWrapper}>
                <Logo fontSize="2rem" width="50%" />
              </Grid>
              <Grid item xs={12} className={classes.titleWrapper}>
                <Typography className={classes.title}>{title}</Typography>
              </Grid>
              <Grid item xs={12} className={classes.buttonWrapper}>
                <CustomButton button={button} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.contentSectionBottom}></Grid>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Grid container>
          <Grid
            item
            xs={12}
            className={classes.background}
            style={{
              backgroundImage: `url(${topicPageBackground})`,
            }}
          ></Grid>
          <Grid item xs={12} className={classes.bottomSection}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withPageHeading(TopicPage);
