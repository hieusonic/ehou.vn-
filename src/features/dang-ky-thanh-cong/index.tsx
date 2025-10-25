"use client";

import Image from "next/image";
export const DangkyTc = () => {
  return (
    <>
      <Image
        src={"/dktc.png"}
        alt={"ehou"}
        width={1421}
        height={920}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover"
        }}
        priority
      />
    </>
  );
};
