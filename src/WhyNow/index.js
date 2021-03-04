import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles, Paper } from "@material-ui/core";
import { useTextStyles } from "../Styles/TextStyles";
import Carousel from "react-material-ui-carousel";
export const WhyNow = compose(() => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  const [index, setIndex] = React.useState(0);
  // change colour of graphics
  // use left and right arrows to navigate
  // slide the cards
  return (
    <Grid container xs={12} className={styles.homePageContainer}>
      <Grid
        item
        container
        xs={10}
        justifyContent="center"
        style={{
          overflowX: "hidden",
          marginLeft: index === 0 ? 120 : 0,
          marginRight: index === 1 ? 120 : 0,
        }}
      >
        <div
          style={{
            position: "relative",
            left: index === 1 ? 60 : -60,
          }}
        >
          <Carousel
            animation="slide"
            indicators={false}
            autoplay={false}
            interval={1000000000}
            navButtonsAlwaysVisible={true}
            onChange={(index, active) => {
              setIndex(index);
            }}
          >
            <Grid
              item
              container
              alignItems="space-between"
              justifyContent="center"
              style={{
                paddingLeft: 100,
                paddingRight: 50,
                paddingBottom: 20,
                height: 800,
              }}
              spacing={10}
              xs={12}
            >
              <Card imagePath="/Stocks.svg">
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>Financing markets
                  have changed dramatically over the past 20 years and new
                  entrants to the market mean this change is still in its
                  infancy
                </p>
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>Challenger banks,
                  fintech firms, investment funds, family offices and niche
                  providers are playing an increasingly important role in
                  financing markets
                </p>
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>This trend is no
                  longer ‘high finance’; it is relevant to companies of all
                  sizes, across UK plc
                </p>
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>Liverpool Street
                  Capital Advisors enable clients to navigate this changing
                  landscape to find and execute the best financing
                </p>
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>As independent
                  pure-play financing advisors, we do not try to cross-sell you
                  other products or services
                </p>
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>We are free of
                  conflicts of interest and your confidential information will
                  be kept ‘tight’, rather than circulating inside big advisory
                  firms
                </p>
              </Card>
              <Card imagePath="/Experience.svg">
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>Crucially, as well
                  as having long careers in financing markets as lenders and
                  advisors, Jason and Andrew have also been Borrowers / buyers
                  of advisory services
                </p>
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>This experience has
                  sharpened the advisory offering they strive to provide
                </p>
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>Whilst many advisors
                  are focused on the transaction alone, Jason and Andrew’s
                  experience has been that the best advisors are an extension of
                  the client’s team
                </p>
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>This is particularly
                  relevant for clients who: Have many moving parts to their
                  businesses Are frequently users of financing markets Do not
                  always fit the standard categorisations used by lenders
                  (lenders do not easily ‘get’ their business / objectives)
                </p>
              </Card>
              <Card imagePath="/Handshake.svg">
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>In these
                  circumstances, it is not efficient for clients to retain an
                  advisor on a transaction-only basis, and for the advisor to
                  disappear the moment the deal is completed
                </p>
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>Liverpool Street
                  Capital Advisors therefore aim to develop a small number of
                  relationship clients, for whom we will be available 24/7
                </p>
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>We will not ‘start
                  the meter’ each time you call; we will aim to be an extension
                  of your executive team
                </p>
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>Having worked in
                  high-paced family offices, Jason and Andrew both know
                  responsiveness and agility are key. This is the service they
                  strive to provide
                </p>
              </Card>
            </Grid>
            <Grid
              item
              container
              alignItems="space-between"
              justifyContent="center"
              style={{
                paddingLeft: 100,
                paddingRight: 50,
                paddingBottom: 20,
                height: 800,
              }}
              spacing={10}
              xs={12}
            >
              <Card imagePath="/Lockdown.svg">
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>Current equity and
                  credit market strength is a function of unprecedented policy
                  support. Governments across the globe have sought to shore up
                  economies, save jobs and backstop entire sectors
                </p>
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>UK Government ‘bet’
                  was for:{" "}
                  <span className={styles.spacing}>
                    lockdown to control virus (largely successful) no / weak
                    second wave, and / or vaccine …prior to public funds /
                    Government appetite to support being exhausted.
                  </span>
                  <span className={styles.spacing}></span>It remains unclear
                  whether this bet will pay off
                </p>
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>Financing markets
                  currently supportive due to ongoing policy support, but market
                  conditions post March 2021 remain highly uncertain
                </p>
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>Despite vaccine
                  hopes, Liverpool Street Capital Advisors believe financing
                  markets will remain on high alert throughout 2021 & 22 and
                  credit losses will accelerate
                </p>
              </Card>
              <Card imagePath="/Calendar.svg">
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>Liverpool Street
                  Capital Advisors has been created to meet the expected need
                  for financial restructuring advice in 2021 and beyond
                </p>
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>In 2008, financial
                  market commentators debated whether the GFC was a liquidity
                  problem or a solvency problem. It was a liquidity problem,
                  with a worldwide shortage of cash
                </p>
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>2020 is different.
                  Private sectors around the world have a solvency problem due
                  to national governments switching off demand overnight. The
                  financing techniques used in 2008 will not, on their own, work
                  in 2021
                </p>
              </Card>
              <Card imagePath="/Globe.svg">
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>{" "}
                  <span className={styles.spacing}></span>In the immediate
                  post-Covid world, companies will focus on:{" "}
                  <span className={styles.spacing}>
                    Establishing a new ‘basecase’ forecast that management and
                    lenders can believe. Multiple scenario modelling for ongoing
                    disruption to operations. Flexible financial structures:
                    able to withstand a much wider range of possible trading
                    outcomes capable of supporting growth as we emerge from the
                    worst of the lockdowns
                  </span>
                </p>
                <p className={textStyles.contentTextLarge}>
                  • <span className={styles.spacing}></span>Unlike in 2008, the
                  world is currently awash with cash. The challenge is to tap
                  into this wall of liquidity through thoughtful and careful
                  positioning of the credit / investment proposition
                </p>
              </Card>
            </Grid>
          </Carousel>
        </div>
      </Grid>
    </Grid>
  );
});

export const Card = compose((props) => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  return (
    <Grid item xs={4} justify="center" style={{ marginBottom: 30 }}>
      <Paper className={styles.cardPaper} elevation={0}>
        <Box marginTop={2} marginBottom={3}>
          <img src={props.imagePath} className={styles.cardImage} />
        </Box>
        <Box>{props.children}</Box>
      </Paper>
    </Grid>
  );
});

const useStyles = makeStyles(() => ({
  homePageContainer: {
    justifyContent: "center",
    marginTop: 120,
    flexDirection: "column",
    alignItems: "center",
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
  cardImage: {
    width: "20%",
    marginLeft: "40%",
  },
  spacing: {
    marginLeft: 5,
  },
  cardPaper: {
    width: "100%",
    height: "auto",
    borderRadius: 15,
    backgroundColor: "transparent",
    padding: 20,
  },
}));
