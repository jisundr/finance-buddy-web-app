import { FC } from "react";

import { Navbar } from "../../common/navbar/Navbar";
import AuthNavLinks from "../../common/AuthNavLinks";
import PageWrapper from "../../common/PageWrapper";

const DashboardPage: FC = () => {
  return (
    <PageWrapper>
      <Navbar navLinksComponents={<AuthNavLinks />} />
    </PageWrapper>
  );
};

export default DashboardPage;
