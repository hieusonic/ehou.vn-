"use client";

import {
  Box,
  Button,
  Divider,
  GridItem,
  HStack,
  Heading,
  SimpleGrid
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { clean } from "@/lib/sanitizeHtml";
import { formatDate } from "@/ultil/date";
import dynamic from "next/dynamic";

const CardBlogVert = dynamic(() =>
  import("@/components/CardBlogVert").then((mod) => mod.CardBlogVert)
);

export const SamePosts = ({ catId, id }: { catId?: string; id?: string }) => {
  const [samePosts, setSamePosts] = useState<any[]>([]);

  useEffect(() => {
    const getSamePosts = async () => {
      try {
        if (catId) {
          // Lấy danh sách các bài viết cùng thể loại
          const res = await fetch(`/api/same-posts/?catId=${catId}&id=${id}`, {
            next: { revalidate: 3 }
          });
          if (!res.ok) {
            throw new Error(
              `Posts fetch failed with status: ${res.statusText}`
            );
          }
          const data: { samePosts: any[] } = await res.json();
          const { samePosts } = data;
          if (samePosts?.length) setSamePosts(samePosts);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getSamePosts();
  }, [catId, id]);
  return (
    <>
      <Divider pt={"32px"} />
      <Box py={"30px"}>
        <HStack justifyContent={"space-between"} pb={"16px"}>
          <Heading as={"h3"} size={"md"}>
            Có thể bạn quan tâm
          </Heading>
          <Button
            as={Link}
            href={"/tin-tuc"}
            variant={"link"}
            colorScheme="red"
          >
            Xem tất cả
          </Button>
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} gap={"20px"}>
          {samePosts.map((postCat, index) => {
            if (index < 3)
              return (
                <GridItem key={index}>
                  <CardBlogVert
                    title={clean(postCat?.title?.rendered)}
                    image={postCat?.featured_image || ""}
                    path={`/${postCat.slug}`}
                    key={index}
                    date={postCat?.date ? formatDate(postCat.date) : ""}
                    desc={clean(postCat?.excerpt?.rendered)}
                    tag="Thông báo"
                    bgTag="red.500"
                  />
                </GridItem>
              );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};
