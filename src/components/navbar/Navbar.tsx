import { FC } from "react";
import { styled } from "../../stitches.config";
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

export const Navbar: FC = () => {
  return (
    <StyledNavbar>
      <StyledContainer>
        <NavbarLogo href="#">Finance Buddy</NavbarLogo>
      </StyledContainer>
    </StyledNavbar>
  );
};
