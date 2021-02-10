import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export const AppBar = compose(() => {
  const styles = useStyles();
  const history = useHistory();
  const goHome = () => {
    history.push("/home");
  };
  return (
    <Grid xs={12} container className={styles.appbarBackground}>
      <Grid item xs={3}>
        <img
          src="/LogoSubtext.png"
          alt="Liverpool Street Capital Advisors"
          className={styles.appbarLogo}
          onClick={goHome}
        />
      </Grid>
      <Grid item container xs={9} className={styles.appbarNav}>
        <Grid item class="hvr-underline-from-center">
          <a href="/home" className={styles.undecorated}>
            <div className={styles.navbarItem}>
              <h1 className={styles.navText}>Home</h1>
            </div>
          </a>
        </Grid>
        <NavBreakPoint />
        <Grid item class="hvr-underline-from-center">
          <a href="/why-now" className={styles.undecorated}>
            <div className={styles.navbarItem}>
              <h1 className={styles.navText}>Why Now</h1>
            </div>
          </a>
        </Grid>
        <NavBreakPoint />
        <Grid item class="hvr-underline-from-center">
          <a href="/selected-transactions" className={styles.undecorated}>
            <div className={styles.navbarItem}>
              <h1 className={styles.navText}>Transactions</h1>
            </div>
          </a>
        </Grid>
        <NavBreakPoint />
        <Grid item class="hvr-underline-from-center">
          <a href="/people" className={styles.undecorated}>
            <div className={styles.navbarItem}>
              <h1 className={styles.navText}>People</h1>
            </div>
          </a>
        </Grid>
        <NavBreakPoint />
        <Grid item class="hvr-underline-from-center">
          <a href="#" className={styles.undecorated}>
            <div className={styles.navbarItem}>
              <h1 className={styles.navText}>Placeholder</h1>
            </div>
          </a>
        </Grid>
        <NavBreakPoint />
        <Grid item class="hvr-underline-from-center">
          <a href="#" className={styles.undecorated}>
            <div className={styles.navbarItem}>
              <h1 className={styles.navText}>Contact</h1>
            </div>
          </a>
        </Grid>
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
  appbarBackground: {
    height: 80,
    background:
      "linear-gradient(0deg, rgba(0,0,0,0) 0%,  rgba(240,240,240,1) 100%)",
    zIndex: 100,
  },
  appbarLogo: {
    height: 300,
    width: "auto",
    position: "relative",
    cursor: "pointer",
    imageRendering: "-webkit-optimize-contrast",
    zIndex: 1,
  },
  appbarNav: {
    marginTop: 20,
    height: 60,
    zIndex: 100,
  },
  undecorated: {
    textDecoration: "none",
  },
  navText: {
    fontFamily: "BanschriftNormal",
    fontSize: 26,
    fontWeight: 100,
    color: "rgba(0,0,0,0.8)",
    textDecoration: "none",
  },
  navTextBreakPoint: {
    fontFamily: "Arial",
    fontSize: 26,
    fontWeight: 100,
    color: "rgba(0,0,0,0.6)",
    cursor: "pointer",
  },
  navBreakpoint: {
    height: 60,
    paddingTop: 7,
    paddingBottom: 7,
  },
  navbarItem: {
    marginRight: 20,
    marginLeft: 20,
    marginBottom: -10,
    height: 60,
    borderRadius: 10,
    padding: 7,
    paddingBottom: -10,
  },
}));
