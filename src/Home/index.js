import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles } from "@material-ui/core";

export const Home = compose(() => {
  const styles = useStyles();
  return (
    <Grid container xs={10} className={styles.homePageContainer}>
      <Grid>
        <h1 className={styles.homeTitle}>Catchy Title Goes Here</h1>
      </Grid>
    </Grid>
  );
});

const useStyles = makeStyles(() => ({
  homePageContainer: {
    justifyContent: "center",
    marginTop: 100,
  },
  homeTitle: {
    fontFamily: "ArialLight",
    fontSize: 80,
    fontWeight: 100,
  },
}));
