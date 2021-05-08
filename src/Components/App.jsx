import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import LogoAvatar from "./LogoAvatar/LogoAvatar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import MainContent from "./MainContent/MainContent";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const CustomBackground = styled("div")({
  backgroundImage: "radial-gradient(#FFF 1px, #000 1px)",
  backgroundSize: "30px 30px",
  width: "90%",
  top: 0,
  height: "100%",
  position: "absolute",
  zIndex: -1,
});

function App() {
  const theme = useTheme();
  const isSmDo = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const useStyles = makeStyles({
    root: {
      marginTop: "30px",
    },
    wrapper: {
      minHeight: isSmDo ? "100vh" : "calc(100vh - 60px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    vertOverlay: {
      width: "30px",
      height: "100%",
      position: "fixed",
      backgroundColor: "#0d0d0d",
      top: "0",
    },
    horizOverlay: {
      width: "100%",
      height: "30px",
      position: "fixed",
      backgroundColor: "#0d0d0d",
      left: "0",
    },
    innerMain: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  const classes = useStyles();
  return (
    <div className="" className={`App ${classes.root}`}>
      <Grid container>
        <Grid item md={7} xs={12} className={classes.wrapper}>
          <Grid item xs={12} sm={9} className={classes.innerMain}>
            <div>
              <MainContent />
            </div>
          </Grid>
        </Grid>

        <Grid
          item
          component={motion.div}
          md={5}
          xs={12}
          className={classes.wrapper}
          style={{
            position: isMdUp ? "fixed" : "relative",
            right: "7px",
            top: "30px",
            width: "100%",
          }}
        >
          <CustomBackground
            component={motion.div}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            animate={{
              backgroundPosition: ["0 10px", "0 1000px"],
            }}
          />
          {/* <LogoAvatar /> */}
        </Grid>
      </Grid>
      isSmUp && (
      <div className={classes.horizOverlay} style={{ top: "0" }} />
      <div className={classes.horizOverlay} style={{ bottom: "0" }} />
      <div className={classes.vertOverlay} style={{ left: "0" }} />
      <div className={classes.vertOverlay} style={{ right: "0" }} />)
    </div>
  );
}

export default App;
