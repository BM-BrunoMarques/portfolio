import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {
  SVGcaliforniaGeography,
  SVGcaliforniaText,
  SVGportugalGeography,
  SVGportugalText,
} from "./svg/svgPaths";

const useStyles = makeStyles({
  svgPath: {
    fill: "none",
    strokeWidth: 5,
    margin: "0 auto",
    padding: "10px",
  },
  svgText: {
    stroke: "none",
    fill: "bisque",
  },
});

const FlightAnimation = () => {
  const classes = useStyles();
  const theme = useTheme();
  const svgControls = useAnimation();
  const { scrollY, scrollYProgress } = useViewportScroll();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isMdDo = useMediaQuery(theme.breakpoints.down("md"));
  const screen1080p = useMediaQuery("(max-width:1920px)");

  const path = useRef();
  const star = useRef();
  const planeWrap = useRef();
  const end = useRef();
  const endText = useRef();

  const y1 = useTransform(scrollY, [0, 200, 400], [0, 300, 400]);
  const svgPathY = useTransform(scrollYProgress, [0, 0.05, 0.1], [0, 0.5, 1]);
  const planeRotation = useTransform(
    svgPathY,
    [0, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
    [100, 50, 0, -20, -100, -280, -320]
  );

  const yScroll = useSpring(y1, {
    stiffness: 200,
    damping: 90,
  });

  useEffect(() => {
    scrollYProgress.onRenderRequest(() => {
      const curveLength = path.current.getTotalLength();

      star.current.setAttribute(
        "transform",
        "translate(" +
          (path.current.getPointAtLength(curveLength * svgPathY.current).x -
            50) +
          "," +
          (path.current.getPointAtLength(curveLength * svgPathY.current).y -
            22) +
          ")" +
          "scale(0.12)"
      );
      planeWrap.current.setAttribute(
        "transform",
        `rotate(${planeRotation.current})`
      );
    });
  }, [path]);

  useEffect(() => {
    const curveLength = path.current.getTotalLength();

    star.current.setAttribute(
      "transform",
      "translate(" +
        (path.current.getPointAtLength(curveLength * svgPathY.current).x - 50) +
        "," +
        (path.current.getPointAtLength(curveLength * svgPathY.current).y - 22) +
        ")" +
        "scale(0.12)"
    );

    end.current.setAttribute(
      "transform",
      "translate(" +
        (path.current.getPointAtLength(curveLength).x - 160) +
        "," +
        (path.current.getPointAtLength(curveLength).y - 210) +
        ")"
    );

    endText.current.setAttribute(
      "transform",
      "translate(" +
        (path.current.getPointAtLength(curveLength).x - 160) +
        "," +
        (path.current.getPointAtLength(curveLength).y - 210) +
        ")"
    );
  }, []);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <motion.svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height={!screen1080p ? "400px" : "300px"}
        viewBox="0 0 800 300"
        className={classes.svgPath}
        style={{ y: !isXs ? yScroll : 0 }}
      >
        <g
          transform={`${
            isMdDo ? "translate(-97.695 -82.22)" : "translate(-57.695 -32.22)"
          } ${isMdDo ? "scale(1.8)" : "scale(1)"}`}
        >
          {/* Portugal - START */}
          <motion.path
            d={SVGportugalGeography}
            fill="none"
            stroke="#FFF"
            strokeWidth={2.147}
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit={4}
            strokeDasharray="none"
            strokeOpacity={1}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.4, duration: 0.9 }}
          />
          <motion.path
            d={SVGportugalText}
            className={classes.svgText}
            transform="matrix(.26458 0 0 .26458 57.695 32.22)"
            stroke="#FFF"
            fill="#FFF"
            strokeWidth={2.147}
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit={4}
            strokeDasharray="none"
            strokeOpacity={1}
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1.4 }}
          />
        </g>
        {/* Portugal - end */}

        {/* CALI - START */}
        <g
          transform={`${
            isMdDo ? "translate(-627.695 -202.22)" : "translate(-37.695 -2.22)"
          } ${isMdDo ? "scale(1.8)" : "scale(1)"}`}
        >
          <motion.path
            ref={end}
            d={SVGcaliforniaGeography}
            fill="none"
            stroke="#FFF"
            strokeWidth={2.147}
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit={4}
            strokeDasharray="none"
            strokeOpacity={1}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.4, duration: 0.9 }}
          />
          <motion.path
            ref={endText}
            d={SVGcaliforniaText}
            className={classes.svgText}
            stroke="#FFF"
            fill="#FFF"
            strokeWidth={0.7}
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit={4}
            strokeDasharray="none"
            strokeOpacity={1}
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          />
        </g>
        {/* CALI - END */}

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.2 }}
        >
          <motion.path
            ref={path}
            id="track"
            initial={{ pathLength: 0, pathOffset: 0 }}
            style={{ pathLength: svgPathY }}
            animate={svgControls}
            d="M 45.833 150.5 C 52.833 178.667 99 271.334 257 271.334 S 475.5 81 375.5 81 S 305 271.334 770 271.334"
            stroke="#FFFFFF"
            fill="none"
          />
        </motion.g>
        <motion.g
          initial={{ x: -20, y: -10 }}
          animate={{ x: 0, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <g ref={star}>
            <motion.path
              id="plane"
              style={{
                transformOrigin: "center",
                stroke: " #000",
                fill: "#ebe5e5",
              }}
              ref={planeWrap}
              d="M 439.48098,95.969555 L 393.34268,142.46481 L 305.91233,133.41187 L 324.72376,114.58551 L 308.61525,98.464215 L 276.15845,130.94677 L 185.25346,123.08136 L 201.15145,107.27643 L 186.46085,92.574165 L 158.32,120.73735 L 45.386032,112.12042 L 15.000017,131.66667 L 221.20641,192.48691 L 298.26133,237.01135 L 191.91028,345.62828 L 152.82697,408.6082 L 41.549634,393.05411 L 21.037984,413.58203 L 109.25334,470.93369 L 166.38515,558.95725 L 186.8968,538.42933 L 171.35503,427.06371 L 234.28504,387.94939 L 342.81586,281.51396 L 387.305,358.63003 L 448.07703,565.00001 L 467.60778,534.58989 L 458.99769,421.56633 L 487.16033,393.38134 L 473.14247,379.35235 L 456.6139,395.97492 L 448.79636,303.63439 L 481.25315,271.15184 L 465.14464,255.03055 L 446.33321,273.8569 L 436.04766,185.1164 L 482.35108,138.7864 C 501.1942,119.92833 560.62425,61.834815 564.99998,14.999985 C 515.28999,23.707295 476.1521,61.495405 439.48098,95.969555 z "
              initial={{ fill: "#000", stroke: "#000", opacity: 0 }}
              animate={{ fill: "#fff", stroke: "#FFF", opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
            />
          </g>
        </motion.g>
      </motion.svg>
    </div>
  );
};

export default FlightAnimation;
