import Head from "next/head";
import ForgotPasswordPage from "../components/pages/forgot-password/ForgotPasswordPage";

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Forgot Password | Finance Buddy</title>
      </Head>
      <ForgotPasswordPage />;
    </>
  );
}
