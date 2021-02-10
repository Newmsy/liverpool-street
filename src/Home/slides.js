import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles, Paper } from "@material-ui/core";
import { useTextStyles } from "../Styles/TextStyles";
import ReactCardFlip from "react-card-flip";

export const Slides = compose(() => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  const [flipped, setFlipped] = React.useState("");

  return (
    <Grid container xs={6} className={styles.slidesContainer} spacing={5}>
      <CardItem
        title={"Strategic Review"}
        flipped={flipped}
        setFlipped={setFlipped}
        zIndex={3}
      >
        <p className={textStyles.contentTextLightSmallBold}>
          Business / shareholder change
        </p>
        <div className={styles.indented}>
          <p className={textStyles.contentTextLightSmall}>
            • Identify and rank debt / equity solutions
          </p>
          <p className={textStyles.contentTextLightSmall}>
            • Achieve stakeholder objectives
          </p>
          <p className={textStyles.contentTextLightSmall}>
            • Minimise transaction time / disruption / cost
          </p>
        </div>
      </CardItem>
      <CardItem
        title={"Refinancing"}
        flipped={flipped}
        setFlipped={setFlipped}
        zIndex={3}
      >
        <p className={textStyles.contentTextLightSmallBold}>Financial change</p>
        <div className={styles.indented}>
          <p className={textStyles.contentTextLightSmall}>
            • Improve lending terms / generate cash out
          </p>
          <p className={textStyles.contentTextLightSmall}>
            • Introduce new lenders / investors
          </p>
          <p className={textStyles.contentTextLightSmall}>
            • Extend maturities
          </p>
        </div>
      </CardItem>
      <CardItem
        title={"Restructuring"}
        flipped={flipped}
        setFlipped={setFlipped}
        zIndex={3}
      >
        <p className={textStyles.contentTextLightSmallBold}>
          Business / financial distress
        </p>
        <div className={styles.indented}>
          <p className={textStyles.contentTextLightSmall}>
            • Keep you in control / preserve equity value
          </p>
          <p className={textStyles.contentTextLightSmall}>
            • Remove problem lenders
          </p>
          <p className={textStyles.contentTextLightSmall}>
            • Introduce new capital to facilitate turnaround plan
          </p>
        </div>
      </CardItem>
      <CardItem
        title={"Accelerated M&A"}
        flipped={flipped}
        setFlipped={setFlipped}
        zIndex={2}
      >
        <p className={textStyles.contentTextLightSmallBold}>
          Asset / division divestment
        </p>
        <div className={styles.indented}>
          <p className={textStyles.contentTextLightSmall}>
            • Disposal to delever / raise money
          </p>
          <p className={textStyles.contentTextLightSmall}>
            • Part of financial restructuring / balance sheet optimisation
          </p>
          <p className={textStyles.contentTextLightSmall}>
            • Transform borrower leverage profile
          </p>
        </div>
      </CardItem>
      <CardItem
        title={"Staple Financing"}
        flipped={flipped}
        setFlipped={setFlipped}
        zIndex={2}
      >
        <p className={textStyles.contentTextLightSmallBold}>Sell-side advice</p>
        <div className={styles.indented}>
          <p className={textStyles.contentTextLightSmall}>
            • Remove funding uncertainty
          </p>
          <p className={textStyles.contentTextLightSmall}>
            • Set hurdle for bidders
          </p>
          <p className={textStyles.contentTextLightSmall}>
            • Maximise competitive tension in your process
          </p>
        </div>
      </CardItem>
      <CardItem
        title={"Acquisition Facilities"}
        flipped={flipped}
        setFlipped={setFlipped}
        zIndex={2}
      >
        <p className={textStyles.contentTextLightSmallBold}>Buy-side advice</p>
        <div className={styles.indented}>
          <p className={textStyles.contentTextLightSmall}>
            • Beat staple to give you competitive advantage
          </p>
          <p className={textStyles.contentTextLightSmall}>
            • Confirm deliverability
          </p>
          <p className={textStyles.contentTextLightSmall}>
            • Enable you to focus on deal fundamentals / value drivers
          </p>
        </div>
      </CardItem>
      <CardItem
        title={"Hedging Products"}
        flipped={flipped}
        setFlipped={setFlipped}
        zIndex={1}
      >
        <p className={textStyles.contentTextLightSmallBold}>Risk reduction</p>
        <div className={styles.indented}>
          <p className={textStyles.contentTextLightSmall}>
            • Linking hedging products to financing goals across
          </p>
          <p className={textStyles.contentTextLightSmall}>• Rates</p>
          <p className={textStyles.contentTextLightSmall}>• Currency</p>
          <p className={textStyles.contentTextLightSmall}>• Commodity</p>
        </div>
      </CardItem>
      <CardItem
        title={"Rating Support"}
        flipped={flipped}
        setFlipped={setFlipped}
        zIndex={1}
      >
        <p className={textStyles.contentTextLightSmallBold}>
          Rating re/negotiation
        </p>
        <div className={styles.indented}>
          <p className={textStyles.contentTextLightSmall}>
            • Effective presentation of credit profile to agencies
          </p>
          <p className={textStyles.contentTextLightSmall}>
            • Optimise rating outcome
          </p>
          <p className={textStyles.contentTextLightSmall}>
            • Achieve tightest spread to gilts
          </p>
        </div>
      </CardItem>
      <CardItem
        title={"Corporate M&A"}
        flipped={flipped}
        setFlipped={setFlipped}
        zIndex={1}
      >
        <p className={textStyles.contentTextLightSmallBold}>
          Corporate acquisition
        </p>
        <div className={styles.indented}>
          <p className={textStyles.contentTextLightSmall}>
            • Raise incremental finance
          </p>
          <p className={textStyles.contentTextLightSmall}>
            • Provide funding / bid certainty
          </p>
          <p className={textStyles.contentTextLightSmall}>
            • Integrate new financing into existing acquiror balance sheet
          </p>
        </div>
      </CardItem>
    </Grid>
  );
});

const CardItem = compose((props) => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  return (
    <Grid
      xs={4}
      item
      className={styles.slideItem}
      style={{ zIndex: props.zIndex }}
    >
      <div
        onMouseEnter={() => props.setFlipped(props.title)}
        onMouseLeave={() => props.setFlipped("")}
        className={styles.itemWrapper}
      >
        <ReactCardFlip
          isFlipped={props.flipped === props.title}
          flipDirection="horizontal"
        >
          <Paper className={styles.paperFront}>
            <Grid
              container
              xs={12}
              alignItems="center"
              justify="center"
              className={styles.paperFront}
            >
              <Grid item style={{ textAlign: "center" }}>
                <h1 className={textStyles.lightThickSubtitleBlue}>
                  {props.title}
                </h1>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={styles.paper}>
            <Grid
              container
              xs={12}
              alignItems="center"
              justify="center"
              className={styles.paperBack}
            >
              <Grid item style={{ padding: 20, paddingBottom: 5 }}>
                {props.children}
              </Grid>
            </Grid>
          </Paper>
        </ReactCardFlip>
      </div>
    </Grid>
  );
});

const useStyles = makeStyles(() => ({
  slidesContainer: { marginBottom: 50 },
  slideItem: {
    borderRadius: 15,
    height: 220,
    cursor: "default",
  },
  paperFront: {
    backgroundColor: "rgba(20,122,122,1)",
    minHeight: 200,
    borderRadius: 15,
    boxShadow: "2px 3px 10px #888888",
  },
  paperBack: {
    backgroundColor: "rgba(0,142,142,0.6)",
    minHeight: 200,
    borderRadius: 15,
    boxShadow: "2px 3px 10px #888888",
  },
  paper: {
    minHeight: 200,
    borderRadius: 15,
  },
  itemWrapper: {
    borderRadius: 15,
  },
  indented: {
    marginLeft: 10,
    marginTop: 20,
  },
}));
