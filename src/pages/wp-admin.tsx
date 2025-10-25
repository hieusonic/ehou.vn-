import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("https://ehou.aum.edu.vn/wp-admin");
  }, [router]);
  return null;
};

export default Page;
