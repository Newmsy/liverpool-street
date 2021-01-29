import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles, Fade, Button, Slider } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useTextStyles } from "../Styles/TextStyles";

export const EnterSite = compose(() => {
  const styles = useStyles();
  const history = useHistory();
  const textStyles = useTextStyles();

  const [entering, setEntering] = React.useState(false);
  const [opacity, setOpacity] = React.useState(0);

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
        <Fade in={!entering} timeout={1000}>
          <Grid container xs={12} className={styles.enterSiteContainer}>
            <Grid xs={12}>
              <Slider
                onChange={(e, v) => setOpacity(v)}
                value={opacity}
                defaultValue={0}
                step={1}
                style={{ width: 200 }}
              />
              <h1 className={textStyles.lightThickSubtitle}>{opacity}</h1>
            </Grid>
            <Grid xs={8} md={4}>
              <img
                src="/LogoMain.png"
                alt="Liverpool Street Capital Advisors"
                className={styles.logo}
              />
            </Grid>
            <Grid xs={8} md={5} container className={styles.mottoContainer}>
              <Grid xs={4}>
                <Fade
                  in={true}
                  style={{ transitionDelay: "1000ms" }}
                  timeout={1000}
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
                  in={true}
                  style={{ transitionDelay: "2000ms" }}
                  timeout={1000}
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
                  in={true}
                  style={{ transitionDelay: "3000ms" }}
                  timeout={1000}
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
                in={true}
                style={{ transitionDelay: "4500ms" }}
                timeout={1000}
              >
                <Button onClick={enterSite} className={styles.enterSiteButton}>
                  <h1 className={textStyles.lightThickSubtitleBlue}>
                    Enter Site
                  </h1>
                </Button>
              </Fade>
            </Grid>
          </Grid>
        </Fade>
      </div>
    </>
  );
});

const useStyles = makeStyles(() => ({
  enteringOpen: {
    height: "100vh",
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
