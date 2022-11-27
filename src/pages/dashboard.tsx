import Head from "next/head";
import DashboardPage from "../components/pages/dashboard/DashboardPage";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Finance Buddy</title>
      </Head>
      <DashboardPage />
    </>
  );
}