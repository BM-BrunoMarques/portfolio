import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import { motion } from "framer-motion";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const NavMenus = ({ smallerWindow }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isSmDo = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));

  const useStyles = makeStyles({});
  const classes = useStyles();

  return (
    <>
      <Typography
        // color="primary"
        variant="h4"
        textAnchor="middle"
        style={{
          position: "absolute",
          marginLeft: smallerWindow ? "-11%" : "2%",
          fontSize: smallerWindow ? "1.4em" : "2em",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: "1.4em",
          }}
        >
          <Link className="about" href="#aboutMe">
            About Me
          </Link>
          <Link className="projects" href="#projects">
            Projects
          </Link>
        </motion.div>
      </Typography>
      {/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Typography
          color="primary"
          variant="h4"
          textAnchor="middle"
          style={{
            position: "absolute",
            marginLeft: smallerWindow ? "-20%" : "",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Typography>
      </Menu> */}
      {/* <Typography
        color="primary"
        variant="h4"
        textAnchor="middle"
        style={{
          position: "absolute",
          marginLeft: smallerWindow ? "-20%" : "",
        }}
      >
        About Me Projects
      </Typography> */}
    </>
  );
};

export default NavMenus;
