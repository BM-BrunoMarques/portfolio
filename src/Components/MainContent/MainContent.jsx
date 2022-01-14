import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// import { useInView } from "react-intersection-observer";
import AboutMe from "./AboutMe/AboutMe";
import FlightAnimation from "./FlightAnimation/FlightAnimation";
import Projects from "./Projects/Projects";
import { motion } from "framer-motion";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import Link from "@material-ui/core/Link";
import { isMobile } from "react-device-detect";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import zIndex from "@material-ui/core/styles/zIndex";

const MainContent = () => {
  const theme = useTheme();
  const isSmMd = useMediaQuery(theme.breakpoints.down("md"));
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
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
    contacts: {
      color: "#fff",
      position: "fixed",
      bottom: "0",
      width: "100%",
      background: isMobile ? "#1d1d1d" : "#0d0d0d",
      left: "0",
      fontSize: "1.6em",
      zIndex: 1,
      padding: "5px",
      fontSize: isSmMd ? "1.2em" : "1.6em",
    },
    contactWrapper: {
      display: "flex",
      maxWidth: "600px",
      justifyContent: "space-around",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
    },
  });

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <motion.div className={classes.content}>
          <div className={classes.aboutSection}>
            <AboutMe />
            {!isXs && (
              <div style={{ margin: isSmLg ? "40px 5px 5px 5px" : "30px 0" }}>
                <FlightAnimation />
              </div>
            )}
          </div>
          <div className={classes.pojectsSecion}>
            <Projects />
          </div>
        </motion.div>
        <div className={classes.contacts}>
          <div className={classes.contactWrapper}>
            <Link
              className={classes.contactItem}
              href={`mailto:BFDM.93@GMAIL.COM`}
            >
              <EmailIcon style={{ marginRight: "5px" }} /> BFDM.93@GMAIL.COM
            </Link>
            <Link className={classes.contactItem} href="tel:909-997-9175">
              <PhoneIcon style={{ marginRight: "5px" }} /> (909)-997-9175
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
