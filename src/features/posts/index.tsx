import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { InputSearch } from "../Search/InputSearch";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { Loading } from "@/components/Loading";
import { useEffect, useState } from "react";

const SLiderPosts = dynamic(
  () => import("../../components/SliderPosts").then((mod) => mod.SLiderPosts),
  { loading: () => <Loading /> }
);
const ListPosts = dynamic(
  () => import("../../components/ListPosts").then((mod) => mod.ListPosts),
  { loading: () => <Loading /> }
);

interface PostsProps {
  title: string;
  isShort: boolean;
}

export const Posts = ({ title, isShort }: PostsProps) => {
  const router = useRouter();
  const handleRouter = ({ selected }: { selected: number }) => {
    router.push(`/${routers}?page=${selected + 1}`);
  };

  let idNotifi = "1";
  let idNew = "323";
  let routers = "tin-tuc";
  let bgTag = "#028dbf";

  switch (title) {
    case "Tư vấn hướng nghiệp":
      idNotifi = "324";
      idNew = "323";
      routers = "tu-van-huong-nghiep";
      bgTag = "#028dbf";
      break;
    case "Tư vấn tuyển sinh":
      idNotifi = "325";
      idNew = "323";
      routers = "tin-tuyen-sinh";
      bgTag = "#028dbf";
      break;
    case "Tư vấn chọn ngành":
      idNotifi = "326";
      idNew = "323";
      routers = "tu-van-chon-nganh";
      bgTag = "#028dbf";
      break;
    case "Sự kiện":
      idNotifi = "327";
      idNew = "323";
      routers = "su-kien";
      bgTag = "#028dbf";
      break;
    case "Kiểm định chất lượng":
      idNotifi = "328";
      idNew = "323";
      routers = "kiem-dinh-chat-luong";
      bgTag = "#028dbf";
      break;
    case "Thông báo":
      idNotifi = "323";
      idNew = "1";
      routers = "thong-bao";
      bgTag = "red.500";
      break;
  }

  const [home_content, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=tin-tuc`, {
          next: { revalidate: 3 }
        });
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data = await res.json();
        setHomeContent(data?.contentPage[0]);
      } catch (error) {
        console.error(error);
      }
    };
    getHomeContent();
  }, []);

  return (
    <Box pb={"40px"}>
      {!isShort && (
        <Breadcrumbs
          title={title}
          image={home_content?.acf?.image || "/anhvienchuan.jpg"}
        />
      )}
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
            <SLiderPosts
              title={title}
              handleRouter={handleRouter}
              idNew={idNew}
              idNotifi={idNotifi}
              isShort={isShort}
              bgTag={bgTag}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <ListPosts
              idNew={idNew}
              title={title}
              idNotifi={idNotifi}
              isShort={isShort}
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
