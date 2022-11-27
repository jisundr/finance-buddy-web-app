import { FC } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { styled } from "../../stitches.config";

const StyledAvatarRoot = styled(Avatar.Root, {
  display: "inline-flex",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: "32px",
  height: "32px",
  borderRadius: "100%",
  padding: 0,
  backgroundColor: "$white",
});

const StyledAvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

export type UserAvatarProps = {
  src: string;
  username: string;
};

const UserAvatar: FC<UserAvatarProps> = ({ src, username }) => {
  return (
    <StyledAvatarRoot>
      <StyledAvatarImage src={src} alt={username} />
    </StyledAvatarRoot>
  );
};

export default UserAvatar;
