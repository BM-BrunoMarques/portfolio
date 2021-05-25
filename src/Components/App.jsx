import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import LogoAvatar from "./LogoAvatar/LogoAvatar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import MainContent from "./MainContent/MainContent";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavMenus from "./NavMenus/NavMenus";
import SocialLinks from "./SocialLinks/SocialLinks";

const CustomBackground = styled("div")({
  backgroundImage: "radial-gradient(#FFF 1px, #000 1px)",
  backgroundSize: "30px 30px",
  width: "90%",
  top: 0,
  height: "100%",
  position: "absolute",
  zIndex: -1,
});

//this will reset scroll on refreshes
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function App() {
  const theme = useTheme();
  const isSmDo = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("md"));
  const deskTopMenus = useMediaQuery("(min-width:1500px)");

  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [hasLoaded, setHasLoaded] = useState(false);

  const useStyles = makeStyles({
    root: {
      marginTop: "30px",
    },
    wrapper: {
      minHeight: isSmDo ? "100vh" : "calc(100vh - 60px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    vertOverlay: {
      width: !isSmDo ? "30px" : "20px",
      height: "100%",
      position: "fixed",
      backgroundColor: "#0d0d0d",
      top: "0",
    },
    horizOverlay: {
      width: "100%",
      height: !isSmDo ? "30px" : "20px",
      position: "fixed",
      backgroundColor: "#0d0d0d",
      left: "0",
    },
    innerMain: {
      height: "100%",
      // display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  const classes = useStyles();
  useEffect(() => {
    setHasLoaded(true);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: hasLoaded ? 1 : 0 }}
      className={`App ${classes.root}`}
    >
      <Grid container>
        <Grid item md={7} xs={12} className={classes.wrapper}>
          <Grid item xs={12} sm={9} className={classes.innerMain}>
            <div>
              <MainContent />
            </div>
          </Grid>
        </Grid>

        <Grid
          item
          component={motion.div}
          md={5}
          xs={12}
          className={classes.wrapper}
          style={{
            position: isMdUp ? "fixed" : "relative",
            right: "7px",
            top: !isXs ? "30px" : "300px",
            width: "100%",
          }}
        >
          <CustomBackground
            component={motion.div}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            animate={{
              backgroundPosition: ["0 10px", "0 1000px"],
            }}
          />
          <div style={{ width: "90%", display: "flex", alignItems: "center" }}>
            <NavMenus smallerWindow={!deskTopMenus} />
            {isSmUp && <SocialLinks smallerWindow={!deskTopMenus} />}
            <LogoAvatar />
          </div>
        </Grid>
      </Grid>
      <>
        <div className={classes.horizOverlay} style={{ top: "0" }} />
        <div className={classes.horizOverlay} style={{ bottom: "0" }} />
        <div className={classes.vertOverlay} style={{ left: "0" }} />
        <div className={classes.vertOverlay} style={{ right: "0" }} />
      </>
    </motion.div>
  );
}

export default App;
