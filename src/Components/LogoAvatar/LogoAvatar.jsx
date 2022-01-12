import { Grid } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { base64Logo } from "./Animation/base64Logo";
import { drawImage } from "./Animation/ParticleAnimation";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { isSafari } from "react-device-detect";

const LogoAvatar = () => {
  const canvasRef = useRef(null);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const screen1080p = useMediaQuery("(max-width:1920px)");

  const useStyles = makeStyles({
    root: {
      display: "flex",
      // width: "90%",
      height: !isSmall ? "60vh" : "75vh",
      // overflow: "hidden",
      justifyContent: "center",
      boxShadow: "0 0 89px 0px black",
      padding: "30px",
    },
    wrapper: {
      borderRadius: "3%",
      border: "1px solid rgb(255, 255, 255)",
      boxShadow: "rgb(0 0 0) 0px 0px 0px 400px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(0, 0, 0, 0.4)",
      width: "94%",
    },
    canvas: {
      padding: "10px",
      maxWidth: "20rem",
      backgroundColor: "#00000085",
      borderRadius: "50%",
      border: "5px solid #ffffff5c",
      width: !isSmall ? "100%" : "80%",
    },
  });

  const classes = useStyles();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = base64Logo;

    canvas.width = isSafari ? 370 : 400;
    canvas.height = isSafari ? 360 : 400;

    let mouse = {
      x: null,
      y: null,
      radius: 80,
    };

    let particleArray = [];

    image.onload = () => {
      ctx.drawImage(image, 0, 0);
      drawImage(ctx, canvas, mouse, particleArray, image);
    };

    window.addEventListener("mousemove", function (event) {
      if (!isSmall) {
        mouse.x = event.x - canvas.offsetLeft - window.innerWidth / 1.8;
        mouse.y = event.y - canvas.offsetTop;
      }
    });
  }, []);

  return (
    <>
      <div
        className={classes.root}
        style={{ overflow: "hidden", width: "100%" }}
      >
        <div className={classes.wrapper}>
          <canvas
            width={200}
            height={200}
            className={classes.canvas}
            ref={canvasRef}
          />
        </div>
      </div>
    </>
  );
};

export default LogoAvatar;
