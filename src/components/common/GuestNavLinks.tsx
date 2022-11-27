import Link from "next/link";
import { FC } from "react";

import routes from "../../constants/routes";
import { Box } from "./box/Box";
import { Button } from "./buttons/Button";
import { NavLinkItem } from "./navbar/NavLinkItem";

const GuestNavLinks: FC = () => {
  return (
    <Box
      css={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Link
        href={routes.login()}
        passHref
        legacyBehavior
        style={{ textDecoration: "none" }}
      >
        <NavLinkItem>Login</NavLinkItem>
      </Link>
      <Box css={{ marginRight: "16px" }} />
      <Link href={routes.register()} passHref>
        <Button colorScheme="secondary">Create Account</Button>
      </Link>
    </Box>
  );
};

export default GuestNavLinks;
