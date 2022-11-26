import { FC, PropsWithChildren } from "react";
import type * as Stitches from "@stitches/react";
import { styled } from "../../../stitches.config";

const StyledContainer = styled("div", {
  width: "100%",
});

interface ContainerProps extends PropsWithChildren {
  css?: Stitches.CSS;
}

export const Container: FC<ContainerProps> = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};
