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
      <Grid item container alignItems="space-between" justify="center">
        <Grid item container xs={2} className={styles.contentContainer}>
          <Grid item xs={12} className={styles.textContainer}>
            <p className={textStyles.contentText}>
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
          <Grid item xs={12} className={styles.textContainer}>
            <p className={textStyles.contentText}>
              We apply our world class experience across all major credit
              classes to help your business.
            </p>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <p className={textStyles.contentText}>
              We strive to select the best elements from each credit market in
              order to create bespoke solutions for our clients.
            </p>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <p className={textStyles.contentText} style={{ textAlign: "left" }}>
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
        <Grid item container xs={2} className={styles.contentContainer}>
          <Grid item xs={12} className={styles.textContainer}>
            <p className={textStyles.contentText}>
              Liverpool Street Capital Advisors have been lenders, advisors and
              borrowers in all major private and public credit classes
            </p>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <p className={textStyles.contentText}>
              We believe this depth of market knowledge and experience of having
              sat at every seat at the table during our careers is unique in the
              debt advisory and financial restructuring market
            </p>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            {/* jusitfy text left and right */}
            <p className={textStyles.contentText}>We have:</p>
            <div className={styles.indented}>
              <p className={textStyles.contentTextLightTight}>
                • The depth of technical product and market knowledge
              </p>
              <p className={textStyles.contentTextLightTight}>• Corporate</p>
              <p className={textStyles.contentTextLightTight}>
                • The experience of having sat at every seat at the table
              </p>
              <p className={textStyles.contentTextLightTight}>
                • The understanding of what you, as client, need and by when
              </p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});

const useStyles = makeStyles(() => ({
  homePageContainer: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "15vh",
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
    marginLeft: 50,
    marginRight: 50,
    paddingBottom: 50,
    flexDirection: "row",
    alignContent: "space-between",
  },
  textContainer: {
    backgroundColor: "transparent",
    padding: 10,
    paddingLeft: 20,
    borderRadius: 5,

    marginBottom: 0,
  },
}));
