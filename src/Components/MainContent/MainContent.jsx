import React, { useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useStyles = makeStyles({
  root: {
    overflowY: "auto",
    width: "100%",
    maxHeight: "80vh",
    overflow: "auto",
    // borderTop: "1px solid #fff",
    // borderBottom: "1px solid #fff",
    padding: "20px 30px",
  },
});

const MainContent = () => {
  const { scrollY } = useViewportScroll();

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
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
      </div>
    </>
  );
};

export default MainContent;
