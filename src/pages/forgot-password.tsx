import Head from "next/head";
import ForgotPasswordPage from "../components/pages/forgot-password/ForgotPasswordPage";

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Forgot Password | {process.env.NEXT_PUBLIC_LOGO_TITLE}</title>
      </Head>
      <ForgotPasswordPage />;
    </>
  );
}
