import {
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack
} from "@chakra-ui/react";
import {
  FaBriefcase,
  FaLanguage,
  FaLaptop,
  FaMoneyBillWave,
  FaUniversity,
  FaUserTie
} from "react-icons/fa";

export const ProgramValues = () => {
  const programValues = [
    {
      icon: FaBriefcase,
      title: "Gắn với nghề nghiệp và việc làm",
      description:
        "Trong xã hội hiện đại, tiếng Anh ngày càng quan trọng. Sử dụng thành thạo tiếng Anh, cơ hội việc làm của bạn càng rộng mở với mức thu nhập hấp dẫn."
    },

    {
      icon: FaLaptop,
      title: "Phương thức học linh hoạt",
      description:
        "Người học có thể tiếp cận video bài giảng, tài liệu học tập, làm bài tập ở bất cứ đâu, bất cứ lúc nào với máy tính, laptop, tablet, hoặc smartphone có internet."
    },
    {
      icon: FaUserTie,
      title: "Tính ứng dụng thực tế cao",
      description:
        "Chương trình đào tạo được xây dựng đảm bảo kiến thức thực tiễn, có thể áp dụng ngay vào công việc hàng ngày. Các môn học ngắn gọn, dễ hiểu, mang tính tương tác."
    },
    {
      icon: FaLanguage,
      title: "Hỗ trợ từ giảng viên và đội ngũ kỹ thuật",
      description:
        "Giảng viên theo dõi quá trình học tập của từng học viên. Học viên trao đổi qua forum, email. Vướng mắc kỹ thuật được hỗ trợ qua tổng đài tư vấn."
    },
    {
      icon: FaUniversity,
      title: "Bằng cấp có giá trị quốc gia",
      description:
        "Bằng cử nhân Ngôn ngữ Anh học từ xa theo phương thức trực tuyến nằm trong hệ thống văn bằng quốc gia, được Bộ GD&ĐT công nhận, có giá trị tương đương bằng chính quy."
    },
    {
      icon: FaMoneyBillWave,
      title: "Học phí tiết kiệm",
      description:
        "Học viên tiết kiệm thời gian đi lại, chi phí cơ sở vật chất và nhiều chi phí khác, mà vẫn đảm bảo được công việc và sinh hoạt hàng ngày."
    }
  ];
  return (
    <Container maxW="6xl" pt="24">
      <Heading
        as={"h2"}
        fontSize="2xl"
        fontWeight="bold"
        textAlign="center"
        mb={6}
      >
        GIÁ TRỊ BẠN NHẬN ĐƯỢC TỪ CHƯƠNG TRÌNH
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 6 }}>
        {programValues.map((value, index) => (
          <VStack
            key={index}
            p={5}
            bg={
              index % 2 === 0
                ? "blue.800"
                : index === 1
                  ? "blue.400"
                  : index === 3
                    ? "green.500"
                    : "red.400"
            }
            color="white"
            borderRadius="md"
            spacing={3}
          >
            <Icon as={value.icon} boxSize={8} />
            <Text fontWeight="bold" fontSize="lg" textAlign="center">
              {value.title}
            </Text>
            <Text fontSize="sm" textAlign="center">
              {value.description}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ProgramValues;
