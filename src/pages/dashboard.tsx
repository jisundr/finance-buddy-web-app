import Head from "next/head";
import DashboardPage from "../components/pages/dashboard/DashboardPage";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | {process.env.NEXT_PUBLIC_LOGO_TITLE}</title>
      </Head>
      <DashboardPage />
    </>
  );
}
