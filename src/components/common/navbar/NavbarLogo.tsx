import { FC, PropsWithChildren } from "react";
import { styled } from "../../../stitches.config";

const StyledNavbarLogo = styled("a", {
  fontSize: "20px",
  lineHeight: "30px",
  fontWeight: "600",
  color: "$white",
  textDecoration: "none",
});

interface NavbarLogoProps extends PropsWithChildren {
  href: string;
}

export const NavbarLogo: FC<NavbarLogoProps> = ({ children, href }) => {
  return <StyledNavbarLogo href={href}>{children}</StyledNavbarLogo>;
};