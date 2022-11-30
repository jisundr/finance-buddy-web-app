import { FC } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { styled } from "../../stitches.config";
import LinkOrFragmentWrapper from "./LinkOrFragmentWrapper";

interface UserAvatarMenuItemsProps {
  label: string;
  href?: string;
}

const StyledDropdownMenuItem = styled(DropdownMenu.Item, {
  position: "relative",
  padding: "8px 16px",
  fontWeight: "600",
  fontsize: "12px",
  lineHeight: "16px",
  backgroundColor: "$white",
  color: "$neutral700",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    border: "none",
    backgroundColor: "$green400",
    color: "$white",
  },
  "&:active": {
    border: "none",
    backgroundColor: "$green500",
    color: "$white",
  },
});

const UserAvatarMenuItem: FC<UserAvatarMenuItemsProps> = ({ href, label }) => {
  return (
    <LinkOrFragmentWrapper href={href} passHref>
      <StyledDropdownMenuItem>{label}</StyledDropdownMenuItem>
    </LinkOrFragmentWrapper>
  );
};

export default UserAvatarMenuItem;
