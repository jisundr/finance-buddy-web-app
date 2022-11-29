import { FC } from "react";
import NextLink from "next/link";

import { Box } from "../../common/box/Box";
import { Button } from "../../common/buttons/Button";
import { Form } from "../../common/forms/Form";
import { FormControl } from "../../common/forms/FormControl";
import { FormLabel } from "../../common/forms/FormLabel";
import { TextInput } from "../../common/forms/TextInput";
import { Text } from "../../common/text/Text";
import { Link } from "../../common/link/Link";
import routes from "../../../constants/routes";

const CreateAccountForm: FC = () => {
  return (
    <>
      <Box
        css={{
          backgroundColor: "$white",
          padding: "24px",
          border: "1px solid $neutral300",
          borderRadius: "3px",
          minWidth: "300px",
        }}
      >
        <Box
          css={{
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          <Text
            css={{
              color: "$green500",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "36px",
            }}
          >
            {process.env.NEXT_PUBLIC_LOGO_TITLE}
          </Text>
          <Text
            css={{
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Create your account
          </Text>
        </Box>
        <Form>
          <FormControl>
            <Box css={{ display: "flex" }}>
              <FormLabel htmlFor="name-input">Your Name</FormLabel>
            </Box>
            <TextInput id="name-input" />
          </FormControl>
          <FormControl>
            <Box css={{ display: "flex" }}>
              <FormLabel htmlFor="email-input">Your Email Address</FormLabel>
            </Box>
            <TextInput id="email-input" />
          </FormControl>
          <FormControl>
            <Box css={{ display: "flex" }}>
              <FormLabel htmlFor="password-input">Your Password</FormLabel>
            </Box>
            <TextInput id="password-input" type="password" />
          </FormControl>
          <Button colorScheme="primary" isFullWidth type="submit">
            Create Account
          </Button>
        </Form>
      </Box>
      <Box css={{ padding: "16px 8px" }}>
        Already have an account?{" "}
        <NextLink href={routes.LOGIN} passHref legacyBehavior>
          <Link>Login</Link>
        </NextLink>
      </Box>
    </>
  );
};

export default CreateAccountForm;
