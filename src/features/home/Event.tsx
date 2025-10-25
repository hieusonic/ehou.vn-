"use client";

import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Posts = dynamic(() =>
  import("@/features/posts").then((mod) => mod.Posts)
);

export const Event = () => {
  const title = "Tin tức";
  const isShort = true;
  return (
    <Box bg="#f7f7f7">
      <Posts isShort={isShort} title={title} />
    </Box>
  );
};
