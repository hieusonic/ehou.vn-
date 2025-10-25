"use client";

import { Box, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

export const BannerGt = ({ item }: { item: any }) => {
  const objectFit = useBreakpointValue({
    base: "contain",
    md: "cover"
  });

  return (
    <Box position="relative" width="100%" height="auto">
      <Image
        src={item?.image || "/bannergta.jpg"}
        alt="Banner Image"
        layout="responsive"
        objectFit={objectFit}
        width={1600}
        height={700}
        quality={100}
      />
    </Box>
  );
};
