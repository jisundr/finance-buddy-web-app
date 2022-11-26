import { FC } from "react";
import { Box } from "../../common/box/Box";
import { Container } from "../../common/container/Container";
import { Navbar } from "../../common/navbar/Navbar";
import LoginForm from "./LoginForm";

const LoginPage: FC = () => {
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
      <Navbar />
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoginForm />
      </Container>
    </Box>
  );
};

export default LoginPage;
