import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import me from "./img/me.jpg";

const useStyles = makeStyles({
  bgsk8: {},
});
const AboutMe = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.bgsk8}>
        <div>
          <img width="70%" src={me} />
        </div>
        <Typography color="primary" variant="h2">
          About Me
        </Typography>
      </div>
    </>
  );
};

export default AboutMe;
