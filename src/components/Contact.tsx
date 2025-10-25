"use client";

import {
  Box,
  Container,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  useColorModeValue
} from "@chakra-ui/react";

import { ScrollMotion } from "./ScrollMotion";

export const Contact = () => {
  return (
    <Container maxW="7xl" py={{ lg: 24, base: 10 }}>
      <SimpleGrid
        spacing={""}
        gridTemplateColumns={{
          base: "1fr",
          md: " 1fr",
          lg: "repeat(2, 1fr)"
        }}
      >
        <GridItem pt={{ lg: "55px", base: "0" }}>
          <ScrollMotion>
            <Text
              fontSize={{ lg: "24px", base: "16px" }}
              fontWeight={600}
              py="2"
              textAlign="center"
              color={"#028dbf"}
            >
              Đăng kí không cần xét tuyển
            </Text>
            <FormWrapper type="form-main" title="" />
          </ScrollMotion>
        </GridItem>
        <GridItem pos="relative">
          <DottedBox />
          <Box pt={{ lg: "90px" }}>
            <Image
              src="/bang ehou 2022_0.jpg"
              alt="Picture"
              width={{ base: "100%", lg: "600px" }}
              height={{ base: "auto", lg: "400px" }}
              objectFit="cover"
            />
          </Box>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};

export const DottedBox = () => {
  return (
    <Box
      position="absolute"
      left="-45px"
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={-1}
    >
      <svg
        color={useColorModeValue("rgba(55,65,81, 0.1)", "rgba(55,65,81, 0.7)")}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        ></rect>
      </svg>
    </Box>
  );
};

import { clean } from "@/lib/sanitizeHtml";
import { List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { BiChevronRightCircle } from "react-icons/bi";
import { FormWrapper } from "./FormWrapper";

export const Trylearning = (banner: any) => {
  const items = [
    banner?.banner?.text_1 ||
      "Lấy bắng đại học chất lượng ngay tại nhà. Học online mọi lúc mọi nơi.",
    banner?.banner?.text_2 ||
      "Chỉ xét tuyển đầu vào dựa trên bằng cao nhất mà bạn đã có(THPT, TC, CĐ, ĐH)",
    banner?.banner?.text_3 ||
      "Bằng được Bộ GD&ĐT công nhận. Văn bằng KHÔNG ghi hình thức đào tạo TỪ XA",
    banner?.banner?.text_4 ||
      "Bằng có giá trị trên toàn quốc. Sử dụng để dự thi công chức, năng lực xét bậc lương, học lên cao học..."
  ];
  return (
    <>
      <Box bg={"#008AFA"} py={10}>
        <Container maxW={"7xl"}>
          <SimpleGrid
            gridTemplateColumns={{
              base: "1fr",
              md: " 1fr",
              lg: "repeat(2, 1fr)"
            }}
            gap={{ base: 10, md: 10, lg: 10 }}
          >
            <GridItem>
              <Heading
                fontSize={{ base: "28px", lg: "34px" }}
                textAlign={"center"}
                textTransform={"uppercase"}
                color={"black"}
                lineHeight={-1}
                fontWeight={400}
                fontStyle={"normal"}
                as={"h1"}
                pb="12px"
              >
                {banner?.banner?.tieu_de ||
                  " ĐĂNG KÝ HỌC THỬ – NHẬN LỘ TRÌNH HỌC TẬP NHANH CHÓNG"}
              </Heading>

              <List fontSize="18px" color="#fff" spacing={8}>
                {items.map((item, index) => (
                  <ListItem key={index} display="flex">
                    <ListIcon
                      as={BiChevronRightCircle}
                      color="white"
                      fontSize="40px"
                    />
                    <Text
                      fontSize={{ base: "14px", lg: "18px" }}
                      fontWeight={"bold"}
                      whiteSpace={"pre-line"}
                      dangerouslySetInnerHTML={{ __html: clean(item) }}
                    />
                  </ListItem>
                ))}
              </List>
            </GridItem>
            <GridItem
              mt={{ md: "70px", base: "50px", lg: "40px" }}
              ml={{ lg: "40px" }}
            >
              <Heading
                as="h2"
                textAlign={"center"}
                mb="10px"
                fontSize={{ lg: "26px ", base: "sm" }}
              >
                Đăng ký tư vấn ngay
              </Heading>
              <FormWrapper type="form-main" title="" />
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};
