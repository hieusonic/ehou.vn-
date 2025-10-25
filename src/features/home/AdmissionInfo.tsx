import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Heading,
  Stack,
  List,
  ListItem,
  ListIcon,
  Container,
  Flex
} from "@chakra-ui/react";
import { TiInputCheckedOutline } from "react-icons/ti";
import Image from "next/image";

export const AdmissionInfo = (item_6: any) => {
  const admissionData = [
    {
      title: item_6?.item_6?.list?.list_1?.title || "1. ĐỐI TƯỢNG TUYỂN SINH",
      items: [
        item_6?.item_6?.list?.list_1?.label_1 ||
          "Đối tượng có bằng THPT trở lên",
        item_6?.item_6?.list?.list_1?.label_2 ||
          "Cán bộ, công chức, người đang làm việc tại các cơ quan, tổ chức, doanh nghiệp nhà nước, tư nhân, ...",
        item_6?.item_6?.list?.list_1?.label_3 ||
          "Những người đã có bằng CĐ/ĐH muốn học thêm VB thứ 2."
      ]
    },
    {
      title:
        item_6?.item_6?.list?.list_2?.title ||
        "2. THỜI GIAN VÀ THỦ TỤC ĐĂNG KÝ",
      items: [
        item_6?.item_6?.list?.list_2?.label_1 ||
          "Thời gian học: Căn cứ vào hồ sơ, văn bằng của sinh viên nộp trong hồ sơ xét tuyển",
        item_6?.item_6?.list?.list_2?.label_2 ||
          "Cách đăng ký: Học viên vui lòng liên hệ theo hotline hoặc đăng ký theo form để được hỗ trợ tư vấn chi tiết"
      ]
    }
  ];

  return (
    <Box bg="#f7f7f7" py={8}>
      <Container maxW="7xl">
        <Box textAlign="center" mb={6}>
          <Heading fontSize="2xl" color="#028dbf">
            {item_6?.item_6?.title || "THÔNG TIN TUYỂN SINH 2024"}
          </Heading>
          <Text fontSize="md" color="#028dbf">
            {item_6?.item_6?.label ||
              "Chương trình đào tạo từ xa E-Learning Trường đại học Mở Hà Nội, liên tục tuyển sinh trong năm."}
          </Text>
        </Box>

        <Grid
          templateColumns={{ base: "1fr", md: "2fr 2fr" }}
          gap={8}
          alignItems="center"
        >
          <GridItem>
            <Image
              src={item_6?.item_6?.image || "/https.png"}
              alt="Picture"
              width={1152}
              height={769}
              style={{ width: "100%", height: "100%" }}
            />
          </GridItem>

          <GridItem>
            <Stack spacing={6}>
              {admissionData.map((section, index) => (
                <Box key={index} p={6} borderRadius="md">
                  <Heading fontSize="lg" color="#028dbf" mb={2}>
                    {section.title}
                  </Heading>
                  <List spacing={3} color="#028dbf">
                    {section.items.map((item, idx) => (
                      <ListItem key={idx}>
                        <Flex>
                          <ListIcon
                            as={TiInputCheckedOutline}
                            color="blue.400"
                            fontSize="24px"
                          />
                          <Text fontWeight={600}>{item}</Text>
                        </Flex>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdmissionInfo;
