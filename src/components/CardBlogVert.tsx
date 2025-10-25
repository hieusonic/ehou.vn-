"use client";

import { clean } from "@/lib/sanitizeHtml";
import { Box, Heading, Stack, Tag, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const CardBlogVert = ({
  title,
  tag,
  image,
  path,
  bgTag,
  date,
  preview
}: {
  title: string;
  desc: string;
  tag: string;
  image?: string;
  path?: string;
  bgTag?: string;
  date?: string;
  preview?: boolean;
}) => {
  return (
    <Box overflow="hidden" as={Link} href={path ?? "#"}>
      {!preview && (
        <Box pos={"relative"} overflow={"hidden"} h="260px">
          <Image
            width={384}
            height={256}
            src={image || `/blog.jpeg`}
            alt={title || `image`}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto"
            }}
          />

          <Box pos={"absolute"} bottom={"33px"} left="0px">
            <Tag
              size={"xl"}
              variant="solid"
              colorScheme="red"
              fontSize={"sm"}
              p="6px"
              whiteSpace={"nowrap"}
              bg={bgTag || "green.500"}
            >
              {tag}
            </Tag>
          </Box>
        </Box>
      )}
      <Box color="black">
        <Heading
          mt="12px"
          as={"h3"}
          size="md"
          _hover={{ color: "#028dbf" }}
          transition={"all ease .3s"}
          dangerouslySetInnerHTML={{ __html: clean(title) }}
          lineHeight={"28px"}
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2, // Limit to 2 lines
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            maxHeight: "5em" // Set a fixed height (adjust as needed)
          }}
        />
        <Stack
          flex={1}
          mt="10px"
          flexDirection="row"
          spacing={2}
          fontSize={"md"}
        >
          <Text fontWeight={600}>Admin</Text>
          <Text>{date}</Text>
        </Stack>
      </Box>
    </Box>
  );
};
