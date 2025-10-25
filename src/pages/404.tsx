import Head from "next/head";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { Loading } from "@/components/Loading";
import { InputSearch } from "@/features/Search/InputSearch";
import { Box, Button, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import NextLink from "next/link";

const ListPosts = dynamic(
  () => import("../components/ListPosts").then((mod) => mod.ListPosts),
  { loading: () => <Loading /> }
);

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>404 - Trang không tồn tại</title>
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="Trang bạn đang tìm không tồn tại. Truy cập trang chủ hoặc xem các bài viết nổi bật khác của chúng tôi."
        />
        <meta property="og:title" content="404 - Trang không tồn tại" />
        <meta
          property="og:description"
          content="Trang bạn đang tìm không tồn tại. Truy cập trang chủ hoặc xem các bài viết nổi bật khác của chúng tôi."
        />
      </Head>
      <Box pb={"40px"}>
        <Breadcrumbs title="Trang không tồn tại" image="/anhvienchuan.jpg" />
        <Container py="70px" maxW={"7xl"}>
          <Grid
            templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
            gap={{ lg: "10", base: "0" }}
          >
            <GridItem colSpan={2} mb="30px">
              <InputSearch type="popover" />
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
            gap={{ lg: "10", base: "0" }}
          >
            <GridItem colSpan={2}>
              <Box mt={4} textAlign="center">
                <Text mb={2}>Truy cập để đọc các bài viết khác:</Text>
                <NextLink href="/tin-tuc" passHref>
                  <Button colorScheme="blue" size="lg">
                    Xem tin tức
                  </Button>
                </NextLink>
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <ListPosts
                idNew="323"
                title="Tin tức nổi bật"
                idNotifi="1"
                isShort={true}
              />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default NotFoundPage;
