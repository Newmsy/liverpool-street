import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles, Tab, Tabs, Paper } from "@material-ui/core";
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
      {index === 2 && (
        <>
          <TransactionItem
            title={"Financial Advisor"}
            company={"Unilever"}
            imageUrl={""}
            cur={"€"}
            value={"9.1BN"}
            description={"Financing Strategy Review"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Cooper Gay"}
            imageUrl={""}
            value={"32M"}
            description={"Bank Refinancing"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Ale"}
            imageUrl={""}
            value={"65M"}
            cur={"€"}
            description={"Asset Based and Cashflow Loans"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Tate & Lyle"}
            imageUrl={""}
            value={"810M"}
            description={"Rating and Pension Scheme Review"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Marshall Motor Holdings plc"}
            imageUrl={""}
            value={"120M"}
            description={"Revolving Credit Facility"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Thus"}
            imageUrl={""}
            value={"110M"}
            description={"Bank Refinancing"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Confidential FTSE100"}
            imageUrl={""}
            value={"3.8BN"}
            cur={"$"}
            description={"Bridge Loan Refinancing"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"WaterLogic"}
            imageUrl={""}
            cur={"$"}
            value={"60M"}
            description={"Maiden Debt Offering of AIM Company"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Ainscough"}
            imageUrl={""}
            value={"200M"}
            description={"Staple Financing"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Booker Group plc"}
            imageUrl={""}
            value={"120M"}
            description={"Term Loan Refinancing"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"PGGM"}
            imageUrl={""}
            cur={"€"}
            value={"2.3BN"}
            description={"Bank Refinancing"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Matalan"}
            imageUrl={""}
            value={"525M"}
            description={"Bank & High Yield Dividend Recap"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"S&B Indeustrial Minerals"}
            imageUrl={""}
            cur={"€"}
            value={"200M"}
            description={"Group Rating and Refinancing Options"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Bitish Ariways"}
            imageUrl={""}
            value={"300M"}
            description={"Advice to Pension Trustees"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Circle Oil plc"}
            imageUrl={""}
            cur={"$"}
            value={"57.5M"}
            description={"Reserve Based Lending Facility"}
          />
        </>
      )}
      {index === 3 && (
        <>
          <TransactionItem
            title={"Financial Advisor"}
            company={"Newcastle International / Macquire Bank"}
            imageUrl={""}
            value={"377M"}
            description={"Bank and Bond Refinancing"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Andrew Page / Phoenix"}
            imageUrl={""}
            value={"45M"}
            description={"Acquisition Facilities"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Anson"}
            imageUrl={""}
            value={"55M"}
            description={"Staple Financing"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Leasedrive Velo / LDC"}
            imageUrl={""}
            value={"180M"}
            description={"Refinancing Advice"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Henderson Global Investors"}
            imageUrl={""}
            value={"60M"}
            description={"Buyside Financing Advice for Water Assets"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Hillarys / European Capital"}
            imageUrl={""}
            value={"193M"}
            description={"Acquisition Facilities"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Civia / 3i"}
            imageUrl={""}
            value={"160M"}
            description={"Aquisition Facilities / Cov Reset"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Aesica / LDC"}
            imageUrl={""}
            value={"32M"}
            description={"Expansion Facilities"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Safestore / Bridgepoint"}
            imageUrl={""}
            value={"390M"}
            description={"Asset Backed Refinancing"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Bregal Capital"}
            imageUrl={""}
            value={"202M"}
            description={"Refinancing Options for GSL Acquisition"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Clyde Union Pumps"}
            imageUrl={""}
            value={"295M"}
            description={"Bank and ECA Refinancing"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Letts Filofax / Phoenix"}
            imageUrl={""}
            value={"40M"}
            description={"Refinancing"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Next Pharma / Donaldson Luftkin & Jenrette"}
            imageUrl={""}
            cur={"€"}
            value={"67M"}
            description={"Refinancing"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Hayley / 3i"}
            imageUrl={""}
            value={"195M"}
            description={"OpCo / PropCo Split"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Henderson Global Investors"}
            imageUrl={""}
            value={"55M"}
            description={"Buyside Financing Advice for Seed Assets"}
          />
        </>
      )}
      {index === 4 && (
        <>
          <TransactionItem
            title={"Financial Advisor"}
            company={"Innisfree"}
            imageUrl={""}
            value={" Undisclosed"}
            description={"Sellside Valuation Advice for Fund Portfolio"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"ofgem"}
            imageUrl={""}
            value={" Undisclosed"}
            description={"Strategic Review of Sector Financing"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"United Healthcare"}
            imageUrl={""}
            value={"138M"}
            description={"Index Linked Private Placement"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"Drax Power Limited"}
            imageUrl={""}
            value={"1.6BN"}
            description={"Bank Acqusition Facilities"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"ERG"}
            imageUrl={""}
            cur={"$"}
            value={"970M"}
            description={"512 MW IGCC Power Plant, Italy"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"Nordural"}
            imageUrl={""}
            cur={"$"}
            value={"80M"}
            description={"Bank Refinancing / Expansion Capex"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Darent Valley Hospital"}
            imageUrl={""}
            value={"152M"}
            description={"Index Linked Bond Refinancing"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Meridiam"}
            imageUrl={""}
            value={"N/A"}
            description={"Corporate Financing Advice for Fund Set Up"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Arlanda Express"}
            imageUrl={""}
            value={" Undisclosed"}
            description={"Financial Restructuring Advice"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Carillion"}
            imageUrl={""}
            value={"100M"}
            description={"Sellside Valuation Advice for Fund Portfolio"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Specialised Vessel Services"}
            imageUrl={""}
            cur={"$"}
            value={" Undisclosed"}
            description={"Refinancing Options Review"}
          />
          <TransactionItem
            title={"Financial Advisor"}
            company={"Innisfree"}
            imageUrl={""}
            value={" Undisclosed"}
            description={"Valuation Advice for Fund JV"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"Power-gen"}
            imageUrl={""}
            value={"55M"}
            description={"Bank Facilities for Irish Wind Assets"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"Lundin"}
            imageUrl={""}
            cur={"$"}
            value={"165M"}
            description={"Capex Facilities for UK / Malaysia"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"Light"}
            imageUrl={""}
            cur={"$"}
            value={"200M"}
            description={"Power Plant Construction, Brazil"}
          />
        </>
      )}
      {index === 5 && (
        <>
          <TransactionItem
            title={"Lender To"}
            company={"BHP Billiton"}
            imageUrl={""}
            cur={"$"}
            value={"240M"}
            description={"Brownfield Nickel Mine / Processing"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"Antofagasta"}
            imageUrl={""}
            cur={"$"}
            value={"205M"}
            description={"Greenfield Copper Mine Development"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"Goldfields"}
            imageUrl={""}
            cur={"$"}
            value={"75M"}
            description={"Greenfield Gold Mine Development"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"UHC, Pakistan"}
            imageUrl={""}
            cur={"$"}
            value={"338M"}
            description={"Bank Finance for 800MW Powerplant"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"Pluspetrol"}
            imageUrl={""}
            cur={"$"}
            value={"80M"}
            description={"Financing for NG/NGL Pipelines, Peru"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"Stillwater"}
            imageUrl={""}
            cur={"$"}
            value={"175M"}
            description={"Platinum & Palladium Plant Expansion"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"Kaltim Prima"}
            imageUrl={""}
            cur={"$"}
            value={"240M"}
            description={"Mine Development Facility"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"BHP Billiton"}
            imageUrl={""}
            cur={"$"}
            value={"335M"}
            description={"Expansion Facility for Copper / Gold Mine"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"Golden Pride"}
            imageUrl={""}
            cur={"$"}
            value={"45M"}
            description={"Greenfield Gold Mine Development"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"Titan, Trinidad"}
            imageUrl={""}
            cur={"$"}
            value={"200M"}
            description={"Bank / ECA Finance for Methanol Powerplant"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"ALNG, Trinidad"}
            imageUrl={""}
            cur={"$"}
            value={"600M"}
            description={"Bank / ECA Financing for LNG Train 1"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"Sino Mining"}
            imageUrl={""}
            cur={"$"}
            value={"180M"}
            description={"Aluminium Tolling Facility"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"Vedanta"}
            imageUrl={""}
            cur={"€"}
            value={"60M"}
            description={"Zinc Mine Development"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"Equatorial Tonopah"}
            imageUrl={""}
            cur={"$"}
            value={"35M"}
            description={"Copper Mine Processing Plant"}
          />
          <TransactionItem
            title={"Lender To"}
            company={"PT. Energi Sengkang"}
            imageUrl={""}
            cur={"$"}
            value={"182M"}
            description={"Power Plant Construction, Indonesia"}
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
      <Grid item container xs={12} className={styles.subPaper}>
        <Grid item>
          {company.length > 0 && (
            <p
              className={textStyles.contentText}
              style={{
                fontSize: 17,
                textAlign: "center",
                marginBottom: -15,
                marginTop: 2,
                color: "rgb(0,31,96)",
              }}
            >
              {company}
            </p>
          )}
        </Grid>

        <Grid item style={{ marginTop: -10, marginBottom: -10 }}>
          <p
            className={textStyles.contentText}
            style={{
              fontSize: 22,
              color: "rgb(0,31,96)",
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            {cur}
            {value}
          </p>
        </Grid>
        <Grid item style={{ marginTop: -10, marginBottom: -15 }}>
          <p
            className={textStyles.contentText}
            style={{
              textAlign: "center",
              fontSize: 17,
              color: "rgb(0,31,96)",
              marginTop: 0,
            }}
          >
            {description}
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  transactionsContainer: {
    justifyContent: "center",
    alignContent: "flex-start",
    backgroundColor: "transparent",
    paddingBottom: "3vh",
  },
  subPaper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    minHeight: 190,
    marginTop: 0,
    borderRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflowY: "hidden",
    overflowX: "hidden",
  },
  tabContainerItem: {
    minHeight: 0,
    boxShadow: "1px 1px 8px #000000",
    backgroundColor: "rgb(0,102,102)",
    borderRadius: 15,
    marginLeft: "1%",
    marginRight: "1%",
    paddingRight: 5,
    paddingBottom: 5,
    marginTop: 10,
    width: "18%",
    marginBottom: 5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    overflowY: "hidden",
    overflowX: "hidden",
  },
}));
