import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles, Tab, Tabs } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { useTextStyles } from "../Styles/TextStyles";
import { TabContent } from "./tabContent";
import { ReactComponent as ArrowRight } from "../Assets/ArrowRight.svg";
import { ReactComponent as ArrowLeft } from "../Assets/ArrowLeft.svg";

export const SelectedTransactions = compose(() => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  const [activeTab, setActiveTab] = React.useState(0);

  const onChangeTab = React.useCallback((event, newValue) => {
    setActiveTab(newValue);
    console.log(activeTab);
  }, []);

  // blue arrow goes above current location of tabs

  return (
    <Grid container xs={12} className={styles.transactionsContainer}>
      <Grid container xs={11} className={styles.transactionsContainer2}>
        <Grid item container xs={7} alignItems="space-between" justify="center">
          <Tabs
            value={activeTab}
            onChange={onChangeTab}
            TabIndicatorProps={{
              style: {
                backgroundColor: "rgb(0,102,102)",
                height: 7,
              },
            }}
            variant="fullWidth"
            className={styles.tabBar}
          >
            <Tab
              className={styles.transactionTab}
              label={"Transactions as borrower"}
              style={{
                backgroundColor:
                  activeTab === 0 ? "rgba(0,102,102, 0.15)" : "transparent",
              }}
            />
            <Tab
              className={styles.transactionTab}
              label={"Real Estate"}
              style={{
                backgroundColor:
                  activeTab === 1 ? "rgba(0,102,102, 0.15)" : "transparent",
              }}
            />
            <Tab
              className={styles.transactionTab}
              label={"Corporate"}
              style={{
                backgroundColor:
                  activeTab === 2 ? "rgba(0,102,102, 0.15)" : "transparent",
              }}
            />
            <Tab
              className={styles.transactionTab}
              label={"Private Equity"}
              style={{
                backgroundColor:
                  activeTab === 3 ? "rgba(0,102,102, 0.15)" : "transparent",
              }}
            />
            <Tab
              className={styles.transactionTab}
              label={"Infrastructure"}
              style={{
                backgroundColor:
                  activeTab === 4 ? "rgba(0,102,102, 0.15)" : "transparent",
              }}
            />
            <Tab
              className={styles.transactionTab}
              label={"Energy & Mining"}
              style={{
                backgroundColor:
                  activeTab === 5 ? "rgba(0,102,102, 0.15)" : "transparent",
              }}
            />
          </Tabs>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 300,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                className={styles.leftArrow}
                onClick={() => {
                  setActiveTab(activeTab - 1);
                }}
                disabled={activeTab === 0}
              >
                <ArrowLeft
                  style={{
                    width: 40,
                    fill: "rgb(0,102,102)",
                    display: activeTab === 0 ? "none" : "",
                  }}
                />
              </IconButton>
              <IconButton
                className={styles.rightArrow}
                onClick={() => {
                  setActiveTab(activeTab + 1);
                }}
                disabled={activeTab === 5}
              >
                <ArrowRight
                  style={{
                    width: 40,
                    fill: "rgb(0,102,102)",
                    display: activeTab === 5 ? "none" : "",
                  }}
                />
              </IconButton>
            </div>
          </Grid>
          <TabContent index={activeTab} />
        </Grid>
      </Grid>
    </Grid>
  );
});

const useStyles = makeStyles(() => ({
  leftArrow: {
    position: "relative",
    right: 100,
  },
  rightArrow: {
    left: 100,
    position: "relative",
  },
  transactionsContainer: {
    justifyContent: "center",
    marginTop: 0,
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
  },
  transactionsContainer2: {
    justifyContent: "center",
    marginTop: 0,
    flexDirection: "column",
    alignItems: "center",
  },
  transactionTab: {
    backgroundColor: "transparent",
    fontFamily: "Banschrift",
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 100,
    color: "rgb(0,102,102)",
  },
  tabBar: {
    width: "100%",
    marginBottom: -5,
  },
}));
