import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { useTextStyles } from "../Styles/TextStyles";
import { Slides } from "./slides";

export const Home = compose(() => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  return (
    <Grid container xs={12} className={styles.homePageContainer}>
      <Grid item style={{ marginTop: -40, marginBottom: 30 }}>
        <h1 className={textStyles.lightTitle}>World Class Advice</h1>
      </Grid>

      <Grid item container alignItems="space-between" justify="center">
        <Grid item container xs={2} className={styles.contentContainer}>
          <Grid item xs={12}>
            <p className={textStyles.contentTextLight}>
              We are a mid-market focussed adviser covering:
            </p>
            <div className={styles.indented}>
              <p className={textStyles.contentTextLightTight}>• Real Estate</p>
              <p className={textStyles.contentTextLightTight}>• Corporate</p>
              <p className={textStyles.contentTextLightTight}>
                • Energy, Mining & Infrastructure
              </p>
              <p className={textStyles.contentTextLightTight}>
                • Private (bank and fund) markets and public (capital) markets
              </p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <p className={textStyles.contentTextLight}>
              We apply our world class experience across all major credit
              classes to help your business.
            </p>
          </Grid>
          <Grid item xs={12}>
            <p className={textStyles.contentTextLight}>
              We strive to select the best elements from each credit market in
              order to create bespoke solutions for our clients.
            </p>
          </Grid>
          <Grid item xs={12}>
            <p className={textStyles.contentTextLight}>
              We believe this is unique in the debt advisory and financial
              restructuring market which is why we call this
              <img
                src="/UnconventionalWisdom.png"
                alt="Liverpool Street Capital Advisors"
                className={styles.unconventionalWisdom}
              />
            </p>
          </Grid>
        </Grid>

        <Slides />
        <Grid item container xs={2} className={styles.contentContainer}></Grid>
      </Grid>
    </Grid>
  );
});

const useStyles = makeStyles(() => ({
  homePageContainer: {
    justifyContent: "center",
    marginTop: 60,
    flexDirection: "column",
    alignItems: "center",
  },
  unconventionalWisdom: {
    width: 230,
    verticalAlign: "text-top",
    position: "relative",
    bottom: 5,
    left: 8,
    imageRendering: "-webkit-optimize-contrast",
  },
  homeTitle: {
    fontFamily: "ArialLight",
    fontSize: 80,
    fontWeight: 100,
  },
  indented: {
    marginLeft: 10,
    paddingRight: 10,
  },
  contentContainer: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    paddingBottom: 50,
    flexDirection: "row",
    alignContent: "space-between",
  },
}));
