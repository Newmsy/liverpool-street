import { makeStyles } from "@material-ui/core";

export const useTextStyles = makeStyles(() => ({
  lightTitle: {
    fontFamily: "ArialLight",
    fontSize: 60,
    fontWeight: 100,
    opacity: 0.8,
  },
  mediumSubtitle: {
    fontFamily: "Arial",
    fontSize: 30,
    fontWeight: 100,
    opacity: 0.8,
  },
  lightThickSubtitle: {
    fontFamily: "Arial",
    marginTop: 5,
    marginBottom: 5,
    opacity: 0.6,
  },
  lightThickSubtitleBlue: {
    fontFamily: "Banschrift",
    marginTop: 5,
    marginBottom: 5,
    fontSize: 35,
    fontWeight: 100,
    color: "rgb(255,255,255)",
  },
  contentText: {
    fontFamily: "Arial",
    fontWeight: 100,
    fontSize: 18,
    lineHeight: 1.4,
  },
  contentTextLight: {
    fontFamily: "SSLight",
    fontWeight: 100,
    fontSize: 22,
    lineHeight: 1.4,
  },
  contentTextLightSmall: {
    fontFamily: "SSLight",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 1.4,
    marginTop: -15,
  },
  contentTextLightSmallBold: {
    fontFamily: "SSLight",
    fontWeight: 900,
    fontSize: 18,
    lineHeight: 1.4,
    marginTop: 0,
  },
  contentTextLightTight: {
    fontFamily: "SSLight",
    fontWeight: 100,
    fontSize: 22,
    lineHeight: 1.4,
    marginTop: -20,
  },
  greenContentLead: {
    fontFamily: "SSLight",
    fontWeight: 600,
    fontSize: 36,
    color: "rgba(40,142,142, 0.8)",
  },
}));
