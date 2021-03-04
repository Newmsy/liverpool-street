import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles, Paper } from "@material-ui/core";
import { useTextStyles } from "../Styles/TextStyles";
import ReactCardFlip from "react-card-flip";

export const Slides = compose(() => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  const [flipped, setFlipped] = React.useState("");
  const [canAutoFlip, setCanAutoFlip] = React.useState(true);

  window.onload = setTimeout(() => {
    if (canAutoFlip) {
      setFlipped("Strategic Review");
      setCanAutoFlip(false);
    }
  }, 2000);

  window.onload = setTimeout(() => {
    if (canAutoFlip) {
      setFlipped("");
      setCanAutoFlip(false);
    }
  }, 7000);

  return (
    <Grid container className={styles.slidesContainer} spacing={2}>
      <CardItem
        title={"Strategic Review"}
        flipped={flipped}
        setFlipped={setFlipped}
        zIndex={3}
      >
        <p className={textStyles.contentTextGreen}>
          Business / shareholder change
        </p>
        <div className={styles.indented}>
          <p className={textStyles.contentText2}>
            • Identify and rank debt / equity solutions
          </p>
          <p className={textStyles.contentText2}>
            • Achieve stakeholder objectives
          </p>
          <p className={textStyles.contentText2}>
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
        <p className={textStyles.contentTextGreen}>Financial change</p>
        <div className={styles.indented}>
          <p className={textStyles.contentText2}>
            • Improve lending terms / generate cash out
          </p>
          <p className={textStyles.contentText2}>
            • Introduce new lenders / investors
          </p>
          <p className={textStyles.contentText2}>• Extend maturities</p>
        </div>
      </CardItem>
      <CardItem
        title={"Restructuring"}
        flipped={flipped}
        setFlipped={setFlipped}
        zIndex={3}
      >
        <p className={textStyles.contentTextGreen}>
          Business / financial distress
        </p>
        <div className={styles.indented}>
          <p className={textStyles.contentText2}>
            • Keep you in control / preserve equity value
          </p>
          <p className={textStyles.contentText2}>• Remove problem lenders</p>
          <p className={textStyles.contentText2}>
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
        <p className={textStyles.contentTextGreen}>
          Asset / division divestment
        </p>
        <div className={styles.indented}>
          <p className={textStyles.contentText2}>
            • Disposal to delever / raise money
          </p>
          <p className={textStyles.contentText2}>
            • Part of financial restructuring / balance sheet optimisation
          </p>
          <p className={textStyles.contentText2}>
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
        <p className={textStyles.contentTextGreen}>Sell-side advice</p>
        <div className={styles.indented}>
          <p className={textStyles.contentText2}>
            • Remove funding uncertainty
          </p>
          <p className={textStyles.contentText2}>• Set hurdle for bidders</p>
          <p className={textStyles.contentText2}>
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
        <p className={textStyles.contentTextGreen}>Buy-side advice</p>
        <div className={styles.indented}>
          <p className={textStyles.contentText2}>
            • Beat staple to give you competitive advantage
          </p>
          <p className={textStyles.contentText2}>• Confirm deliverability</p>
          <p className={textStyles.contentText2}>
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
        <p className={textStyles.contentTextGreen}>Risk reduction</p>
        <div className={styles.indented}>
          <p className={textStyles.contentText2}>
            • Linking hedging products to financing goals across
          </p>
          <p className={textStyles.contentText2}>• Rates</p>
          <p className={textStyles.contentText2}>• Currency</p>
          <p className={textStyles.contentText2}>• Commodity</p>
        </div>
      </CardItem>
      <CardItem
        title={"Rating Support"}
        flipped={flipped}
        setFlipped={setFlipped}
        zIndex={1}
      >
        <p className={textStyles.contentTextGreen}>Rating re / negotiation</p>
        <div className={styles.indented}>
          <p className={textStyles.contentText2}>
            • Effective presentation of credit profile to agencies
          </p>
          <p className={textStyles.contentText2}>• Optimise rating outcome</p>
          <p className={textStyles.contentText2}>
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
        <p className={textStyles.contentTextGreen}>Corporate acquisition</p>
        <div className={styles.indented}>
          <p className={textStyles.contentText2}>• Raise incremental finance</p>
          <p className={textStyles.contentText2}>
            • Provide funding / bid certainty
          </p>
          <p className={textStyles.contentText2}>
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
  slidesContainer: {
    marginBottom: 50,
    marginTop: 40,
    alignContent: "flex-start",
    width: "35%",
    height: "auto",
    paddingBottom: 50,
  },
  slideItem: {
    borderRadius: 15,
    marginBottom: 15,
    height: 140,
    cursor: "default",
  },
  paperFront: {
    backgroundColor: "rgba(0,102,102,1)",
    minHeight: 140,
    borderRadius: 15,
    boxShadow: "3px 3px 6px #000000",
  },
  paperBack: {
    backgroundColor: "rgba(255,255,255,1)",
    minHeight: 240,
    borderRadius: 15,
    boxShadow: "3px 3px 6px #000000",
  },
  paper: {
    minHeight: 140,
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
