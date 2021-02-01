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

  const [entering, setEntering] = React.useState(false);
  const [opacity, setOpacity] = React.useState(20);
  const [delayFirst, setDelayFirst] = React.useState(2000);
  const [delaySecond, setDelaySecond] = React.useState(3000);
  const [delayThird, setDelayThird] = React.useState(3000);
  const [delayFourth, setDelayFourth] = React.useState(3000);
  const [delayFifth, setDelayFifth] = React.useState(5000);
  const [delayFade, setDelayFade] = React.useState(2000);
  const [reset, setReset] = React.useState(true);

  const enterSite = () => {
    setEntering(true);
    setTimeout(() => history.push("/home-fade"), 1500);
  };

  return (
    <>
      <img
        src="/LiverpoolStreet.png"
        alt="Liverpool Street Capital Advisors"
        className={styles.backgroundImage}
        style={{ opacity: opacity / 100 }}
      />
      <div
        className={styles.enteringOpen}
        style={{ transition: "1.5s", overflowY: "hidden" }}
      >
        <Paper className={styles.bottomPanel}>
          <Grid container xs={12} justifyContent="center">
            <Grid item xs={10}>
              <h1 className={textStyles.contentTextLight}>
                Background Opacity: {opacity}%
              </h1>
              <Slider
                onChange={(e, v) => setOpacity(v)}
                value={opacity}
                defaultValue={0}
                step={1}
                style={{ width: 200 }}
              />
            </Grid>
            <Grid item xs={10}>
              <h1 className={textStyles.contentTextLight}>
                Delay logo {delayFirst} ms
              </h1>
              <Slider
                onChange={(e, v) => setDelayFirst(v)}
                value={delayFirst}
                min={0}
                max={10000}
                defaultValue={0}
                step={100}
                style={{ width: 200 }}
              />
            </Grid>
            <Grid item xs={10}>
              <h1 className={textStyles.contentTextLight}>
                Delay Un {delaySecond} ms
              </h1>
              <Slider
                onChange={(e, v) => setDelaySecond(v)}
                value={delaySecond}
                min={0}
                max={10000}
                defaultValue={0}
                step={100}
                style={{ width: 200 }}
              />
            </Grid>
            <Grid item xs={10}>
              <h1 className={textStyles.contentTextLight}>
                Delay Conventional {delayThird} ms
              </h1>
              <Slider
                onChange={(e, v) => setDelayThird(v)}
                value={delayThird}
                min={0}
                max={10000}
                defaultValue={0}
                step={100}
                style={{ width: 200 }}
              />
            </Grid>
            <Grid item xs={10}>
              <h1 className={textStyles.contentTextLight}>
                Delay Wisdom {delayFourth} ms
              </h1>
              <Slider
                onChange={(e, v) => setDelayFourth(v)}
                value={delayFourth}
                min={0}
                max={10000}
                defaultValue={0}
                step={100}
                style={{ width: 200 }}
              />
            </Grid>
            <Grid item xs={10}>
              <h1 className={textStyles.contentTextLight}>
                Delay Button {delayFifth} ms
              </h1>
              <Slider
                onChange={(e, v) => setDelayFifth(v)}
                value={delayFifth}
                min={0}
                max={10000}
                defaultValue={0}
                step={100}
                style={{ width: 200 }}
              />
            </Grid>
            <Grid item xs={10}>
              <h1 className={textStyles.contentTextLight}>
                Fade Time {delayFade} ms
              </h1>
              <Slider
                onChange={(e, v) => setDelayFade(v)}
                value={delayFade}
                min={0}
                max={3000}
                defaultValue={0}
                step={100}
                style={{ width: 200 }}
              />
            </Grid>
            <Grid item xs={10}>
              <Button
                onClick={() => setReset(!reset)}
                style={{ backgroundColor: "lightblue", width: 180 }}
              >
                {reset ? "Hide" : "Show"}
              </Button>{" "}
            </Grid>
          </Grid>
        </Paper>
        {/* Content: */}

        <Grid container xs={12} className={styles.enterSiteContainer}>
          <Grid xs={3} md={3}>
            <img
              src="/LogoSweep.gif"
              alt="Liverpool Street Capital Advisors"
              className={styles.logoGreen}
            />
          </Grid>
          <Fade
            in={reset}
            timeout={delayFade}
            style={{ transitionDelay: reset ? delayFirst : 0 }}
          >
            <Grid xs={12}>
              <img
                src="/LogoWords.png"
                alt="Liverpool Street Capital Advisors"
                className={styles.logoWords}
              />
            </Grid>
          </Fade>
          <Grid xs={8} md={5} container className={styles.mottoContainer}>
            <Grid xs={4}>
              <Fade
                in={reset}
                timeout={delayFade}
                style={{ transitionDelay: reset ? delaySecond : 0 }}
              >
                <img
                  src="/UnMotto.png"
                  alt="Liverpool Street Capital Advisors"
                  className={styles.mottoUn}
                />
              </Fade>
            </Grid>
            <Grid xs={4}>
              <Fade
                in={reset}
                timeout={delayFade}
                style={{ transitionDelay: reset ? delayThird : 0 }}
              >
                <img
                  src="/ConventionalMotto.png"
                  alt="Liverpool Street Capital Advisors"
                  className={styles.mottoC}
                />
              </Fade>
            </Grid>
            <Grid xs={3}>
              <Fade
                in={reset}
                timeout={delayFade}
                style={{ transitionDelay: reset ? delayFourth : 0 }}
              >
                <img
                  src="/WisdomMotto.png"
                  alt="Liverpool Street Capital Advisors"
                  className={styles.mottoW}
                />
              </Fade>
            </Grid>
          </Grid>
          <Grid>
            <Fade
              in={reset}
              timeout={delayFade}
              style={{ transitionDelay: reset ? delayFifth : 0 }}
            >
              <Button onClick={enterSite} className={styles.enterSiteButton}>
                <h1 className={textStyles.lightThickSubtitleBlue}>
                  Enter Site
                </h1>
              </Button>
            </Fade>
          </Grid>
        </Grid>
      </div>
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
    backgroundColor: "rgba(0,0,0,0.1)",
    minHeight: "100vh",
    marginTop: 0,
    zIndex: 100,
    position: "relative",
  },
  logoGreen: {
    width: "70%",
    marginLeft: "15%",
  },
  logoWords: {
    position: "relative",
    bottom: 80,
    width: 300,
  },
  mottoContainer: {
    marginTop: -40,
  },
  logo: {
    width: "60%",
    marginLeft: "20%",
  },
  motto: {},
  mottoUn: {
    width: "100%",
  },
  mottoC: {
    width: "100%",
    marginLeft: -16,
    marginTop: 7,
    position: "relative",
  },
  mottoW: {
    width: "89%",
    marginLeft: -16,
    marginTop: 7,
  },
  enterSiteButton: {
    width: 350,
    height: 100,
    backgroundColor: "rgba(0, 102, 102, 1)",
    borderRadius: 15,
    transition: "1s",
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
