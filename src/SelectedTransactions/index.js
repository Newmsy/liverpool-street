import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles, Tab, Tabs } from "@material-ui/core";
import { useTextStyles } from "../Styles/TextStyles";
import { TabContent } from "./tabContent";

export const SelectedTransactions = compose(() => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  const [activeTab, setActiveTab] = React.useState(0);

  const onChangeTab = React.useCallback((event, newValue) => {
    setActiveTab(newValue);
    console.log(activeTab);
  }, []);

  return (
    <Grid container xs={12} className={styles.transactionsContainer}>
      <Grid item>
        <h1 className={textStyles.lightTitle}>Selected Transactions</h1>
      </Grid>

      <Grid item container xs={9} alignItems="space-between" justify="center">
        <Tabs
          value={activeTab}
          onChange={onChangeTab}
          TabIndicatorProps={{
            style: {
              height: "0px",
            },
          }}
          variant="fullWidth"
          className={styles.tabBar}
        >
          <Tab
            className={styles.transactionTab}
            label={"Transactions as Borrower"}
          />
          <Tab className={styles.transactionTab} label={"Real Estate"} />
          <Tab className={styles.transactionTab} label={"Corporate"} />
          <Tab className={styles.transactionTab} label={"Private Equity"} />
          <Tab
            className={styles.transactionTab}
            label={"Energy, Mining & Infrastructure (1)"}
          />
          <Tab
            className={styles.transactionTab}
            label={"Energy, Mining & Infrastructure (2)"}
          />
        </Tabs>
        <TabContent index={activeTab} />
      </Grid>
    </Grid>
  );
});

const useStyles = makeStyles(() => ({
  transactionsContainer: {
    justifyContent: "center",
    marginTop: 30,
    flexDirection: "column",
    alignItems: "center",
  },
  transactionTab: {
    backgroundColor: "rgb(0,102,102)",
    //minWidth: "19%",
    fontFamily: "Banschrift",
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 100,
    color: "rgb(255,255,255)",
  },
  tabBar: {
    width: "100%",
    marginBottom: -5,
  },
}));
