import { ComponentProps, FC } from "react";
import { styled } from "../../../stitches.config";

const StyledBox = styled("div", {});

type BoxProps = ComponentProps<typeof StyledBox>;

export const Box: FC<BoxProps> = ({ children, ...rest }) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};
