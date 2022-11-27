import { FC, PropsWithChildren } from "react";
import { Box } from "./box/Box";

interface PageWrapperProps extends PropsWithChildren {}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <Box
      css={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "$neutral50",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
