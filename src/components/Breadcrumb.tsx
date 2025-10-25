import { Box, Container, Heading } from "@chakra-ui/react";
import Image from "next/image";

interface BreadcrumbsProps {
  title: string;
  showNotification?: boolean;
  image: string;
}

export const Breadcrumbs = ({
  title,
  showNotification = true,
  image
}: BreadcrumbsProps) => {
  return (
    <Box position="relative" height="350px" width="100%" overflow="hidden">
      <Box position="absolute" width="100%" height="100%" top="0" left="0">
        <Image
          src={image || "/anhvienchuan.jpg"}
          alt="Banner Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Box>
      <Container maxW="6xl" position="relative" height="100%">
        <Box
          position="absolute"
          bottom="0"
          left="20px"
          backgroundColor="rgba(0, 0, 0, .5)"
          px="40px"
          py="15px"
        >
          <Heading
            color="white"
            fontSize="24px"
            fontWeight="bold"
            textTransform="uppercase"
            as={"h1"}
          >
            {title} {showNotification ? "- Thông báo" : ""}
          </Heading>
        </Box>
      </Container>
    </Box>
  );
};
