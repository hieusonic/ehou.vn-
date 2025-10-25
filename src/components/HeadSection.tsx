import { Divider, Heading, Text, VStack } from "@chakra-ui/react";
import { ScrollMotionRight } from "./ScrollMotion";

export const HeadSection = ({
  subtitle,
  title,
  desc
}: {
  subtitle: string;
  title: string;
  desc: string;
}) => {
  return (
    <ScrollMotionRight>
      <VStack justify={"center"}>
        <Text
          color={"black"}
          fontSize={{ base: "10px", lg: "34px" }}
          letterSpacing={"2px"}
          fontWeight={600}
          textTransform={"uppercase"}
        >
          {subtitle}
        </Text>
        <Heading
          fontSize={{ base: "28px", lg: "34px" }}
          textAlign={"center"}
          textTransform={"uppercase"}
          color={"black"}
          lineHeight={-1}
          fontWeight={400}
          fontStyle={"normal"}
          as={"h2"}
        >
          {title}
        </Heading>
        <Divider
          width={"200px"}
          height={"4px"}
          borderBottomWidth={"4px"}
          borderBottomColor={"black"}
          mb={"40px"}
          mt={{ lg: "15px", base: "0" }}
        />
        <Text color={"gray.500"} fontWeight={"thin"}>
          {desc}
        </Text>
      </VStack>
    </ScrollMotionRight>
  );
};

export const HeadSectionLight = ({
  title,
  desc
}: {
  subtitle: string;
  title: string;
  desc: string;
}) => {
  return (
    <VStack justify={"center"} py={10}>
      <Heading
        as={"h1"}
        size={{ base: "sm", md: "lg" }}
        textAlign={"center"}
        textTransform={"uppercase"}
        color={"whiteAlpha.900"}
      >
        {title}
      </Heading>
      <Divider
        width={"200px"}
        height={"4px"}
        borderBottomWidth={"4px"}
        borderBottomColor={"#F9AA28"}
        mt={"15px"}
      />
      <Text color={"whiteAlpha.900"} fontWeight={"sm"}>
        {desc}
      </Text>
    </VStack>
  );
};
