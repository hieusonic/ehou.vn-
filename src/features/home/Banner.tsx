import {
  JumpingElement,
  JumpingElementX,
  ScrollMotionss
} from "@/components/ScrollMotion";
import { clean } from "@/lib/sanitizeHtml";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  List,
  ListItem,
  Text
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { useEffect, useState } from "react";
const MotionBox = motion(Box);

interface BannerTexts {
  text_1?: string;
  text_2?: string;
  text_3?: string;
  text_4?: string;
  text_5?: string;
  text_6?: string;
  text_7?: string;
  text_8?: string;
  text_9?: string;
  text_10?: string;
}
interface BannerTextss {
  text_1?: string;
  text_2?: string;
  text_3?: string;
  text_4?: string;
  text_5?: string;
  text_6?: string;
  text_7?: string;
  text_8?: string;
  text_9?: string;
  text_10?: string;
  text_11?: string;
}
interface BannerProps {
  list_1: BannerTexts;
  list_2: BannerTextss;
  list_3: { image: string };
}

interface BannersComponentProps {
  banners: BannerProps;
}

export const Banners = ({ banners }: BannersComponentProps) => {
  const items = [
    {
      name: banners?.list_2?.text_1 || "Ngôn Ngữ Anh",
      path: "/nganh-ngon-ngu-anh"
    },
    {
      name: banners?.list_2?.text_2 || "Ngôn Ngữ Trung Quốc",
      path: "/nganh-ngon-ngu-trung"
    },
    {
      name: banners?.list_2?.text_3 || "Công Nghệ Thông Tin",
      path: "/nganh-cong-nghe-thong-tin"
    },
    {
      name: banners?.list_2?.text_4 || "Tài Chính Ngân Hàng",
      path: "/nganh-tai-chinh-ngan-hang"
    },
    {
      name: banners?.list_2?.text_5 || "Quản Trị Kinh Doanh",
      path: "/nganh-quan-tri-kinh-doanh"
    },
    {
      name: banners?.list_2?.text_6 || "Dịch Vụ Du Lịch Và Lữ Hành",
      path: "/nganh-quan-tri-dich-vu-du-lich-lu-hanh"
    },
    { name: banners?.list_2?.text_7 || "Kế Toán", path: "/nganh-ke-toan" },
    { name: banners?.list_2?.text_8 || "Luật", path: "/nganh-luat" },
    {
      name: banners?.list_2?.text_9 || "Luật Kinh Tế",
      path: "/nganh-luat-kinh-te"
    },
    {
      name: banners?.list_2?.text_10 || "Thương Mại Điện Tử",
      path: "/nganh-thuong-mai-dien-tu"
    },
    {
      name: banners?.list_2?.text_11 || "Quản Trị Khách Sạn",
      path: "/nganh-quan-tri-khach-san"
    }
  ];
  const [pathsLoaded, setPathsLoaded] = useState(false);

  useEffect(() => {
    setPathsLoaded(true);
  }, []);
  return (
    <Link href="/hoc-thu" passHref>
      <Box
        bgGradient="linear(to-r, #19A4F0, #0D4CD6)"
        py={{ base: 10, md: 10 }}
        overflow="hidden"
      >
        <JumpingElementX delay={0.3}>
          <Box
            position="absolute"
            top="80px"
            left="155px"
            w="66px"
            h="64px"
            bgImage="url('/pic8.png')"
            bgSize="cover"
          />
        </JumpingElementX>

        <JumpingElementX delay={0.3}>
          <Box
            position="absolute"
            top="500px"
            right="155px"
            w="66px"
            h="64px"
            bgImage="url('/pic8.png')"
            bgSize="cover"
          />
        </JumpingElementX>

        <JumpingElement delay={0.3}>
          <Box
            position="absolute"
            top="350px"
            left="0"
            w="161px"
            h="343px"
            bgImage="url('/pic2.png')"
            bgSize="cover"
          />
        </JumpingElement>

        <JumpingElement delay={0.3}>
          <Box
            position="absolute"
            top="500px"
            left="150px"
            w="625px"
            h="126px"
            bgImage="url('/pic3.png')"
            bgSize="cover"
          />
        </JumpingElement>

        <Container
          maxW="7xl"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="space-between"
            gap={{ base: 6, md: 10 }}
            flexWrap={{ base: "wrap", md: "nowrap" }}
          >
            <MotionBox
              flex="1"
              color="White"
              py={{ base: 4, md: 8 }}
              borderRadius="md"
            >
              <ScrollMotionss delay={0.01}>
                <Heading as="h1" mb={4}>
                  <Box fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
                    {banners?.list_1?.text_1 || "Tuyển sinh"}
                  </Box>
                  <Box fontSize={{ base: "2xl", md: "45px" }} mb={4}>
                    {banners?.list_1?.text_2 || "Cử Nhân Trực Tuyến"}
                  </Box>
                  <Box
                    fontSize={{ base: "lg", md: "xl" }}
                    textTransform="uppercase"
                    fontWeight="bold"
                  >
                    {banners?.list_1?.text_3 || "Khóa 04/2024"}
                  </Box>
                </Heading>
              </ScrollMotionss>
              <ScrollMotionss delay={0.7}>
                <Text
                  textTransform="uppercase"
                  fontWeight="bold"
                  fontSize={{ base: "16px", md: "18px" }}
                >
                  {banners?.list_1?.text_5 || "▸ Hạn nhận hồ sơ 21/12/2024"}
                </Text>
              </ScrollMotionss>

              <JumpingElement delay={0.6}>
                <Box
                  position="absolute"
                  top="-40px"
                  right="5%"
                  w="24px"
                  h="108px"
                  bgImage="url('/pic7.svg')"
                  bgSize="cover"
                />
              </JumpingElement>

              <Button
                aria-label="Khai giảng vào ngày 05/01/2025"
                colorScheme="red"
                size={{ base: "sm", md: "lg" }}
                my="24px"
                px="24px"
                color="white"
                border="none"
                bgGradient="linear(to-r, orange.500, #fc5934)"
                fontWeight="bold"
                transform="skewX(-20deg)"
                _hover={{ bgGradient: "linear(to-r, orange.600, red.600)" }}
              >
                <span style={{ transform: "skewX(20deg)" }}>
                  {banners?.list_1?.text_6 || "KHAI GIẢNG NGÀY 05/01/2025"}
                </span>
              </Button>

              <Text fontSize={{ base: "16px", md: "18px" }} fontWeight="bold">
                {banners?.list_1?.text_7 ||
                  "Nộp hồ sơ trực tiếp hoặc gửi bưu điện"}
              </Text>
              <Text fontSize={{ base: "22px", md: "30px" }} fontWeight="bold">
                {banners?.list_1?.text_8 || "Trung tâm Đào tạo trực tuyến"}
              </Text>
              <Text
                fontSize={{ base: "16px", md: "18px" }}
                fontWeight="bold"
                mb="3px"
              >
                {banners?.list_1?.text_9 ||
                  "Văn phòng tư vấn tuyển sinh và nhận hồ sơ:"}
              </Text>
              <Text
                fontSize={{ base: "12px", md: "14px" }}
                fontWeight={"bold"}
                dangerouslySetInnerHTML={{
                  __html: clean(
                    banners?.list_1?.text_10 ||
                      "Miền Bắc: Số 116 Trần Vĩ, Phường Mai Dịch, Quận Cầu Giấy, Tp Hà Nội<br />Miền Nam: Số 469 Lê Hồng Phong, Phường 2, Quận 10, Thành phố Hồ Chí Minh"
                  )
                }}
              />
            </MotionBox>

            <Flex
              position="relative"
              w="50%"
              display={{ base: "none", lg: "flex", md: "none" }}
            >
              <MotionBox
                p={4}
                color="black"
                bg="white"
                borderRadius="md"
                boxShadow="lg"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                w={{ base: "90%", md: "76%" }}
                zIndex="2"
                position="relative"
                left={{ base: "0", md: "35px" }}
                h="425px"
                top="50px"
              >
                <List
                  spacing={2}
                  fontSize="16px"
                  textTransform="capitalize"
                  fontWeight="bold"
                >
                  {items.map((item, index) => (
                    <ListItem
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <FaBook color="#19A4F0" style={{ fontSize: "26px" }} />
                      </div>
                      {pathsLoaded ? (
                        <Link href={item.path} passHref>
                          {item.name}
                        </Link>
                      ) : (
                        <span>{item.name}</span>
                      )}
                    </ListItem>
                  ))}
                </List>
              </MotionBox>
              <Box
                h={{ base: "250px", md: "525px" }}
                w="100%"
                maxW="60%"
                bgImage={`url(${banners?.list_3?.image || "/b.jpg"})`}
                bgPosition="center"
                bgSize="cover"
                borderRadius="md"
                zIndex="1"
                sx={{
                  backgroundImageRendering: "optimizeQuality"
                }}
              />
              <JumpingElement delay={0.3}>
                <Box
                  position="absolute"
                  top="3%"
                  left="20px"
                  w="50px"
                  h="120px"
                  bgImage="url('/pic10.svg')"
                  bgSize="cover"
                />
              </JumpingElement>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Link>
  );
};

export default Banners;
