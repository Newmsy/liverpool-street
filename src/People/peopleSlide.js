import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles, Slide } from "@material-ui/core";
import { useTextStyles } from "../Styles/TextStyles";

export const PeopleSlide = compose((person) => {
  const styles = useStyles();
  const [isClean, setIsClean] = React.useState(true);

  return (
    <div>
      <div className={styles.slideRight}>
        <Slide
          in={person.person === "Jason" && isClean}
          direction="left"
          timeout={{ enter: 700, exit: 700 }}
          unmountOnExit
          onExited={() => {
            setIsClean(true);
          }}
          onExit={() => {
            setIsClean(false);
          }}
        >
          <div>
            <img
              src="/JasonCompanies.png"
              alt="Andrew Golding"
              className={styles.peopleCompaniesImage}
            />
          </div>
        </Slide>
      </div>
      <div className={styles.slideRight}>
        <Slide
          in={person.person === "Andrew" && isClean}
          direction="left"
          timeout={{ enter: 700, exit: 700 }}
          unmountOnExit
          onExited={() => {
            setIsClean(true);
          }}
          onExit={() => {
            setIsClean(false);
          }}
        >
          <div>
            <img
              src="/AndrewCompanies.png"
              alt="Andrew Golding"
              className={styles.peopleCompaniesImage}
            />
          </div>
        </Slide>
      </div>
      <div className={styles.slideLeft}>
        <Slide
          in={person.person === "Jason" && isClean}
          direction="right"
          timeout={{ enter: 700, exit: 700 }}
          unmountOnExit
          onExited={() => {
            setIsClean(true);
          }}
          onExit={() => {
            setIsClean(false);
          }}
        >
          <div>
            <RolesJason />
          </div>
        </Slide>
      </div>
      <div className={styles.slideLeft}>
        <Slide
          in={person.person === "Andrew" && isClean}
          direction="right"
          timeout={{ enter: 700, exit: 700 }}
          unmountOnExit
          onExited={() => {
            setIsClean(true);
          }}
          onExit={() => {
            setIsClean(false);
          }}
        >
          <div>
            <RolesAndrew />
          </div>
        </Slide>
      </div>
    </div>
  );
});

const RolesJason = () => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  return (
    <Grid container xs={12} className={styles.previousRoles}>
      <Grid item xs={12} className={styles.previousRolesTitle}>
        <h1 className={textStyles.lightThickSubtitle}>Previous Key Roles</h1>
      </Grid>
      <Grid item xs={10}>
        <p className={textStyles.contentText}>
          • Chief Executive, <b>Single Family Office</b>
        </p>
        <p className={textStyles.contentText}>
          • MD, Head of Financing Advisory, <b>Investec</b>
        </p>
        <p className={textStyles.contentText}>
          • Co-Head, Debt Advisory, <b>PwC</b>
        </p>
        <p className={textStyles.contentText}>
          • Debt Expert Witness, <b>ICC Arbitration Proceedings</b>
        </p>
      </Grid>
    </Grid>
  );
};

const RolesAndrew = () => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  return (
    <Grid container xs={12} className={styles.previousRoles}>
      <Grid item xs={12} className={styles.previousRolesTitle}>
        <h1 className={textStyles.lightThickSubtitle}>Previous Key Roles</h1>
      </Grid>
      <Grid xs={12} marginTop={10} />
      <Grid item xs={10}>
        <p className={textStyles.contentText}>
          • MD, Head of Debt Management, <b>3i</b>
        </p>
        <p className={textStyles.contentText}>
          • MD, Financial Sponsor Group, <b>Bank of America</b>
        </p>
        <p className={textStyles.contentText}>
          • Head of Leveraged Loans, <b>Barclays Capital</b>
        </p>
        <p className={textStyles.contentText}>
          • Head of Financial Sponsors, <b>HSBC</b>
        </p>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  slideRight: {
    position: "absolute",

    right: 20,
  },
  slideLeft: {
    position: "absolute",
    left: 70,
    width: 350,
    maxWidth: "25vw",
  },
  previousRoles: { marginTop: 50 },
  previousRolesTitle: {
    textAlign: "left",
    borderLeftWidth: "6px",
    borderStyle: "none none none solid",
    borderColor: "rgba(40, 142, 142, 0.4)",
    paddingLeft: 10,
    marginLeft: -15,
  },
  previousRolesTitleText: {
    fontFamily: "Arial",
    marginTop: 5,
    marginBottom: 5,
    opacity: 0.6,
  },
  previousRolesContentText: {
    fontFamily: "Arial",
    fontWeight: 100,
    fontSize: 18,
  },
  peopleCompaniesImage: {
    marginTop: 50,
  },
}));
