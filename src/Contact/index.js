import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { useTextStyles } from "../Styles/TextStyles";
import { Map } from "./map";

export const Contact = compose(() => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  return (
    <Grid container xs={12} className={styles.contactContainer}>
      <Grid item container xs={10}>
        <Grid item xs={4}>
          <Grid item xs={12}>
            <img
              src={"/Building1.jpg"}
              style={{
                width: 527,
                height: 592,
                objectFit: "cover",
                boxShadow: "2px 3px 10px #888888",
                marginTop: 30,
              }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={4}
          style={{ height: "auto", alignContent: "flex-start" }}
        >
          <Grid item xs={12} className={styles.textContainer}>
            <p
              className={textStyles.contentTextLight2}
              style={{
                fontSize: 22,
                color: "rgb(0,31,96)",
                textAlign: "center",
              }}
            >
              <b>Jason Green</b>
            </p>
            <p
              className={textStyles.contentTextLight2}
              style={{
                color: "rgb(0,31,96)",
                textAlign: "center",
                fontSize: 18,
              }}
            >
              <b>Partner</b>
            </p>
            <p
              className={textStyles.contentTextLight2}
              style={{
                color: "rgb(0,102,102)",
                textAlign: "center",
                fontSize: 18,
              }}
            >
              <a
                href="mailto:jasongreen@lscapitaladvisors.co.uk"
                style={{ color: "rgb(0,102,102)", textAlign: "center" }}
              >
                <b>jasongreen@lscapitaladvisors.co.uk</b>
              </a>
            </p>
            <p
              className={textStyles.contentTextLight2}
              style={{ color: "rgb(0,102,102)", textAlign: "center" }}
            >
              <b>+44 (0) 203 651 5560</b>
            </p>
            <p
              className={textStyles.contentTextLight2}
              style={{ color: "rgb(0,102,102)", textAlign: "center" }}
            >
              <b>+44 (0) 7764 235 474</b>
            </p>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <p
              className={textStyles.contentTextLight2}
              style={{
                fontSize: 22,
                color: "rgb(0,31,96)",
                textAlign: "center",
              }}
            >
              <b>Andrew Golding</b>
            </p>
            <p
              className={textStyles.contentTextLight2}
              style={{
                color: "rgb(0,31,96)",
                textAlign: "center",
                fontSize: 18,
              }}
            >
              <b>Partner</b>
            </p>
            <p
              className={textStyles.contentTextLight2}
              style={{
                color: "rgb(0,102,102)",
                textAlign: "center",
                fontSize: 18,
              }}
            >
              <b>
                <a
                  href="mailto:andrewgolding@lscapitaladvisors.co.uk"
                  style={{ color: "rgb(0,102,102)", textAlign: "center" }}
                >
                  andrewgolding@lscapitaladvisors.co.uk
                </a>
              </b>
            </p>
            <p
              className={textStyles.contentTextLight2}
              style={{ color: "rgb(0,102,102)", textAlign: "center" }}
            >
              <b>+44 (0) 203 651 5561</b>
            </p>
            <p
              className={textStyles.contentTextLight2}
              style={{ color: "rgb(0,102,102)", textAlign: "center" }}
            >
              <b>+44 (0) 7788 233006</b>
            </p>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.textContainer}>
              <p
                className={textStyles.contentTextLight2}
                style={{
                  fontSize: 22,
                  color: "rgb(0,31,96)",
                  textAlign: "center",
                }}
              >
                <b>Kelsey North</b>
              </p>
              <p
                className={textStyles.contentTextLight2}
                style={{
                  color: "rgb(0,31,96)",
                  textAlign: "center",
                  fontSize: 18,
                }}
              >
                <b>EA to the Partners</b>
              </p>
              <p
                className={textStyles.contentTextLight2}
                style={{
                  color: "rgb(0,102,102)",
                  textAlign: "center",
                  fontSize: 18,
                }}
              >
                <b>
                  <a
                    href="mailto:kelseynorth@lscapitaladvisors.co.uk"
                    style={{ color: "rgb(0,102,102)", textAlign: "center" }}
                  >
                    kelseynorth@lscapitaladvisors.co.uk
                  </a>
                </b>
              </p>
              <p
                className={textStyles.contentTextLight2}
                style={{ color: "rgb(0,102,102)", textAlign: "center" }}
              >
                <b> +44 (0) 203 651 5562</b>
              </p>
              <p
                className={textStyles.contentTextLight2}
                style={{ color: "rgb(0,102,102)", textAlign: "center" }}
              >
                <b> +44 (0) 7584 668337</b>
              </p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.textContainer}>
              <p
                className={textStyles.contentTextLight2}
                style={{
                  fontSize: 22,

                  textAlign: "center",
                }}
              >
                <a
                  href="mailto:info@lscapitaladvisors.com"
                  style={{ color: "rgb(0,31,96)" }}
                >
                  <b>info@lscapitaladvisors.com</b>
                </a>
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid item container style={{ justifyContent: "center" }} xs={4}>
          <Map />
        </Grid>
      </Grid>
    </Grid>
  );
});

// use static image for the map using the pointer in between words
// put address box in top let with company name and address

const useStyles = makeStyles(() => ({
  contactContainer: {
    justifyContent: "center",
    marginTop: 100,
  },
  textContainer: {
    marginBottom: 30,
    paddingTop: 10,
  },
  textContainer2: {
    backgroundColor: "white",
    padding: 10,
    paddingLeft: 20,
    borderRadius: 5,
    boxShadow: "2px 3px 10px #888888",
    marginBottom: 0,
    marginTop: 10,
    paddingBottom: 30,
    width: "auto",
    position: "relative",
    top: 250,
    marginTop: -250,
  },
  textImage: {
    height: 30,
    marginRight: 10,
    position: "relative",
    top: 5,
  },
}));
