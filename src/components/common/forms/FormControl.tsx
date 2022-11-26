import { ComponentProps, FC, PropsWithChildren } from "react";
import { styled } from "../../../stitches.config";

const StyledFormControl = styled("div", {
  marginBottom: "16px",
});

type FormControlProps = ComponentProps<typeof StyledFormControl>;

export const FormControl: FC<FormControlProps> = ({ children }) => {
  return <StyledFormControl>{children}</StyledFormControl>;
};
