import { FC } from "react";
import { styled } from "../../../stitches.config";
import { Button } from "../../common/buttons/Button";
import { Form } from "../../common/forms/Form";
import { FormControl } from "../../common/forms/FormControl";
import { FormLabel } from "../../common/forms/FormLabel";
import { TextInput } from "../../common/forms/TextInput";
import { Text } from "../../common/text/Text";

const FormContainer = styled("div", {
  backgroundColor: "$white",
  padding: "24px",
  border: "1px solid $neutral300",
  borderRadius: "3px",
  minWidth: "300px",
});

const FormHeader = styled("div", {
  textAlign: "center",
  marginBottom: "24px",
});

const FormContent = styled("div", {});

const LoginForm: FC = () => {
  return (
    <FormContainer>
      <FormHeader>
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
      </FormHeader>
      <FormContent>
        <Form>
          <FormControl>
            <FormLabel htmlFor="email-input">Email Address</FormLabel>
            <TextInput id="email-input" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password-input">Password</FormLabel>
            <TextInput id="password-input" type="password" />
          </FormControl>
          <Button colorScheme="primary" isFullWidth type="submit">
            Login
          </Button>
        </Form>
      </FormContent>
    </FormContainer>
  );
};

export default LoginForm;
