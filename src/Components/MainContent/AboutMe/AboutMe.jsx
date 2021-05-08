import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {
  motion,
  useAnimation,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const useStyles = makeStyles({});

const AboutMe = () => {
  const svgControls = useAnimation();
  const classes = useStyles();

  const theme = useTheme();
  const isSmDo = useMediaQuery(theme.breakpoints.down("sm"));

  const { scrollY, scrollYProgress } = useViewportScroll();

  const svgPathY = useTransform(
    scrollYProgress,
    isSmDo ? [0, 0.05, 0.1] : [0, 0.2, 0.3],
    [0, 0.5, 1]
  );

  const y1 = useTransform(scrollY, [0, 200], [0, 220]);

  // const pathLength = useSpring(scrollYProgress, {
  //   stiffness: 400,
  //   damping: 90,
  // });

  const yScroll = useSpring(y1, {
    stiffness: 200,
    damping: 90,
  });
  console.log(scrollYProgress);

  return (
    <>
      <div className={classes.content}>
        <Typography color="secondary">ALALAL</Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
        <Typography color="primary">
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
          Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru Bru
        </Typography>
      </div>
    </>
  );
};

export default AboutMe;
