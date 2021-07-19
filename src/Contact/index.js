import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { useTextStyles } from "../Styles/TextStyles";
import { Map } from "./map";

export const Contact = compose(() => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  //copy of the map pin next to the LSCA and bring down a font size
  //zoom out a bit more on map - include bank and liverpool street
  //align a bit more with top and bottom of images

  //20% smaller font sizes for contact
  //25% smaller graphics
  //leave same size
  //bring graphics a bit closer to center

  return (
    <Grid container xs={12} className={styles.contactContainer}>
      <Grid
        item
        container
        xs={10}
        style={{ minWidth: 1200, justifyContent: "center" }}
      >
        <Grid item xs={4}>
          <Grid item xs={12}>
            <div style={{ position: "relative", height: 560 }}>
              <img
                src={"/Building1.jpg"}
                style={{
                  width: 440,
                  objectFit: "cover",
                  objectPosition: "50% 65%",
                  boxShadow: "2px 3px 10px #888888",
                  marginTop: 38,
                  height: 460,
                  position: "absolute",
                  right: 0,
                }}
              />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <div className={styles.textContainer}>
              <p
                className={textStyles.contentTextLight2}
                style={{
                  fontSize: 22,
                  marginTop: -32,
                  textAlign: "center",
                  marginRight: 115,
                }}
              >
                Associate
                <a href="https://www.hbf.co.uk/" target="_blank">
                  <img
                    src={"/HBF.png"}
                    className={styles.linkedIn}
                    style={{ top: 20, width: 63, marginRight: 10 }}
                  />
                </a>
                Members
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={3}
          style={{ height: "auto", alignContent: "flex-start", marginTop: 40 }}
        >
          <Grid item xs={12} className={styles.textContainer}>
            <p
              className={textStyles.contentTextLight2}
              style={{
                fontSize: 18,
                color: "rgb(0,31,96)",
                textAlign: "center",
              }}
            >
              <b>Jason Green,</b>{" "}
              <span
                style={{
                  color: "rgb(0,31,96)",
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                Partner
              </span>
            </p>

            <p
              className={textStyles.contentTextLight2}
              style={{
                color: "rgb(0,102,102)",
                textAlign: "center",
                fontSize: 16,
              }}
            >
              <b>
                +44 (0) 203 651 5560
                <span
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    color: "rgb(0,31,96)",
                  }}
                >
                  |
                </span>
                +44 (0) 7764 235474
              </b>
            </p>

            <p
              className={textStyles.contentTextLight2}
              style={{
                color: "rgb(0,102,102)",
                textAlign: "center",
                fontSize: 16,
              }}
            >
              <a
                href="mailto:jasongreen@lscapitaladvisors.co.uk"
                style={{
                  color: "rgb(0,102,102)",
                  textAlign: "center",
                }}
              >
                jasongreen@lscapitaladvisors.co.uk
              </a>
            </p>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <p
              className={textStyles.contentTextLight2}
              style={{
                fontSize: 18,
                color: "rgb(0,31,96)",
                textAlign: "center",
              }}
            >
              <b>Andrew Golding, </b>
              <span
                style={{
                  color: "rgb(0,31,96)",
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                Partner
              </span>
            </p>

            <p
              className={textStyles.contentTextLight2}
              style={{
                color: "rgb(0,102,102)",
                textAlign: "center",
                fontSize: 16,
              }}
            >
              <b>
                +44 (0) 203 651 5561
                <span
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                    color: "rgb(0,31,96)",
                  }}
                >
                  |
                </span>
                +44 (0) 7788 233006
              </b>
            </p>
            <p
              className={textStyles.contentTextLight2}
              style={{ color: "rgb(0,102,102)", textAlign: "center" }}
            >
              <b></b>
            </p>
            <p
              className={textStyles.contentTextLight2}
              style={{
                color: "rgb(0,102,102)",
                textAlign: "center",
                fontSize: 16,
              }}
            >
              <a
                href="mailto:andrewgolding@lscapitaladvisors.co.uk"
                style={{
                  color: "rgb(0,102,102)",
                  textAlign: "center",
                }}
              >
                andrewgolding@lscapitaladvisors.co.uk
              </a>
            </p>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.textContainer}>
              <p
                className={textStyles.contentTextLight2}
                style={{
                  fontSize: 18,
                  color: "rgb(0,31,96)",
                  textAlign: "center",
                }}
              >
                <b>Kelsey North, </b>
                <span
                  style={{
                    color: "rgb(0,31,96)",
                    textAlign: "center",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  EA to the Partners
                </span>
              </p>

              <p
                className={textStyles.contentTextLight2}
                style={{
                  color: "rgb(0,102,102)",
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                <b>
                  +44 (0) 203 651 5562{" "}
                  <span
                    style={{
                      marginLeft: 15,
                      marginRight: 15,
                      color: "rgb(0,31,96)",
                    }}
                  >
                    |
                  </span>
                  +44 (0) 7584 668337
                </b>
              </p>
              <p
                className={textStyles.contentTextLight2}
                style={{ color: "rgb(0,102,102)", textAlign: "center" }}
              >
                <b></b>
              </p>
              <p
                className={textStyles.contentTextLight2}
                style={{
                  color: "rgb(0,102,102)",
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                <a
                  href="mailto:kelseynorth@lscapitaladvisors.co.uk"
                  style={{
                    color: "rgb(0,102,102)",
                    textAlign: "center",
                    fontWeight: 300,
                  }}
                >
                  kelseynorth@lscapitaladvisors.co.uk
                </a>
              </p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.textContainer}>
              <p
                className={textStyles.contentTextLight2}
                style={{
                  fontSize: 18,
                  marginTop: 20,
                  textAlign: "center",
                }}
              >
                <a
                  href="mailto:info@lscapitaladvisors.com"
                  style={{ color: "rgb(0,31,96)", fontWeight: 600 }}
                >
                  info@lscapitaladvisors.co.uk
                </a>
              </p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.textContainer}>
              <p
                className={textStyles.contentTextLight2}
                style={{
                  fontSize: 22,
                  marginTop: 24,
                  textAlign: "center",
                }}
              >
                Follow us on
                <a
                  href="https://www.linkedin.com/company/liverpool-street-capital-advisors/about/?viewAsMember=true"
                  target="_blank"
                >
                  <img src={"/linkedIn.jpg"} className={styles.linkedIn} />
                </a>
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid item container style={{ justifyContent: "flex-start" }} xs={4}>
          <Map />
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <div className={styles.textContainer}>
              <p
                className={textStyles.contentTextLight2}
                style={{
                  fontSize: 22,
                  marginTop: 5,
                  marginLeft: 109,
                  textAlign: "center",
                }}
              >
                Associate
                <a href="https://www.r3.org.uk/" target="_blank">
                  <img
                    src={"/R3-Logo.png"}
                    className={styles.linkedIn}
                    style={{ top: 30, width: 75, marginRight: 10 }}
                  />
                </a>
                Members
              </p>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid><div style={{marginTop: 30}}>
        <p
              className={textStyles.contentTextLight2}
              style={{
                color: "rgb(0,102,102)",
                textAlign: "center",
                fontSize: 16,
              }}
            >
              Liverpool Street Capital Advisors Limited is an appointed representative of Talbot Capital Limited which is authorised and regulated by the Financial Conduct Authority
            </p>
            </div></Grid>
    </Grid>
  );
});

// use static image for the map using the pointer in between words
// put address box in top let with company name and address

const useStyles = makeStyles(() => ({
  contactContainer: {
    justifyContent: "center",
    marginTop: 135,
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
  linkedIn: {
    position: "relative",
    top: 8,
    left: 5,
    width: 30,
  },
}));
