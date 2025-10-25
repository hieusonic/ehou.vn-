"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const InfoContact = dynamic(() =>
  import("@/components/Accs").then((mod) => mod.InfoContact)
);
const Trylearning = dynamic(() =>
  import("@/components/Contact").then((mod) => mod.Trylearning)
);

export const Lienhe = () => {
  const [home_content, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=hoc-thu`, {
          next: { revalidate: 3 }
        });
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data = await res.json();
        setHomeContent(data?.contentPage[0]);
      } catch (error) {
        console.error(error);
      }
    };
    getHomeContent();
  }, []);
  return (
    <>
      <Trylearning banner={home_content?.acf?.banner} />
      <InfoContact thong_tin={home_content?.acf?.thong_tin} />
    </>
  );
};
