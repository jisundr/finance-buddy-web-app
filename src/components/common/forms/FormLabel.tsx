import { ComponentProps, FC } from "react";
import { styled } from "../../../stitches.config";

const StyledLabel = styled("label", {
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "21px",
  marginBottom: "4px",
});

type FormLabelProps = ComponentProps<typeof StyledLabel>;

export const FormLabel: FC<FormLabelProps> = ({ children, ...rest }) => {
  return <StyledLabel {...rest}>{children}</StyledLabel>;
};
