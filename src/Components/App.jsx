import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import LogoAvatar from "./LogoAvatar/LogoAvatar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import MainContent from "./MainContent/MainContent";
import dashedLine from "./svg/dashed-line-vector.svg";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import LeaderLine from "react-leader-line";

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
  const [x1, setX1] = useState();
  const [x2, setX2] = useState();
  const [y1, setY1] = useState();
  const [y2, setY2] = useState();

  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isSmDo = useMediaQuery(theme.breakpoints.down("sm"));

  const pointA = useRef();
  const pointB = useRef();
  const line = useRef();

  // useEffect(() => {
  //   new LeaderLine(pointA.current, pointB.current, {
  //     dash: { animation: true },
  //     color: "white ",
  //     size: 6,
  //   });
  // }, []);

  const useStyles = makeStyles({
    root: {
      border: isSmUp && "30px solid #0d0d0d",
    },
    wrapper: {
      height: isSmDo ? "inherit" : "calc(100vh - 60px)",
      minHeight: isSmDo  && "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
    <div className={`App`}>
      <Grid container className={classes.root}>
        <Grid item md={7} xs={12} className={classes.wrapper}>
          <Grid item xs={12} sm={9} className={classes.innerMain}>
            <div>
              <MainContent />
              <img
                src={dashedLine}
                style={{
                  maxWidth: "830px",
                  maxHeight: "260px",
                  padding: "10px",
                  overflow: "hidden",
                  float: "right",
                }}
              />
            </div>
          </Grid>
        </Grid>

        <Grid
          item
          component={motion.div}
          md={5}
          xs={12}
          className={classes.wrapper}
          style={{ position: "relative" }}
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
          <LogoAvatar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
