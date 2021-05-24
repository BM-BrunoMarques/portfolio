import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import Typography from "@material-ui/core/Typography";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const NavMenus = ({ smallerWindow }) => {
  const theme = useTheme();
  const isSmDo = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));

  const useStyles = makeStyles({});
  const classes = useStyles();

  return (
    <>
      <Typography
        color="primary"
        variant="h4"
        textAnchor="middle"
        style={{
          position: "absolute",
          marginLeft: smallerWindow ? "-20%" : "",
        }}
      >
        MENUS
      </Typography>
    </>
  );
};

export default NavMenus;
