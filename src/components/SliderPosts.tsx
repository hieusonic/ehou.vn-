"use client";

import { Loading } from "@/components/Loading";
import { clean } from "@/lib/sanitizeHtml";
import { formatDate } from "@/ultil/date";
import { Box, Grid, GridItem, HStack, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const CardBlogVert = dynamic(() =>
  import("@/components/CardBlogVert").then((mod) => mod.CardBlogVert)
);

export const StyledPaginate = styled(ReactPaginate)`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0 5rem;

  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
    margin-right: 4px;
    margin-left: 4px;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

export const SLiderPosts = ({
  handleRouter,
  idNew,
  idNotifi,
  title,
  isShort,
  bgTag
}: {
  handleRouter?: ({}: { selected: number }) => void;
  idNew: string;
  idNotifi: string;
  title: string;
  isShort: boolean;
  bgTag: string;
}) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const [posts, setPosts] = useState<any[]>([]);
  const [totalPosts, setTotalPosts] = useState("0");
  const [isLoading, setIsLoading] = useState(true);

  let tag = "Tin tức";

  if (title === "Thông báo") {
    tag = "Thông báo";
  }

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `/api/posts/?type=notifis&page=${page}&idNew=${idNew}&idNotifi=${idNotifi}`,
          {
            next: { revalidate: 3 }
          }
        );
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts, totalPosts } = data;
        posts?.length && setPosts(posts);
        totalPosts && setTotalPosts(totalPosts);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, [page, idNew, idNotifi]);

  return (
    <>
      <Box>
        <Box mb="20px">
          <Heading size={"lg"}>{title}</Heading>
        </Box>

        {!isLoading && (
          <>
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)"
              }}
              gap="30px"
            >
              {isShort
                ? // Hiển thị chỉ 4 bài viết nếu isShort là true
                  posts?.slice(0, 6).map((post: any, index: number) => (
                    <GridItem key={index}>
                      <CardBlogVert
                        key={index}
                        title={clean(post?.title?.rendered)}
                        date={post?.date ? formatDate(post.date) : ""}
                        desc={clean(post?.excerpt?.rendered)}
                        tag={tag}
                        bgTag={bgTag}
                        image={post?.featured_image || ""}
                        path={`/vi/${post?.slug}`}
                      />
                    </GridItem>
                  ))
                : // Hiển thị tất cả bài viết nếu isShort là false
                  posts?.map((post: any, index: number) => (
                    <GridItem key={index}>
                      <CardBlogVert
                        key={index}
                        title={clean(post?.title?.rendered)}
                        date={post?.date ? formatDate(post.date) : ""}
                        desc={clean(post?.excerpt?.rendered)}
                        tag={tag}
                        bgTag={bgTag}
                        image={post?.featured_image || ""}
                        path={`/vi/${post?.slug}`}
                      />
                    </GridItem>
                  ))}
            </Grid>
            {posts?.length > 0 && !isShort && (
              <HStack pt={"32px"} justify={"center"}>
                <StyledPaginate
                  className="paginate"
                  previousLabel="<"
                  nextLabel=">"
                  pageCount={Math.ceil(Number(totalPosts) / 10)}
                  onPageChange={handleRouter}
                  pageRangeDisplayed={1}
                  marginPagesDisplayed={1}
                  activeClassName="active"
                  forcePage={Number(page) - 1}
                />
              </HStack>
            )}
          </>
        )}

        {isLoading && <Loading />}
        {!isLoading && posts?.length === 0 && (
          <Grid placeItems={"center"} height={"40vh"}>
            Dữ liệu đang được chúng tôi cập nhập
          </Grid>
        )}
      </Box>
    </>
  );
};
