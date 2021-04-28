import "./App.css";
import LogoAvatar from "./LogoAvatar/LogoAvatar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import MainContent from "./MainContent/MainContent";

const useStyles = makeStyles({
  root: {
    border: "30px solid #0d0d0d",
  },
  wrapper: {
    height: "calc(100vh - 60px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerMain: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const CustomBackground = styled("div")({
  backgroundImage: "radial-gradient(#FFF 1px, #000 1px)",
  backgroundSize: "30px 30px",
  width: "90%",
  top: 0,
  height: "100%",
  position: "absolute",
  zIndex: -1,
});

function App() {
  const classes = useStyles();
  return (
    <div className={`App`}>
      <Grid container className={classes.root}>
        <Grid item md={7} xs={12} className={classes.wrapper}>
          <Grid item md={10} xs={12} className={classes.innerMain}>
            <MainContent />
          </Grid>
        </Grid>
        <Grid
          item
          component={motion.div}
          md={5}
          xs={12}
          className={classes.wrapper}
          style={{ position: "relative" }}
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
          <LogoAvatar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
