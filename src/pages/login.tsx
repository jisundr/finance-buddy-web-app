import Head from "next/head";
import LoginPage from "../components/pages/login/LoginPage";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Finance Buddy</title>
      </Head>
      <LoginPage />;
    </>
  );
}
