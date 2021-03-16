import React from "react";
import { compose } from "redux";
import { Box, Fade, Grid, makeStyles } from "@material-ui/core";
import { AppBar } from "./AppBar";
import { useHistory } from "react-router-dom";

export const PageLayout = compose((props) => {
  const styles = useStyles();
  const [hide, setHide] = React.useState(false);
  const history = useHistory();
  const changeLoc = (href) => {
    if (href !== window.location.pathname) {
      setHide(true);
      setTimeout(() => history.push(href), 1000);
      setTimeout(() => setHide(false), 1000);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Grid container xs={12} justify="center" className={styles.container}>
        <AppBar changeLoc={changeLoc} />
        <Grid xs={12} className={styles.container}>
          <Fade in={!hide} timeout={1000}>
            {props.children}
          </Fade>
        </Grid>
        <div style={{ overflowY: "hidden" }}>
          <img
            src="/LiverpoolStreet.png"
            alt="Liverpool Street Capital Advisors"
            className={styles.backgroundImage}
            style={{ opacity: 0.1 }}
          />
        </div>
      </Grid>
    </div>
  );
});

const useStyles = makeStyles(() => ({
  backgroundImage: {
    position: "absolute",
    minWidth: 1600,
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    zIndex: 0,
    overflowY: "hidden",
  },
  container: {
    zIndex: 2,
    overflowY: "hidden",
    minWidth: 1600,
  },
}));
