import { ComponentProps, FC, HTMLProps } from "react";
import { styled } from "../../../stitches.config";

const StyledTextInput = styled("input", {
  height: "32px",
  border: "1px solid $neutral400",
  borderRadius: "3px",
  width: "100%",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "16px",
  padding: "8px 8px 8px 16px",
  "&::placeholder": {
    color: "$neutral400",
    opacity: 1,
  },
  "&:hover": {
    "&::placeholder": {
      color: "$neutral700",
      opacity: 1,
    },
  },
  "&:focus": {
    outline: "2px solid $blue200",
  },
});

type TextInputProps = ComponentProps<typeof StyledTextInput>;

export const TextInput: FC<TextInputProps> = (props) => {
  return <StyledTextInput {...props} />;
};
