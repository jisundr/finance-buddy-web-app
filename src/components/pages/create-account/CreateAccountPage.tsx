import { FC } from "react";

import { Container } from "../../common/container/Container";
import { Navbar } from "../../common/navbar/Navbar";
import GuestNavLinks from "../../common/GuestNavLinks";
import PageWrapper from "../../common/PageWrapper";
import CreateAccountForm from "./CreateAccountForm";

const CreateAccountPage: FC = () => {
  return (
    <PageWrapper>
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
        <CreateAccountForm />
      </Container>
    </PageWrapper>
  );
};

export default CreateAccountPage;
