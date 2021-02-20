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
            <img
              src={"/Building2.jpg"}
              style={{ width: "90%", marginTop: 30 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={6}
          style={{ height: "auto", alignContent: "flex-start" }}
        >
          <Grid item xs={12} style={{ marginBottom: 40 }}>
            <p className={textStyles.contentTextLight2}>
              <b style={{ fontSize: 22 }}>Liverpool Street Capital Advisors</b>
            </p>
            <p className={textStyles.contentTextLight2}>46 New Broad Street</p>
            <p className={textStyles.contentTextLight2}>London</p>
            <p className={textStyles.contentTextLight2}>EC2M 1JH</p>
          </Grid>
          <Grid item xs={6}>
            <p className={textStyles.contentTextLight2}>
              <b style={{ fontSize: 22 }}>Jason Green</b>
            </p>
            <p className={textStyles.contentTextLight2}>Partner</p>
            <p className={textStyles.contentTextLight2}>
              <a href="mailto:jasongreen@lscapitaladvisors.co.uk">
                jasongreen@lscapitaladvisors.co.uk
              </a>
            </p>
            <p className={textStyles.contentTextLight2}>+44 (0) 203 651 5560</p>
            <p className={textStyles.contentTextLight2}>+44 (0) 7764 235 474</p>
          </Grid>
          <Grid item xs={6}>
            <p className={textStyles.contentTextLight2}>
              <b style={{ fontSize: 22 }}>Andrew Golding</b>
            </p>
            <p className={textStyles.contentTextLight2}>Partner</p>
            <p className={textStyles.contentTextLight2}>
              <a href="mailto:andrewgolding@lscapitaladvisors.co.uk">
                andrewgolding@lscapitaladvisors.co.uk
              </a>
            </p>
            <p className={textStyles.contentTextLight2}>+44 (0) 203 651 5561</p>
            <p className={textStyles.contentTextLight2}>+44 (0) 7788 233006</p>
          </Grid>

          <Grid item xs={12} style={{ marginTop: 40 }}>
            <p className={textStyles.contentTextLight2}>
              <b style={{ fontSize: 22 }}>Kelsey North</b>
            </p>
            <p className={textStyles.contentTextLight2}>EA to the Partners</p>
            <p className={textStyles.contentTextLight2}>
              <a href="mailto:kelseynorth@lscapitaladvisors.co.uk">
                kelseynorth@lscapitaladvisors.co.uk
              </a>
            </p>
            <p className={textStyles.contentTextLight2}>+44 (0) 203 651 5562</p>
            <p className={textStyles.contentTextLight2}>+44 (0) 7584 668337</p>
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
