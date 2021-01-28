import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles } from "@material-ui/core";

export const PageLayout = compose((props) => {
  return (
    <Grid container xs={12} justify="center">
      <Grid xs={12}>{props.children}</Grid>
    </Grid>
  );
});

const useStyles = makeStyles(() => ({}));
