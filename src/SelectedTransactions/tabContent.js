import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles, Tab, Tabs } from "@material-ui/core";
import { useTextStyles } from "../Styles/TextStyles";

export const TabContent = ({ index }) => {
  const styles = useStyles();
  const textStyles = useTextStyles();

  //unconvential all on image
  //enter site button
  // green on image to match button
  // 5s time box build
  // image blurriness on enter site
  // ls scene on back of all pages
  // sizing slider for images

  //10% opening bg, then fade in with time of enter site

  //Appbar caps & smaller font
  //All of fonts 20-30% smaller

  //take off ability to fix
  // equal green of logo for card

  //appbar logo update to new no blue border
  //use bahnschrift condensed font

  //remove mouse scroll
  //happy with tabs in ST
  //google maps

  return (
    <Grid container xs={12} className={styles.transactionsContainer}>
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
    </Grid>
  );
};

const TransactionItem = ({ title, imageUrl, value, description }) => {
  const styles = useStyles();
  const textStyles = useTextStyles();

  return (
    <Grid item container xs={2} className={styles.tabContainerItem}>
      <Grid item>
        <h1 className={textStyles.mediumSubtitle}>{title}</h1>
      </Grid>
      {imageUrl.length > 0 && <img src={imageUrl} alt={imageUrl} />}
      <Grid item>
        <p className={textStyles.contentTextLight}>£{value}</p>
      </Grid>
      <Grid item>
        <p className={textStyles.contentTextLight}>{description}</p>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  transactionsContainer: {
    justifyContent: "center",

    alignItems: "center",
    backgroundColor: "rgb(0,102,102)",
    minHeight: 500,
  },

  tabContainerItem: {
    minHeight: 100,
    backgroundColor: "white",
    borderRadius: 15,
    marginRight: 20,
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
  },
}));
