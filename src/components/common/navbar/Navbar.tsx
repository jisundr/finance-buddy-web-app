import { FC, ReactElement } from "react";
import type * as Stitches from "@stitches/react";
import { config, styled } from "../../../stitches.config";
import { NavbarLogo } from "./NavbarLogo";

const StyledNavbar = styled("div", {
  backgroundColor: "$green500",
  minHeight: "48px",
});

const StyledContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  padding: "16px",
});

interface NavbarProps {
  navbarCSS?: Stitches.CSS<typeof config>;
  navbarContainerCSS?: Stitches.CSS<typeof config>;
  navBarLogoComponent?: ReactElement;
}

export const Navbar: FC<NavbarProps> = ({
  navbarCSS,
  navbarContainerCSS,
  navBarLogoComponent,
}) => {
  return (
    <StyledNavbar css={navbarCSS}>
      <StyledContainer css={navbarContainerCSS}>
        {navBarLogoComponent || <NavbarLogo href="#">Finance Buddy</NavbarLogo>}
      </StyledContainer>
    </StyledNavbar>
  );
};
