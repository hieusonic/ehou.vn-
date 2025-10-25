"use client";

import { clean } from "@/lib/sanitizeHtml";
import { Box, Heading, Stack, Text, Tag } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const CardBlogtb = ({
  title,
  tag,
  image,
  path,
  bgTag,
  date
}: {
  title: string;
  desc: string;
  tag: string;
  image?: string;
  path?: string;
  bgTag?: string;
  date?: string;
}) => {
  return (
    <Box
      as={Link}
      href={path ?? "#"}
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      justifyContent="space-between"
    >
      <Box display="flex" flex="1" position="relative" alignItems="start">
        <Box width={{ base: "100%", sm: "75%" }} zIndex="2">
          <Box pos={"relative"} overflow={"hidden"}>
            <Image
              width={365}
              height={200}
              src={image || `/blog.jpeg`}
              alt={title || `image`}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto"
              }}
            />

            <Box pos={"absolute"} bottom={"15px"} left="0px">
              <Tag
                size={"xl"}
                variant="solid"
                colorScheme="red"
                fontSize={"12px"}
                p="4px"
                whiteSpace={"nowrap"}
                bg={bgTag || "red.500"}
              >
                {tag}
              </Tag>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        mt={{ lg: "0", base: "20px" }}
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
      >
        <Heading
          pt="5px"
          as={"h3"}
          size={{ lg: "sm", md: "md", base: "md" }}
          _hover={{ color: "red.500" }}
          transition={"all ease .3s"}
          dangerouslySetInnerHTML={{ __html: clean(title) }}
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2, // Limit to 2 lines
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            maxHeight: "3.5em" // Set a fixed height (adjust as needed)
          }}
        />

        <Stack
          flex={1}
          my="10px"
          flexDirection="row"
          spacing={2}
          fontSize={{ lg: "sm", md: "md", base: "md" }}
        >
          <Text fontWeight={600}>Admin</Text>
          <Text>{date}</Text>
        </Stack>
      </Box>
    </Box>
  );
};
