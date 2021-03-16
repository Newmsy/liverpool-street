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
    <div
      style={{ width: "100%" }}
      class="backgroundimage"
      className={"backgroundimage"}
    >
      <Grid
        container
        xs={12}
        justify="center"
        className={styles.container}
        style={{
          minWidth: 1620,
        }}
      >
        <AppBar changeLoc={changeLoc} />
        <Grid xs={12} className={styles.container}>
          <div>
            <Fade in={!hide} timeout={1000}>
              {props.children}
            </Fade>
          </div>
        </Grid>
      </Grid>
    </div>
  );
});

const useStyles = makeStyles(() => ({
  container: {
    zIndex: 2,
    overflowY: "hidden",
    minWidth: 1620,
  },
}));
