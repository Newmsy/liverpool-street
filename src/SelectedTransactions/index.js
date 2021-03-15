import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles, Tab, Tabs } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { useTextStyles } from "../Styles/TextStyles";
import { TabContent } from "./tabContent";
import { ReactComponent as ArrowRight } from "../Assets/ArrowRight.svg";
import { ReactComponent as ArrowLeft } from "../Assets/ArrowLeft.svg";
import { ReactComponent as ArrowWhite } from "../Assets/ArrowWhite.svg";

export const SelectedTransactions = compose(() => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  const [activeTab, setActiveTab] = React.useState(2);

  const onChangeTab = React.useCallback((event, newValue) => {
    setActiveTab(newValue);
    console.log(activeTab);
  }, []);

  // blue arrow goes above current location of tabs to show where you are
  // move
  // squeeze the background width of the tabs

  return (
    <Grid container xs={12} className={styles.transactionsContainer}>
      <Grid container xs={11} className={styles.transactionsContainer2}>
        <Grid item container xs={10}>
          <div
            style={{
              marginLeft: `calc(50% + ${(activeTab - 2) * 180}px - 6px)`,
              position: "relative",
              top: 55,
              animationDuration: "1s",
            }}
          >
            <ArrowWhite fill="black" className={styles.arrow} />
          </div>
        </Grid>
        <Grid
          item
          container
          xs={10}
          alignItems="space-between"
          justify="center"
        >
          <Tabs
            value={activeTab}
            onChange={onChangeTab}
            TabIndicatorProps={{
              style: {
                backgroundColor: "rgb(0,102,102)",
                height: 7,
                width: 150,
              },
            }}
            centered
            className={styles.tabBar}
          >
            <Tab
              className={styles.transactionTab}
              label={"Real Assets"}
              style={{
                backgroundColor:
                  activeTab === 0 ? "rgba(0,102,102, 0.15)" : "transparent",
              }}
            ></Tab>

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
              label={"Natural Resources"}
              style={{
                backgroundColor:
                  activeTab === 4 ? "rgba(0,102,102, 0.15)" : "transparent",
              }}
            />
          </Tabs>
        </Grid>
        <TabContent index={activeTab} />
      </Grid>
    </Grid>
  );
});

const useStyles = makeStyles(() => ({
  leftArrow: {
    position: "relative",
    right: 80,
    height: 60,
  },
  rightArrow: {
    left: 100,
    position: "relative",
    height: 60,
  },
  transactionsContainer: {
    justifyContent: "center",
    marginTop: 0,
    flexDirection: "column",
    alignItems: "center",
  },
  transactionsContainer2: {
    justifyContent: "center",
    marginTop: 80,
    flexDirection: "column",
    alignItems: "center",
  },
  transactionTab: {
    backgroundColor: "transparent",
    fontFamily: "Banschrift",
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 600,
    width: 150,
    minWidth: 150,
    maxWidth: 150,
    color: "rgb(20,71,146)",
    marginRight: 15,
    marginLeft: 15,
    padding: 0,
    opacity: 1,
  },
  tabBar: {
    width: "90%",
    marginBottom: -5,
  },
  arrow: {
    height: 15,
    position: "relative",
    top: 22,
    zIndex: 50000,
    fill: "rgb(0,31,96)",
  },
}));
