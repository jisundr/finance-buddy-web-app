import { FC } from "react";
import NextLink from "next/link";
import { Box } from "../../common/box/Box";
import { Button } from "../../common/buttons/Button";
import { Form } from "../../common/forms/Form";
import { FormControl } from "../../common/forms/FormControl";
import { FormLabel } from "../../common/forms/FormLabel";
import { TextInput } from "../../common/forms/TextInput";
import { Link } from "../../common/link/Link";
import { Text } from "../../common/text/Text";
import routes from "../../../constants/routes";

const LoginForm: FC = () => {
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
            Finance Buddy
          </Text>
          <Text
            css={{
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Login in to your account
          </Text>
        </Box>
        <Form>
          <FormControl>
            <Box css={{ display: "flex" }}>
              <FormLabel htmlFor="email-input">Email Address</FormLabel>
            </Box>
            <TextInput id="email-input" />
          </FormControl>
          <FormControl>
            <Box
              css={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <FormLabel htmlFor="password-input">Password</FormLabel>
              <NextLink href={routes.forgotPassword()} legacyBehavior passHref>
                <Link>Forgot Password?</Link>
              </NextLink>
            </Box>
            <TextInput id="password-input" type="password" />
          </FormControl>
          <Button colorScheme="primary" isFullWidth type="submit">
            Login
          </Button>
        </Form>
      </Box>
      <Box css={{ padding: "16px 8px" }}>
        No account yet?{" "}
        <NextLink href={routes.register()} passHref legacyBehavior>
          <Link>Create Account</Link>
        </NextLink>
      </Box>
    </>
  );
};

export default LoginForm;
