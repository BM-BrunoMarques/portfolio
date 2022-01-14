import React, { useState, useEffect, useRef } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import me from "./img/me.jpg";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FlightAnimation from "../FlightAnimation/FlightAnimation";

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
  const aboutMe = useRef();
  const [visibleText, setVisibleText] = useState(false);
  const [topImgHeight, setTopImgHeight] = useState();
  const [hoverColor, setHoverColor] = useState(false);
  const screen1080p = useMediaQuery("(max-width:1920px)");

  const animationLetter = (i) => {
    return {
      initial: {
        opacity: 0,
      },
      animate: "visibleText",
      variants: {
        visibleText: () => ({
          opacity: [0, 0.4, 0.8, 1],
          transition: {
            delay: i * 0.03,
          },
        }),
      },
      whileHover: {
        rotate: Math.random() * (-35 - 35) + 35,
        scale: [1, 1.8, 1],
        color: ["#ffe4c4", "#FFF"],
      },
      transition: { duration: 0.2 },
    };
  };
  const animationWord = (i) => {
    return {
      whileHover: {
        scale: 1.1,
        padding: "0 4px 0 0",
        color: "#ffe4c4",
      },
      transition: { duration: 0.1 },
      // animate: {
      //   color: "#ffe4c4",
      //   transition: { duration: 0.3, delay: 1 },
      // },
    };
  };

  // const HiAnimation = (i) => {
  //   return {
  //     initial: {
  //       opacity: 0,
  //     },
  //     animate: "visibleText",
  //     variants: {
  //       visibleText: () => ({
  //         opacity: [0, 0.4, 0.8, 1],
  //         transition: {
  //           delay: i * 0.7,
  //         },
  //       }),
  //     },
  //   };
  // };

  const myText = {
    hello: "Hi!",
    greeting: "I'm Bruno Marques",
    firstP:
      "My name is Bruno Marques and I am a passionate Frontend Developer with over 5 years of programming experience.",
    secondP:
      "Originally from Portugal, currently living in California! I am always eager to learn and improve and I strongly believe that everything can be accomplished through hard work and perseverance. I am easy going, communicative, determined and on my free time I like to exercise, play video games and binge-watch the whole Harry Potter movies whenever the time is right",
  };

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

  useEffect(() => {
    setVisibleText(true);
  }, []);

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 150, 400], [0, 200, 280]);

  const yScroll = useSpring(y1, {
    stiffness: 30,
    // stiffness: 1,
    // damping: 90,
  });

  return (
    <>
      <motion.div style={{ y: !isXs ? yScroll : 0 }} className={classes.bgsk8}>
        <div className={classes.textBoundary} />
        <div className={classes.textBoundary} />
        <div>
          <div ref={aboutMe}>
            <div
              id="aboutMe"
              style={{ position: "absolute", marginTop: "-100PX" }}
            />
            <motion.div
              style={{
                position: "relative",
                overflow: "hidden",
                marginTop: !screen1080p ? "10px" : "5px",
              }}
            >
              <motion.div
                animate={{ scale: !isXs ? 1.5 : 1.3 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                style={{ display: "grid", placeItems: "center" }}
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
                  {[...myText.hello].map((l, i) => (
                    <motion.span
                      key={i}
                      {...animationWord(i)}
                      style={{
                        fontSize: i % 2 === 0 ? "38px" : "24px",
                      }}
                    >
                      {l}
                    </motion.span>
                  ))}
                </Typography>
              </motion.div>
            </motion.div>
            <AnimatePresence>
              {visibleText && (
                <div
                  className="aboutMeText"
                  style={{
                    margin: !screen1080p ? "40px auto 0px" : "20px auto 0px",
                    padding: "10px",
                  }}
                >
                  <div>
                    <Typography
                      color="primary"
                      variant="h5"
                      style={{ textAlign: isXs ? "center" : "" }}
                    >
                      <span
                        style={{
                          background: "rgba(74, 66, 66, 0.12)",
                          padding: "5px",
                          lineHeight: 1,
                        }}
                      >
                        {myText.firstP.split(" ").map((word, wi) => {
                          return (
                            <motion.span
                              className="word"
                              key={wi}
                              style={{
                                marginRight: "8px",
                                display: "inline-block",
                              }}
                            >
                              {[...word]
                                .map((l, i) => (
                                  <motion.span
                                    key={i}
                                    {...animationLetter(wi)}
                                    style={{
                                      display: "inline-block",
                                    }}
                                  >
                                    {l}
                                  </motion.span>
                                ))
                                .concat(" ")}
                            </motion.span>
                          );
                        })}
                        <br />
                      </span>
                      {isXs && (
                        <div
                          style={{
                            margin: "30px 0",
                          }}
                        >
                          <FlightAnimation />
                        </div>
                      )}
                      <div
                        style={{
                          marginTop: !screen1080p ? "30px" : "15px",
                        }}
                      >
                        <span
                          style={{
                            background: "rgba(74, 66, 66, 0.12)",
                            padding: " 0 5px",
                            lineHeight: 1,
                          }}
                        >
                          {myText.secondP.split(" ").map((word, wi) => {
                            return (
                              <motion.span
                                className="word"
                                key={wi}
                                style={{
                                  marginRight: "8px",
                                  display: "inline-block",
                                }}
                              >
                                {[...word]
                                  .map((l, i) => (
                                    <motion.span
                                      key={i}
                                      {...animationLetter(wi)}
                                      style={{
                                        display: "inline-block",
                                      }}
                                    >
                                      {l}
                                    </motion.span>
                                  ))
                                  .concat(" ")}
                              </motion.span>
                            );
                          })}
                        </span>
                      </div>
                    </Typography>
                  </div>
                </div>
              )}
            </AnimatePresence>

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
      </motion.div>
    </>
  );
};

export default AboutMe;
