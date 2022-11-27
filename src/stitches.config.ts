import { createStitches } from "@stitches/react";

export const { styled, createTheme, getCssText, globalCss, config } =
  createStitches({
    theme: {
      colors: {
        white: "#ffffff",
        neutral50: "#FAFBFF",
        neutral100: "#F4F6FA",
        neutral400: "#D8DAE5",
        neutral300: "#E6E8F0",
        neutral500: "#C1C4D6",
        neutral600: "##8F95B2",
        neutral700: "#696F8C",
        neutral800: "#474D66",
        blue200: "#D6E0FF",
        blue400: "#3366FF",
        blue500: "#2952CC",
        blue600: "#1F3D99",
        green200: "#DCF2EA",
        green400: "#52BD94",
        green500: "#429777",
        green600: "#317159",
        orange200: "#F2C8B6",
        orange300: "#EBAC91",
        orange400: "#DE7548",
        orange500: "#B25E3A",
        orange600: "#85462B",
      },
    },
  });

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
  },
  "html, body": {
    padding: 0,
    margin: 0,
    fontSize: "14px",
    color: "$neutral800",
    fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
});
