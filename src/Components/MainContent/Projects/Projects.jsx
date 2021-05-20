import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LazyLoad from "react-lazy-load";
import { AnimatePresence } from "framer-motion";
import stamina from "./gif/stamina.gif";
import homeLovers from "./gif/homelovers.gif";
import ddbc from "./gif/ddbc.gif";
import puroV from "./gif/puroV.gif";
import jnabais from "./gif/jnabais.gif";
import apcer from "./gif/apcer.gif";
import postfeet from "./gif/postfeet.gif";
import mnm from "./gif/mnm.gif";
import chippers from "./gif/chippers.gif";
import wwm from "./gif/wwm.gif";
import nswomen from "./gif/nswomen.gif";

import LazyImage from "./LazyImage/LazyImage";

const Projects = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isDoMd = useMediaQuery(theme.breakpoints.down("md"));

  const useStyles = makeStyles({
    root: {
      width: "100%",
      padding: "20px 30px",
      position: "relative",
      maxWidth: isDoMd ? "100%" : "90%",
    },
    aboutSection: {
      textAlign: "justify",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Typography
        color="primary"
        variant="h4"
        textAnchor="middle"
        style={{
          textAlign: "center",
          borderBottom: "1px solid #FFF",
          marginBottom: "30px",
          paddingBottom: "15px",
        }}
      >
        Projects
      </Typography>

      <AnimatePresence>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <LazyImage key={3} width={464} height={390} src={ddbc} />
          <LazyImage key={2} width={464} height={390} src={stamina} />
          <LazyImage key={1} width={464} height={390} src={homeLovers} />
          <LazyImage key={4} width={464} height={390} src={puroV} />
          <LazyImage key={5} width={464} height={390} src={jnabais} />
          <LazyImage key={6} width={464} height={390} src={chippers} />
          <LazyImage key={7} width={464} height={390} src={postfeet} />
          <LazyImage key={8} width={464} height={390} src={mnm} />
          <LazyImage key={10} width={464} height={390} src={apcer} />
          <LazyImage key={9} width={464} height={390} src={wwm} />
          <LazyImage key={11} width={464} height={390} src={nswomen} />
        </div>
      </AnimatePresence>

      <Typography color="primary" variant="h5" textAnchor="middle"></Typography>
    </div>
  );
};

export default Projects;
