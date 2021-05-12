import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// import { useInView } from "react-intersection-observer";
import AboutMe from "./AboutMe/AboutMe";
import FlightAnimation from "./FlightAnimation/FlightAnimation";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "20px 30px",
    position: "relative",
  },
});

const MainContent = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <motion.div className={classes.content}>
          <AboutMe />
          <div style={{ margin: "100px 0" }}>
            <FlightAnimation />
          </div>
          {/* <AboutMe />
          <AboutMe />
          <AboutMe />
          <AboutMe />
          <AboutMe />
          <AboutMe />
          <AboutMe /> */}
        </motion.div>
      </div>
    </>
  );
};

export default MainContent;
