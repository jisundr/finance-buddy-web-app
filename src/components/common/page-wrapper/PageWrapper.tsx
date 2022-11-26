import { ComponentProps, FC, PropsWithChildren } from "react";
import { styled } from "../../../stitches.config";

const StyledWrapper = styled("div", {
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "$neutral100",
});

type PageWrapperProps = ComponentProps<typeof StyledWrapper>;

export const PageWrapper: FC<PageWrapperProps> = ({ children, ...rest }) => {
  return <StyledWrapper {...rest}>{children}</StyledWrapper>;
};
