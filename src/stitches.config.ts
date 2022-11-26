import { createStitches } from "@stitches/react";

export const { styled, createTheme, getCssText, globalCss } = createStitches(
  {}
);

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
