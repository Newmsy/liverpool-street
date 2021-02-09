import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export const LogoSwipe = compose(() => {
  const styles = useStyles();
  const history = useHistory();

  return (
    <div class="wrapper">
      <div class="spinner pie"></div>
      <div class="filler pie"></div>
      <div class="mask"></div>
    </div>
  );
});

const useStyles = makeStyles(() => ({}));
