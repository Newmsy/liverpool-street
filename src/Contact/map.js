import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { useTextStyles } from "../Styles/TextStyles";

export const Map = compose(() => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  return (
    <div style={{ position: "relative" }}>
      <Box className={styles.address}>
        <p
          className={textStyles.contentTextLight2}
          style={{
            fontSize: 22,
            color: "rgb(0,27,100)",
            marginTop: 8,
          }}
        >
          <img
            src="/MapsPin.png"
            style={{
              position: "relative",
              top: 5,
              width: 15,
              marginRight: 5,
              marginLeft: -5,
            }}
          />
          Liverpool Street Capital Advisors
        </p>
        <p
          className={textStyles.contentTextLight2}
          style={{
            fontSize: 16,
            color: "rgb(0,102,102)",
            marginTop: 8,
            marginLeft: 15,
          }}
        >
          46 New Broad Street
        </p>
        <p
          className={textStyles.contentTextLight2}
          style={{
            fontSize: 16,
            color: "rgb(0,102,102)",
            marginTop: 8,
            marginLeft: 15,
          }}
        >
          London
        </p>
        <p
          className={textStyles.contentTextLight2}
          style={{
            fontSize: 16,
            color: "rgb(0,102,102)",
            marginTop: 8,
            marginLeft: 15,
          }}
        >
          EC2M 1JH
        </p>
      </Box>
      <img
        src="/MapClearPin.png"
        style={{
          width: 360,
          objectFit: "cover",
          boxShadow: "2px 3px 10px #888888",
          marginTop: 120,
          height: 375,
        }}
      />
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7808809456574!2d-0.08690048422968936!3d51.517235879636786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cad044a6701%3A0x6121cdbb4f07dd6d!2s46%20New%20Broad%20St%2C%20London%20EC2M%201JH!5e0!3m2!1sen!2suk!4v1613386029161!5m2!1sen!2suk"
        width="450"
        height="530"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe> */}
    </div>
  );
});

const useStyles = makeStyles(() => ({
  address: {
    backgroundColor: "white",
    position: "absolute",
    height: 120,
    width: 270,
    top: 37,
    left: 0,
    paddingLeft: 15,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    boxShadow: "2px 3px 10px #888888",
  },
}));
