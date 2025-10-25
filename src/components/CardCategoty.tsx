"use client";

import { Box, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CardCategoty = ({
  image,
  title,
  path
}: {
  image?: string;
  title: string;
  path: string;
}) => {
  const [, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <Center
      as={Link}
      style={{ textDecoration: "none" }}
      href={path}
      pos={"relative"}
      className="card-blog"
      h={{ lg: "295px", md: "400px", base: "100%" }}
      w={"300px"}
    >
      <Flex
        flexDir={"column"}
        justify={"space-between"}
        w={"full"}
        rounded={"sm"}
        p={6}
        overflow={"hidden"}
        bg={"white"}
        borderBottom="2px solid"
        borderColor="blue"
        borderBottomLeftRadius="lg"
        borderBottomRightRadius="lg"
        boxShadow="lg"
      >
        <Box>
          <Box
            mt={{ lg: -6 }}
            mx={-6}
            mb={6}
            pos={"relative"}
            onMouseEnter={(e) => {
              const element = e.currentTarget as HTMLElement;
              const imageElement = element.querySelector(
                ".blog-image"
              ) as HTMLImageElement | null;
              if (imageElement) {
                imageElement.style.transform = "scale(1.05)";
              }
            }}
            onMouseLeave={(e) => {
              const element = e.currentTarget as HTMLElement;
              const imageElement = element.querySelector(
                ".blog-image"
              ) as HTMLImageElement | null;
              if (imageElement) {
                imageElement.style.transform = "scale(1.0)";
              }
            }}
          >
            <Image
              width={326}
              height={450}
              src={image || `/blog.jpg`}
              alt={title}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "172px",
                transition: "0.3s ease-in-out"
              }}
              loading="lazy"
              className="blog-image"
            />
          </Box>
          <Stack>
            <Heading
              as={"h3"}
              className="event-heading"
              color={"#028dbf"}
              fontSize={{ base: "sm", lg: "12px" }}
              fontFamily={"body"}
              _hover={{ color: "#0d6efd" }}
              css={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                textAlign: "center",
                textTransform: "uppercase"
              }}
            >
              {title}
            </Heading>
            <Text
              textAlign={"center"}
              color={"#028dbf"}
              textDecoration={"underline"}
              fontSize={"sm"}
            >
              Tìm hiểu thêm
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Center>
  );
};
