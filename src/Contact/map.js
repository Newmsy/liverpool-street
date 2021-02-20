import React from "react";
import { compose } from "redux";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { useTextStyles } from "../Styles/TextStyles";

export const Map = compose(() => {
  const styles = useStyles();
  const textStyles = useTextStyles();
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7808809456574!2d-0.08690048422968936!3d51.517235879636786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cad044a6701%3A0x6121cdbb4f07dd6d!2s46%20New%20Broad%20St%2C%20London%20EC2M%201JH!5e0!3m2!1sen!2suk!4v1613386029161!5m2!1sen!2suk"
        width="90%"
        height="400"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
});

const useStyles = makeStyles(() => ({}));
