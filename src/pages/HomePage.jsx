import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { RootContext } from "../context/RootContext";
import withPageHeading from "../HOC/WithPageHeading";
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
    padding: "0 12%",
  },
  logo: {
    height: "23vh",
    paddingTop: "10%",
  },
  titleWrapper: {
    height: "8vh",
  },
  title: {
    color: "#FFFFFF",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  text: {
    color: "#FFFFFF",
    fontSize: "1rem",
    marginBottom: "2%",
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

const HomePage = () => {
  const classes = useStyles();
  const value = useContext(RootContext);
  const { title, paragraphs, homePageBackground } = value.pageData.homePage;

  return (
    <Grid className={classes.pageSection} container>
      <Grid className={classes.contentSection} item xs={4}>
        <Grid container>
          <Grid item xs={12} className={classes.content}>
            <Grid container>
              <Grid item xs={12} className={classes.logo}>
                <Logo fontSize="6rem" width="100%" />
              </Grid>
              <Grid item xs={12} className={classes.titleWrapper}>
                <Typography className={classes.title}>{title}</Typography>
              </Grid>
              <Grid item xs={12}>
                {paragraphs.map((paragraph, i) => (
                  <div key={i}>
                    <Typography className={classes.text}>
                      {paragraph}
                    </Typography>
                  </div>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.contentSectionBottom}></Grid>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Grid container>
          <Grid
            item
            xs={12}
            className={classes.background}
            style={{
              backgroundImage: `url(${homePageBackground})`,
            }}
          ></Grid>
          <Grid item xs={12} className={classes.bottomSection}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withPageHeading(HomePage);
