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

const ForgotPasswordForm: FC = () => {
  return (
    <>
      <Box
        css={{
          backgroundColor: "$white",
          padding: "24px",
          border: "1px solid $neutral300",
          borderRadius: "3px",
          width: "300px",
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
            Reset your password
          </Text>
          <Box css={{ marginBottom: "8px" }} />
          <Text
            css={{
              textAlign: "left",
              fontSize: "12px",
              lineHeight: "18px",
            }}
          >
            Enter the email address associated with your account and we&#39;ll
            send you a link to reset your password.
          </Text>
        </Box>

        <Form>
          <FormControl>
            <Box css={{ display: "flex" }}>
              <FormLabel htmlFor="email-input">Email Address</FormLabel>
            </Box>
            <TextInput id="email-input" />
          </FormControl>
          <Button colorScheme="primary" isFullWidth type="submit">
            Continue
          </Button>
        </Form>
      </Box>
      <Box css={{ padding: "16px 8px" }}>
        No account yet?{" "}
        <NextLink href={routes.createAccount()} passHref legacyBehavior>
          <Link>Create Account</Link>
        </NextLink>
      </Box>
    </>
  );
};

export default ForgotPasswordForm;
