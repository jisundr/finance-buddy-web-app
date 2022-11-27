import Head from "next/head";
import CreateAccountPage from "../components/pages/create-account/CreateAccountPage";

export default function CreateAccount() {
  return (
    <>
      <Head>
        <title>Create Account | Finance Buddy</title>
      </Head>
      <CreateAccountPage />;
    </>
  );
}
