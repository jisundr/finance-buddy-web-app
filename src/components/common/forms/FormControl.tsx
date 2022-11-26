import { FC, PropsWithChildren } from "react";
import { styled } from "../../../stitches.config";

const StyledFormControl = styled("div", {
  marginBottom: "16px",
});

interface FormControlProps extends PropsWithChildren {}

export const FormControl: FC<FormControlProps> = ({ children }) => {
  return <StyledFormControl>{children}</StyledFormControl>;
};
