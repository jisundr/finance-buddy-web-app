import Head from "next/head";
import LoginPage from "../components/pages/login/LoginPage";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | {process.env.NEXT_PUBLIC_LOGO_TITLE}</title>
      </Head>
      <LoginPage />;
    </>
  );
}
