import { FC, PropsWithChildren } from "react";
import type * as Stitches from "@stitches/react";
import { styled } from "../../../stitches.config";

const StyledText = styled("p", {
  margin: 0,
  fontSize: "16px",
  lineHeight: "24px",
});

interface TextProps extends PropsWithChildren {
  css?: Stitches.CSS;
}

export const Text: FC<TextProps> = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};
