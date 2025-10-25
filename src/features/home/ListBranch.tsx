import React from "react";
import {
  Box,
  Grid,
  Icon,
  Text,
  VStack,
  Container,
  Heading
} from "@chakra-ui/react";
import {
  FaChalkboardTeacher,
  FaHandshake,
  FaLaptop,
  FaBookOpen,
  FaCogs,
  FaCertificate
} from "react-icons/fa";

export const ReasonsGrid = (ly_do: any) => {
  const reasons = [
    {
      icon: FaChalkboardTeacher,
      color: "orange.400",
      title: ly_do?.ly_do?.list?.list_1?.text_1 || "Kinh nghiệm giảng dạy"
    },
    {
      icon: FaHandshake,
      color: "green.400",
      title: ly_do?.ly_do?.list?.list_1?.text_2 || "Đối tác chất lượng"
    },
    {
      icon: FaLaptop,
      color: "blue.400",
      title: ly_do?.ly_do?.list?.list_1?.text_3 || "Công nghệ hiện đại"
    },
    {
      icon: FaBookOpen,
      color: "purple.400",
      title: ly_do?.ly_do?.list?.list_2?.text_1 || "Học liệu phong phú"
    },
    {
      icon: FaCogs,
      color: "blue.400",
      title: ly_do?.ly_do?.list?.list_2?.text_2 || "Tiện ích dịch vụ"
    },
    {
      icon: FaCertificate,
      color: "purple.400",
      title: ly_do?.ly_do?.list?.list_2?.text_3 || "Bằng cấp uy tín"
    }
  ];

  return (
    <Box textAlign="center" py={8} px={4} background={"#f7f7f7"}>
      <Container maxW={"7xl"}>
        <Heading
          fontSize="2xl"
          fontWeight="bold"
          mb={6}
          color={"#028dbf"}
          as={"h2"}
        >
          {" "}
          {ly_do?.ly_do?.title_1 ||
            "LÝ DO CHỌN HỆ TỪ XA TRƯỜNG ĐẠI HỌC MỞ HÀ NỘI"}
        </Heading>
        <Grid templateColumns={{ md: "repeat(3, 1fr)", base: " 1fr" }} gap={6}>
          {reasons.map((reason, index) => (
            <Box
              key={index}
              p={6}
              bg="white"
              boxShadow="md"
              borderRadius="lg"
              _hover={{ boxShadow: "lg" }}
            >
              <VStack spacing={4}>
                <Icon as={reason.icon} boxSize={10} color={reason.color} />
                <Text fontWeight="bold" color="#028dbf">
                  {reason.title}
                </Text>
              </VStack>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ReasonsGrid;
