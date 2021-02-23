import { makeStyles } from "@material-ui/core";

export const useTextStyles = makeStyles(() => ({
  lightTitle: {
    fontFamily: "Banschrift",
    fontSize: 60,
    fontWeight: 100,

    color: "rgb(0,0,0)",
  },
  mediumSubtitle: {
    fontFamily: "Banschrift",
    fontSize: 30,
    fontWeight: 100,
  },
  lightThickSubtitle: {
    fontFamily: "Banschrift",
    marginTop: 5,
    marginBottom: 5,
    opacity: 0.6,
  },
  lightThickSubtitleBlue: {
    fontFamily: "Banschrift",
    marginTop: 5,
    marginBottom: 5,
    fontSize: 21,
    fontWeight: 100,
    color: "rgb(255,255,255)",
  },
  contentTextLarge: {
    fontFamily: "Banschrift",
    fontWeight: 100,
    fontSize: 18,
    lineHeight: 1.4,
    color: "rgb(0,31,96)",
  },
  Banschrift2: {
    fontFamily: "Banschrift",
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 100,
    color: "rgb(255,255,255)",
  },
  contentText: {
    fontFamily: "Banschrift",
    fontWeight: 100,
    fontSize: 14,
    lineHeight: 1.4,
    color: "rgb(0,31,96)",
  },
  contentTextLight2: {
    fontFamily: "Banschrift",
    fontWeight: 100,
    fontSize: 16,
    lineHeight: 1.2,
    marginBottom: -4,
  },
  contentTextLightSmall: {
    fontFamily: "Banschrift",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 1.4,
    marginTop: -15,
  },
  contentTextGreen: {
    fontFamily: "Banschrift",
    fontWeight: 100,
    fontSize: 18,
    lineHeight: 1.4,
    marginTop: 0,
    color: "rgb(0,102,102)",
  },
  contentTextLightTight: {
    fontFamily: "Banschrift",
    fontWeight: 100,
    fontSize: 14,
    lineHeight: 1.4,
    marginTop: -10,
    color: "rgb(0,31,96)",
  },
  greenContentLead: {
    fontFamily: "Banschrift",
    fontSize: 36,
    color: "rgba(20,122,122, 1)",
  },
}));
