import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Image
} from "@chakra-ui/react";
export const AboutUs = (item: any) => {
  const paragraphs = [
    item?.item?.label_1 ||
      `
  <p><strong><h2 style="font-size:16px"> Ngày thành lập</h2></strong><br>
    - Trung tâm Đào tạo Trực tuyến được thành lập ngày 28 tháng 7 năm 2009 (theo Quyết định số 306/QĐ-ĐHM-TC của Viện trưởng Viện Đại học Mở Hà Nội nay đổi tên thành Trường Đại học Mở Hà Nội)
  </p>

  <p><strong>Chức năng – Nhiệm vụ</strong><br>
    - Tổ chức triển khai đào tạo từ xa theo phương thức trực tuyến (E-learning) theo quy định.<br>
    - Tư vấn, đề xuất các giải pháp cho nhà trường về tổ chức triển khai đào tạo trực tuyến.<br>
    - Hợp tác, liên kết với các đơn vị, tổ chức, doanh nghiệp, cơ quan, cá nhân trong và ngoài nước trong nghiên cứu, ứng dụng và triển khai các chương trình đào tạo E-learning.<br>
    - Thực hiện các nhiệm vụ đào tạo, nghiên cứu khoa học khác được nhà trường giao.
  </p>
  
  <p><strong>Mục tiêu đào tạo – Nhiệm vụ</strong><br>
    - Mở cơ hội học tập cho mọi người, mọi lúc, mọi nơi với phương thức học tập trực tuyến (eLearning).<br>
    - Tổ chức các khóa đào tạo đại học từ xa theo phương thức trực tuyến đảm bảo chuẩn đầu ra của chương trình đào tạo hệ chính quy.<br>
    - Nâng cao năng lực tự học, tự nghiên cứu và sử dụng công nghệ thông tin của người học.
  </p>
`
  ];
  const text = [
    item?.item?.label_2 ||
      `
     <p><strong>Ưu điểm của đào tạo từ xa</strong><br>
    - Đây là hình thức đào tạo hiện đại nhất, trên thế giới ở các nước càng có nền kinh tế phát triển thì hình thức này càng được áp dụng rộng rãi.<br>
    - Người học được chủ động về kế hoạch học tập, chủ động sắp xếp thời gian học tập, nghiên cứu tài liệu.<br>
    - Linh hoạt, phù hợp với mọi đối tượng, mọi lứa tuổi, mọi trình độ của người học.<br>
    - Tiết kiệm chi phí, thời gian đi lại, thời gian học tập trung, không ảnh hưởng đến công việc đảm nhiệm hàng ngày của từng cá nhân.<br>
    - Tiết kiệm tài chính: chi phí đi lại, sinh hoạt.
  </p>
<br>
  <p><strong>Văn bằng tốt nghiệp đại học hệ từ xa</strong><br>
    - Khi được công nhận tốt nghiệp, sinh viên được nhận bằng Cử nhân /Tốt nghiệp đại học của Trường Đại học Mở Hà Nội.<br>
    - Bằng Đại học hình thức đào tạo từ xa thuộc hệ thống văn bằng quốc gia đã được quy định trong luật Giáo dục Đại học và có giá trị tương đương hình thức đào tạo chính quy.<br>
    - Không ghi hình thức đào tạo trên văn bằng tốt nghiệp được quy định tại thông tư số 27/2019/TT-BGDĐT ngày 30/12/2019 của Bộ Giáo dục và Đào tạo quy định nội dung chính ghi trên văn bằng và phụ lục văn bằng giáo dục đại học.<br>
    - Bằng Đại học hình thức đào tạo từ xa của Trường Đại học Mở Hà Nội được phép học lên bậc học cao hơn (Thạc sĩ).<br>
    - Bằng đại học hình thức đào tạo từ xa được công nhận trong việc tuyển dụng, xét nâng ngạch bậc hay bổ nhiệm cán bộ, công chức, viên chức (theo Thông tư số 05/2012/TT-BNV ngày 24/10/2012 của Bộ Nội Vụ).
  </p>`
  ];

  return (
    <Container maxW="7xl" py="20">
      <Heading as="h1" size="lg" mb={6} textAlign="center">
        {item?.item?.title ||
          "GIỚI THIỆU VỀ TRUNG TÂM ĐÀO TẠO TRỰC TUYẾN TRƯỜNG ĐẠI HỌC MỞ HÀ NỘI "}
      </Heading>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} py="24px">
        <GridItem>
          <Box>
            <Image
              src={item?.item?.image_1 || "tmdtt.png"}
              alt="Image description"
              width={600}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </GridItem>
        <GridItem>
          {paragraphs.map((text, index) => (
            <Text
              key={index}
              mb={4}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </GridItem>
      </Grid>
      {text.map((text, index) => (
        <Text key={index} mb={4} dangerouslySetInnerHTML={{ __html: text }} />
      ))}
    </Container>
  );
};
