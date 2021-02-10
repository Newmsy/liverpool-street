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

  const enterSite = () => {
    setTimeout(() => history.push("/home-fade"), 1500);
  };

  return (
    <>
      <Fade in={true} timeout={delayFade} style={{ transitionDelay: 7500 }}>
        <div>
          <img
            src="/LiverpoolStreet.png"
            alt="Liverpool Street Capital Advisors"
            className={styles.backgroundImage}
            style={{ opacity: opacity / 100 }}
          />
        </div>
      </Fade>

      <Grid container xs={12} className={styles.enterSiteContainer}>
        <Grid xs={3} md={3}>
          <img src={"/swipe.gif"} className={styles.logoGreen} />
        </Grid>
        <Fade in={true} timeout={3000} style={{ transitionDelay: 4500 }}>
          <Grid xs={12}>
            <img
              src="/logoWords.svg"
              alt="Liverpool Street Capital Advisors"
              className={styles.logoWords}
            />
          </Grid>
        </Fade>
        <Grid xs={10} md={3} container className={styles.mottoContainer}>
          <Fade in={true} timeout={delayFade} style={{ transitionDelay: 4500 }}>
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
          <Fade in={true} timeout={delayFade} style={{ transitionDelay: 7500 }}>
            <Button onClick={enterSite} className={styles.enterSiteButton}>
              <h1 className={textStyles.lightThickSubtitleBlue}>Enter Site</h1>
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
    backgroundColor: "rgba(0,0,0,0.05)",
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
    marginTop: -40,
    marginLeft: "2vw",
  },
  logo: {
    width: "60%",
    marginLeft: "20%",
  },
  mottoUn: {
    width: 300,
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
