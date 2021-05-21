import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Typography } from "@material-ui/core";

const LazyProject = ({ width, height, src, ...rest }) => {
  const wrapper = useRef();
  const [hasShown, setHasShown] = useState(false);
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const { ref, inView, entry } = useInView({
    threshold: [0.2, 0.4],
    rootMargin: "-450px 0px -300px 0px",

    // trackVisibility: true,
    // delay: 100,
    // rootMargin: "300px",
  });

  const useStyles = makeStyles({
    loadingImg: {
      background: "linear-gradient(270deg, #121212, #5a5b5b)",
      backgroundSize: "400% 400%",
      WebkitAnimation: "AnimationName 1s ease infinite",
      MozAnimation: "AnimationName 1s ease infinite",
      OAnimation: "AnimationName 1s ease infinite",
      animation: "AnimationName 1s ease infinite",
    },

    "@-webkit-keyframes AnimationName": {
      "0%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 50%" },
    },
    "@-moz-keyframes AnimationName": {
      "0%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 50%" },
    },
    "@-o-keyframes AnimationName": {
      "0%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 50%" },
    },
    "@keyframes AnimationName": {
      "0%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 50%" },
    },
  });

  const classes = useStyles();

  const variants = {
    appear: {
      y: !hasShown || isXs ? 140 : 0,
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
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: !isXs ? "55px" : "10px",
        minHeight: !isXs && "530px",
        flexDirection: "column",
      }}
      variants={variants}
      initial={{ y: !hasShown ? 140 : 0 }}
      animate={["appear", "changeBg"]}
    >
      <div style={{ width: "100%" }}>
        <Typography color="primary">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            work for COMPANY NAME
          </motion.span>{" "}
          <br />
          <motion.span> Description of the work... ... ...</motion.span>
        </Typography>
      </div>
      <div
        data-inview={inView}
        style={{
          position: "relative",
          minHeight: height / 1.2,
          width: "100%",
          maxWidth: "440px",
        }}
      >
        {hasShown && (
          <motion.img
            initial={{ opacity: 0.2 }}
            animate={{ opacity: inView ? 1 : 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "anticipate", duration: 0.8 }}
            {...rest}
            src={src}
            style={{
              maxWidth: "440px",
              width: "100%",
              height: "auto",
            }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default LazyProject;
