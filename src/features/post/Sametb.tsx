"use client";

import { clean } from "@/lib/sanitizeHtml";
import { formatDate } from "@/ultil/date";
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  SimpleGrid
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CardBlogVert = dynamic(() =>
  import("@/components/CardBlogVert").then((mod) => mod.CardBlogVert)
);

export const Sametb = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const [posts, setPosts] = useState<any[]>([]);
  const [, setIsLoading] = useState(true);
  const idNew = "97";

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `/api/posts/?type=news&page=${page}&idNew=${idNew}`,
          {
            next: { revalidate: 3 }
          }
        );
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data: { posts: any[] } = await res.json();
        const { posts } = data;
        posts?.length && setPosts(posts);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, [page, idNew]);

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
            href={"/thong-bao"}
            variant={"link"}
            colorScheme="red"
          >
            Xem tất cả
          </Button>
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} gap={"20px"}>
          {posts?.slice(0, 3).map((post: any, index: number) => (
            <GridItem key={index}>
              <CardBlogVert
                date={post?.date ? formatDate(post.date) : ""}
                key={index}
                title={clean(post?.title?.rendered)}
                tag="Thông báo"
                bgTag="red.500"
                desc={clean(post?.excerpt?.rendered)}
                image={post?.featured_image || ""}
                path={`/${post?.slug}`}
              />
            </GridItem>
          ))}
        </SimpleGrid>
        {posts?.length === 0 && (
          <Grid placeItems={"center"} height={"40vh"}>
            Dữ liệu đang được chúng tôi cập nhập
          </Grid>
        )}
      </Box>
    </>
  );
};
