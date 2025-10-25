import { CardCategoty } from "@/components/CardCategoty";
import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const BtnDks = dynamic(() =>
  import("@/components/BtnTheme").then((mod) => mod.BtnDks)
);

export const Categorys = (cac_nganh_dao_tao: any) => {
  const categotys = [
    {
      image:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_tren?.nganh_1
          .anh_1 || "/tiếng anh.jpg",
      path: "/nganh-ngon-ngu-anh",
      title:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_tren?.nganh_1
          ?.ten_nganh_1 || "Ngôn ngữ Anh"
    },
    {
      image:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_tren?.nganh_2
          .anh_1 || "/tiếng anh.jpg",
      path: "/nganh-cong-nghe-thong-tin",
      title:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_tren?.nganh_2
          ?.ten_nganh_1 || " Công nghệ thông tin"
    },
    {
      image:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_tren?.nganh_3
          .anh_1 || "/tiếng anh.jpg",
      path: "nganh-luat",
      title:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_tren?.nganh_3
          ?.ten_nganh_1 || "Luật"
    },
    {
      image:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_tren?.nganh_4
          .anh_1 || "/tiếng anh.jpg",
      path: "nganh-luat-kinh-te",
      title:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_tren?.nganh_4
          ?.ten_nganh_1 || "Luật kinh tế"
    },
    {
      image:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_tren?.nganh_5
          .anh_1 || "/tiếng anh.jpg",
      path: "/nganh-quan-tri-kinh-doanh",
      title:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_tren?.nganh_5
          ?.ten_nganh_1 || "Quản trị kinh doanh"
    },
    {
      image:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_duoi?.nganh_1
          .anh_1 || "/tiếng anh.jpg",
      path: "nganh-ke-toan",
      title:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_duoi?.nganh_1
          ?.ten_nganh_1 || "Kế toán"
    },
    {
      image:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_duoi?.nganh_2
          .anh_1 || "/tiếng anh.jpg",
      path: "nganh-tai-chinh-ngan-hang",
      title:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_duoi?.nganh_2
          ?.ten_nganh_1 || "Tài chính ngân hàng"
    },
    {
      image:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_duoi?.nganh_3
          .anh_1 || "/tiếng anh.jpg",
      path: "nganh-thuong-mai-dien-tu",
      title:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_duoi?.nganh_3
          ?.ten_nganh_1 || ".Thương mại điện tử "
    },
    {
      image:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_duoi?.nganh_4
          .anh_1 || "/tiếng anh.jpg",
      path: "nganh-quan-tri-khach-san",
      title:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_duoi?.nganh_4
          ?.ten_nganh_1 || ".Quản trị khách sạn"
    },
    {
      image:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_duoi?.nganh_5
          .anh_1 || "/tiếng anh.jpg",
      path: "nganh-quan-tri-dich-vu-du-lich-lu-hanh",
      title:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_duoi?.nganh_5
          ?.ten_nganh_1 || ".Quản trị dịch vụ du lịch và lữ hành"
    },
    {
      image:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_duoi?.nganh_6
          .anh_1 || "/tiếng anh.jpg",
      path: "nganh-ngon-ngu-trung",
      title:
        cac_nganh_dao_tao?.cac_nganh_dao_tao?.cac_nganh?.nganh_duoi?.nganh_6
          ?.ten_nganh_1 || "Ngôn ngữ trung"
    }
  ];

  return (
    <Box>
      <Container maxW="7xl">
        <Heading
          textAlign={"center"}
          py="5"
          as="h2"
          fontSize={{ base: "28px", lg: "40px" }}
          fontWeight="700"
          letterSpacing="1.5px"
          color={"#028dbf"}
        >
          {" "}
          Ngành đào tạo nổi bật{" "}
        </Heading>
        <Grid
          templateColumns={{
            md: "repeat(4, 1fr)",
            base: "1fr"
          }}
          gap="40px"
          justifyContent="center"
          justifyItems="center"
        >
          {categotys.map((category, index) => (
            <CardCategoty
              key={index}
              image={category.image}
              path={category.path}
              title={category.title}
            />
          ))}
        </Grid>
        <Box textAlign={"center"} pt={"30px"}>
          <BtnDks />
        </Box>
      </Container>
    </Box>
  );
};
