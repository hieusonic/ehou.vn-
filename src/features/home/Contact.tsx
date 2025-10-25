import {
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  VStack,
  Heading
} from "@chakra-ui/react";
import Image from "next/image";
import { FormWrapper } from "@/components/FormWrapper";

export const Contact = (item_8: any) => {
  return (
    <Box
      bg="linear-gradient(180deg, rgba(255, 255, 255, 1), #057cc6 100%)"
      py="20"
    >
      <Container maxW="5xl" p={4}>
        <Heading
          fontSize="40px"
          fontWeight="bold"
          color="#028dbf"
          textAlign="center"
          mb={4}
          py={"4"}
          as="h2"
        >
          {item_8?.item_8?.title || "LỊCH KHAI GIẢNG DỰ KIẾN"}
        </Heading>

        <Grid templateColumns={{ base: "1fr", md: "2fr 3fr" }} gap={12}>
          <GridItem>
            <VStack spacing={8} mt={{ lg: "74px" }}>
              <Box
                w="full"
                p={4}
                bg="white"
                borderRadius="md"
                boxShadow="md"
                textAlign="center"
              >
                <Heading
                  fontSize="lg"
                  fontWeight="bold"
                  color="#028dbf"
                  as="h3"
                >
                  {item_8?.item_8?.list?.list_1?.label_1 || " HÀ NỘI"}
                </Heading>
                <Text fontSize="md" fontWeight={"bold"}>
                  {" "}
                  {item_8?.item_8?.list?.list_1?.label_2 ||
                    " Nhận hồ sơ : 10/11/2024 "}
                </Text>
                <Text fontSize="md" fontWeight={"bold"}>
                  {item_8?.item_8?.list?.list_1?.label_3 ||
                    "Khai giảng : 24/11/2024"}
                </Text>
              </Box>
              <Box
                w="full"
                p={4}
                bg="white"
                borderRadius="md"
                boxShadow="md"
                textAlign="center"
              >
                <Heading
                  fontSize="lg"
                  fontWeight="bold"
                  color="#028dbf"
                  as="h3"
                >
                  {item_8?.item_8?.list?.list_1?.label_4 || "TP.HCM"}
                </Heading>
                <Text fontSize="md" fontWeight={"bold"}>
                  {item_8?.item_8?.list?.list_1?.label_5 ||
                    "Nhận hồ sơ : 03/12/2024"}
                </Text>
                <Text fontSize="md" fontWeight={"bold"}>
                  {item_8?.item_8?.list?.list_1?.label_6 ||
                    "Khai giảng : 22/12/2024"}
                </Text>
              </Box>

              <Box position="relative" mt={4}>
                <Image
                  src={item_8?.item_8?.image || "/a.png"}
                  alt="Tuyển Sinh"
                  width="300"
                  height="200"
                />
              </Box>
            </VStack>
          </GridItem>

          <GridItem>
            <Box
              pt={6}
              px={2}
              bg="white"
              borderRadius="md"
              boxShadow="md"
              maxW="md"
              w="full"
            >
              <FormWrapper type="form-main" title="" />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
