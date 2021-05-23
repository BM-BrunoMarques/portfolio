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
  const videoPlayer = useRef();

  const [isPlay, setIsPlay] = useState(false);

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const { ref, inView, entry } = useInView({
    threshold: [0.2, 0.4],
    rootMargin: "-250px 0px -200px 0px",

    // trackVisibility: true,
    // delay: 400,
    // rootMargin: "300px",
  });

  const variants = {
    initialWrap: {
      y: 140,
    },
    appear: {
      y: 0,
      transition: {
        type: "anticipate",
        duration: 1,
        delay: !isXs ? 0.45 : 0.15,
        duration: !isXs ? 0.75 : 0.2,
      },
    },
    changeBg: {
      backgroundColor: inView ? "#090909" : "#000",
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
    videoPlayer?.current?.seekTo(0);
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
        minHeight: !isXs ? "530px" : "100px",
        flexDirection: "column",
      }}
      variants={variants}
    >
      {hasShown && (
        <motion.div
          variants={variants}
          initial="initialWrap"
          animate={["appear", "changeBg"]}
        >
          <div style={{ width: "100%" }}>
            <Typography color="primary">
              <motion.span
                style={{ display: "block" }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                work for COMPANY NAME
              </motion.span>
              <br />
              <motion.span
                style={{ display: "block" }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                Description of the work... ... ...
              </motion.span>
            </Typography>
          </div>
          <motion.div
            // data-inview={inView}
            style={{
              position: "relative",
              // minHeight: height / 1.2,
              width: "100%",
            }}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: inView ? 1 : 0.1 }}
            transition={{
              delay: !isXs ? 0.45 : 0.15,
              duration: !isXs ? 0.35 : 0.2,
            }}
          >
            <>
              <ReactPlayer
                ref={videoPlayer}
                url={ddbc}
                playing={inView}
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
