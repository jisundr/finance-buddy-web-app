import { FC, PropsWithChildren } from "react";
import { styled } from "../../stitches.config";

const StyledButton = styled("button", {
  position: "relative",
  padding: "8px 16px",
  fontWeight: "500",
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
    outline: "3px solid $blue200",
  },
  "&:disabled": {
    color: "$neutral500",
    backgroundColor: "$white",
    borderColor: "$neutral300",
  },
});

interface ButtonProps extends PropsWithChildren {
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
