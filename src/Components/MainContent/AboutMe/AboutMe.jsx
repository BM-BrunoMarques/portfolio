import React, { useState, useEffect, useRef } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import me from "./img/me.jpg";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  bgsk8: {
    position: "relative",
    display: "grid",
  },
  textBoundary: {
    clipPath: "polygon(37% 0, 100% 0, 100% 61%)",
  },
});
const AboutMe = () => {
  const classes = useStyles();
  const topImg = useRef();
  const botImg = useRef();
  const aboutMe = useRef();
  const [topImgHeight, setTopImgHeight] = useState();

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    window.addEventListener("resize", () => {
      setTopImgHeight(topImg.current.getBoundingClientRect().height);
    });
  }, []);

  useEffect(() => {
    setTopImgHeight(topImg.current.getBoundingClientRect().height);
  }, [topImg.current]);

  return (
    <>
      <div className={classes.bgsk8}>
        <div className={classes.textBoundary} />
        <div className={classes.textBoundary} />
        <div>
          <div ref={aboutMe}>
            <div
              style={{
                display: "grid",
                position: "relative",
                placeItems: "center",
                marginTop: "30px",
              }}
            >
              <div
                style={{
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px",
                  display: "block",
                  border: "1px solid #FFF",
                }}
              />
              <Typography
                style={{ position: "absolute" }}
                color="primary"
                variant="h5"
                textAnchor="middle"
              >
                <span style={{ fontSize: "38px" }}>H</span>
                <span style={{ fontSize: "24px" }}>i</span>
                <span
                  style={{
                    fontSize: "36px",
                    textIndent: "2px",
                    display: "block",
                    cssFloat: "right",
                  }}
                >
                  !
                </span>
              </Typography>
            </div>
            <div
              className="aboutMeText"
              style={{
                margin: "40px auto 0px",
                padding: "10px",
              }}
            >
              <div>
                <Typography color="primary" variant="h5">
                  <span
                    style={{
                      background: "rgba(74, 66, 66, 0.12)",
                      padding: "5px",
                      lineHeight: isXs ? "1.40em" : "1.55em",
                    }}
                  >
                    My name is Bruno Marques and I am a passionate Frontend
                    Developer with over 4 years of programming experience.
                    <br />
                  </span>
                  {!isXs && (
                    <div
                      style={{
                        marginTop: "30px",
                      }}
                    >
                      <span
                        style={{
                          background: "rgba(74, 66, 66, 0.12)",
                          padding: " 0 5px",
                          lineHeight: isXs ? "1.40em" : "1.55em",
                        }}
                      >
                        I am always eager to learn and improve and I strongly
                        believe that everything can be accomplished through hard
                        work and perseverance.
                        <br /> I am easy going, communicative, determined and
                        would never decline an invitation to time travel and see
                        all the cool bands!
                      </span>
                    </div>
                  )}
                </Typography>
              </div>
            </div>
            <div>
              <div style={{ width: "55%", position: "relative" }}>
                {/* <img
                  ref={topImg}
                  style={{
                    clipPath: "polygon(0% 100%, 100% 100%, 0% 0%)",
                    position: "absolute",
                  }}
                  width="100%"
                  src={me}
                />
                 */}
                <div
                  style={{
                    shapeOutside: "ellipse(50% 50% at 50% 50%)",
                    width: "100%",
                    float: "left",
                  }}
                >
                  <img
                    ref={topImg}
                    style={{
                      float: "left",
                      clear: "left",
                      marginTop: "5px",
                      borderRadius: "46%",
                    }}
                    width="100%"
                    // src={me}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
