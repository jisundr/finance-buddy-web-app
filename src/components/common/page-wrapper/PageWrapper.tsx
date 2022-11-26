import { FC, PropsWithChildren } from "react";
import type * as Stitches from "@stitches/react";
import { styled } from "../../../stitches.config";

const StyledWrapper = styled("div", {
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "$neutral100",
});

interface PageWrapperProps extends PropsWithChildren {
  css?: Stitches.CSS;
}

export const PageWrapper: FC<PageWrapperProps> = ({ children, ...rest }) => {
  return <StyledWrapper {...rest}>{children}</StyledWrapper>;
};
