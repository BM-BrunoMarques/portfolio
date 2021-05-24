import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import { AnimatePresence } from "framer-motion";
import stamina from "./mp4/stamina.mp4";
import homeLovers from "./mp4/homelovers.mp4";
import ddbc from "./mp4/ddbc.mp4";
import puroV from "./mp4/puroV.mp4";
import jnabais from "./mp4/jnabais.mp4";
import apcer from "./mp4/apcer.mp4";
import postfeet from "./mp4/postfeet.mp4";
import mnm from "./mp4/mnm.mp4";
import chippers from "./mp4/chippers.mp4";
import wwm from "./mp4/wwm.mp4";
import nswomen from "./mp4/nswomen.mp4";
import btrust from "./mp4/btrust.mp4";
import LazyProject from "./LazyProject/LazyProject";

const vidW = 464;
const vidH = 390;

const projects = [
  {
    width: vidW,
    height: vidH,
    title: "Dunas Douradas Beach Club - Five Start Resort",
    description:
      "Lead developer, worked with a CMS and developed templates from scratch using Vanilla JavaScript, jQuery, HTML5, CSS3 and bootstrap to make the website responsive.",
    src: ddbc,
  },
  {
    width: vidW,
    height: vidH,
    title: "Stamina The Business Fuel - Multimedia Agency",
    description:
      "Lead developer, worked with a CMS and developed templates from scratch using Vanilla JavaScript, jQuery, HTML5, CSS3 and bootstrap to make the website responsive.",
    src: stamina,
  },
  {
    width: vidW,
    height: vidH,
    title: "HomeLovers - Real Estate Company",
    description:
      "Lead developer, worked with a CMS and developed templates from scratch using Vanilla JavaScript, jQuery, HTML5, CSS3 and bootstrap to make the website responsive.",
    src: homeLovers,
  },
  {
    width: vidW,
    height: vidH,
    title: "Puro Verde - Olive Oil Brand",
    description:
      "Lead developer, worked with a CMS and developed templates from scratch using Vanilla JavaScript, jQuery, HTML5, CSS3 and bootstrap to make the website responsive.",
    src: puroV,
  },
  {
    width: vidW,
    height: vidH,
    title: "JNabaisAdvogados - Law Group",
    description:
      "Lead developer, worked with a CMS and developed templates from scratch using Vanilla JavaScript, jQuery, HTML5, CSS3 and bootstrap to make the website responsive.",
    src: jnabais,
  },

  {
    width: vidW,
    height: vidH,
    title: "Chippers - Chips and Sauce Food",
    description:
      "Lead developer, worked with a CMS and developed templates from scratch using Vanilla JavaScript, jQuery, HTML5, CSS3 and bootstrap to make the website responsive.",
    src: chippers,
  },
  {
    width: vidW,
    height: vidH,
    title: "PostFeet - Online Sales",
    description:
      "Lead developer, worked with a CMS and developed templates from scratch using Vanilla JavaScript, jQuery, HTML5, CSS3 and bootstrap to make the website responsive.",
    src: postfeet,
  },
  {
    width: vidW,
    height: vidH,
    title: "MNM - Law Group",
    description:
      "Lead developer, worked with a CMS and developed templates from scratch using Vanilla JavaScript, jQuery, HTML5, CSS3 and bootstrap to make the website responsive.",
    src: mnm,
  },

  {
    width: vidW,
    height: vidH,
    title: "APCERGROUP - Global certification, audit and education services",
    description:
      "Lead developer, worked with a CMS and developed templates from scratch using Vanilla JavaScript, jQuery, HTML5, CSS3 and bootstrap to make the website responsive.",
    src: apcer,
  },
  {
    width: vidW,
    height: vidH,
    title: "World Wide Motors - Online Sales",
    description:
      "Lead developer, worked with a CMS and developed templates from scratch using Vanilla JavaScript, jQuery, HTML5, CSS3 and bootstrap to make the website responsive.",
    src: wwm,
  },
  {
    width: vidW,
    height: vidH,
    title: "BTrust - HR Company",
    description:
      "Lead developer, worked with a CMS and developed templates from scratch using Vanilla JavaScript, jQuery, HTML5, CSS3 and bootstrap to make the website responsive.",
    src: btrust,
  },
  // {
  //   width: vidW,
  //   height: vidH,
  //   title: "",
  //   description:
  //     "Lead developer, worked with a CMS and developed templates from scratch using Vanilla JavaScript, jQuery, HTML5, CSS3 and bootstrap to make the website responsive.",
  //   src: nswomen,
  // },
];

const Projects = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isDoMd = useMediaQuery(theme.breakpoints.down("md"));

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 200, 400], [0, 300, 400]);

  const yScroll = useSpring(y1, {
    stiffness: 200,
    damping: 90,
  });

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

  return (
    <motion.div style={{ y: yScroll }}>
      <Typography
        color="primary"
        variant="h4"
        textAnchor="middle"
        style={{
          textAlign: "center",
          borderBottom: "1px solid #FFF",
          paddingBottom: "15px",
          marginBottom: "80px",
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
          {projects.map((proj, i) => (
            <LazyProject
              key={i}
              width={proj.width}
              height={proj.height}
              title={proj.title}
              description={proj.description}
              src={proj.src}
            />
          ))}
        </div>
      </AnimatePresence>

      <Typography color="primary" variant="h5" textAnchor="middle"></Typography>
    </motion.div>
  );
};

export default Projects;
