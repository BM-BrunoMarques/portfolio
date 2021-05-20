import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";

const LazyProject = ({ width, height, src, ...rest }) => {
  const wrapper = useRef();
  const [hasShown, setHasShown] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold: [0.2, 0.4],
    rootMargin: "-500px 0px -100px 0px",
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

  useEffect(() => {
    if (!hasShown && inView) {
      setTimeout(() => {
        setHasShown(true);
      }, 200);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginBottom: "80px",
      }}
      initial={{ y: !hasShown ? 50 : 0 }}
      animate={{
        backgroundColor: inView ? "#090909" : "#000",
        paddingTop: inView ? "60px" : 0,
        paddingBottom: inView ? "60px" : 0,
        y: !hasShown ? 50 : 0,
      }}
      transition={{ type: "anticipate", duration: 0.4, delay: 0.1 }}
    >
      <div
        data-inview={inView}
        // className={classes.loadingImg}
        style={{
          position: "relative",
          minHeight: height / 1.2,
          background: hasShown ? "" : "",
          maxWidth: "440px",
          width: "100%",
        }}
      >
        {hasShown && (
          <motion.img
            initial={{ opacity: 0.5 }}
            animate={{ opacity: inView ? 1 : 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", duration: 1.3 }}
            {...rest}
            src={src}
            style={{
              maxWidth: "440px",
              height: "auto",
              paddingTop: `${(height / width) * 12}%`,
              paddingBottom: `${(height / width) * 12}%`,
            }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default LazyProject;
