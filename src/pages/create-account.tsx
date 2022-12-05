import Head from "next/head";
import CreateAccountPage from "../components/pages/create-account/CreateAccountPage";

export default function CreateAccount() {
  return (
    <>
      <Head>
        <title>Create Account | {process.env.NEXT_PUBLIC_LOGO_TITLE}</title>
      </Head>
      <CreateAccountPage />;
    </>
  );
}
