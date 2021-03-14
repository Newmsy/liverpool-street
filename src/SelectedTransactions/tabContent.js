import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles, Tab, Tabs, Paper } from "@material-ui/core";
import { useTextStyles } from "../Styles/TextStyles";
import Carousel from "react-material-ui-carousel";

export const TabContent = ({ index }) => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  const [currIndex, setCurrIndex] = React.useState(index);

  return (
    <Grid container xs={12} className={styles.transactionsContainer}>
      <Carousel
        animation="slide"
        indicators={false}
        autoplay={false}
        interval={1000000000}
        navButtonsAlwaysInvisible={true}
        onChange={(index, active) => {
          setCurrIndex(index);
        }}
        index={index}
      >
        {/* ______________________________________Real Assets______________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        <Grid item container xs={12}>
          <Grid
            item
            container
            xs={12}
            style={{
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <TransactionItem
              company={"UK Infrastructure Portfolio"}
              cur={""}
              value={"Undisclosed"}
              description={"Sellside Portfolio Valuation Advice"}
            />

            <TransactionItem
              company={"UK Hospital"}
              value={"138M"}
              description={"Inflation Linked Private Placement"}
            />
            <TransactionItem
              company={"UK Electricity Generator"}
              value={"1,600M"}
              description={"Acquisition Facilities"}
            />
            <TransactionItem
              company={"Italian Electricity Generator"}
              value={"970M"}
              cur={"USD"}
              description={"Development Facilities"}
            />
            <TransactionItem
              company={"UK Energy Regulator"}
              value={"Undisclosed"}
              cur={""}
              description={"Strategic Review of Industry Financing"}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            style={{
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <TransactionItem
              company={"African Marine Vessels"}
              value={"30M"}
              description={"Refinancing Options Review"}
              cur={"USD"}
            />
            <TransactionItem
              company={"Swedish Light Rail"}
              value={"Undisclosed"}
              cur={""}
              description={"Financial Restructuring Advice"}
            />
            <TransactionItem
              company={"Pakistan Electricity Generator"}
              value={"338M"}
              cur={"USD"}
              description={"Bank Finance"}
            />
            <TransactionItem
              company={"UK Facilities Management"}
              value={"100M"}
              description={"Sellside Portfolio  Valuation Advice"}
            />
            <TransactionItem
              company={"UK Hospital"}
              value={"125M"}
              description={"Inflation Linked Bond Refinancing"}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            style={{
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <TransactionItem
              company={"Indonesian Electricity Generator"}
              value={"182M"}
              cur={"USD"}
              description={"Development Facilities"}
            />
            <TransactionItem
              company={"Global Infrastructure Fund"}
              value={"Undisclosed"}
              cur={""}
              description={"Fundraising Advice"}
            />
            <TransactionItem
              company={"UK Wind Power"}
              value={"55M"}
              description={"Bank Facilities"}
            />

            <TransactionItem
              company={"Brazilian Electricity Generator"}
              value={"200M"}
              cur={"USD"}
              description={"Development Facilities"}
            />
            <TransactionItem
              company={"UK Infrastructure Portfolio"}
              value={"Undisclosed"}
              cur={""}
              description={"Valuation Advice for Fund JV"}
            />
          </Grid>
        </Grid>
        {/* ______________________________________Real Estate______________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        <Grid item container xs={12}>
          <Grid
            item
            container
            xs={12}
            style={{
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <TransactionItem
              company={"UK Housebuilder"}
              value={"18M"}
              description={"Dividend Recap Development Facility "}
            />
            <TransactionItem
              company={"UK Housebuilder"}
              value={"12M"}
              description={"Finish and Exit Facility"}
            />
            <TransactionItem
              company={"AIM Care Homes PropCo"}
              value={"326M"}
              description={"WholeCo Refinancing"}
            />
            <TransactionItem
              company={"Australian Investment Fund"}
              value={"250M"}
              description={"UK Shopping Centre Acquisition Facility"}
            />
            <TransactionItem
              company={"UK Housebuilder"}
              value={"5M"}
              description={"Mezzanine Top Up "}
            />
            <TransactionItem
              company={"Int’l Engineering & Construction"}
              value={"450M"}
              description={"Establishment of Protected Cell Fund"}
            />
            <TransactionItem
              company={"Cape Verdean Hotels Group"}
              value={"17M"}
              cur={"USD"}
              description={"Development Facility"}
            />
            <TransactionItem
              company={"UK Strategic Land Promoter"}
              value={"26M"}
              description={"Bridge Facility"}
            />
            <TransactionItem
              company={"UK Housebuilder"}
              value={"18M"}
              description={"Finish and Exit Facility"}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            style={{
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <TransactionItem
              company={"UK Strategic Land Promoter"}
              value={"36M"}
              description={"Amend and Extend"}
            />
            <TransactionItem
              company={"UK Strategic Land Promoter"}
              value={"12M"}
              description={"Bridge Facility"}
            />
            <TransactionItem
              company={"US Real Estate Investment Fund "}
              value={"9,000M"}
              cur={"EUR"}
              description={"Buyside Advice"}
            />
            <TransactionItem
              company={"IoM Strategic Land Promoter"}
              value={"24M"}
              description={"Financial Restructuring"}
            />
            <TransactionItem
              company={"Global Real Estate Developer & Operator"}
              value={"300M"}
              description={"Financial Restructuring"}
            />
            <TransactionItem
              company={"UK Real Estate Investor & Developer"}
              value={"820M"}
              description={"Restructuring Advice"}
            />
            <TransactionItem
              company={"UK Industrial Premises"}
              value={"7M"}
              description={"Bridge to Development Facility"}
            />
            <TransactionItem
              company={"UK Housebuilder"}
              value={"17M"}
              description={"Covenant Reset"}
            />
            <TransactionItem
              company={"UK Housebuilder"}
              value={"2M"}
              description={"Development Exit Facility"}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            style={{
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <TransactionItem
              company={"UK Housebuilder"}
              value={"5M"}
              description={"Second Charge Loan"}
            />
            <TransactionItem
              company={"UK Housebuilder"}
              value={"11M"}
              description={"Amend and Extend"}
            />
            <TransactionItem
              company={"UK Property Data Analytics"}
              value={"8M"}
              description={"Mezzanine Facility"}
            />
            <TransactionItem
              company={"MoD Accommodation Provider"}
              value={"110M"}
              description={"Refinancing Advice"}
            />
            <TransactionItem
              company={"Global Hotels Group"}
              value={"85M"}
              description={"Financing for New Build Hotel"}
            />
            <TransactionItem
              company={"UK Supermarkets Group"}
              value={"2,200M"}
              description={"Property Portfolio Securitisation"}
            />
            <TransactionItem
              company={"Diversified Private Group"}
              value={"125M"}
              description={"Marine & Property  Refinancing"}
            />
            <TransactionItem
              company={"UK Strategic Land Promoter"}
              value={"6M"}
              description={"Bridge Facility"}
            />
            <TransactionItem
              company={"UK Housebuilder"}
              value={"6M"}
              description={"Financial Restructuring"}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          style={{
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <Grid
            item
            container
            xs={12}
            style={{
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <TransactionItem
              company={"Global Consumer Goods"}
              cur={"EUR"}
              value={"9,100M"}
              description={"Financing Strategy Review"}
            />
            <TransactionItem
              company={"Pan European Reinsurance"}
              value={"32M"}
              description={"Bank Refinancing"}
            />
            <TransactionItem
              company={"Multinational Transportation"}
              value={"65M"}
              cur={"EUR"}
              description={"Asset Based & Cashflow Loans"}
            />
            <TransactionItem
              company={"Global Food & Beverage"}
              value={"810M"}
              description={"Rating & Pension Scheme Review"}
            />
            <TransactionItem
              company={"UK Motor Dealerships"}
              value={"120M"}
              description={"Revolving Credit Facility"}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            style={{
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <TransactionItem
              company={"UK Telecommunications"}
              value={"110M"}
              description={"Bank Refinancing"}
            />
            <TransactionItem
              company={"Confidential FTSE100"}
              value={"3,800M"}
              description={"Bridge Loan Refinancing"}
              cur={"USD"}
            />
            <TransactionItem
              company={"Global Beverage Distribution"}
              value={"60M"}
              cur={"USD"}
              description={"Maiden Debt Offering"}
            />
            <TransactionItem
              company={"UK Property Data Analytics"}
              value={"16M"}
              description={"Term Loan Dividend Recap"}
            />
            <TransactionItem
              company={"UK Food Wholesaler"}
              value={"120M"}
              description={"Term Loan Refinancing"}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            style={{
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <TransactionItem
              company={"European Pension Fund"}
              value={"2,300M"}
              cur={"EUR"}
              description={"Corporate Loan Portfolio Acquisition"}
            />
            <TransactionItem
              company={"UK Fashion Retail"}
              value={"525M"}
              description={"Bank & High Yield Dividend Recap"}
            />
            <TransactionItem
              company={"Greek Industrial Minerals"}
              value={"200M"}
              cur={"EUR"}
              description={"Group Rating & Refinancing Options"}
            />
            <TransactionItem
              company={"UK Airline"}
              value={"300M"}
              description={"Covenant Advice to Pension Trustees"}
            />
            <TransactionItem
              company={"AIM North African Oil & Gas Explorer"}
              value={"58M"}
              cur={"USD"}
              description={"Reserve Based Lending Facility"}
            />
          </Grid>
        </Grid>
        {/* ______________________________________Private Equity____________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        <Grid item container xs={12}>
          <Grid
            item
            container
            xs={12}
            style={{
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <TransactionItem
              company={"UK Healthcare"}
              value={"30M"}
              description={"Senior & Junior Debt Raising"}
            />
            <TransactionItem
              company={"UK Regional Airport"}
              value={"377M"}
              description={"Bank and Bond Refinancing"}
            />
            <TransactionItem
              company={"UK Automotive Parts Distribution"}
              value={"45M"}
              description={"Acquisition Facilities"}
            />
            <TransactionItem
              company={"UK Medical Services"}
              value={"55M"}
              description={"Staple Financing"}
            />
            <TransactionItem
              company={"UK Corporate Vehicle Rental"}
              value={"180M"}
              description={"Refinancing Advice"}
            />
            <TransactionItem
              company={"UK Water Utility Assets"}
              value={"60M"}
              description={"Buyside Financing Advice"}
            />
            <TransactionItem
              company={"UK Logistics"}
              value={"7M"}
              description={"Senior Facilities"}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            style={{
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <TransactionItem
              company={"European IT Services"}
              value={"120M"}
              cur={"EUR"}
              description={"Acquisition Facilities"}
            />
            <TransactionItem
              company={"UK Textiles"}
              value={"193M"}
              description={"Acquisition Facilities"}
            />
            <TransactionItem
              company={"International Public Services Outsourcing"}
              value={"160M"}
              description={"Covenant Reset"}
            />
            <TransactionItem
              company={"UK Pharma Contract Manufacturing"}
              value={"32M"}
              description={"Expansion Facilities"}
            />
            <TransactionItem
              company={"UK Self Storage"}
              value={"390M"}
              description={"Asset Backed Refinancing"}
            />
            <TransactionItem
              company={"UK Outsourced Security Services"}
              value={"202M"}
              description={"Refinancing Options"}
            />
            <TransactionItem
              company={"UK Consumer Goods"}
              value={"100M"}
              description={"Leveraged Recapitalisation"}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            style={{
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <TransactionItem
              company={"European Business Services              "}
              value={"60M"}
              cur={"EUR"}
              description={"Senior Recapitalisation"}
            />
            <TransactionItem
              company={"Industrial Pumps Manufacturing              "}
              value={"295M"}
              description={"Bank and ECA Refinancing"}
            />
            <TransactionItem
              company={"UK Stationer              "}
              value={"40M"}
              description={"Refinancing"}
            />
            <TransactionItem
              company={"Euro Pharma Contract Manufacturing              "}
              value={"67M"}
              cur={"EUR"}
              description={"Refinancing"}
            />
            <TransactionItem
              company={"UK Conferences Centres Group"}
              value={"195M"}
              description={"OpCo / PropCo Split"}
            />
            <TransactionItem
              company={"UK Roads Assets"}
              value={"55M"}
              description={"Buyside Financing Advice"}
            />
            <TransactionItem
              company={"UK Crane Hire"}
              value={"200M"}
              description={"Staple Financing"}
            />
          </Grid>
        </Grid>

        {/* ______________________________________Natural Resources________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        {/* _______________________________________________________________________________________________________________________________ */}
        <Grid item container xs={12}>
          <Grid
            item
            container
            xs={12}
            style={{
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <TransactionItem
              company={"Colombian Nickel Mining"}
              cur={"USD"}
              value={"240M"}
              description={"Expansion Facilities"}
            />
            <TransactionItem
              company={"Chilean Copper Mining"}
              value={"205M"}
              cur={"USD"}
              description={"Mine Development Facilities"}
            />
            <TransactionItem
              company={"Ghanaian Gold Mining"}
              value={"75M"}
              cur={"USD"}
              description={"Mine Development Facilities"}
            />
            <TransactionItem
              company={"Chinese Aluminium Smelting"}
              value={"180M"}
              cur={"USD"}
              description={"Aluminium Tolling Facility"}
            />
            <TransactionItem
              company={"Trinidadian Methanol Processing"}
              value={"200M"}
              cur={"USD"}
              description={"Bank / ECA Funding for Plant"}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            style={{
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <TransactionItem
              company={"Trinidadian LNG"}
              value={"600M"}
              cur={"USD"}
              description={"Bank / ECA LNG Train Financing "}
            />
            <TransactionItem
              company={"Canadian Platinum Producer"}
              value={"175M"}
              cur={"USD"}
              description={"Plant Expansion Facility"}
            />
            <TransactionItem
              company={"Indonesian Coal Mining"}
              value={"240M"}
              description={"Mine Development Facilities"}
              cur={"USD"}
            />
            <TransactionItem
              company={"Chilean Mining Group"}
              value={"335M"}
              cur={"USD"}
              description={"Copper-Gold Mine Expansion Facilities"}
            />
            <TransactionItem
              company={"Tanzanian Gold Producer"}
              value={"45M"}
              cur={"USD"}
              description={"Mine Development Facilities"}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            style={{
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <TransactionItem
              company={"International Upstream Oil & Gas"}
              value={"165M"}
              cur={"USD"}
              description={"Capex Facilities"}
            />
            <TransactionItem
              company={"European Aluminium Smelting"}
              value={"80M"}
              cur={"USD"}
              description={"Refinancing / Expansion Capex"}
            />
            <TransactionItem
              company={"Peruvian Gas Pipelines"}
              value={"80M"}
              cur={"USD"}
              description={"Development Facilities"}
            />
            <TransactionItem
              company={"Irish Zinc Mining"}
              value={"60M"}
              cur={"EUR"}
              description={"Bank Facilities"}
            />
            <TransactionItem
              company={"US Copper Processing"}
              value={"35M"}
              cur={"USD"}
              description={"Mine Processing Plant Facility"}
            />
          </Grid>
        </Grid>
      </Carousel>
    </Grid>
  );
};

const TransactionItem = ({ company = "", value, description, cur = "GBP" }) => {
  const styles = useStyles();
  const textStyles = useTextStyles();

  return (
    <Grid item container className={styles.tabContainerItem}>
      <Grid item style={{ paddingLeft: 5, paddingRight: 5 }}>
        {company.length > 0 && (
          <p
            className={textStyles.contentText}
            style={{
              fontSize: 17,
              textAlign: "center",
              marginBottom: -15,
              marginTop: 2,
              color: "rgb(0,102,102)",
            }}
          >
            {company}
          </p>
        )}
      </Grid>

      <Grid
        item
        style={{
          marginTop: -10,
          marginBottom: -10,
          position: "absolute",
          top: 85,
        }}
      >
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
      <Grid
        item
        style={{
          marginTop: -10,
          marginBottom: -15,
          position: "absolute",
          top: 145,
          padding: 5,
        }}
      >
        <p
          className={textStyles.contentText}
          style={{
            textAlign: "center",
            fontSize: 17,
            color: "rgb(0,102,102)",
            marginTop: 0,
          }}
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
    display: "flex",
    alignContent: "flex-start",
    backgroundColor: "transparent",
    marginTop: 20,
  },

  tabContainerItem: {
    minHeight: 0,
    border: "2px solid rgb(0,31,96)",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    width: 150,
    minHeight: 190,
    marginBottom: 5,
    flexDirection: "column",
    alignItems: "center",
    overflowY: "hidden",
    overflowX: "hidden",
    position: "relative",
    backgroundColor: "white",
    padding: 5,
  },
}));
