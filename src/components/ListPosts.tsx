"use client";

import { Loading } from "@/components/Loading";
import { clean } from "@/lib/sanitizeHtml";
import { formatDate } from "@/ultil/date";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CardBlogtb = dynamic(() =>
  import("@/components/CardBlogtb").then((mod) => mod.CardBlogtb)
);

export const ListPosts = ({
  idNew,
  idNotifi,
  isShort,
  title
}: {
  idNew: string;
  idNotifi: string;
  isShort: boolean;
  title: string;
}) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  let bgTag = "red.500";
  let tag = "Thông báo";

  if (title === "Thông báo") {
    bgTag = "#028dbf";
    tag = "Tin tức";
  } else {
    bgTag = "red.500";
    tag = "Thông báo";
  }

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `/api/posts/?type=news&page=${page}&idNew=${idNew}&idNotifi=${idNotifi}`,
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
  }, [page, idNew, idNotifi]);

  return (
    <>
      <Box mt={{ base: "30px", md: "50px", lg: "0" }}>
        <Box mb="20px">
          <Heading size={"lg"} textAlign={{ base: "center", lg: "start" }}>
            {tag}
          </Heading>
        </Box>

        {!isLoading && (
          <Grid templateColumns="repeat(1, 1fr)" gap="10">
            {isShort
              ? // Hiển thị chỉ 4 bài viết nếu isShort là true
                posts?.slice(0, 4).map((post: any, index: number) => (
                  <GridItem key={index}>
                    <CardBlogtb
                      date={post?.date ? formatDate(post.date) : ""}
                      key={index}
                      title={clean(post?.title?.rendered)}
                      tag={tag}
                      bgTag={bgTag}
                      desc={clean(post?.excerpt?.rendered)}
                      image={post?.featured_image || ""}
                      path={`/vi/${post?.slug}`}
                    />
                  </GridItem>
                ))
              : // Hiển thị tất cả bài viết nếu isShort là false
                posts?.slice(0, 6).map((post: any, index: number) => (
                  <GridItem key={index}>
                    <CardBlogtb
                      date={post?.date ? formatDate(post.date) : ""}
                      key={index}
                      title={clean(post?.title?.rendered)}
                      tag={tag}
                      bgTag={bgTag}
                      desc={clean(post?.excerpt?.rendered)}
                      image={post?.featured_image || ""}
                      path={`/vi/${post?.slug}`}
                    />
                  </GridItem>
                ))}

            {posts?.length === 0 && (
              <Grid placeItems={"center"} height={"40vh"}>
                Dữ liệu đang được chúng tôi cập nhập
              </Grid>
            )}
          </Grid>
        )}

        {isLoading && <Loading />}
      </Box>
    </>
  );
};
