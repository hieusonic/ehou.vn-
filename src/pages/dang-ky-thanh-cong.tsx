"server only";

import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const DangkyTc = dynamic(() =>
  import("@/features/dang-ky-thanh-cong").then((mod) => mod.DangkyTc)
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Đăng ký học từ xa Trường Đại học Mở Hà Nội"
        description="Đăng ký học Trường Đại học từ xa Đại học Mở Hà Nội, tiết kiệm chi phí và thời gian"
        openGraph={{
          title: "Đăng ký học từ xa Trường Đại học Mở Hà Nội",
          description:
            "Đăng ký học Trường Đại học từ xa Đại học Mở Hà Nội, tiết kiệm chi phí và thời gian",
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_DOMAIN_EH}/Group-17.png`,
              width: 800,
              height: 600,
              alt: "Đăng ký học từ xa Trường Đại học Mở Hà Nội",
              type: "image/jpeg/png"
            }
          ]
        }}
        twitter={{
          handle: "@Dangky",
          site: "@Trường Đại học Mở Hà Nội",
          cardType: "summary_large_image"
        }}
      />
      <DangkyTc />
    </>
  );
};

export default Page;
