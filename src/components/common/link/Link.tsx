import { ComponentProps, FC } from "react";
import { styled } from "../../../stitches.config";

export const Link = styled("a", {
  fontSize: "14px",
  lineHeight: "21px",
  color: "$blue400",
  textDecoration: "underline",
  cursor: "pointer",
  "&:hover": {
    color: "$blue500",
  },
  "&:active": {
    color: "$blue600",
  },
  "&:focus": {
    color: "$blue500",
    borderColor: "$neutral600",
    outline: "2px solid $blue200",
  },
});
