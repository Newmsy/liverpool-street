import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { PeopleSlide } from "./peopleSlide";
import { useTextStyles } from "../Styles/TextStyles";

export const People = compose(() => {
  const styles = useStyles();
  const textStyles = useTextStyles();

  return (
    <Grid item container xs={12} className={styles.peopleContainer}>
      <Grid item container xs={10} spacing={4}>
        <Grid
          item
          xs={4}
          className={styles.descriptionTextBox}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div style={{ width: 437, marginLeft: "0%", marginTop: 50 }}>
            <p className={textStyles.contentTextLarge}>
              <span
                className={textStyles.greenContentLead}
                style={{ fontWeight: 100 }}
              >
                Jason{"   "}
              </span>
              has more than 25 years’ financial markets experience having held
              senior financial roles in industry, corporate and investment
              banking, professional services and, most recently, Group CEO of a
              single family office. During his career, Jason has sat on all
              sides of the table as lender, investor, borrower and advisor,
              giving him a unique perspective on financing negotiations. Key
              previous roles include:
            </p>
            <div className={styles.indented}>
              <p
                className={textStyles.contentTextLightTight}
                style={{ textAlign: "center" }}
              >
                <span style={{ marginLeft: -10, marginRight: 15 }}>•</span>
                <span style={{ marginLeft: -10 }}>
                  Chief executive, single family office
                </span>
              </p>
              <p
                className={textStyles.contentTextLightTight}
                style={{ textAlign: "center" }}
              >
                <span style={{ marginLeft: -10, marginRight: 15 }}>•</span>
                <span style={{ marginLeft: -10 }}>
                  Co-Founder / Co-Head of Debt Advisory, PwC
                </span>
              </p>
              <p
                className={textStyles.contentTextLightTight}
                style={{ textAlign: "center", width: "70%", marginLeft: "15%" }}
              >
                <span style={{ marginLeft: -10, marginRight: 15 }}>•</span>
                <span style={{ marginLeft: -10 }}>
                  Global Structured Finance at Investec Bank, Natwest Markets,
                  National Australia Bank
                </span>
              </p>
            </div>

            <p className={textStyles.contentTextLarge}>
              Jason has substantial transaction leadership experience in M&A,
              refinancings, restructurings and recapitalisations, risk
              committees and credit committees and has provided written / oral
              expert testimony having been called as an expert witness in
              USD2.2BN ICC Arbitration proceedings.
            </p>
            <p className={textStyles.contentTextLarge}>
              Emerging / developed markets experience in EMEA, Americas and SE
              Asia. Experienced across the entire range of public and private
              debt / capital markets and the credit rating spectrum.
            </p>
            <p className={textStyles.contentTextLarge}>
              MBA from Aston Business School in 1992. Qualified with the
              Securities Institute (now Chartered Institute for Securities &
              Investment), in 1999.
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
          <Grid
            item
            xs={5}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
                fontSize: 20,
              }}
            >
              Jason Green
            </h1>
            <h1
              className={styles.peopleName}
              style={{
                textAlign: "center",
                color: "rgb(0,102,102)",
                marginTop: -10,
                marginBottom: 5,
                fontSize: 20,
              }}
            >
              <span className={styles.peopleRole} style={{ fontSize: 20 }}>
                Partner
              </span>
            </h1>
          </Grid>
          <Grid
            item
            xs={5}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
                fontSize: 20,
              }}
            >
              Andrew Golding
            </h1>
            <h1
              className={styles.peopleName}
              style={{
                textAlign: "center",
                color: "rgb(0,102,102)",
                marginTop: -10,
                marginBottom: 5,
                fontSize: 20,
              }}
            >
              <span className={styles.peopleRole} style={{ fontSize: 20 }}>
                Partner
              </span>
            </h1>
          </Grid>
          <Grid
            item
            style={{
              position: "relative",
              top: 0,
              paddingLeft: 33,
              paddingRight: 33,
              width: 456,
            }}
          >
            <p
              className={textStyles.contentTextLarge}
              style={{
                fontSize: 20,
                color: "rgb(0,102,102)",
                textAlign: "center",
                fontWeight: 100,
              }}
            >
              <i>
                Jason and Andrew are two of the most experienced advisors in the
                Financing Advisory and Restructuring marketplace.
              </i>
            </p>
            <p
              className={textStyles.contentTextLarge}
              style={{
                fontSize: 20,
                color: "rgb(0,102,102)",
                textAlign: "center",
                fontWeight: 100,
              }}
            >
              <i>
                We believe this depth of market knowledge and career experience
                of having sat at every seat at the table is unique in the
                Financing Advisory and Restructuring marketplace.
              </i>
            </p>
          </Grid>
        </Grid>

        <Grid
          item
          xs={4}
          className={styles.descriptionTextBox}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <div
            style={{
              width: 437,
              marginTop: 50,
            }}
          >
            <p className={textStyles.contentTextLarge}>
              <span
                className={textStyles.greenContentLead}
                style={{ fontWeight: 100 }}
              >
                Andrew{" "}
              </span>{" "}
              has more than 35 years’ financial markets experience having held
              senior financial roles in investment banking, private equity and,
              most recently, as banking advisor for a leading pan-European
              mid-market private equity investor. During his career, Andrew has
              sat on all sides of the table as lender, investor, borrower and
              advisor, giving him a unique perspective on financing
              negotiations. Key previous roles include:
            </p>

            <div className={styles.indented}>
              <p
                className={textStyles.contentTextLightTight}
                style={{ textAlign: "center" }}
              >
                <span style={{ marginLeft: -10, marginRight: 15 }}>•</span>
                <span style={{ marginLeft: -10 }}>
                  Chief executive, single family office
                </span>
              </p>
              <p
                className={textStyles.contentTextLightTight}
                style={{ textAlign: "center" }}
              >
                <span style={{ marginLeft: -10, marginRight: 15 }}>•</span>
                <span style={{ marginLeft: -10 }}>
                  Head of Debt Management / Banking Partner, 3i Buyouts
                </span>
              </p>
              <p
                className={textStyles.contentTextLightTight}
                style={{ textAlign: "center", marginLeft: "10%", width: "80%" }}
              >
                <span style={{ marginLeft: -10, marginRight: 15 }}>•</span>
                <span style={{ marginLeft: -10 }}>
                  Head of Financial Sponsors / Leveraged Finance at B of A,
                  Barclays Capital, HSBC
                </span>
              </p>
            </div>

            <p className={textStyles.contentTextLarge}>
              Andrew has substantial transaction leadership experience in LBOs,
              leveraged loans / growth capital and syndications, investment
              committees and credit committees and founded debt management
              businesses for 3i (built £4BN AUM) and Spire, a UK-based boutique,
              managing USD500M fund.
            </p>
            <p className={textStyles.contentTextLarge}>
              Experience in all major private funding and capital markets in the
              UK, Europe and the United States. Experienced across investment
              grade and sub investment grade credit.
            </p>
            <p className={textStyles.contentTextLarge}>
              MA in Modern History from Magdalen College, Oxford in 1984. Rotary
              Scholarship in Political Science to Tulane University, New
              Orleans, in 1985.
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
    marginTop: 40,
    display: "flex",
    justifyContent: "space-around",
  },
  peoplePhoto: {
    width: 200,
    height: 235,
    boxShadow: "5px 5px 15px #000000",
    filter: "grayscale(100%)",
    borderRadius: 5,
  },
  peoplePhoto2: {
    width: 200,

    height: 235,
    boxShadow: "5px 5px 15px #000000",
    filter: "grayscale(100%)",
    borderRadius: 5,
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
    marginTop: -10,

    //sort out the width of this to reduce by 20% or so
  },
  indented: {
    marginLeft: 20,
    marginTop: 30,
  },
}));
