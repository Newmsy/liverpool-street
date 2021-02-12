import React from "react";
import { compose } from "redux";
import {
  Box,
  Grid,
  makeStyles,
  Fade,
  Button,
  Slider,
  Paper,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useTextStyles } from "../Styles/TextStyles";

export const EnterSite = compose(() => {
  const styles = useStyles();
  const history = useHistory();
  const textStyles = useTextStyles();

  const [opacity, setOpacity] = React.useState(20);
  const [delayFade, setDelayFade] = React.useState(3000);
  const [delayWords, setDelayWords] = React.useState(5000);
  const [delayEnter, setDelayEnter] = React.useState(7500);
  const [hide, setHide] = React.useState(false);
  const [fontSize, setFontSize] = React.useState(30);

  const enterSite = () => {
    setTimeout(() => history.push("/home-fade"), 1500);
  };

  return (
    <>
      <Fade
        in={!hide}
        timeout={delayFade}
        style={{ transitionDelay: hide ? 100 : delayEnter }}
      >
        <div>
          <img
            src="/LiverpoolStreet.png"
            alt="Liverpool Street Capital Advisors"
            className={styles.backgroundImage}
            style={{ opacity: opacity / 100 }}
          />
        </div>
      </Fade>
      <div className={styles.bottomPanel}>
        <Paper style={{ padding: 30 }}>
          <p>Background Opacity {opacity}%</p>
          <Slider
            max={100}
            min={0}
            value={opacity}
            onChange={(e, v) => setOpacity(v)}
          />
          <p>Fade in duration {delayFade}ms</p>
          <Slider
            max={5000}
            min={0}
            step={100}
            value={delayFade}
            onChange={(e, v) => setDelayFade(v)}
          />
          <p>Word Fade Delay {delayWords}ms</p>
          <Slider
            max={10000}
            min={0}
            step={100}
            value={delayWords}
            onChange={(e, v) => setDelayWords(v)}
          />
          <p>Button / Background Fade Delay {delayEnter}ms</p>
          <Slider
            max={12000}
            min={0}
            step={100}
            value={delayEnter}
            onChange={(e, v) => setDelayEnter(v)}
          />
          <p>Button font size {fontSize}</p>
          <Slider
            max={40}
            min={0}
            step={1}
            value={fontSize}
            onChange={(e, v) => setFontSize(v)}
          />
          <Button
            onClick={() => setHide(!hide)}
            style={{ backgroundColor: "rgb(200,200,200)" }}
          >
            <b>{hide ? "show" : "hide"}</b>
          </Button>
        </Paper>
      </div>
      <Grid container xs={12} className={styles.enterSiteContainer}>
        <Grid xs={3} md={3}>
          <img src={hide ? "" : "/swipe.gif"} className={styles.logoGreen} />
        </Grid>
        <Fade
          in={!hide}
          timeout={delayFade}
          style={{ transitionDelay: hide ? 100 : delayWords }}
        >
          <Grid xs={12}>
            <img
              src="/logoWords.svg"
              alt="Liverpool Street Capital Advisors"
              className={styles.logoWords}
            />
          </Grid>
        </Fade>
        <Grid xs={10} md={3} container className={styles.mottoContainer}>
          <Fade
            in={!hide}
            timeout={delayFade}
            style={{ transitionDelay: hide ? 100 : delayWords }}
          >
            <Grid xs={10} style={{ justifyContent: "center", display: "flex" }}>
              <img
                src="/UnconventionalWisdom.svg"
                alt="Liverpool Street Capital Advisors"
                className={styles.mottoUn}
              />
            </Grid>
          </Fade>
        </Grid>
        <Grid>
          <Fade
            in={!hide}
            timeout={delayFade}
            style={{ transitionDelay: hide ? 100 : delayEnter }}
          >
            <Button onClick={enterSite} className={styles.enterSiteButton}>
              <h1
                className={textStyles.lightThickSubtitleBlue}
                style={{ fontSize: fontSize }}
              >
                Enter Site
              </h1>
            </Button>
          </Fade>
        </Grid>
      </Grid>
    </>
  );
});

const useStyles = makeStyles(() => ({
  enteringOpen: {
    height: "100vh",
  },
  bottomPanel: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 350,
    height: 720,
    paddingLeft: 45,
    zIndex: 500,
  },
  enterSiteContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    minHeight: "100vh",
    marginTop: 0,
    zIndex: 100,
    position: "relative",
  },
  logoGreen: {
    marginTop: "5vh",
    height: 170,
    transform: "scaleX(-1)",
  },
  logoWords: {
    position: "relative",
    bottom: 30,
    width: 130,
    imageRendering: "crisp-edges",
  },
  mottoContainer: {
    marginTop: -30,
    marginLeft: "2vw",
  },
  logo: {
    width: "60%",
    marginLeft: "20%",
  },
  mottoUn: {
    width: 220,
    marginLeft: 25,
    imageRendering: "-webkit-optimize-contrast",
  },
  enterSiteButton: {
    width: 175,
    height: 40,
    marginTop: "20vh",
    marginBottom: -50,
    backgroundColor: "rgba(0, 102, 102, 1)",
    borderRadius: 1,
    transition: "1s",
    paddingTop: 10,
    "&:hover": {
      backgroundColor: "rgba(0, 82, 82, 1)",
      transition: "1s",
    },
  },
  backgroundImage: {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    zIndex: 0,
  },
}));
