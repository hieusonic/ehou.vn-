"use client";

import { useEffect, useState } from "react";
import { BannerGt } from "./components/BannerGt";
import { AboutUs } from "./components/IntroEln";

export const About = () => {
  const [home_content, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=gioi-thieu`, {
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
      <BannerGt item={home_content?.acf?.item} />
      <AboutUs item={home_content?.acf?.item} />
    </>
  );
};
