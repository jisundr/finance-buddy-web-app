import { ComponentProps, FC, PropsWithChildren } from "react";
import { styled } from "../../../stitches.config";

const StyledButton = styled("button", {
  position: "relative",
  padding: "8px 16px",
  fontWeight: "600",
  fontsize: "12px",
  lineHeight: "16px",
  backgroundColor: "$white",
  color: "$neutral700",
  border: "1px solid $neutral400",
  borderRadius: "3px",
  "&:hover": {
    color: "$neutral800",
    borderColor: "$neutral600",
  },
  "&:active": {
    color: "$neutral800",
    backgroundColor: "$neutral100",
    borderColor: "$neutral500",
  },
  "&:focus": {
    color: "$neutral800",
    borderColor: "$neutral600",
    outline: "2px solid $blue200",
  },
  "&:disabled": {
    color: "$neutral500",
    backgroundColor: "$white",
    borderColor: "$neutral300",
  },
  variants: {
    isFullWidth: {
      true: {
        width: "100%",
      },
    },
    colorScheme: {
      primary: {
        backgroundColor: "$green400",
        color: "$white",
        border: "none",
        "&:hover": {
          backgroundColor: "$green500",
          color: "$white",
        },
        "&:active": {
          backgroundColor: "$green600",
          color: "$white",
        },
        "&:focus": {
          outline: "2px solid $green200",
          color: "$white",
        },
        "&:disabled": {
          backgroundColor: "$green200",
          color: "$white",
        },
      },
    },
  },
});

type ButtonColorScheme = "primary";

interface ButtonProps extends ComponentProps<typeof StyledButton> {
  isFullWidth?: boolean;
  colorScheme?: ButtonColorScheme;
}

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
