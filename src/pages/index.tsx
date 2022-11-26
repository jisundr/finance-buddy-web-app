import { useRouter } from "next/router";
import { useEffect } from "react";
import routes from "../constants/routes";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace(routes.login(), undefined, { shallow: true });
  }, [router]);

  return null;
}
