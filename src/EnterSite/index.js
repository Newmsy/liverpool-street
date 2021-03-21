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

  const [hide, setHide] = React.useState(false);

  const enterSite = () => {
    setHide(true);
    setTimeout(() => history.push("/world-class-advice"), 1500);
  };

  return (
    <>
      <Fade in={!hide} timeout={1500}>
        <div style={{ overflow: "hidden" }}>
          <Fade in={!hide} timeout={5000} style={{ transitionDelay: 10000 }}>
            <div>
              <div
                className={styles.backgroundImage}
                style={{ opacity: 0.3 }}
              ></div>
            </div>
          </Fade>
          <Grid container xs={12} className={styles.enterSiteContainer}>
            <Grid>
              <img src={"/swipe.gif"} className={styles.logoGreen} />
            </Grid>
            <Fade in={!hide} timeout={5000} style={{ transitionDelay: 5000 }}>
              <Grid xs={12}>
                <img
                  src="/logoWords.svg"
                  alt="Liverpool Street Capital Advisors"
                  className={styles.logoWords}
                />
              </Grid>
            </Fade>
            <Grid xs={12} container className={styles.mottoContainer}>
              <Fade in={!hide} timeout={5000} style={{ transitionDelay: 7000 }}>
                <Grid
                  xs={12}
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  <img
                    src="/UnconventionalWisdom.png"
                    alt="Liverpool Street Capital Advisors"
                    className={styles.mottoUn}
                  />
                </Grid>
              </Fade>
            </Grid>
            <Grid>
              <Fade
                in={!hide}
                timeout={5000}
                style={{ transitionDelay: 10000 }}
              >
                <Button onClick={enterSite} className={styles.enterSiteButton}>
                  <h1
                    className={textStyles.lightThickSubtitleBlue}
                    style={{ fontSize: 15 }}
                  >
                    Enter Site
                  </h1>
                </Button>
              </Fade>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </>
  );
});

//change unconventional wisdom sizing

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
    justifyItems: "center",
    alignItems: "center",
    alignContent: "center",
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
    marginTop: -10,
    marginLeft: "2vw",
  },
  logo: {
    width: "60%",
    marginLeft: "20%",
  },
  mottoUn: {
    width: 240,
    height: 68,
    marginLeft: "-1.9%",
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
    backgroundImage: 'url("/LiverpoolStreet.png")',
    backgroundPosition: "center",
    opacity: 0.3,
  },
}));
