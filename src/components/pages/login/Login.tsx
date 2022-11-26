import { FC } from "react";
import { Container } from "../../common/container/Container";
import { Navbar } from "../../common/navbar/Navbar";
import { PageWrapper } from "../../common/page-wrapper/PageWrapper";
import LoginForm from "./LoginForm";

const LoginPage: FC = () => {
  return (
    <PageWrapper
      css={{
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
    </PageWrapper>
  );
};

export default LoginPage;
