import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// import { useInView } from "react-intersection-observer";
import AboutMe from "./AboutMe/AboutMe";
import FlightAnimation from "./FlightAnimation/FlightAnimation";
import Projects from "./Projects/Projects";
import { motion } from "framer-motion";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const MainContent = () => {
  const theme = useTheme();
  const isSmMd = useMediaQuery(theme.breakpoints.down("md"));
  const isSmLg = useMediaQuery(theme.breakpoints.down("lg"));

  const useStyles = makeStyles({
    root: {
      width: "100%",
      padding: "20px 30px",
      position: "relative",
      maxWidth: isSmMd ? "100%" : "90%",
    },
    aboutSection: {
      textAlign: "justify",
    },
    pojectsSecion: {
      marginTop: "20vh",
    },
  });

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <motion.div className={classes.content}>
          <div className={classes.aboutSection}>
            <AboutMe />
            <div style={{ margin: isSmLg ? "40px 5px 5px 5px" : "30px 0" }}>
              <FlightAnimation />
            </div>
          </div>
          <div className={classes.pojectsSecion}>
            <Projects />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default MainContent;
