"use client";

import dynamic from "next/dynamic";
import { clean } from "@/lib/sanitizeHtml";

const BtnDks = dynamic(() =>
  import("@/components/BtnTheme").then((mod) => mod.BtnDks)
);

import {
  Box,
  Container,
  GridItem,
  SimpleGrid,
  Heading,
  Text
} from "@chakra-ui/react";
import Image from "next/image";

export const Program = (chuong_trinhs: any) => {
  const sections = [
    {
      title: chuong_trinhs?.chuong_trinhs?.chuong_trinh?.title_3 || "Sứ mạng",
      content:
        chuong_trinhs?.chuong_trinhs?.chuong_trinh?.text_2 ||
        "Mở cơ hội học tập cho mọi người với chất lượng tốt, đáp ứng nhu cầu học tập đa dạng với nhiều loại hình, chú trọng giáo dục từ xa, đa ngành, đa trình độ, phục vụ sự nghiệp xây dựng đất nước và hội nhập quốc tế."
    },
    {
      title:
        chuong_trinhs?.chuong_trinhs?.chuong_trinh?.title_4 ||
        "Giá trị cốt lõi",
      content:
        chuong_trinhs?.chuong_trinhs?.chuong_trinh?.text_3 ||
        "Tự chủ toàn diện - Công nghệ hiện đại - Dịch vụ hoàn hảo - Kết nối rộng mở."
    },
    {
      title: chuong_trinhs?.chuong_trinhs?.chuong_trinh?.title_5 || "Slogan",
      content:
        chuong_trinhs?.chuong_trinhs?.chuong_trinh?.text_4 ||
        "Mở cơ hội học tập cho mọi người - Learning Opportunities for all."
    }
  ];
  return (
    <Box py={"82px"}>
      <Container maxW="7xl" color={"#f5f7fa"}>
        <SimpleGrid
          spacing={{ lg: "20", base: "10" }}
          gridTemplateColumns={{
            base: "1fr",
            md: " 1fr",
            lg: "repeat(2, 1fr)"
          }}
        >
          <GridItem>
            <Image
              src={chuong_trinhs?.chuong_trinhs?.image || "/a.webp"}
              alt="Picture"
              width={1152}
              height={769}
              style={{ width: "100%", height: "100%" }}
              priority
            />
          </GridItem>
          <GridItem gap={"10px"}>
            <Heading
              fontSize={{ base: "15px", lg: "42px" }}
              color={" #028dbf"}
              fontWeight={600}
              fontStyle={"normal"}
              lineHeight={"1.5"}
            >
              {chuong_trinhs?.chuong_trinhs?.chuong_trinh?.title_2 ||
                "Trường Đại học Mở Hà Nội"}
            </Heading>
            <Text
              color={"#666666"}
              dangerouslySetInnerHTML={{
                __html: clean(
                  chuong_trinhs?.chuong_trinhs?.chuong_trinh?.text_1 ||
                    "Trường đại học Mở Hà Nội là cơ sở giáo dục đại học công lập hoạt động trong hệ thống các trường đại học quốc dân do Bộ Giáo dục và Đào tạo trực tiếp quản lý, là cơ sở đào tạo đại học và nghiên cứu với các loại hình đào tạo từ xa, đào tạo tại chỗ nhằm đáp ứng nhu cầu học tập đa dạng của xã hội, góp phần tăng tiềm lực cán bộ khoa học - kỹ thuật cho đất nước. Trích Quyết định 535-TTg của Thủ tướng Chính phủ."
                )
              }}
            />
            {sections.map((section, index) => (
              <Box key={index} mb={4}>
                <Heading as="h3" size="md" mt={4} mb={2} color="#028dbf">
                  {section.title}
                </Heading>
                <Text
                  color={"#666666"}
                  dangerouslySetInnerHTML={{
                    __html: clean(section.content)
                  }}
                />
              </Box>
            ))}
            <Box mt="30px">
              <BtnDks />
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
