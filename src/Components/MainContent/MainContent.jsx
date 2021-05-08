import React, { useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useInView } from "react-intersection-observer";
import AboutMe from "./AboutMe/AboutMe";

import {
  motion,
  useAnimation,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const useStyles = makeStyles({
  root: {
    // overflowY: "auto",
    width: "100%",
    padding: "20px 30px",
    position: "relative",
  },
  svgPath: {
    fill: "none",
    strokeWidth: 5,
  },
});

const MainContent = () => {
  const svgControls = useAnimation();
  const classes = useStyles();

  const theme = useTheme();
  const isSmDo = useMediaQuery(theme.breakpoints.down("sm"));

  const { scrollY, scrollYProgress } = useViewportScroll();

  const path = useRef();
  const star = useRef();
  const ini = useRef();
  const end = useRef();

  const svgPathY = useTransform(
    scrollYProgress,
    isSmDo ? [0, 0.05, 0.1] : [0, 0.2, 0.3],
    [0, 0.5, 1]
  );

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  useEffect(() => {
    const curveLength = path.current.getTotalLength();

    ini.current.setAttribute(
      "transform",
      "translate(" +
        (path.current.getPointAtLength(0).x - 15) +
        "," +
        (path.current.getPointAtLength(0).y - 15) +
        ")"
    );

    end.current.setAttribute(
      "transform",
      "translate(" +
        (path.current.getPointAtLength(curveLength).x - 15) +
        "," +
        (path.current.getPointAtLength(curveLength).y - 15) +
        ")"
    );
  }, []);

  const y1 = useTransform(scrollY, [0, 200], [0, 160]);

  // const pathLength = useSpring(scrollYProgress, {
  //   stiffness: 400,
  //   damping: 90,
  // });

  const yScroll = useSpring(y1, {
    stiffness: 200,
    damping: 90,
  });
  console.log("scr ", y1);

  return (
    <>
      <div className={classes.root}>
        <motion.svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100%"
          height="400px"
          viewBox="0 0 800 300"
          enableBackground="new 0 0 800 300"
          className={classes.svgPath}
          style={{ y: yScroll, position: "absolute", width: "80%" }}
        >
          <motion.polygon
            ref={ini}
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollYProgress.current ? 1 : 0 }}
            points="15,0 18.541,11.459 30,11.459 20.729,18.541 24.271,30 15,22.918 5.729,30 9.271,18.541 0,11.459 11.459,11.459 	"
            style={{ stroke: "red" }}
          />
          <motion.polygon
            ref={end}
            initial={{ opacity: 0 }}
            points="15,0 18.541,11.459 30,11.459 20.729,18.541 24.271,30 15,22.918 5.729,30 9.271,18.541 0,11.459 11.459,11.459 	"
            style={{ stroke: "blue" }}
          />

          <motion.polygon
            ref={star}
            initial={{ opacity: 0 }}
            points="15,0 18.541,11.459 30,11.459 20.729,18.541 24.271,30 15,22.918 5.729,30 9.271,18.541 0,11.459 11.459,11.459 	"
            style={{ stroke: "#DABDD8" }}
          />
          <motion.path
            initial={{ pathLength: 0, pathOffset: 0 }}
            style={{ pathLength: svgPathY }}
            animate={svgControls}
            d="M29.833,113.5C29.833,178.667,99,271.334,257,271.334 S475.5,81,375.5,81S305,271.334,770,271.334"
            stroke="#FFFFFF"
            fill="none"
            ref={path}
          />
        </motion.svg>
        <motion.div className={classes.content}>
          {/* <canvas id="noise" class="noise" / > */}
          <AboutMe />
        </motion.div>
      </div>
    </>
  );
};

export default MainContent;
