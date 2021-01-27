import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { PeopleSlide } from "./peopleSlide";
import { useTextStyles } from "../Styles/TextStyles";

export const People = compose(() => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  const [activePerson, setActivePerson] = React.useState(null);
  const [hoverPerson, setHoverPerson] = React.useState(null);

  const getHoverStyles = (person) => {
    if (activePerson === person || hoverPerson === person)
      return styles.peopleIndividual;
    if (activePerson === null && hoverPerson === null)
      return styles.peopleIndividualHalfOpacity;
    return styles.peopleIndividualLowOpacity;
  };

  return (
    <Grid container xs={10} className={styles.peopleContainer}>
      <Grid item container xs={12} justify="center">
        <Grid
          xs={10}
          item
          container
          className={styles.employeeContainer}
          justify="center"
        >
          <Grid
            item
            xs={4}
            className={getHoverStyles("Jason")}
            onClick={() => setActivePerson("Jason")}
            onMouseEnter={() => setHoverPerson("Jason")}
            onMouseLeave={() => setHoverPerson(null)}
            style={{ transition: "0.5s" }}
          >
            <img
              src="/JasonPeopleImage.png"
              alt="Jason Green"
              className={styles.peoplePhoto}
            />
            <h1 className={styles.peopleName}>
              Jason Green, <span className={styles.peopleRole}>Partner</span>
            </h1>
          </Grid>
          <Grid
            item
            xs={4}
            className={getHoverStyles("Andrew")}
            onClick={() => setActivePerson("Andrew")}
            onMouseEnter={() => setHoverPerson("Andrew")}
            onMouseLeave={() => setHoverPerson(null)}
            style={{ transition: "0.5s" }}
          >
            <img
              src="/AndrewPeopleImage.png"
              alt="Andrew Golding"
              className={styles.peoplePhoto}
            />
            <h1 className={styles.peopleName}>
              Andrew Golding, <span className={styles.peopleRole}>Partner</span>
            </h1>
          </Grid>
          {activePerson === "Jason" && (
            <Grid item xs={11} style={{ marginLeft: 25 }}>
              <p className={textStyles.contentTextLight}>
                <span className={textStyles.greenContentLead}>Jason </span> has
                more than 25 years’ financial markets experience having held
                senior financial roles in a FTSE100 company, corporate &
                investment banks, and is a former ‘Big 4’ corporate finance
                partner.
              </p>
              <p className={textStyles.contentTextLight}>
                Most recently, Jason has operated in a principal role, as Group
                CEO, overseeing all financing and investment activities for a
                single family office Substantial transaction leadership
                experience in M&A, refinancings, restructurings and
                recapitalisations, risk committees and credit committees and has
                provided written and oral expert testimony, having been called
                as an expert witness in US$2.2bn ICC Arbitration proceedings
                Emerging and developed markets experience in EMEA, Americas and
                SE Asia.
              </p>
              <p className={textStyles.contentTextLight}>
                Experienced across the entire range of public and private debt /
                capital markets products and the credit rating spectrum MBA from
                Aston Business School in 1992. First time pass in Securities &
                Futures Authority’s (now Financial Conduct Authority) corporate
                finance exams in 1999
              </p>
            </Grid>
          )}
          {activePerson === "Andrew" && (
            <Grid item xs={11} style={{ marginLeft: 25 }}>
              <p className={textStyles.contentTextLight}>
                <span className={textStyles.greenContentLead}>Andrew </span> has
                more than 35 years’ financial markets experience having held
                senior financial roles in investment banking and private equity
                and sat on numerous bank and fund boards in both executive and
                non-executive capacities.
              </p>
              <p className={textStyles.contentTextLight}>
                Most recently, Andrew has advised Alcentra, a sub investment
                grade credit management firm and Bira, a UK SME Bank Substantial
                transaction leadership experience in LBOs, leveraged loans /
                growth capital and syndications, investment committees and
                credit committees and founded debt management businesses for 3i
                (built £4bn AUM) and Spire, UK-based boutique managing US$500M
                fund Experience in major capital markets in UK, Europe and the
                United States.
              </p>
              <p className={textStyles.contentTextLight}>
                Experience across investment grade and sub investment grade
                credit MA in Modern History from Magdalen College, Oxford in
                1984. Rotary Scholarship in Political Science from Tulane
                University, New Orleans, in 1985
              </p>
            </Grid>
          )}
          {activePerson === null && (
            <Grid item xs={10} className={styles.titleContainer}>
              <h1 className={styles.peopleTitle}>
                <i>World Class Experience</i>
              </h1>
              <p className={textStyles.contentTextLight}>
                Jason and Andrew are two of the most experienced advisors in the
                EMEA Debt Advisory and Financial Restructuring marketplace
              </p>
            </Grid>
          )}
          <PeopleSlide person={activePerson ?? ""} />
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
  peopleTitle: {
    fontFamily: "ArialLight",
    fontSize: 60,
    fontWeight: 100,
    opacity: 0.8,
  },
  peopleRole: {
    fontFamily: "ArialLight",
    fontSize: 30,
    fontWeight: 900,
    opacity: 0.8,
  },
  titleContainer: {
    textAlign: "center",
    marginTop: 100,
  },
  employeeContainer: {
    minHeight: 600,
    display: "flex",
    justifyContent: "space-around",
  },
  peoplePhoto: {
    width: "50%",
  },
  peopleName: {
    fontFamily: "Arial",
    fontSize: 30,
    fontWeight: 100,
    opacity: 0.8,
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
}));