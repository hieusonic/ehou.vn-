import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
export const DiplomaSection = (item_7: any) => {
  return (
    <Box p={8} bg="#057cc6" py="20">
      <Heading
        fontSize="2xl"
        fontWeight="bold"
        textAlign="center"
        color="white"
        as="h2"
      >
        {item_7?.item_7?.title || "GIÁ TRỊ VĂN BẰNG TƯƠNG ĐƯƠNG CHÍNH QUY"}
      </Heading>

      <Flex mt={6} justify="center" align="start" wrap="wrap">
        <Box>
          <Image
            src={item_7?.item_7?.list.image || "/bangtotnghiep.webp"}
            alt="Dangky"
            width={500}
            height={400}
            loading="lazy"
          />
        </Box>
        <VStack
          align="start"
          maxW="lg"
          ml={{ base: 0, md: 6 }}
          mt={{ base: 6, md: 0 }}
          color="white"
        >
          <Text>
            {item_7?.item_7?.list?.list_list?.label_1 ||
              "Ngày 30/12/2019, Bộ Giáo dục và Đào tạo đã ban hành Thông tư 27/2019/TT-BGDĐT quy định nội dung chính ghi trên văn bằng và phụ lục văn bằng giáo dục đại học."}
          </Text>
          <Text>
            {item_7?.item_7?.list?.list_list?.label_2 ||
              "Theo Thông tư 27/2019/TT-BGDĐT, trên văn bằng sẽ vẫn ghi các nội dung cũ nhưng không ghi thông tin về hình thức đào tạo."}
          </Text>
          <Container
            bg="blue.600"
            color="white"
            textAlign="center"
            mt={4}
            py={2}
            borderRadius="md"
          >
            <Heading fontWeight="bold" fontSize="lg" as="h3">
              {" "}
              {item_7?.item_7?.list?.list_list?.label_3 ||
                "BẰNG CẤP TƯƠNG ĐƯƠNG VỚI "}
            </Heading>
            <Heading fontSize="sm" color="yellow" fontStyle={"italic"} as="h3">
              {" "}
              {item_7?.item_7?.list?.list_list?.label_4 ||
                "BẰNG ĐÀO TẠO CHÍNH QUY"}
            </Heading>
          </Container>
          <Container
            bg="blue.600"
            color="white"
            textAlign="center"
            mt={4}
            py={2}
            borderRadius="md"
          >
            <Heading fontWeight="bold" fontSize="lg" as="h3">
              {" "}
              {item_7?.item_7?.list?.list_list?.label_5 ||
                "MẪU VĂN BẰNG MỚI TRÊN VĂN BẰNG"}
            </Heading>
            <Heading fontSize="sm" fontStyle={"italic"} color="yellow" as="h3">
              {" "}
              {item_7?.item_7?.list?.list_list?.label_6 ||
                "KHÔNG GHI HÌNH THỨC ĐÀO TẠO"}
            </Heading>
          </Container>
        </VStack>
      </Flex>
    </Box>
  );
};

export default DiplomaSection;
