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

export const AppBar = compose(({ changeLoc }) => {
  const styles = useStyles();
  const history = useHistory();
  const goHome = () => {
    history.push("/home");
  };

  const [fontSize, setFontSize] = React.useState(30);

  const [logoPos, setLogoPos] = React.useState(1);

  //logo top right
  //same size as enter site
  //green background app bar
  //white fonts
  //caps app bar 15font size
  //remove people image companies

  return (
    <Grid xs={12} container className={styles.appbarBackground}>
      <Grid item xs={2}></Grid>
      <Grid item container xs={8} className={styles.appbarNav}>
        <Grid item class="hvr-underline-from-center">
          <div className={styles.navbarItem} onClick={() => changeLoc("/home")}>
            <h1 className={styles.navText}>Home</h1>
          </div>
        </Grid>
        <NavBreakPoint fontSize={fontSize} />
        <Grid item class="hvr-underline-from-center">
          <div className={styles.navbarItem} onClick={() => changeLoc("#")}>
            <h1 className={styles.navText}>Why LSCA</h1>
          </div>
        </Grid>
        <NavBreakPoint fontSize={fontSize} />
        <Grid item class="hvr-underline-from-center">
          <div
            className={styles.navbarItem}
            onClick={() => changeLoc("/why-now")}
          >
            <h1 className={styles.navText}>Why Now</h1>
          </div>
        </Grid>
        <NavBreakPoint fontSize={fontSize} />

        <Grid item class="hvr-underline-from-center">
          <div
            className={styles.navbarItem}
            onClick={() => changeLoc("/selected-transactions")}
          >
            <h1 className={styles.navText}>Transactions</h1>
          </div>
        </Grid>
        <NavBreakPoint fontSize={fontSize} />
        <Grid item class="hvr-underline-from-center">
          <div
            className={styles.navbarItem}
            onClick={() => changeLoc("/people")}
          >
            <h1 className={styles.navText}>People</h1>
          </div>
        </Grid>

        <NavBreakPoint fontSize={fontSize} />
        <Grid item class="hvr-underline-from-center">
          <div
            className={styles.navbarItem}
            onClick={() => changeLoc("/contact")}
          >
            <h1 className={styles.navText}>Contact</h1>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={2} style={{ display: "flex", justifyContent: "flex-end" }}>
        {logoPos && (
          <img
            src="/LogoSubtext.png"
            alt="Liverpool Street Capital Advisors"
            className={styles.appbarLogo}
            style={{ height: 230 }}
            onClick={() => changeLoc("/home")}
          />
        )}
      </Grid>
    </Grid>
  );
});

const NavBreakPoint = ({ fontSize }) => {
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
    height: 65,
    marginBottom: -40,
    background: "rgb(0,102,102)",
    zIndex: 100,
    boxShadow: "2px 3px 10px #888888",
  },
  appbarLogo: {
    height: 200,
    width: "auto",
    position: "relative",
    cursor: "pointer",
    imageRendering: "-webkit-optimize-contrast",
    zIndex: 1,
    marginTop: 30,
  },
  appbarNav: {
    marginTop: 0,
    height: 60,
    zIndex: 100,
    justifyContent: "center",
  },
  undecorated: {
    textDecoration: "none",
  },
  navText: {
    fontFamily: "Banschrift",
    fontSize: 25,
    fontWeight: 100,
    color: "white",
    textDecoration: "none",
  },
  navTextBreakPoint: {
    fontFamily: "Arial",
    fontSize: 25,
    fontWeight: 100,
    color: "white",
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
    cursor: "pointer",
  },
}));
