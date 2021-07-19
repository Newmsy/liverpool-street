import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles, Paper } from "@material-ui/core";
import { useTextStyles } from "../Styles/TextStyles";
import Carousel from "react-material-ui-carousel";
export const WhyNow = compose(() => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  //
  return (
    <Grid container xs={12} className={styles.homePageContainer}>
      <Grid
        item
        container
        alignItems="flex-start"
        justifyContent="center"
        spacing={2}
        xs={10}
      >
        <Card imagePath="/Globe.svg">
          <p className={textStyles.contentTextLarge}>
            • <span className={styles.spacing}></span>Current equity and credit
            market strength is a function of unprecedented policy support.
            Governments across the globe have sought to shore up economies, save
            jobs and backstop entire sectors of their economies.
          </p>
          <p className={textStyles.contentTextLarge}>
            • <span className={styles.spacing}></span>Whilst financing markets
            are currently supportive due to ongoing policy support, market
            conditions post March 2021 remain highly uncertain. Liverpool Street
            Capital Advisors expect financing markets to remain on high alert
            throughout 2021 / 22 and credit losses are likely to accelerate
            putting pressure on new credit creation.
          </p>

          <p className={textStyles.contentTextLarge}>
            • <span className={styles.spacing}></span>The 2008 global financial
            crash was marked by liquidity problems, with a worldwide shortage of
            cash. 2021 is different. Whilst there is currently ample liquidity
            in the global financial system, private sector firms around the
            world have solvency challenges, due to national governments
            switching off demand overnight. The financing techniques used in
            2008 will not, on their own, work in 2021.
          </p>
        </Card>
        <Card imagePath="/Handshake.svg">
          <p className={textStyles.contentTextLarge}>
            • <span className={styles.spacing}></span>Liverpool Street Capital
            Advisors has been created to meet the expected need for high quality
            financial restructuring advice.
          </p>
          <p className={textStyles.contentTextLarge}>
            • <span className={styles.spacing}></span>As well as having long
            careers in financing markets as lenders, investors and advisors,
            during their time as borrowers, Jason and Andrew have been repeat
            buyers of advisory services, including corporate, legal and
            accounting services.
          </p>
          <p className={textStyles.contentTextLarge}>
            • <span className={styles.spacing}></span>This experience has
            sharpened the advisory offering they seek to provide. Whilst many
            advisors are focused on the immediate financing transaction alone,
            Jason and Andrew’s experience has been that the best advisors are an
            extension of the client’s executive team. We do this by becoming
            integral to our clients' strategic goals.
          </p>

          <p className={textStyles.contentTextLarge}>
            • <span className={styles.spacing}></span>Flexible financial
            structures are required, able to withstand a much wider range of
            possible trading outcomes and capable of supporting growth as
            economies emerge from their national lockdowns.
          </p>
        </Card>
        <Card imagePath="/Stocks.svg">
          <p
            className={textStyles.contentTextLarge}
            style={{ marginBottom: 10 }}
          >
            • <span className={styles.spacing}></span>Liverpool Street Capital
            Advisors' service offering is particularly relevant for clients who:
          </p>
          <div className={styles.indented}>
            <p
              className={textStyles.contentTextLarge}
              style={{ marginBottom: 0, marginTop: 5 }}
            >
              • <span className={styles.spacing}></span>
              have many moving parts to their businesses
            </p>
            <p
              className={textStyles.contentTextLarge}
              style={{ marginBottom: 0, marginTop: 5 }}
            >
              • <span className={styles.spacing}></span>
              are frequent users of financing markets
            </p>
            <p
              className={textStyles.contentTextLarge}
              style={{ marginBottom: 0, marginTop: 5 }}
            >
              • <span className={styles.spacing}></span>
              do not always fit the standard categorisations used by lenders
              (lenders do not easily ‘get’ their business / objectives)
            </p>
          </div>
          <p className={textStyles.contentTextLarge}>
            • <span className={styles.spacing}></span>In these circumstances, it
            is not efficient for clients to retain an advisor on a
            transaction-only basis and for the advisor to disappear the moment
            the deal is completed. Having worked in high-paced, entrepreneurial
            family offices, Jason and Andrew know responsiveness and agility are
            key. Whether our clients are in rapid growth mode or survival mode,
            our commitment to our clients through the business cycle is a
            hallmark of the service we provide.
          </p>
          <p className={textStyles.contentTextLarge}>
            • <span className={styles.spacing}></span> We apply our experience,
            from 177 transactions, for our clients' benefit.
          </p>
        </Card>
      </Grid>
    </Grid>
  );
});

export const Card = compose((props) => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  return (
    <Grid
      item
      container
      xs={4}
      justify="center"
      style={{ marginBottom: 30, justifyContent: "center", }}
    >
      <Grid item>
      <Paper className={styles.cardPaper} elevation={0}>
        <Box marginTop={2} marginBottom={3}>
          <img src={props.imagePath} className={styles.cardImage} />
        </Box>
        <Box>{props.children}</Box>
      </Paper>
      </Grid>
    </Grid>
  );
});

const useStyles = makeStyles(() => ({
  homePageContainer: {
    justifyContent: "center",
    marginTop: 130,
    flexDirection: "row",
    alignItems: "center",
  },
  indented: {
    position: "relative",
    left: 30,
    paddingRight: 30,
    marginTop: 0,
  },
  contentContainer: {
    marginTop: 20,
    paddingBottom: 50,
    flexDirection: "row",
    alignContent: "flex-start",
  },
  cardImage: {
    width: "20%",
    marginLeft: "40%",
  },
  spacing: {
    marginLeft: 5,
  },
  cardPaper: {
    width: 400,
    borderRadius: 15,
    backgroundColor: "transparent",
    padding: 0,
  },
}));
