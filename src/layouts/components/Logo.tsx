import { Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
      prefetch={false}
    >
      <Image
        priority
        width={51}
        height={51}
        style={{ borderRadius: "50%" }}
        src={`/ehou.jpg`}
        alt="logo Đại học Thái nguyên"
      />
      <VStack
        color={"#028dbf"}
        align={"start"}
        display={{ base: "none", lg: "flex" }}
      >
        <Text size={{ base: "sm", lg: "md" }} fontWeight={"600"}>
          Trường Đại Học Mở Hà Nội
        </Text>
        <Text fontSize={{ base: ".8rem" }} fontWeight={"600"}>
          CỔNG THÔNG TIN TUYỂN SINH
        </Text>
      </VStack>
    </Link>
  );
};
