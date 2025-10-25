import { Box, GridItem, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const CardTeacher = ({
  title,
  icon,
  path,
  decs
}: {
  title: string;
  icon: string;
  path: string;
  decs: string;
}) => {
  return (
    <GridItem
      px="30px"
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
      justifyContent={"flex-start"}
      prefetch={false}
      as={Link}
      href={path}
      _hover={{
        ".text": {
          color: "#000000"
        }
      }}
    >
      <Image
        alt={title}
        src={icon}
        width={64}
        height={64}
        style={{ width: "45px", height: "auto", marginBottom: "26px" }}
      />

      <Box className="text" color="#42474c" textAlign="center">
        <Heading
          fontSize={{ base: "2xl", lg: "22px" }}
          fontWeight={"600"}
          pb={"10px"}
          color={"#028dbf"}
          as="h3"
        >
          {title}
        </Heading>
        <Text fontSize={"20px"}>{decs}</Text>
      </Box>
    </GridItem>
  );
};
