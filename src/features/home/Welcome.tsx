import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const CardTeacher = dynamic(() =>
  import("@/components/CardTeacherWc").then((mod) => mod.CardTeacher)
);

interface Ilist {
  title: string;
  desc: string;
}
interface IAbout {
  about: {
    heading: {
      title: string;
      desc: string;
      image: string;
    };
    list: {
      list_1: Ilist;
      list_2: Ilist;
      list_3: Ilist;
    };
  };
}

export const Wellcome = ({ about }: IAbout) => {
  const teachers = [
    {
      title: about?.list?.list_1?.title || "  Đăng kí học",
      icon: "/s-check.svg",
      path: "/hoc-thu",
      decs: about?.list?.list_1?.desc || "Hỗ trợ và nhận tư vấn miễn phí 24/7"
    },
    {
      title: about?.list?.list_2?.title || "Lịch khai giảng  ",
      icon: "/s-calendar.svg",
      path: "/lich-khai-giang",
      decs:
        about?.list?.list_2?.desc ||
        "Cập nhật nhanh thông tin khai giảng mới nhất  "
    }
  ];

  return (
    <Box bg={"white"} mb={"18px"} py={24}>
      <Container maxW={"6xl"}>
        <SimpleGrid
          spacing={"8"}
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        >
          {teachers?.map((teacher, index) => (
            <CardTeacher
              key={index}
              title={teacher.title}
              icon={teacher.icon}
              path={teacher.path}
              decs={teacher.decs}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
