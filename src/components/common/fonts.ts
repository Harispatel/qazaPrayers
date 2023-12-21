import { StyleSheet } from "react-native"
import { isIos, normalize } from "./platform"

export const FONTS = {
  BOLD: "Gilroy-Bold",
  LIGHT: "Gilroy-Light",
  THIN: "Gilroy-Thin",
  // SEMI_BOLD: "Gilroy-ExtraBold",
  REGULAR: "Gilroy-Regular",
  MEDIUM: "Gilroy-Medium",
  SEMI_BOLD: "Gilroy-SemiBold",
}

export const Typography = StyleSheet.create({
  heading_1: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(36),
    lineHeight: normalize(55),
  },
  heading_2: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(26),
    lineHeight: normalize(30),
  },
  heading_3: {
    fontFamily: FONTS.MEDIUM,
    fontSize: normalize(18),
    lineHeight: normalize(18),
    fontWeight: "500",
  },
  heading_4: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(18),
    lineHeight: normalize(21),
  },
  heading_5: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(14),
    lineHeight: normalize(17.33),
  },
  heading_6: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(14),
    lineHeight: normalize(16),
  },
  heading_7: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(10),
    lineHeight: normalize(12),
    fontWeight: "bold",
  },

  heading_8: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(10),
    lineHeight: normalize(12),
    fontWeight: "bold",
    letterSpacing: normalize(0.5),
  },
  buttonText: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(18),
    lineHeight: normalize(21),
    fontWeight: "600",
  },
  title_1: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(18),
    lineHeight: normalize(21),
    letterSpacing: normalize(0.5),
  },
  title_2: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(16),
    lineHeight: normalize(19),
    letterSpacing: normalize(0.5),
  },
  title_3: {
    fontFamily: FONTS.MEDIUM,
    fontSize: normalize(12),
    lineHeight: normalize(14),
    fontWeight: "500",
  },
  title_4: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(10),
    lineHeight: normalize(12),
    // fontWeight: "600",
  },
  title_5: {
    fontFamily: FONTS.MEDIUM,
    fontSize: normalize(10),
    lineHeight: normalize(12),
    fontWeight: "500",
    letterSpacing: normalize(0.5),
  },
  title_6: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(18),
    lineHeight: normalize(21),
    letterSpacing: normalize(0.5),
    fontWeight: "bold",
  },
  title_7: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(16),
    lineHeight: normalize(19),
    letterSpacing: normalize(0.5),
    fontWeight: "bold",
  },
  navText: {
    fontFamily: FONTS.MEDIUM,
    fontSize: normalize(10),
    lineHeight: normalize(12),
    fontWeight: "500",
    letterSpacing: normalize(0.5),
  },
  description: {
    fontFamily: FONTS.MEDIUM,
    fontSize: normalize(16),
    lineHeight: normalize(19),
    fontWeight: "500",
  },
  placeholderText: {
    fontFamily: FONTS.MEDIUM,
    fontSize: normalize(14),
    lineHeight: normalize(16),
    fontWeight: "500",
  },
  tagsText: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(5),
    lineHeight: normalize(6),
    fontWeight: "800",
  },
  // smallText: {
  //   fontFamily: FONTS.SEMI_BOLD,
  //   fontSize: normalize(3),
  //   lineHeight: normalize(4),
  //   fontWeight: "800",
  // },
  body: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(12),
    lineHeight: normalize(14),
  },
  secondaryButtonText: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(14),
    lineHeight: normalize(16),
  },
  mainTitle: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(20),
    lineHeight: normalize(23),
  },
  bottomDrawerText: {
    fontFamily: FONTS.REGULAR,
    fontSize: normalize(12),
    lineHeight: normalize(14),
    letterSpacing: normalize(4),
    textTransform: "uppercase",
  },
  smallText: {
    fontFamily: isIos ? FONTS.BOLD : FONTS.SEMI_BOLD,
    fontSize: normalize(3),
    lineHeight: normalize(4),
    fontWeight: "800",
  },
  caption: {
    fontFamily: FONTS.MEDIUM,
    fontSize: normalize(12),
    lineHeight: normalize(14),
    letterSpacing: normalize(0.4),
  },
  Subtitle_1: {
    fontFamily: FONTS.MEDIUM,
    fontSize: normalize(10),
    lineHeight: normalize(12),
    letterSpacing: normalize(0.5),
  },
  Subtitle_2: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(10),
    lineHeight: normalize(16),
    letterSpacing: normalize(0.5),
  },
  overline: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(6),
    lineHeight: normalize(7.43),
    letterSpacing: normalize(0.3),
  },
  link: {
    fontFamily: FONTS.MEDIUM,
    fontSize: normalize(10),
    lineHeight: normalize(12),
    letterSpacing: normalize(0.5),
  },
  filter: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(12),
    lineHeight: normalize(15),
  },
  popupText: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(8),
    lineHeight: normalize(9),
    letterSpacing: normalize(0.3),
  },
})
