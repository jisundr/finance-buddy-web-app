import { FC } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import UserAvatar, { UserAvatarProps } from "./UserAvatar";
import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpandFade,
  styled,
} from "../../stitches.config";

interface UserAvatarMenuProps extends UserAvatarProps {
  triggerComponent?: JSX.Element;
  actionsComponent?: JSX.Element;
}

const StyledButton = styled("button", {
  position: "relative",
  display: "flex",
  overflow: "hidden",
  justifyContent: "center",
  alignContent: "center",
  borderRadius: "100%",
  width: "32px",
  height: "32px",
  backgroundColor: "$white",
  border: "2px solid transparent",
  "&:hover": {
    borderColor: "$green300",
  },
  "&:active": {
    borderColor: "$green300",
  },
  "&:focus": {
    borderColor: "$green300",
    outline: "none",
  },
});

const StyledDropdownMenuContent = styled(DropdownMenu.Content, {
  position: "relative",
  padding: "2px",
  minWidth: "220px",
  backgroundColor: "$white",
  borderRadius: "3px",
  border: "1px solid $neutral400",
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  "&[data-side='top']": {
    animationName: slideDownAndFade,
  },
  "&[data-side='bottom']": {
    animationName: slideUpandFade,
  },
  "&[data-side='right']": {
    animationName: slideLeftAndFade,
  },
  "&[data-side='left']": {
    animationName: slideRightAndFade,
  },
});

const UserAvatarMenu: FC<UserAvatarMenuProps> = ({
  triggerComponent,
  src,
  username,
  actionsComponent,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <StyledButton>
          {triggerComponent || <UserAvatar src={src} username={username} />}
        </StyledButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <StyledDropdownMenuContent align="end" sideOffset={8}>
          {actionsComponent}
        </StyledDropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default UserAvatarMenu;
