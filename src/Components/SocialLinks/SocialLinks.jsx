import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import DescriptionIcon from "@material-ui/icons/Description";
import resume from "./resume/Bruno_Marques.pdf";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { motion, useViewportScroll } from "framer-motion";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import InfoIcon from "@material-ui/icons/Info";

const SocialLinks = ({ smallerWindow }) => {
  const theme = useTheme();

  const isMdDo = useMediaQuery(theme.breakpoints.down("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const divRef = React.useRef();
  const [visibleMenus, setVisibleMenus] = useState(true);
  const { scrollY, scrollYProgress } = useViewportScroll();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5",
      backgroundColor: "rgb(0 0 0 / 80%)",
      padding: "12px",
      marginTop: "55px",
    },
  })((props) => (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      {...props}
    />
  ));

  scrollY.onChange(() => {
    if (!isSmUp) {
      if (scrollY.current < scrollY.prev) {
        setVisibleMenus(true);
      } else {
        setVisibleMenus(false);
      }
    }
  });

  return (
    <>
      {isSmUp ? (
        <Typography
          variant="h4"
          textAnchor="middle"
          style={{
            position: "absolute",
            right: "40px",
            marginLeft: smallerWindow ? "-20%" : "",
            border: "1px solid #FFF",
            borderRadius: "35px",
            background: "#000",
            padding: isMdDo ? "10px 5px" : "10px 0",
          }}
        >
          <div
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
                    color: "#0a66c2",
                  }}
                />
              </Link>
            </IconButton>
          </div>
        </Typography>
      ) : (
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: "1.8em",
            position: "fixed",
            top: "30px",
            right: "30px",
            padding: "10px",
            background: "#000",
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{
            y: visibleMenus ? 0 : -30,
            opacity: visibleMenus ? 1 : 0,
          }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <Button
            ref={divRef}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            style={{ color: "#FFF" }}
          >
            <InfoIcon />
          </Button>
          <StyledMenu>
            <MenuItem onClick={handleClose}>
              <Link className="about" href={resume} target="_blank">
                <Button
                  variant="contained"
                  color="inherit"
                  style={{ background: "#000", COLOR: "#fff" }}
                  endIcon={
                    <DescriptionIcon
                      style={{
                        fontSize: "2.5em",
                        color: "#ffe4c4",
                      }}
                    />
                  }
                />
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                className="about"
                href="https://github.com/BM-BrunoMarques"
                target="_blank"
              >
                <Button
                  variant="contained"
                  color="inherit"
                  style={{ background: "#000", COLOR: "#fff" }}
                  endIcon={<GitHubIcon style={{ fontSize: "2.5em" }} />}
                />
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                className="about"
                href="https://www.linkedin.com/in/bruno-marques93/"
                target="_blank"
              >
                <Button
                  variant="contained"
                  color="inherit"
                  style={{ background: "#000", color: "#fff" }}
                  endIcon={
                    <LinkedInIcon
                      style={{
                        fontSize: "2.5em",
                        color: "#0a66c2",
                      }}
                    />
                  }
                />
              </Link>
            </MenuItem>
          </StyledMenu>
        </motion.div>
      )}
    </>
  );
};

export default SocialLinks;
