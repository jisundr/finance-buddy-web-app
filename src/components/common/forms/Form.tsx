import { ComponentProps, FC } from "react";
import { styled } from "../../../stitches.config";

const StyledForm = styled("form", {});

type FormProps = ComponentProps<typeof StyledForm>;

export const Form: FC<FormProps> = ({ children, ...rest }) => {
  return <StyledForm {...rest}>{children}</StyledForm>;
};
