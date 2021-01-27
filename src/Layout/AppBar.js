import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles } from "@material-ui/core";

export const AppBar = compose(() => {
  const styles = useStyles();
  return (
    <Grid xs={12} container className={styles.appbarBackground}>
      <Grid item xs={3}>
        <img
          src="/LogoSubtext.png"
          alt="Liverpool Street Capital Advisors"
          className={styles.appbarLogo}
        />
      </Grid>
      <Grid item container xs={9} className={styles.appbarNav}>
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
              <h1 className={styles.navText}>Placeholder</h1>
            </div>
          </a>
        </Grid>
        <NavBreakPoint />
        <Grid item class="hvr-underline-from-center">
          <a href="#" className={styles.undecorated}>
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
      "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0.22) 100%)",
  },
  appbarLogo: {
    height: 300,
    width: "auto",
  },
  appbarNav: {
    marginTop: 20,
    height: 60,
  },
  undecorated: {
    textDecoration: "none",
  },
  navText: {
    fontFamily: "Arial",
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