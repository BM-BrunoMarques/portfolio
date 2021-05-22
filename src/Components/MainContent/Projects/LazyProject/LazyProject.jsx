import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Typography } from "@material-ui/core";
import ReactPlayer from "react-player";

import ddbc from "../mp4/ddbc.mp4";

const LazyProject = ({ width, height, src, ...rest }) => {
  const wrapper = useRef();
  const [hasShown, setHasShown] = useState(false);
  const theme = useTheme();

  const [isPlay, setIsPlay] = useState(false);

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const { ref, inView, entry } = useInView({
    threshold: [0.2, 0.4],
    rootMargin: "-250px 0px -200px 0px",

    // trackVisibility: true,
    // delay: 400,
    // rootMargin: "300px",
  });

  const useStyles = makeStyles({
    // loadingImg: {
    //   background: "linear-gradient(270deg, #121212, #5a5b5b)",
    //   backgroundSize: "400% 400%",
    //   WebkitAnimation: "AnimationName 1s ease infinite",
    //   MozAnimation: "AnimationName 1s ease infinite",
    //   OAnimation: "AnimationName 1s ease infinite",
    //   animation: "AnimationName 1s ease infinite",
    // },
    // "@-webkit-keyframes AnimationName": {
    //   "0%": { backgroundPosition: "0% 50%" },
    //   "50%": { backgroundPosition: "100% 50%" },
    //   "100%": { backgroundPosition: "0% 50%" },
    // },
    // "@-moz-keyframes AnimationName": {
    //   "0%": { backgroundPosition: "0% 50%" },
    //   "50%": { backgroundPosition: "100% 50%" },
    //   "100%": { backgroundPosition: "0% 50%" },
    // },
    // "@-o-keyframes AnimationName": {
    //   "0%": { backgroundPosition: "0% 50%" },
    //   "50%": { backgroundPosition: "100% 50%" },
    //   "100%": { backgroundPosition: "0% 50%" },
    // },
    // "@keyframes AnimationName": {
    //   "0%": { backgroundPosition: "0% 50%" },
    //   "50%": { backgroundPosition: "100% 50%" },
    //   "100%": { backgroundPosition: "0% 50%" },
    // },
  });

  const classes = useStyles();

  const variants = {
    initialWrap: {
      y: 140,
    },
    appear: {
      y: 0,
      transition: {
        type: "anticipate",
        duration: 1,
      },
    },
    changeBg: {
      backgroundColor: inView ? "#090909" : "#000",
      // paddingTop: inView ? "100px" : 0,
      // paddingBottom: inView ? "100px" : 0,
      transition: {
        delay: hasShown ? 0.05 : 0.25,
        type: "anticipate",
        duration: 0.4,
      },
    },
  };

  useEffect(() => {
    if (!hasShown && inView) {
      setHasShown(true);
    }
    setIsPlay(inView);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: !isXs ? "150px" : "40px",
        minHeight: "530px",
        flexDirection: "column",
      }}
      variants={variants}
      animate={["changeBg"]}
    >
      {hasShown && (
        <motion.div variants={variants} initial="initialWrap" animate="appear">
          <div style={{ width: "100%" }}>
            <Typography color="primary">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                work for COMPANY NAME
              </motion.span>
              <br />
              <motion.span> Description of the work... ... ...</motion.span>
            </Typography>
          </div>
          <motion.div
            // data-inview={inView}
            style={{
              position: "relative",
              minHeight: height / 1.2,
              width: "100%",
            }}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: inView ? 1 : 0.1 }}
          >
            <>
              {/* <motion.img
              
              exit={{ opacity: 0 }}
              transition={{ type: "anticipate", duration: 0.8 }}
              {...rest}
              src={src}
              style={{
                maxWidth: "440px",
                width: "100%",
                height: "auto",
              }}
            /> */}
              {/* <motion.div
              initial={{ opacity: 0.2 }}
              animate={{ opacity: inView ? 1 : 0.1 }}
            > */}
              <ReactPlayer
                url={ddbc}
                playing={false}
                controls
                loop
                muted
                width="100%"
                height="80%"
              />
              {/* </motion.div> */}
            </>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LazyProject;
