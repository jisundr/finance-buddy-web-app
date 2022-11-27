import { ComponentProps, FC } from "react";
import { styled } from "../../../stitches.config";

const StyledNavLinkItem = styled("a", {
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

type NavLinkItemProps = ComponentProps<typeof StyledNavLinkItem>;

export const NavLinkItem: FC<NavLinkItemProps> = ({ children, ...rest }) => {
  return <StyledNavLinkItem {...rest}>{children}</StyledNavLinkItem>;
};
