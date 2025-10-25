"use client";

import { clean } from "@/lib/sanitizeHtml";
import {
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import Image from "next/image";

export const Item = ({
  name,
  title,
  icon
}: {
  name: string;
  title: string;
  icon: string;
}) => {
  return (
    <Flex
      flexDirection={"column"}
      textAlign={{ lg: "start", md: "start", base: "center" }}
      alignItems={{ lg: "center", md: "start", base: "center" }}
      _hover={{
        ".Icon": {
          color: "#000000"
        }
      }}
    >
      <Image
        alt={title}
        src={icon}
        width={64}
        height={64}
        style={{ width: "60px", height: "auto" }}
      />

      <Heading
        mt="16px"
        as="h3"
        textAlign="left"
        lineHeight="22px"
        fontWeight="700"
        fontSize="22px"
        color="#028dbf"
        className="Icon"
        dangerouslySetInnerHTML={{ __html: clean(title) }}
      />

      <Text
        color="black"
        className="Icon"
        mt="14px"
        fontSize="18px"
        lineHeight="24px"
        style={{ whiteSpace: "pre-line" }}
      >
        {name}
      </Text>
    </Flex>
  );
};

export const ListAbout = (receive: any) => {
  const reviews = [
    {
      name:
        receive?.receive?.list?.list_1?.text ||
        "Chương trình học online giúp bạn chủ động sắp xếp thời gian và không gian học.",
      icon: receive?.receive?.list?.list_1?.image || "/s-online.svg",
      title: receive?.list?.list_1?.title || "Học online 100%"
    },
    {
      name:
        receive?.receive?.list?.list_2?.text ||
        "Không cần thi tuyển, xét tuyển từ bằng tốt nghiệp THPT hoặc tương đương trở lên.",
      icon: receive?.receive?.list?.list_2?.image || "/s-books.svg",
      title: receive?.list?.list_2?.title || "Không thi tuyển"
    },
    {
      name:
        receive?.receive?.list?.list_3?.text ||
        "Bằng không ghi hình thức đào tạo và có giá trị tương đương bằng hệ chính quy, đủ điều kiện học lên thạc sĩ, tiến sĩ…",
      icon: receive?.list?.list_3?.image || "/s-degree.svg",
      title: receive?.list?.list_3?.title || "Bằng Cử nhân danh giá "
    },
    {
      name:
        receive?.receive?.list?.list_4?.text ||
        "100% giảng viên tham gia chương trình đều có bằng Thạc sĩ, Tiến sĩ và đều đang giảng dạy tại trường Đại học Kinh tế quốc dân.",
      icon: receive?.receive?.list?.list_4?.image || "/s-teacher.svg",
      title: receive?.receive?.list?.list_4?.title || "Giảng viên chất lượng"
    },

    {
      name:
        receive?.receive?.list_copy?.list_1?.text ||
        "Hình thức học trực tuyến không cần đến trường phù hợp với người đi làm bận rộn.",
      icon: receive?.receive?.list_copy?.list_1?.image || "/s-time.svg",
      title:
        receive?.receive?.list_copy?.list_1?.title || "Chủ động thời gian học"
    },
    {
      name:
        receive?.receive?.list_copy?.list_2?.text ||
        "Phát triển vốn kiến thức, nâng cao kỹ năng chuyên môn áp dụng được ngay trong công việc.",
      icon: receive?.receive?.list_copy?.list_2?.image || "/s-line.svg",
      title: receive?.receive?.list_copy?.list_2?.title || "Áp dụng thực tiễn"
    },
    {
      name:
        receive?.receive?.list_copy?.list_3?.text ||
        "EHOU E-Learning là chương trình đào tạo từ xa về khối ngành kinh tế hàng đầu tại Việt Nam.",
      icon: receive?.receive?.list_copy?.list_3?.image || "/s-star.svg",
      title: receive?.receive?.list_copy?.list_3?.title || "Thương hiệu top 1 "
    },
    {
      name:
        receive?.receive?.list_copy?.list_4?.text ||
        "Luôn cập nhật thông tin lịch khai giảng, học phí, lộ trình học…học viên sẽ được hỗ trợ xuyên suốt quá trình học tập.",
      icon: receive?.receive?.list_copy?.list_4?.image || "/s-call.svg",
      title: receive?.receive?.list_copy?.list_4?.title || "Tư vấn 24/7"
    }
  ];
  return (
    <Box>
      <Container maxW="7xl" color="#42474c">
        <Heading
          pt="70px"
          textAlign="center"
          fontSize={{ base: "28px", lg: "40px" }}
          fontWeight="700"
          letterSpacing="1.5px"
          color={"#028dbf"}
          as="h2"
        >
          {receive?.receive?.title || "Bạn sẽ nhận được gì?"}
        </Heading>
        <Text
          mt="10px"
          textAlign="center"
          fontSize="21px"
          lineHeight="30px"
          color="#028dbf"
        >
          {receive?.receive?.text ||
            "Khi học tại Trường Đại học Mở Hà Nội hệ từ xa"}
        </Text>
      </Container>
      <Container maxW="7xl" pb="82px" px="0">
        <SimpleGrid
          spacingX={{ base: "8", md: "0", lg: "20" }}
          spacingY={"20"}
          mt="70px"
          gridTemplateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)"
          }}
        >
          {reviews?.map((review, index) => (
            <GridItem key={index}>
              <Item
                name={review.name}
                title={review.title}
                icon={review.icon}
              />
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
