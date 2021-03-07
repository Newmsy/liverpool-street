import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { PeopleSlide } from "./peopleSlide";
import { useTextStyles } from "../Styles/TextStyles";

export const People = compose(() => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  //Background of photos

  return (
    <Grid item container xs={12} className={styles.peopleContainer}>
      <Grid item container xs={10} spacing={4}>
        <Grid item xs={4} className={styles.descriptionTextBox}>
          <div style={{ width: "90%", marginLeft: "5%" }}>
            <p className={textStyles.contentTextLarge}>
              <span className={textStyles.greenContentLead}>Jason </span> has
              more than 25 years’ financial markets experience having held
              senior financial roles in a FTSE100 company, corporate &
              investment banks, and is a former ‘Big 4’ corporate finance
              partner.
            </p>
            <p className={textStyles.contentTextLarge}>
              Most recently, Jason has operated in a principal role, as Group
              CEO, overseeing all financing and investment activities for a
              single family office Substantial transaction leadership experience
              in M&A, refinancings, restructurings and recapitalisations, risk
              committees and credit committees and has provided written and oral
              expert testimony, having been called as an expert witness in
              US$2.2bn ICC Arbitration proceedings Emerging and developed
              markets experience in EMEA, Americas and SE Asia.
            </p>
            <p className={textStyles.contentTextLarge}>
              Experienced across the entire range of public and private debt /
              capital markets products and the credit rating spectrum MBA from
              Aston Business School in 1992. First time pass in Securities &
              Futures Authority’s (now Financial Conduct Authority) corporate
              finance exams in 1999
            </p>
          </div>
        </Grid>
        <Grid
          xs={4}
          item
          container
          className={styles.employeeContainer}
          justify="center"
          alignContent="center"
        >
          <Grid item xs={5}>
            <img
              src="/JasonBW.png"
              alt="Jason Green"
              className={styles.peoplePhoto}
            />
            <h1
              className={styles.peopleName}
              style={{
                textAlign: "center",
                color: "rgb(0,31,96)",
                fontWeight: 600,
              }}
            >
              Jason Green
            </h1>
            <h1
              className={styles.peopleName}
              style={{
                textAlign: "center",
                color: "rgb(0,102,102)",
                marginTop: -20,
              }}
            >
              <span className={styles.peopleRole}>Partner</span>
            </h1>
          </Grid>
          <Grid item xs={5}>
            <img
              src="/AndrewPeopleImageBW.png"
              alt="Andrew Golding"
              className={styles.peoplePhoto2}
            />
            <h1
              className={styles.peopleName}
              style={{
                textAlign: "center",
                color: "rgb(0,31,96)",
                fontWeight: 600,
              }}
            >
              Andrew Golding
            </h1>
            <h1
              className={styles.peopleName}
              style={{
                textAlign: "center",
                color: "rgb(0,102,102)",
                marginTop: -20,
              }}
            >
              <span className={styles.peopleRole}>Partner</span>
            </h1>
          </Grid>
        </Grid>

        <Grid item xs={4} className={styles.descriptionTextBox}>
          <div style={{ width: "90%", marginLeft: "5%" }}>
            <p className={textStyles.contentTextLarge}>
              <span className={textStyles.greenContentLead}>Andrew </span> has
              more than 35 years’ financial markets experience having held
              senior financial roles in investment banking and private equity
              and sat on numerous bank and fund boards in both executive and
              non-executive capacities.
            </p>
            <p className={textStyles.contentTextLarge}>
              Most recently, Andrew has advised Alcentra, a sub investment grade
              credit management firm and Bira, a UK SME Bank Substantial
              transaction leadership experience in LBOs, leveraged loans /
              growth capital and syndications, investment committees and credit
              committees and founded debt management businesses for 3i (built
              £4bn AUM) and Spire, UK-based boutique managing US$500M fund
              Experience in major capital markets in UK, Europe and the United
              States.
            </p>
            <p className={textStyles.contentTextLarge}>
              Experience across investment grade and sub investment grade credit
              MA in Modern History from Magdalen College, Oxford in 1984. Rotary
              Scholarship in Political Science from Tulane University, New
              Orleans, in 1985
            </p>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
});

const useStyles = makeStyles(() => ({
  peopleContainer: {
    justifyContent: "center",
    marginTop: 100,
  },
  peopleRole: {
    fontFamily: "Banschrift",
    fontSize: 30,
    fontWeight: 100,
    opacity: 0.8,
  },
  titleContainer: {
    textAlign: "center",
    marginTop: 50,
    height: 150,
  },
  titleContainerHidden: {
    textAlign: "center",
    marginTop: -100,
    marginBottom: 180,
    opacity: 0,
    height: 0,
    overflowY: "hidden",
  },
  employeeContainer: {
    minHeight: 600,
    marginTop: 55,
    display: "flex",
    justifyContent: "space-around",
  },
  peoplePhoto: {
    width: 200,
    height: 235,
    boxShadow: "5px 5px 15px #000000",
    filter: "grayscale(100%)",
  },
  peoplePhoto2: {
    width: 200,
    height: 235,
    boxShadow: "5px 5px 15px #000000",
    filter: "grayscale(100%)",
  },
  peopleName: {
    fontFamily: "Banschrift",
    fontSize: 30,
    fontWeight: 100,
  },
  peopleIndividual: {
    textAlign: "center",
    cursor: "pointer",
  },
  peopleIndividualHalfOpacity: {
    textAlign: "center",
    cursor: "pointer",
    opacity: 0.8,
  },
  peopleIndividualLowOpacity: {
    textAlign: "center",
    cursor: "pointer",
    opacity: 0.5,
  },
  previousRolesTitle: {
    textAlign: "left",
    borderLeftWidth: "6px",
    borderStyle: "none none none solid",
    borderColor: "rgba(40, 142, 142, 0.4)",
    paddingLeft: 10,
    marginLeft: -15,
  },
  descriptionTextBox: {
    marginTop: 100,
    //sort out the width of this to reduce by 20% or so
  },
}));
