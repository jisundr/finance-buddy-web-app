import { FC } from "react";
import { Url } from "url";
import routes from "../../constants/routes";

import { Box } from "./box/Box";
import UserAvatarMenu from "./UserAvatarMenu";
import UserAvatarMenuItem from "./UserAvatarMenuItem";

const AuthNavLinks: FC = () => {
  return (
    <Box
      css={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <UserAvatarMenu
        src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"
        username="John Doe"
        actionsComponent={
          <>
            <UserAvatarMenuItem href={routes.LOGIN} label="Logout" />
          </>
        }
      />
    </Box>
  );
};

export default AuthNavLinks;
