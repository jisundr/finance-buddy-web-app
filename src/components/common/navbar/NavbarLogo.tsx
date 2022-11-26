import { ComponentProps, FC, PropsWithChildren } from "react";
import { styled } from "../../../stitches.config";

const StyledNavbarLogo = styled("a", {
  fontSize: "20px",
  lineHeight: "30px",
  fontWeight: "600",
  color: "$white",
  textDecoration: "none",
});

type NavbarLogoProps = ComponentProps<typeof StyledNavbarLogo>;

export const NavbarLogo: FC<NavbarLogoProps> = ({ children, ...rest }) => {
  return <StyledNavbarLogo {...rest}>{children}</StyledNavbarLogo>;
};
