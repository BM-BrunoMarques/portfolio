import { Grid } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { base64Logo } from "./Animation/base64Logo";
import { drawImage } from "./Animation/ParticleAnimation";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const LogoAvatar = () => {
  const canvasRef = useRef(null);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const screen1080p = useMediaQuery("(max-width:1920px)");

  const useStyles = makeStyles({
    root: {
      display: "flex",
      width: "90%",
      height: !screen1080p ? "430px" : "330px",
      overflow: "hidden",
      justifyContent: "center",
      boxShadow: "0 0 89px 0px black",
      borderTop: "1px solid #0f0f0f",
      padding: "30px",
    },
    canvas: {
      background: "rgba(0, 0, 0, 0.8)",
      padding: "10px",
    },
  });

  const classes = useStyles();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = base64Logo;

    canvas.width = 400;
    canvas.height = 400;

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
        mouse.x = screen1080p
          ? event.x - canvas.offsetLeft - window.innerWidth / 1.7
          : event.x - canvas.offsetLeft - window.innerWidth / 1.9;
        mouse.y = event.y - canvas.offsetTop;
      }
    });
  }, []);

  return (
    <>
      <div className={classes.root}>
        <canvas
          style={{
            borderRadius: "100%",
            border: "1px solid #fff",
            boxShadow: "0 0 0 400px #000",
          }}
          width={400}
          height={400}
          className={classes.canvas}
          ref={canvasRef}
        />
      </div>
    </>
  );
};

export default LogoAvatar;
