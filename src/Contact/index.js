import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { useTextStyles } from "../Styles/TextStyles";
import { Map } from "./map";

export const Contact = compose(() => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  return (
    <Grid container xs={12} className={styles.contactContainer}>
      <Grid item>
        <h1 className={textStyles.lightTitle}>Contact</h1>
      </Grid>
      <Grid item xs={12}></Grid>
      <Grid item container xs={9}>
        <Grid item xs={6}>
          <Map />
          <Grid item xs={12}>
            <p className={textStyles.contentTextLight}>
              <b>Liverpool Street Capital Advisors</b>
            </p>
            <p className={textStyles.contentTextLight}>46 New Broad Street</p>
            <p className={textStyles.contentTextLight}>London</p>
            <p className={textStyles.contentTextLight}></p>
            <p className={textStyles.contentTextLight}>EC2M 1JH</p>
          </Grid>
        </Grid>
        <Grid item container xs={6} style={{ height: "auto" }}>
          <Grid item xs={6}>
            <p className={textStyles.contentTextLight}>
              <b>Jason Green</b>
            </p>
            <p className={textStyles.contentTextLight}>Partner</p>
            <p className={textStyles.contentTextLight}>
              jasongreen@lscapitaladvisors.co.uk
            </p>
            <p className={textStyles.contentTextLight}>+44 (0) 203 651 5560</p>
            <p className={textStyles.contentTextLight}>+44 (0) 7764 235 474</p>
          </Grid>
          <Grid item xs={6}>
            <p className={textStyles.contentTextLight}>
              <b>Andrew Golding</b>
            </p>
            <p className={textStyles.contentTextLight}>Partner</p>
            <p className={textStyles.contentTextLight}>
              andrewgolding@lscapitaladvisors.co.uk
            </p>
            <p className={textStyles.contentTextLight}>+44 (0) 203 651 5561</p>
            <p className={textStyles.contentTextLight}>+44 (0) 7788 233006</p>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <p className={textStyles.contentTextLight}>
              <b>Kelsey North</b>
            </p>
            <p className={textStyles.contentTextLight}>Head of Operations</p>
            <p className={textStyles.contentTextLight}>
              kelseynorth@lscapitaladvisors.co.uk
            </p>
            <p className={textStyles.contentTextLight}>+44 (0) 203 651 5562</p>
            <p className={textStyles.contentTextLight}>+44 (0) 7584 668337</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});

const useStyles = makeStyles(() => ({
  contactContainer: {
    justifyContent: "center",
    marginTop: 30,
  },
}));
