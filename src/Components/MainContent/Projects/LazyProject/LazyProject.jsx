import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Typography } from "@material-ui/core";
import ReactPlayer from "react-player/lazy";

import ddbc from "../mp4/ddbc.mp4";
import { isMobileSafari } from "react-device-detect";

const LazyProject = ({
  width,
  height,
  src,
  title,
  description,
  url,
  ...rest
}) => {
  const { current, numOfProjects } = rest;
  const wrapper = useRef();
  const [hasShown, setHasShown] = useState(false);
  const theme = useTheme();
  const videoPlayer = useRef();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const [isPlay, setIsPlay] = useState(false);

  const { ref, inView, entry } = useInView({
    threshold: [0.2, 0.4],
    rootMargin: "-250px 0px -200px 0px",
  });

  const variants = {
    initialWrap: {
      y: 30,
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
      backgroundColor: inView ? "rgba(9, 9, 9, 0.5)" : "#000",
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
    // if (hasShown && inView && videoPlayer.current) {
    //   videoPlayer?.current?.seekTo(0);
    // }
    setIsPlay(inView);
  }, [inView]);
  console.log(url);

  return (
    <motion.div
      ref={ref}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: current + 1 == numOfProjects ? "-20rem" : "14rem",
        minHeight: !isXs ? "530px" : "100px",
        flexDirection: "column",
        minHeight: "60vh",
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
            <Typography color="inherit" style={{ padding: "20px" }}>
              <motion.span
                style={{
                  color: "bisque",
                  display: "block",
                  fontSize: "1.3em",
                  fontWeight: 600,
                  display: "flex",
                  flexDirection: "column",
                }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span>{title}</span>
                {url && (
                  <span>
                    <a
                      style={{
                        color: "bisque",
                        fontSize: "1rem",
                        textDecoration: "none",
                      }}
                      href={url}
                      target="_blank"
                    >
                      {url}
                    </a>
                  </span>
                )}
              </motion.span>
              <br />
              <motion.span
                style={{ display: "block", color: "#FFF" }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                {description}
              </motion.span>
            </Typography>
          </div>
          <motion.div
            // data-inview={inView}
            style={{
              position: "relative",
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
                url={src}
                playing={inView}
                controls={isMobileSafari}
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
