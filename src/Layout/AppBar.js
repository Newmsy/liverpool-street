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

export const AppBar = compose(() => {
  const styles = useStyles();
  const history = useHistory();
  const goHome = () => {
    history.push("/home");
  };

  const [fontSize, setFontSize] = React.useState(30);
  const [logoSize, setLogoSize] = React.useState(200);
  const [logoPos, setLogoPos] = React.useState(1);

  //logo top right
  //same size as enter site
  //green background app bar
  //white fonts
  //caps app bar 15font size
  //remove people image companies

  return (
    <Grid xs={12} container className={styles.appbarBackground}>
      <Grid item xs={2}>
        {!logoPos && (
          <img
            src="/LogoSubtext.png"
            alt="Liverpool Street Capital Advisors"
            className={styles.appbarLogo}
            style={{ height: logoSize }}
            onClick={goHome}
          />
        )}
      </Grid>
      <Grid item container xs={8} className={styles.appbarNav}>
        <Grid item class="hvr-underline-from-center">
          <a href="/home" className={styles.undecorated}>
            <div className={styles.navbarItem}>
              <h1 className={styles.navText} style={{ fontSize: fontSize }}>
                Home
              </h1>
            </div>
          </a>
        </Grid>
        <NavBreakPoint fontSize={fontSize} />
        <Grid item class="hvr-underline-from-center">
          <a href="/why-now" className={styles.undecorated}>
            <div className={styles.navbarItem}>
              <h1 className={styles.navText} style={{ fontSize: fontSize }}>
                Why Now
              </h1>
            </div>
          </a>
        </Grid>
        <NavBreakPoint fontSize={fontSize} />
        <Grid item class="hvr-underline-from-center">
          <a href="/selected-transactions" className={styles.undecorated}>
            <div className={styles.navbarItem}>
              <h1 className={styles.navText} style={{ fontSize: fontSize }}>
                Transactions
              </h1>
            </div>
          </a>
        </Grid>
        <NavBreakPoint fontSize={fontSize} />
        <Grid item class="hvr-underline-from-center">
          <a href="/people" className={styles.undecorated}>
            <div className={styles.navbarItem}>
              <h1 className={styles.navText} style={{ fontSize: fontSize }}>
                People
              </h1>
            </div>
          </a>
        </Grid>
        <NavBreakPoint fontSize={fontSize} />
        <Grid item class="hvr-underline-from-center">
          <a href="#" className={styles.undecorated}>
            <div className={styles.navbarItem}>
              <h1 className={styles.navText} style={{ fontSize: fontSize }}>
                Placeholder
              </h1>
            </div>
          </a>
        </Grid>
        <NavBreakPoint fontSize={fontSize} />
        <Grid item class="hvr-underline-from-center">
          <a href="#" className={styles.undecorated}>
            <div className={styles.navbarItem}>
              <h1 className={styles.navText} style={{ fontSize: fontSize }}>
                Contact
              </h1>
            </div>
          </a>
        </Grid>
      </Grid>
      <Grid item xs={2} style={{ display: "flex", justifyContent: "flex-end" }}>
        {logoPos && (
          <img
            src="/LogoSubtext.png"
            alt="Liverpool Street Capital Advisors"
            className={styles.appbarLogo}
            style={{ height: logoSize }}
            onClick={goHome}
          />
        )}
      </Grid>
      <div className={styles.bottomPanel}>
        <Paper style={{ padding: 30 }}>
          <p>Font Size {fontSize}</p>
          <Slider
            max={50}
            min={0}
            value={fontSize}
            onChange={(e, v) => setFontSize(v)}
          />
          <p>Logo Size {logoSize}</p>
          <Slider
            max={500}
            min={0}
            step={5}
            value={logoSize}
            onChange={(e, v) => setLogoSize(v)}
          />
          <p>Logo Position: {logoPos ? "Right" : "Left"}</p>
          <Slider
            max={1}
            min={0}
            step={1}
            value={logoPos}
            onChange={(e, v) => setLogoPos(v)}
          />
        </Paper>
      </div>
    </Grid>
  );
});

const NavBreakPoint = ({ fontSize }) => {
  const styles = useStyles();
  return (
    <Grid item className={styles.navBreakpoint}>
      <h1 className={styles.navTextBreakPoint} style={{ fontSize: fontSize }}>
        •
      </h1>
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
    height: 60,
    marginBottom: 0,
    background: "rgb(0,102,102)",
    zIndex: 100,
  },
  appbarLogo: {
    height: 200,
    width: "auto",
    position: "relative",
    cursor: "pointer",
    imageRendering: "-webkit-optimize-contrast",
    zIndex: 1,
    marginTop: 10,
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
    fontSize: 30,
    fontWeight: 100,
    color: "white",
    textDecoration: "none",
  },
  navTextBreakPoint: {
    fontFamily: "Arial",
    fontSize: 30,
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
  },
}));
