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
  greenContentLead: {
    fontFamily: "SSLight",
    fontWeight: 600,
    fontSize: 36,
    color: "rgba(40,142,142, 0.8)",
  },
}));
