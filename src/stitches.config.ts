import { createStitches } from "@stitches/react";

export const { styled, createTheme, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      white: "#ffffff",
      neutral100: "#F4F6FA",
      neutral400: "#D8DAE5",
      neutral300: "#E6E8F0",
      neutral500: "#C1C4D6",
      neutral600: "##8F95B2",
      neutral700: "#696F8C",
      neutral800: "#474D66",
      blue200: "#D6E0FF",
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
    fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  "@media (prefers-color-scheme: dark)": {
    html: {
      colorScheme: "dark",
    },
    body: {
      color: "White",
      background: "Black",
    },
  },
});
