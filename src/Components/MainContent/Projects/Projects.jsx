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
import btrust from "./mp4/btrust.mp4";
import admin from "./mp4/admin.mp4";
import crypto from "./mp4/crypto.mp4";
import balt from "./mp4/balt2022.mp4";
import LazyProject from "./LazyProject/LazyProject";

const vidW = 464;
const vidH = 390;

const projects = [
  {
    width: vidW,
    height: vidH,
    title: "BaltGroup - Medical Group",
    description:
      "A responsive website for a medical group with geo location tracking that route the product page differently deppending on the region. Built in Wordpress.",
    src: balt,
    url: "https://baltgroup.com/",
  },
  {
    width: vidW,
    height: vidH,
    title: "Admin Dashboard - Personal Project",
    description:
      "A WebApp UI for an Admin dashboard, with users and orders management. Developed with React.js, TypeScript and Redux ToolKit for the state management. MaterialUI as design library, Formik/Yup for form validation and Framer-Motion for animations",
    src: admin,
    url: "https://admin-brunom.netlify.app/",
  },
  {
    width: vidW,
    height: vidH,
    title: "Crypto Currency Tracker - Personal Project",
    description:
      "A WebApp that displays a list of all the existing coins, via CoinGeck API, on a table with infinite load. Built with React.js, AntD as design library. The data is being fetched dynamically from CoinGecko's API.",
    src: crypto,
    url: "https://crypto-brunom.netlify.app/",
  },
  {
    width: vidW,
    height: vidH,
    title: "JNabaisAdvogados - Law Group",
    description:
      "Lead developer, worked with a CMS and developed templates from scratch using Vanilla JavaScript, jQuery, HTML5, CSS3 and bootstrap to make the website responsive.",
    src: jnabais,
    url: "https://www.jnabais-advogados.pt",
  },
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
    title: "APCERGROUP - Global certification, audit and education services",
    description:
      "Lead developer, worked with a CMS and developed templates from scratch using Vanilla JavaScript, jQuery, HTML5, CSS3 and bootstrap to make the website responsive.",
    src: apcer,
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
    title: "Chippers - Gastronomy",
    description:
      "Lead developer, worked with a CMS and developed templates from scratch using Vanilla JavaScript, jQuery, HTML5, CSS3 and bootstrap to make the website responsive.",
    src: chippers,
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
    <motion.div style={{ y: !isXs ? yScroll : 0 }}>
      <div id="projects" style={{ position: "absolute", marginTop: "20px" }} />
      <Typography
        color="primary"
        variant="h3"
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
          {projects.map((proj, i) => {
            const { url, width, height, title, description, src } = proj;
            return (
              <LazyProject
                key={i}
                current={i}
                numOfProjects={projects.length}
                width={width}
                height={height}
                title={title}
                description={description}
                url={url}
                src={src}
              />
            );
          })}
        </div>
      </AnimatePresence>

      <Typography color="primary" variant="h5" textAnchor="middle"></Typography>
    </motion.div>
  );
};

export default Projects;
