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
          <Grid
            item
            xs={12}
            className={styles.textContainer}
            style={{ justifyContent: "flex-end", display: "flex" }}
          >
            <div
              style={{
                width: 369,
                minWidth: 369,
                marginTop: 32,
              }}
            >
              <p className={textStyles.contentText}>
                <b>
                  Liverpool Street Capital Advisors is a mid-market focused
                  boutique advisor applying our experience to cover Corporate,
                  Private Equity, Real Estate, Real Assets and Natural Resources
                  clients.
                </b>
              </p>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            className={styles.textContainer}
            style={{ justifyContent: "flex-end", display: "flex" }}
          >
            <div style={{ width: 369, minWidth: 369 }}>
              <p className={textStyles.contentText}>
                Financing markets have changed dramatically over the past 20
                years and new market entrants mean this change remains in its
                infancy. This trend is no longer ‘high finance’; it is relevant
                to companies of all sizes, in all sectors, across UK plc and
                internationally.
              </p>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            className={styles.textContainer}
            style={{ justifyContent: "flex-end", display: "flex" }}
          >
            <div style={{ width: 369, minWidth: 369 }}>
              <p className={textStyles.contentText}>
                As well as providing our clients with access to the public
                financing markets, we also connect our clients to the clearers,
                challengers, fintechs, investment funds, family offices and
                niche providers which are playing an increasingly important role
                in financing business.
              </p>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            className={styles.textContainer}
            style={{ justifyContent: "flex-end", display: "flex" }}
          >
            <div style={{ width: 369, minWidth: 369 }}>
              <p
                className={textStyles.contentText}
                style={{ textAlign: "justify" }}
              >
                Liverpool Street Capital Advisors enable our clients to navigate
                this changing landscape to find and execute the best financing.
              </p>
            </div>
          </Grid>
        </Grid>

        <Slides />
        <Grid item container xs={2} className={styles.contentContainer}>
          <Grid item xs={12} className={styles.textContainer}>
            <div style={{ width: 369, marginTop: 50 }}>
              <p className={textStyles.contentText}>
                Our partners have deep experience in developed and emerging
                markets across all major credit classes in both public financing
                markets (capital markets) and private markets (bank and
                non-bank).
              </p>
            </div>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <div style={{ width: 369 }}>
              <p className={textStyles.contentText}>
                Our partners have acted on 177 career transactions, involving
                finance totalling GBP42.7BN. They have been lenders, investors,
                borrowers and advisors, giving them a unique perspective on
                financing negotiations, whether for growth or restructuring.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <div style={{ width: 369 }}>
              <p className={textStyles.contentText}>
                Liverpool Street Capital Advisors is a pure-play financing
                advisor, free from conflicts of interest. Our partners seek to
                select the best elements from each credit market in order to
                create bespoke solutions, applying our world class experience to
                help our clients succeed.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <div style={{ width: 369 }}>
              <p
                className={textStyles.contentText}
                style={{ textAlign: "justify" }}
              >
                We believe this is unique in the debt advisory and restructuring
                market and we like to call this
                <img
                  src="/UnconventionalWisdom.png"
                  alt="Liverpool Street Capital Advisors"
                  className={styles.unconventionalWisdom}
                />
                .
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
    width: 220,
    verticalAlign: "text-top",
    position: "relative",
    bottom: 20,
    marginBottom: -10,
    marginLeft: -33,
    marginRight: 2,
    left: 22,
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
    alignContent: "flex-start",
  },
  textContainer: {
    backgroundColor: "transparent",
    padding: 0,
    borderRadius: 5,
    marginBottom: -20,
    marginTop: 0,
  },
}));
