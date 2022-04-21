export const SIZES = {
  base: 8,
  small: 12,
  font:14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const COLORS = {
  primary: "#001F2D",
  secondary: "#4D626C",

  white: "#FFF",
  gray: "#74858C",
};

export const FONTS = {
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: SIZES.font,
    shadowOpacity: 0.28,

    elevation: 3,
  },
  dark: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: SIZES.font,
    shadowOpacity: 0.4,

    elevation: 5,
  },
};
