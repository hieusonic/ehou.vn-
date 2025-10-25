"use client";

import { CardBlogVert } from "@/components/CardBlogVert";
import { FormWrapper } from "@/components/FormWrapper";
import { Loading } from "@/components/Loading";
import { clean } from "@/lib/sanitizeHtml";
import { formatDate } from "@/ultil/date";
import { toSlug } from "@/ultil/toSlug";
import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Item = ({
  path,
  image,
  title
}: {
  path: string;
  image: string;
  title: string;
}) => {
  return (
    <Box
      as={Link}
      href={path || "/"}
      pos="relative"
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-10px)" }}
    >
      <Image
        priority
        width={700}
        height={400}
        src={image}
        alt={title}
        style={{ maxHeight: "150px", filter: "brightness(50%)" }}
      />
      <Box
        as={Flex}
        pos={"absolute"}
        top={0}
        left={"10%"}
        right={"40%"}
        bottom={0}
        align={"center"}
      >
        <Heading as={"h2"} size={"md"} color={"white"} textAlign={"center"}>
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export const Sidebar = ({
  sticky,
  typez
}: {
  sticky?: string;
  typez?: string;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [checkInput, setCheckInput] = useState(false);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const str = toSlug({ input: searchQuery });
    if (str != "") {
      router.push(`/tim-kiem?keyword=${str}&page=1`);
    }
    setSearchQuery("");
  };

  useEffect(() => {
    const str = toSlug({ input: searchQuery });
    if (searchQuery != "" && str == "") {
      setCheckInput(true);
    } else {
      setCheckInput(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/?type=news&page=1`, {
          next: { revalidate: 3 }
        });
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
  }, []);

  return (
    <>
      <Box
        px={2}
        pos={sticky ? "sticky" : "static"}
        top={sticky}
        display={{ lg: "block", base: "none" }}
      >
        <Box pt={4} px={6}>
          <form onSubmit={onSearch}>
            <HStack columnGap={"0"}>
              <Input
                required
                value={searchQuery}
                type="Text"
                border={"1px solid #BFBFBF "}
                borderRadius={0}
                px={4}
                placeholder="Tìm kiếm..."
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                borderRadius={0}
                onClick={onSearch}
                bg={"blue.800"}
                color={"white"}
                _hover={{
                  bg: "red.600"
                }}
              >
                Tìm kiếm
              </Button>
            </HStack>
          </form>
          {checkInput && (
            <Box
              pt={2}
              display={"flex"}
              color={"#f5222d"}
              justifyContent={"center"}
            >
              <Text>Từ khóa tìm kiếm không hợp lệ</Text>
            </Box>
          )}
        </Box>
        <Box px={6} pt={"32px"}>
          <Heading
            as={"h3"}
            size={"sm"}
            pb={"20px"}
            textAlign={{ base: "center", lg: "center" }}
          >
            ĐĂNG KÝ NGAY ĐỂ NHẬN TƯ VẤN
          </Heading>
          <FormWrapper type="form-main" />
        </Box>
        {typez && (
          <>
            <Box mt={2} justifyContent={"flex-start"}>
              <Text
                px={2}
                py={2}
                w={"-webkit-fit-content"}
                height={8}
                bg={"#1a4c94"}
                color={"white"}
                textAlign={"start"}
              >
                Bài viết mới
              </Text>
              <Box borderBottom={"1px solid #030d47 "}></Box>
              <Box>
                {!isLoading && (
                  <Stack direction={"column"} align={"center"}>
                    <>
                      <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }}>
                        {posts?.slice(0, 3).map((post: any, index: number) => (
                          <CardBlogVert
                            date={post?.date ? formatDate(post.date) : ""}
                            key={index}
                            title={post?.title?.rendered}
                            // tag="Thông báo"
                            desc={clean(post.excerpt.rendered)}
                            image={post?.featured_image || ""}
                            path={`/vi/${post?.slug}`}
                            tag={""}
                          />
                        ))}
                      </SimpleGrid>
                      {posts?.length === 0 && (
                        <Grid placeItems={"center"} height={"40vh"}>
                          Dữ liệu đang được chúng tôi cập nhập
                        </Grid>
                      )}
                    </>
                  </Stack>
                )}

                {isLoading && <Loading />}
              </Box>
            </Box>
            <Box pt={"24px"}>
              <Heading
                as={"h2"}
                size={"sm"}
                pb={"20px"}
                textAlign={{ base: "center", lg: "center" }}
              >
                ĐĂNG KÝ NGAY ĐỂ NHẬN TƯ VẤN
              </Heading>
              <FormWrapper type="form-main" />
            </Box>
          </>
        )}

        {!typez && (
          <>
            <Box justifyContent={"flex-start"} pt={"22px"} ml={"7px"}>
              <Text
                px={2}
                py={2}
                w={"-webkit-fit-content"}
                height={8}
                bg={"#1a4c94"}
                color={"white"}
                textAlign={"start"}
                fontSize={"14px"}
              >
                Bài viết mới
              </Text>
              <Box borderBottom={"1px solid #030d47 "}></Box>
              <Box className="ttcol">
                {!isLoading && (
                  <Stack
                    direction={"column"}
                    align={{ base: "center", md: "flex-start" }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                  >
                    <>
                      <SimpleGrid
                        columns={{ base: 1, md: 1, lg: 1 }}
                        spacing={5}
                        p={4}
                      >
                        {posts?.slice(0, 3).map((post: any, index: number) => (
                          <CardBlogVert
                            date={post?.date ? formatDate(post.date) : ""}
                            key={index}
                            title={post?.title?.rendered}
                            desc={clean(post.excerpt.rendered)}
                            image={post?.featured_image || ""}
                            path={`/vi/${post?.slug}`}
                            tag={""}
                          />
                        ))}
                      </SimpleGrid>
                      {posts?.length === 0 && (
                        <Grid placeItems={"center"} height={"40vh"}>
                          Dữ liệu đang được chúng tôi cập nhập
                        </Grid>
                      )}
                    </>
                  </Stack>
                )}
                {isLoading && <Loading />}
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};
