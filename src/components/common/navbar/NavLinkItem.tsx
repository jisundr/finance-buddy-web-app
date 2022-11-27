import { styled } from "../../../stitches.config";

export const NavLinkItem = styled("a", {
  color: "$white",
  fontsize: "12px",
  lineHeight: "16px",
  fontWeight: "600",
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    color: "$orange300",
  },
  "&:active": {
    color: "$orange600",
  },
  "&:focus": {
    color: "$orangee500",
    borderColor: "$neutral600",
    outline: "2px solid $orange200",
  },
});
