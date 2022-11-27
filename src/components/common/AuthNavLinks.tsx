import { FC } from "react";

import { Box } from "./box/Box";
import UserAvatar from "./UserAvatar";

const AuthNavLinks: FC = () => {
  return (
    <Box
      css={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <UserAvatar
        src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"
        username="John Doe"
      />
    </Box>
  );
};

export default AuthNavLinks;
