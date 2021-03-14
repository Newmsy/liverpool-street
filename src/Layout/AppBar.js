import React from "react";
import { compose } from "redux";
import {
  Box,
  Grid,
  makeStyles,
  Paper,
  Button,
  Slider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ReactComponent as ArrowWhite } from "../Assets/ArrowWhite.svg";

export const AppBar = compose(({ changeLoc }) => {
  const styles = useStyles();
  const history = useHistory();
  const goHome = () => {
    history.push("/home");
  };
  const currentLoc = window.location.pathname;

  return (
    <Grid xs={12} container className={styles.appbarBackground}>
      <Grid item xs={2}></Grid>
      <Grid item container xs={8} className={styles.appbarNav}>
        <Grid item>
          <div
            className={styles.navbarItem}
            onClick={() => changeLoc("/world-class-advice")}
          >
            <h1 className={styles.navText}>WORLD CLASS ADVICE</h1>
          </div>
          {currentLoc === "/world-class-advice" && (
            <ArrowWhite fill="black" className={styles.arrow} />
          )}
        </Grid>
        <NavBreakPoint />

        <Grid item>
          <div
            className={styles.navbarItem}
            onClick={() => changeLoc("/world-class-experience")}
          >
            <h1 className={styles.navText}>WORLD CLASS EXPERIENCE</h1>
          </div>
          {currentLoc === "/world-class-experience" && (
            <ArrowWhite fill="black" className={styles.arrow} />
          )}
        </Grid>

        <NavBreakPoint />
        <Grid item>
          <div
            className={styles.navbarItem}
            onClick={() => changeLoc("/why-now")}
          >
            <h1 className={styles.navText}>Why Now?</h1>
          </div>
          {currentLoc === "/why-now" && (
            <ArrowWhite fill="black" className={styles.arrow} />
          )}
        </Grid>
        <NavBreakPoint />

        <Grid item>
          <div
            className={styles.navbarItem}
            onClick={() => changeLoc("/selected-transactions")}
          >
            <h1 className={styles.navText}>Transactions</h1>
          </div>
          {currentLoc === "/selected-transactions" && (
            <ArrowWhite fill="black" className={styles.arrow} />
          )}
        </Grid>

        <NavBreakPoint />
        <Grid item>
          <div
            className={styles.navbarItem}
            onClick={() => changeLoc("/contact")}
          >
            <h1 className={styles.navText}>Contact us</h1>
          </div>
          {currentLoc === "/contact" && (
            <ArrowWhite fill="black" className={styles.arrow} />
          )}
        </Grid>
      </Grid>
      <Grid item xs={2} style={{ display: "flex", justifyContent: "flex-end" }}>
        <img
          src="/LogoSubtext.png"
          alt="Liverpool Street Capital Advisors"
          className={styles.appbarLogo}
          style={{ height: 230 }}
          onClick={() => changeLoc("/world-class-advice")}
        />
      </Grid>
    </Grid>
  );
});

const NavBreakPoint = () => {
  const styles = useStyles();
  return (
    <Grid item className={styles.navBreakpoint}>
      <h1 className={styles.navTextBreakPoint}>•</h1>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  bottomPanel: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 350,
    height: 720,
    paddingLeft: 45,
    zIndex: 500,
  },
  appbarBackground: {
    height: 150,
    marginBottom: -40,
    background: "rgb(0,102,102)",
    zIndex: 100,
    boxShadow: "0px 0px 10px #000000",
  },
  appbarLogo: {
    height: 200,
    width: "auto",
    position: "relative",
    cursor: "pointer",
    imageRendering: "-webkit-optimize-contrast",
    zIndex: 1,
    marginTop: 0,
  },
  arrow: {
    height: 15,
    position: "relative",
    top: 22,
    zIndex: 50000,
    fill: "rgb(0,31,96)",
    marginLeft: "45%",
  },
  appbarNav: {
    marginTop: -5,
    height: 150,
    zIndex: 100,
    justifyContent: "center",
  },
  undecorated: {
    textDecoration: "none",
  },
  navText: {
    fontFamily: "Banschrift",
    fontSize: 20,
    fontWeight: 100,
    color: "white",
    textDecoration: "none",
    textTransform: "uppercase",
  },
  navTextBreakPoint: {
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: 100,
    color: "white",
  },
  navBreakpoint: {
    height: 60,
    paddingTop: 7,
    paddingBottom: 7,
    marginTop: 107,
  },
  navbarItem: {
    paddingRight: 20,
    paddingLeft: 20,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: -50,
    marginTop: 107,
    height: 60,
    padding: 7,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
}));
