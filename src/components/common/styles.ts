import { StyleSheet } from "react-native";

import { COLORS } from "./colors";
import { Typography } from "./typography";
import { Constants, width } from "./constants";

export default StyleSheet.create({
  primaryColor: {
    color: "#6CCA55",
  },
  titleContainer: {
    backgroundColor: COLORS.GREEN,
    padding: Constants.GAP,
  },

  title: Object.assign({}, Typography.heading3, {
    color: COLORS.BLACK,
  }),

  contentContainer: {
    padding: Constants.GAP,
  },

  content: Object.assign({}, Typography.bodyText),
  nextBtn: {
    borderBottomStartRadius: 30,
    borderTopStartRadius: 30,
  },
  skipBtn: {
    marginRight: width - 200,
    color: COLORS.BLACK,
  },
  prevBtn: {
    width: 60,
    borderRadius: 50,
    padding: 5,
  },
  // Walkthrough Styling
  walkthroughContainer: {
    flexDirection: "row",
    paddingTop: 50,
    justifyContent: "flex-end",
  },
  wkTxt: {
    color: COLORS.WHITE,
  },
  skTxt: {
    color: COLORS.BLACK,
  },
  prvTxt: {
    color: COLORS.GREEN,
    marginTop: 10,
    fontSize: 20,
    textAlign: "center",
  },

  logo: {
    width: width,
    height: 250,
  },
  description: {
    textAlign: "center",
  },
  // Common Styling
  viewFlex: {
    flex: 1,
  },
  textBlack: {
    color: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    width: "100%",
    height: 60,
    backgroundColor: "#CDCDCD",
    paddingHorizontal: 10,
    fontSize: 15,
  },
  buttonDark: {
    backgroundColor: "#4D4D4D",
    width: "100%",
    height: 60,
    borderRadius: 50,
  },
  buttonDarkText: {
    textAlign: "center",
    marginVertical: 15,
    color: "white",
  },
  semiBold: {
    fontWeight: "800",
  },
  textUP: {
    textTransform: "uppercase",
  },
  textLG: {
    fontSize: 20,
  },
  textXL: {
    fontSize: 28,
  },
  textMD: {
    fontSize: 15,
  },
  textSM: {
    fontSize: 10,
  },
  textSM10: {
    fontSize: 12,
  },
  mt45: {
    marginVertical: 45,
  },
  mt15: {
    marginVertical: 15,
  },
  mrH20: {
    marginHorizontal: 20,
  },
  mb15: {
    marginHorizontal: 15,
  },
  mb5: {
    marginHorizontal: 5,
  },
  test18: {
    fontSize: 18,
  },
  mb_5: {
    marginTop: -20,
  },
  mt30: {
    marginVertical: 30,
  },
  pl20: {
    paddingLeft: 20,
  },
  pl10: {
    paddingLeft: 10,
  },
  wt20: {
    width: "25%",
  },
  signUpIcon: {
    width: "10%",
    height: "10%",
  },
  loginIcon: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  profileIcon: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  flex: {
    flexDirection: "row",
  },
  ml5: {
    marginLeft: 5,
  },
  ml15: {
    marginLeft: 15,
  },
  mb10: {
    marginLeft: 10,
  },
  justifyContentEvenly: {
    justifyContent: "space-evenly",
  },
  justifyContentBetween: {
    justifyContent: "space-between",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  alignContentCenter: {
    alignItems: "center",
  },
  gap4: {
    gap: 30,
  },
  gap1: {
    gap: 5,
  },
  colorSuccess: {
    color: COLORS.SUCCESS,
  },
  colorGrey: {
    color: COLORS.DARK_GREY,
  },
  homeCarCard: {
    borderRadius: 15,
  },
  absolute: {
    position: "fixed",
  },
  shadowMd: {
    elevation: 1,
  },
  bold: {
    fontWeight: "bold",
  },
  center: {
    textAlign: "center",
  },
  overlay: {
    position: "absolute",
    top: 190,
    bottom: 0,
    left: 20,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  vendorIcon: {
    borderRadius: 50,
    resizeMode: "cover",
    marginVertical: 2,
    width: 50,
    height: 50,
  },
  vendorCard: {
    padding: 10,
    width: 350,
    height: 200,
  },
  underline: {
    textDecorationLine: "underline",
  },
  font18: {
    fontSize: 16,
  },
  gap3: {
    gap: 20,
  },
  mt5: {
    marginTop: 8,
  },
  p2: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  roundedLG: {
    borderRadius: 15,
  },
  borderBottom: {
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    borderColor: "black",
  },
  verfiy: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 15,
    backgroundColor: "#6CCA55",
  },
  vendorBottomIcon: {
    borderRadius: 50,
    resizeMode: "cover",
    marginVertical: 2,
    width: 20,
    height: 20,
  },
  gary300: {
    backgroundColor: "#e5e7eb",
  },
  mb10: {
    marginVertical: 10,
  },
  ph20: {
    paddingHorizontal: 20,
  },
  p10: {
    paddingVertical: 10,
  },
  overlayText: {
    fontSize: 15,
    fontWeight: "700",
  },
  becomeVendor: {
    width: 350,
    height: 350,
  },
  textRight: {
    textAlign: "right",
  },
  textWhite: {
    color: "white",
  },
});
