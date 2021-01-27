import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles } from "@material-ui/core";

export const PageLayout = compose((props) => {
  return (
    <Grid container xs={12}>
      <Grid xs={2}></Grid>
      <Grid xs={10}>{props.children}</Grid>
    </Grid>
  );
});

const useStyles = makeStyles(() => ({}));
