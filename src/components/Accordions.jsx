import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  heading: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  accordion: {
    marginBottom: "3%",
    backgroundColor: "#55C6D7",
    borderRadius: 0,
  },
  accordionSummary: {
    minHeight: "4rem",
  },
  accordionDetails: {
    backgroundColor: "#FFFFFF",
  },
  text: {
    paddingTop: "3%",
  },
});

const Accordions = (props) => {
  const classes = useStyles();
  const { accordions } = props;

  return (
    <div>
      {accordions.map((accordion, i) => (
        <Accordion className={classes.accordion} square={true} key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className={classes.accordionSummary}
          >
            <Typography className={classes.heading}>
              {accordion.heading}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Typography className={classes.text}>{accordion.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Accordions;
