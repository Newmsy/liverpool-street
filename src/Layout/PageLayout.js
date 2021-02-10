import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles } from "@material-ui/core";

export const PageLayout = compose((props) => {
  const styles = useStyles();
  return (
    <Grid container xs={12} justify="center">
      <Grid xs={12}>{props.children}</Grid>
      <div>
        <img
          src="/LiverpoolStreet.png"
          alt="Liverpool Street Capital Advisors"
          className={styles.backgroundImage}
          style={{ opacity: 0.1 }}
        />
      </div>
    </Grid>
  );
});

const useStyles = makeStyles(() => ({
  backgroundImage: {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    zIndex: 0,
  },
}));
