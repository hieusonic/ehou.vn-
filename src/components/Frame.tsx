"use client";

import { Box, HStack, Heading, VStack } from "@chakra-ui/react";
import { BtnDks } from "./BtnTheme";
import { ScrollMotionRight } from "./ScrollMotion";

export const Frame = (lists: any) => {
  return (
    <Box boxShadow={"2xl"} bg={"white"} p={6} rounded={"md"}>
      <ScrollMotionRight>
        <VStack
          rounded={"sm"}
          border={"1px solid black"}
          padding={"16px"}
          alignItems={"center"}
          spacing={4}
          p="6"
        >
          <Heading
            as={"h1"}
            size={"lg"}
            textAlign={"center"}
            w={"100%"}
            color={"#028dbf"}
          >
            {lists?.lists?.title1 || "Cập nhật lịch khai giảng dự kiến"}
          </Heading>
          <Box textAlign={"justify"} whiteSpace={"pre-line"}>
            {lists?.lists?.label || "Dữ liệu đang được cập nhật"}
          </Box>
          <HStack justify={"center"} w={"100%"}>
            <BtnDks />
          </HStack>
        </VStack>
      </ScrollMotionRight>
    </Box>
  );
};
