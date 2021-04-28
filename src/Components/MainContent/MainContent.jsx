import React, { useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    overflowY: "auto",
    width: "100%",
    height: "70%",
    borderTop: "1px solid #fff",
    borderBottom: "1px solid #fff",
    padding: "20px 30px",
  },
});

const MainContent = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Typography color="secondary">ALALAL</Typography>
        <Typography color="primary">
          ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL
          ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL
          ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL
          ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL
          ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL ALALAL
        </Typography>

        
      </div>
    </>
  );
};

export default MainContent;
