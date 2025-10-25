"use client";

import {
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  SimpleGrid
} from "@chakra-ui/react";
import { ReactNode } from "react";
import MovingComponent from "react-moving-text";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FormWrapper } from "@/components/FormWrapper";

const Categorys = dynamic(() =>
  import("@/features/home/Categorys").then((mod) => mod.Categorys)
);

const Contact = dynamic(() =>
  import("@/components/Contact").then((mod) => mod.Contact)
);
export const LayoutNganh = ({
  children,
  title,
  backgroundImage
}: {
  children?: ReactNode;
  title?: string;
  backgroundImage?: string;
}) => {
  return (
    <>
      <Box
        w={"100%"}
        bg="rgba(0, 0, 0, 0)"
        bgSize="cover"
        bgRepeat={"no-repeat"}
        position="relative"
        p={{ lg: "64px 0", md: "64px 0", base: "32px 0" }}
      >
        <Box
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage={backgroundImage}
          zIndex={-1}
          filter="auto"
          brightness="45%"
          bgSize="cover"
          bgRepeat={"no-repeat"}
          bgPosition={"0 100%"}
          height={"350px"}
        ></Box>
        <Container maxW={"6xl"} py={"90px"}>
          <Flex justifyContent="center">
            <MovingComponent
              type="flipFromTop"
              duration="2000ms"
              delay="1s"
              direction="normal"
              timing="ease-in-out"
              iteration="1"
              fillMode="none"
            >
              <Heading as={"h1"} color={"white"}>
                {title}
              </Heading>
            </MovingComponent>
          </Flex>
        </Container>
      </Box>
      <Box color={"blue.900"}>
        <Box>
          <Container maxW={"6xl"} pt={`42px`}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={"44px"}>
              <GridItem colSpan={{ base: 1, md: 2 }}>{children}</GridItem>
              <GridItem mt={{ lg: "40px", base: "0" }}>
                <Box
                  mt={{ base: "0", lg: "sm" }}
                  boxShadow="0px 3px 20px rgba(0, 33, 71, 0.06)"
                  px="6"
                  bg="white"
                  pt="6"
                >
                  <FormWrapper
                    type="form-main"
                    title=" Đăng ký xét tuyển không cần thi"
                    color="#028dbf"
                  />
                </Box>
              </GridItem>
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export const LayoutLkg = ({
  children
}: {
  children?: ReactNode;
  title?: string;
  path?: string;
  titleNganh?: string;
}) => {
  const [home_content, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=trang-chu`, {
          next: { revalidate: 3 }
        });
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data = await res.json();
        setHomeContent(data?.contentPage[0]);
      } catch (error) {
        console.error(error);
      }
    };
    getHomeContent();
  }, []);
  return (
    <Box color={"blue.900"}>
      <Box>
        <Container maxW={"6xl"} py="42px" px={"24px"}>
          {children}
          <Box mt={{ base: "24px", lg: 0 }}>
            <Contact />
          </Box>
          <Categorys cac_nganh_dao_tao={home_content?.acf?.cac_nganh_dao_tao} />
        </Container>
      </Box>
    </Box>
  );
};
