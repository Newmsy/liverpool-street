import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles, Tab, Tabs } from "@material-ui/core";
import { useTextStyles } from "../Styles/TextStyles";

export const TabContent = ({ index }) => {
  const styles = useStyles();
  const textStyles = useTextStyles();

  return (
    <Grid container xs={12} className={styles.transactionsContainer}>
      {index === 0 && (
        <>
          <TransactionItem
            title={"Borrower"}
            imageUrl={""}
            value={"17.8M"}
            description={"Development Facility"}
          />
          <TransactionItem
            title={"Borrower"}
            imageUrl={""}
            value={"5.0M"}
            description={"Mezzanine Restructuring"}
          />
          <TransactionItem
            title={"Borrower"}
            imageUrl={""}
            value={"26.3M"}
            description={"Land Bridge Facility"}
          />
          <TransactionItem
            title={"Borrower"}
            imageUrl={""}
            value={"11.9M"}
            description={"Dividend Recap Facility"}
          />
          <TransactionItem
            title={"Borrower"}
            imageUrl={""}
            value={"18.0M"}
            description={"Development Facility"}
          />
          <TransactionItem
            title={"Borrower"}
            imageUrl={""}
            value={"36.3M"}
            description={"Financial Restructuring"}
          />
          <TransactionItem
            title={"Borrower"}
            imageUrl={""}
            value={"12M"}
            description={"Bridging Facility"}
          />
          <TransactionItem
            title={"Borrower"}
            imageUrl={""}
            value={"16.8M"}
            description={"Financial Restructuring"}
          />
          <TransactionItem
            title={"Borrower"}
            imageUrl={""}
            value={"5.8M"}
            description={"Financial Restructuring"}
          />
          <TransactionItem
            title={"Borrower"}
            imageUrl={""}
            value={"1.4M"}
            description={"Development Exit Facility"}
          />
          <TransactionItem
            title={"Borrower"}
            imageUrl={""}
            value={"4.5M"}
            description={"Mezzanine Facility"}
          />
          <TransactionItem
            title={"Borrower"}
            imageUrl={""}
            value={"10.6M"}
            description={"Financial Restructuring"}
          />
          <TransactionItem
            title={"Borrower"}
            imageUrl={""}
            value={"6.2M"}
            description={"Land Bridge Facility"}
          />
          <TransactionItem
            title={"Borrower"}
            imageUrl={""}
            value={"2.2M"}
            description={"Land Bridge Facility"}
          />
          <TransactionItem
            title={"Borrower"}
            imageUrl={""}
            value={"2.5M"}
            description={"Working Capital Facility"}
          />
        </>
      )}
      {index === 1 && (
        <>
          <TransactionItem
            title={"Financial Advisor"}
            company={"Public Service Properties Investments"}
            imageUrl={""}
            value={"326M"}
            description={"PropCo Refinancing of AIM company"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"QIC"}
            imageUrl={""}
            value={"17.8M"}
            description={"Acquisition Facility for Merry Hill"}
          />
          <TransactionItem
            title={"Lender to"}
            company={"InterContinental Hotels Group"}
            imageUrl={""}
            value={"90M"}
            cur={"€"}
            description={"Proposed Financing for New Build"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Laing O'Rourke"}
            imageUrl={""}
            value={"150M"}
            description={"Corporate Finance Advice for Protected Cell Fund"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"The Resort Group PLC"}
            imageUrl={""}
            value={"17M"}
            cur={"$"}
            description={"Development Facility"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Cereberus Capital Management"}
            imageUrl={""}
            value={"9BN PAR VALUE"}
            cur={"€"}
            description={"Buyside Loan Portfolio Advisory"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Habourcastle Limited"}
            imageUrl={""}
            value={"24M"}
            description={"Restructuring Adviser"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Frasers Property"}
            imageUrl={""}
            value={"300M"}
            description={"Bank Restructuring"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Hometrack"}
            imageUrl={""}
            value={"16M"}
            description={"Term Loan Refinancing"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Hometrack"}
            imageUrl={""}
            value={"8M"}
            description={"Mezzanine Facility"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Tricom"}
            imageUrl={""}
            value={"110M"}
            description={"Bank Refinancing"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"InterContinental Hotels Group"}
            imageUrl={""}
            value={"85M"}
            description={"Bank Financing for New Build"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Targetfollow"}
            imageUrl={""}
            value={"820M"}
            description={"Bank Debt & Swaps Restructuring"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"J Sainsbury plc"}
            imageUrl={""}
            value={"2.2BN"}
            description={"Property Portfolio Securitisation"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Yattendon Group"}
            imageUrl={""}
            value={"125M"}
            description={"Marine Assets Refinancing"}
          />
        </>
      )}
    </Grid>
  );
};

const TransactionItem = ({
  title,
  company = "",
  imageUrl,
  value,
  description,
  cur = "£",
}) => {
  const styles = useStyles();
  const textStyles = useTextStyles();

  return (
    <Grid item container className={styles.tabContainerItem}>
      <Grid item style={{ marginTop: -10 }}>
        <h1
          className={textStyles.mediumSubtitle}
          style={{ textAlign: "center" }}
        >
          {title}
        </h1>
        {company.length > 0 && (
          <p
            className={textStyles.contentTextLight}
            style={{
              fontSize: 18,
              textAlign: "center",
              marginTop: -15,
            }}
          >
            {company}
          </p>
        )}
      </Grid>
      {imageUrl.length > 0 && <img src={imageUrl} alt={imageUrl} />}
      <Grid item style={{ marginTop: -20, marginBottom: -10 }}>
        <p className={textStyles.contentTextLight} style={{ fontSize: 22 }}>
          {cur}
          {value}
        </p>
      </Grid>
      <Grid item style={{ marginTop: -10, marginBottom: -10 }}>
        <p
          className={textStyles.contentTextLight}
          style={{ textAlign: "center" }}
        >
          {description}
        </p>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  transactionsContainer: {
    justifyContent: "center",
    alignContent: "flex-start",
    backgroundColor: "rgb(0,102,102)",
    minHeight: 1000,
  },

  tabContainerItem: {
    height: 200,
    boxShadow: "2px 3px 10px #000000",
    backgroundColor: "white",
    borderRadius: 5,
    border: "2px solid white",
    marginLeft: "1%",
    marginRight: "1%",
    marginTop: 10,
    width: "18%",
    marginBottom: 5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
