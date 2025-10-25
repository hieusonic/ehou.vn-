import {
  Button,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack,
  Box
} from "@chakra-ui/react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { useModal } from "@/components/ModalContext";
import { clean } from "@/lib/sanitizeHtml";
import { useEffect, useState } from "react";

export const ContactInfo = () => {
  const { isOpen, onOpen } = useModal();
  const [home_content, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=lien-he`, {
          next: { revalidate: 3 }
        });
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data = await res.json();
        setHomeContent(data?.contentPage[0]);
      } catch (error) {
        console.error(error);
      }
    };
    getHomeContent();
  }, []);

  const contactInfo = [
    {
      title: home_content?.acf?.list?.list_1?.title || "Điện thoại",
      description:
        home_content?.acf?.list?.list_1?.desc ||
        "Vui lòng liên hệ với bộ phận Tư vấn để được giải đáp mọi thắc mắc.",
      contact: home_content?.acf?.list?.list_1?.contact || "0919.240.116",
      contactLink: null,
      contactColor: "#028dbf"
    },
    {
      title: home_content?.acf?.list?.list_2?.title || "Email",
      description:
        home_content?.acf?.list?.list_2?.desc ||
        "Để nhận được thông tin chi tiết về Chương trình đào tạo Cử nhân trực tuyến, vui lòng liên hệ qua email.",
      contact: home_content?.acf?.list?.list_2?.contact || "ehou@gvcn.vn",
      contactLink: home_content?.acf?.list?.list_2?.contact_link || "",
      contactColor: "#028dbf"
    },
    {
      title: home_content?.acf?.list?.list_3?.title || "Địa điểm",
      description:
        home_content?.acf?.list?.list_3?.desc ||
        `<strong>Trung tâm đào tạo trực tuyến </strong><br>
                    Văn phòng tư vấn tuyển sinh và nhận hồ sơ:<br>
                    Hà Nội: Số 116 Trần Vĩ, Phường Mai Dịch, Quận Cầu Giấy, Thành Phố Hà Nội<br>
                    Hồ Chí Minh: Số 91 Ký Con, phường Nguyễn Thái Bình, Quận 1, TP Hồ Chí Minh`,
      contact:
        home_content?.acf?.list?.list_3?.contact || "Xem trên Google Maps",
      contactLink:
        home_content?.acf?.list?.list_3?.contact_link ||
        "https://www.google.com/maps/search/?api=1&query=Số 116 Trần Vĩ, Phường Mai Dịch, Quận Cầu Giấy, Thành Phố Hà Nội",
      contactColor: "#028dbf"
    }
  ];

  return (
    <>
      <Breadcrumbs
        title="Liên hệ"
        showNotification={false}
        image={home_content?.acf?.image || "/sky.png"}
      />

      <Container maxW="7xl" py="24">
        <Text
          fontSize={{ lg: "28px", md: "16px", base: "16px" }}
          mb={4}
          textAlign={"center"}
          fontWeight="bold"
          py="4"
          color={"#028dbf"}
        >
          {home_content?.acf?.title ||
            "TRUNG TÂM ĐÀO TẠO TRỰC TUYẾN TRƯỜNG ĐẠI HỌC MỞ"}
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mb={6}>
          {contactInfo.map((info, index) => (
            <VStack
              key={index}
              p={5}
              borderWidth={1}
              borderRadius="md"
              textAlign="center"
              spacing={3}
            >
              <Heading
                as={"h2"}
                fontWeight="bold"
                fontSize="lg"
                color={"#028dbf"}
              >
                {info.title}
              </Heading>
              <Text
                fontSize="sm"
                dangerouslySetInnerHTML={{
                  __html: clean(info.description)
                }}
              />
              {info.contactLink ? (
                <Link
                  href={info.contactLink}
                  color={info.contactColor}
                  fontWeight="bold"
                  isExternal
                >
                  {info.contact}
                </Link>
              ) : (
                <Text color={info.contactColor} fontWeight="bold">
                  {info.contact}
                </Text>
              )}
            </VStack>
          ))}
        </SimpleGrid>
        <Box textAlign="center" mt={10}>
          <Button
            colorScheme="orange"
            bg="#028dbf"
            color="white"
            size="lg"
            px={8}
            py={6}
            onClick={() => !isOpen && onOpen && onOpen()}
          >
            <Heading as="h2" fontSize="16px">
              {" "}
              ĐĂNG KÝ NHẬN TƯ VẤN{" "}
            </Heading>
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default ContactInfo;
