import dynamic from "next/dynamic";
import { FC } from "react";
import { Box } from "../../common/box/Box";
import { Container } from "../../common/container/Container";

import { Navbar } from "../../common/navbar/Navbar";
import ForgotPasswordForm from "./ForgotPasswordForm";

const GuestNavLinks = dynamic(() => import("../../common/GuestNavLinks"), {
  ssr: false,
});

const ForgotPasswordPage: FC = () => {
  return (
    <Box
      css={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "$neutral100",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <Navbar navLinksComponents={<GuestNavLinks />} />
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ForgotPasswordForm />
      </Container>
    </Box>
  );
};

export default ForgotPasswordPage;
