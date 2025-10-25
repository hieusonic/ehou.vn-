import { Box, Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import { Accs } from "./Branch"; // Make sure to import Accs component

export const InfoContact = (thong_tin: any) => {
  const accs = [
    {
      title:
        thong_tin?.thong_tin?.don_vi?.ten_don_vi ||
        "Đơn vị phối hợp đào tạo từ xa của Trường Đại học Mở Hà Nội",
      detail: [
        {
          title:
            thong_tin?.thong_tin?.don_vi?.dat_taimb?.tieu_de ||
            "Đặt tại miền Bắc: Trường Trung cấp Ngoại Thương.",
          list: [
            thong_tin?.thong_tin?.don_vi?.dat_taimb?.dia_chi_1 ||
              "Số 40, Trần Cung, Phường Cổ Nhuế 1, Quận Bắc Từ Liêm, TP. Hà Nội"
          ],
          title1:
            thong_tin?.thong_tin?.don_vi?.dat_taimn?.tieu_de ||
            "Đặt tại miền Nam: Trường Trung cấp Vạn Tường.",
          list1: [
            thong_tin?.thong_tin?.don_vi?.dat_taimn?.dia_chi_1 ||
              "Số 469 Lê Hồng Phong, Phường 2, Quận 10, Thành phố Hồ Chí Minh. "
          ]
        }
      ]
    },
    {
      title:
        thong_tin?.thong_tin?.van_phong?.ten_van_phong ||
        "Văn phòng tư vấn tuyển sinh và nhận hồ sơ",
      detail: [
        {
          title: "",
          list: [
            thong_tin?.thong_tin?.van_phong?.mien_bac ||
              "Miền Bắc: Số 116 Phố Trần Vỹ, Phường Mai Dịch, Quận Cầu Giấy, Hà Nội."
          ],
          title1: "",
          list1: []
        }
      ]
    }
  ];

  return (
    <Box>
      <Container maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"32px"} mb={"40px"}>
          <GridItem>
            <Accs accs={accs} />
          </GridItem>
          <GridItem>
            <Image
              src={thong_tin?.thong_tin?.image || "/gvlh.png"}
              alt="Dangky"
              width={500}
              height={400}
              loading="lazy"
            />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
