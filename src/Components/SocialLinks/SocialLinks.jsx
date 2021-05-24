import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import DescriptionIcon from "@material-ui/icons/Description";
import resume from "./resume/Bruno_Marques.pdf";

import { motion } from "framer-motion";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const SocialLinks = ({ smallerWindow }) => {
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
          right: "40px",
          marginLeft: smallerWindow ? "-20%" : "",
          border: "1px solid #FFF",
          borderRadius: "35px",
          background: "#000",
          padding: "10px 0",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IconButton style={{ padding: 0 }}>
            <Link className="about" href={resume} target="_blank">
              <DescriptionIcon
                style={{
                  fontSize: !smallerWindow ? "2.3em" : "1.9em",
                  color: "#ffe4c4",
                }}
              />
            </Link>
          </IconButton>
          <IconButton style={{ padding: !smallerWindow ? "" : 0 }}>
            <Link
              className="about"
              href="https://github.com/BM-BrunoMarques"
              target="_blank"
            >
              <GitHubIcon
                style={{ fontSize: !smallerWindow ? "2.3em" : "1.9em" }}
              />
            </Link>
          </IconButton>
          <IconButton style={{ padding: 0 }}>
            <Link
              className="about"
              href="https://www.linkedin.com/in/bruno-marques93/"
              target="_blank"
            >
              <LinkedInIcon
                style={{
                  fontSize: !smallerWindow ? "2.3em" : "1.9em",
                  color: "#0e76a8",
                }}
              />
            </Link>
          </IconButton>
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

export default SocialLinks;
