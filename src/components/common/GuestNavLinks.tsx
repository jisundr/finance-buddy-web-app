import { FC } from "react";
import { Box } from "./box/Box";
import { Button } from "./buttons/Button";
import { NavLinkItem } from "./navbar/NavLinkItem";

interface NavLinksProps {}

const GuestNavLinks: FC<NavLinksProps> = () => {
  return (
    <Box
      css={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <NavLinkItem>Login</NavLinkItem>
      <Box css={{ marginRight: "16px" }} />
      <Button colorScheme="secondary">Create Account</Button>
    </Box>
  );
};

export default GuestNavLinks;
