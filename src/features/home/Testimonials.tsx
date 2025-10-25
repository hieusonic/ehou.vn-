import { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
  Heading,
  Stack,
  Container,
  Flex
} from "@chakra-ui/react";
import Image from "next/image";
import { clean } from "@/lib/sanitizeHtml";

export const Testimonials = (item_5: any) => {
  const testimonialsData = [
    {
      name: item_5?.item_5?.list_1.text_1 || "Lê Minh Tú",
      title:
        item_5?.item_5?.list_1.text_2 ||
        "Giám đốc nhà máy tại Thái Lan, Cựu Sinh viên ngành Luật",
      image: item_5?.item_5?.list_1.image || "/Anh-profile.webp",
      feedback:
        item_5?.item_5?.list_1.text_4 ||
        "Chương trình đại học từ xa thực tế, hữu ích, thấy tiếc vì đến bây giờ mới đăng ký học đại học từ xa tại trường đại học mở hà nội, rất thực tế, hữu ích và linh động về thời gian và việc tham gia các hoạt động hoạt tập. Điều đó càng khiến mình đam mê tìm hiểu và thành thạo hữu về kỹ năng sử dụng mạng internet. Điều này hỗ trợ rất nhiều trong sự nghiệp của mình. Cảm ơn EHOU"
    },
    {
      name: item_5?.item_5?.list_2.text_1 || "Nguyễn Ngọc Anh",
      title:
        item_5?.item_5?.list_2.text_2 ||
        "Chuyên viên Phân tích và Nghiên cứu cấp cao",
      image: item_5?.item_5?.list_2.image || "/minh.jpg",
      feedback:
        item_5?.item_5?.list_2.text_4 ||
        "Chương trình đại học từ xa thực tế, hữu ích, thấy tiếc vì đến bây giờ mới đăng ký học đại học từ xa tại trường đại học mở hà nội, rất thực tế, hữu ích và linh động về thời gian và việc tham gia các hoạt động hoạt tập. Điều đó càng khiến mình đam mê tìm hiểu và thành thạo hữu về kỹ năng sử dụng mạng internet. Điều này hỗ trợ rất nhiều trong sự nghiệp của mình. Cảm ơn EHOU"
    },
    {
      name: item_5?.item_5?.list_3.text_1 || "Phạm Văn Phong",
      title: item_5?.item_5?.list_3.text_2 || "Nhân viên văn phòng",
      image: item_5?.item_5?.list_3.image || "/ha.jpg",
      feedback:
        item_5?.item_5?.list_3.text_4 ||
        "Chương trình đại học từ xa thực tế, hữu ích, thấy tiếc vì đến bây giờ mới đăng ký học đại học từ xa tại trường đại học mở hà nội, rất thực tế, hữu ích và linh động về thời gian và việc tham gia các hoạt động hoạt tập. Điều đó càng khiến mình đam mê tìm hiểu và thành thạo hữu về kỹ năng sử dụng mạng internet. Điều này hỗ trợ rất nhiều trong sự nghiệp của mình. Cảm ơn EHOU"
    }
  ];

  const [currentImage, setCurrentImage] = useState(testimonialsData[0].image);

  return (
    <Container
      maxW={{ base: "full", md: "7xl" }}
      py={{ base: 6, md: 20 }}
      px={{ base: 4, md: 8 }}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        align="center"
        spacing={{ base: 8, md: 14 }}
      >
        <Box
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            position="absolute"
            width={{ base: "100px", md: "150px" }}
            height={{ base: "100px", md: "150px" }}
            bgGradient="linear(to-b, orange.400, red.400)"
            borderRadius="full"
            zIndex={-1}
            top={{ base: "-20px", md: "-40px" }}
            right={{ base: "-20px", md: "-40px" }}
          />
          <Box borderRadius="12px" boxSize={{ base: "250px", md: "450px" }}>
            <Image
              src={currentImage}
              alt="Testimonial"
              width={450}
              height={250}
              style={{ borderRadius: "12px", height: "100%" }}
            />
          </Box>
        </Box>

        <Box flex="1">
          <Heading
            fontSize={{ base: "md", md: "62px" }}
            mb={4}
            px={"16px"}
            color={"#028dbf"}
          >
            CẢM NHẬN{" "}
          </Heading>
          <Tabs
            variant="unstyled"
            onChange={(index) => setCurrentImage(testimonialsData[index].image)}
          >
            <TabPanels>
              {testimonialsData.map((testimonial, index) => (
                <TabPanel key={index}>
                  <Text
                    fontSize={{ base: "48px", md: "72px" }}
                    lineHeight="0"
                    py="10px"
                  >
                    “
                  </Text>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    mb={4}
                    dangerouslySetInnerHTML={{
                      __html: clean(testimonial.feedback)
                    }}
                  />
                </TabPanel>
              ))}
            </TabPanels>

            <TabList
              mt={8}
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
              justifyContent="space-between"
              borderTop="1px solid"
              borderColor="gray.300"
              pt={4}
            >
              {testimonialsData.map((testimonial, index) => (
                <Tab
                  key={index}
                  _selected={{
                    fontWeight: "bold",
                    borderBottom: { base: "2px solid", md: "4px solid" },
                    borderColor: "orange.400"
                  }}
                  py={2}
                  sx={{
                    "&[aria-selected=true]": {
                      borderBottomColor: "orange.400"
                    }
                  }}
                >
                  <Flex
                    direction="column"
                    align="center"
                    fontSize={{ base: "12px", md: "14px" }}
                  >
                    <Text>{testimonial.name}</Text>
                    <Text fontStyle="italic" w={{ base: "180px", md: "220px" }}>
                      {testimonial.title}
                    </Text>
                  </Flex>
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </Box>
      </Stack>
    </Container>
  );
};

export default Testimonials;
