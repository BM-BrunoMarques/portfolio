import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { motion, useViewportScroll } from "framer-motion";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";

const NavMenus = ({ smallerWindow }) => {
  const theme = useTheme();
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

  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const useStyles = makeStyles({});
  const classes = useStyles();

  const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5",
      backgroundColor: "rgb(0 0 0 / 80%)",
      padding: "12px",
      marginTop: "45px",
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
        {isSmUp ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "1.8em",
            }}
          >
            <Link className="about" href="#aboutMe" style={{ color: "#FFF" }}>
              ABOUT ME
            </Link>
            <Link
              className="projects"
              href="#projects"
              style={{ color: "#FFF" }}
            >
              PROJECTS
            </Link>
          </div>
        ) : (
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "1.8em",
              position: "fixed",
              top: "30px",
              left: "30px",
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
              <MenuIcon />
            </Button>
            <StyledMenu>
              <MenuItem onClick={handleClose}>
                <Link className="about" href="#aboutMe">
                  ABOUT ME
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className="projects" href="#projects">
                  PROJECTS
                </Link>
              </MenuItem>
            </StyledMenu>

            {/* aaaaaaaaaa */}
            {/* <Button
              ref={divRef}
              style={{ color: "#FFF" }}
              aria-haspopup="true"
              onClick={handleClick}
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              <MenuIcon />
            </Button>

            <StyledMenu
              id={id}
              keepMounted
              anchorEl={anchorEl}
              open={anchorEl}
              onClose={handleClose}
            >
              <Link href="#aboutMe" style={{ color: "#FFF", display: "flex" }}>
                <SendIcon fontSize="small" />
                <ListItemText primary="ABOUT ME" />
              </Link>

              <Link href="#projects" style={{ color: "#FFF", display: "flex" }}>
                <SendIcon fontSize="small" />
                <ListItemText primary="PROJECTS" />
              </Link>
            </StyledMenu> */}
            {/* aaaaaaa */}

            {/* <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link className="about" href="#aboutMe">
                  ABOUT ME
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className="projects" href="#projects">
                  PROJECTS
                </Link>
              </MenuItem>
            </Menu> */}
          </motion.div>
        )}
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
