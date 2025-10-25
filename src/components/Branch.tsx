"use client";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import { AiFillCarryOut } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { clean } from "./../lib/sanitizeHtml";
import { BtnDk } from "./BtnTheme";
import { HeadSection } from "./HeadSection";

export const Accs = ({
  accs
}: {
  accs: {
    title: string;
    detail: {
      title: string;
      list: string[];
      title1: string;
      list1: string[];
    }[];
  }[];
}) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {accs.map((acc, index) => (
        <AccordionItem border={"none"} key={index} py={"12px"} rounded={"sm"}>
          <AccordionButton bg={"gray.50"} py="16px" rounded={"sm"}>
            <Box flex="1" textAlign="left">
              <HStack>
                <Heading fontSize={{ base: "sm", md: "md" }} as="h3">
                  {acc.title}
                </Heading>
              </HStack>
            </Box>
            <Icon as={BiPlus} />
          </AccordionButton>
          <AccordionPanel pb={4} color={"gray.900"}>
            {acc?.detail?.map((item, index) => (
              <Box key={index}>
                <Heading as={"h3"} size={"sm"}>
                  {item?.title}
                </Heading>
                <UnorderedList>
                  {item?.list?.map((item, i) => (
                    <div
                      style={{ paddingTop: "10px", whiteSpace: "pre-line" }}
                      key={i}
                      dangerouslySetInnerHTML={{ __html: clean(item) }}
                    />
                  ))}
                </UnorderedList>
              </Box>
            ))}
            {acc?.detail?.map((item, index) => (
              <Box key={index}>
                <Heading as={"h3"} size={"sm"}>
                  {item?.title1}
                </Heading>
                <UnorderedList>
                  {item?.list1?.map((item, i) => (
                    <div
                      style={{ paddingTop: "10px", whiteSpace: "pre-line" }}
                      key={i}
                      dangerouslySetInnerHTML={{ __html: clean(item) }}
                    />
                  ))}
                </UnorderedList>
              </Box>
            ))}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

interface IBranch {
  overview: string[];
  jobs: string[];
  value: string[];
  training: string;
  Form: string;
  Degree: string;
  Target: string[];
  location: string[];
  banner: any;
}
export const Branch = (props: IBranch) => {
  const {
    value,
    overview,
    jobs,
    training,
    Form,
    Degree,
    Target,
    location,
    banner
  } = props;
  return (
    <Box color={"blue.800"}>
      <Heading
        as={"h2"}
        fontSize={"28px"}
        pb={"16px"}
        textAlign={"center"}
        color="#028dbf"
      >
        {banner?.gioi_thieu || "Giới thiệu"}
      </Heading>
      <Box textAlign={"justify"}>
        {overview?.map((lines, index) => (
          <div
            style={{ paddingTop: "10px", whiteSpace: "pre-line" }}
            key={index}
            dangerouslySetInnerHTML={{ __html: clean(lines) }}
          />
        ))}
      </Box>
      <Text mt={"12px"} fontSize={"20px"}>
        <strong>
          {banner?.thoi_gian?.text_1 || " 1. Thời gian đào tạo :"}{" "}
        </strong>
        &nbsp;
        <span style={{ fontSize: "16px" }}>{training}</span>
      </Text>
      <Text mt={"12px"} fontSize={"20px"}>
        <strong>{banner?.hinh_thuc?.text_1 || "2.Hình thức đào tạo:"}</strong>
        &nbsp;
        <span style={{ fontSize: "16px" }}>{Form}</span>
      </Text>
      <Text mt={"12px"} fontSize={"20px"}>
        <strong>{banner?.bang_cap?.text_1 || "3.Bằng cấp:"} </strong>
        &nbsp;
        <span style={{ fontSize: "16px" }}>{Degree}</span>
      </Text>
      <Box pt={"12px"}>
        <Heading as={"h3"} size={"md"}>
          {banner?.muc_tieu || " 4. Mục tiêu đào tạo:"}
        </Heading>
        <UnorderedList style={{ listStyle: "none" }}>
          {Target?.map((item, index) => (
            <ListItem key={index} fontWeight={500}>
              <div
                style={{
                  paddingTop: "12px",
                  listStyle: "none",
                  whiteSpace: "pre-line",
                  lineHeight: 1.8
                }}
                key={index}
                dangerouslySetInnerHTML={{ __html: clean(item) }}
              />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Box pt={"12px"}>
        <Heading as={"h3"} size={"md"}>
          {banner?.cac_vi_tri || "5. Các vị trí việc làm :"}
        </Heading>
        <UnorderedList style={{ listStyle: "none" }}>
          {location?.map((item, index) => (
            <ListItem key={index} fontWeight={500}>
              <div
                style={{
                  paddingTop: "12px",
                  whiteSpace: "pre-line",
                  lineHeight: 1.8
                }}
                key={index}
                dangerouslySetInnerHTML={{ __html: clean(item) }}
              />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Box pt={"12px"}>
        <HStack pb={"16px"}>
          <Icon as={FaRegUser} />
          <Heading as={"h3"} size={"md"}>
            {banner?.doi_tuong || "Đối tượng tuyển sinh:"}
          </Heading>
        </HStack>
        {jobs?.map((item, index) => (
          <div
            style={{
              paddingTop: "12px",
              listStyle: "none",
              whiteSpace: "pre-line",
              lineHeight: 1.8
            }}
            key={index}
            dangerouslySetInnerHTML={{ __html: clean(item) }}
          />
        ))}
      </Box>
      <Box pt={"12px"}>
        <HStack pb={"16px"}>
          <Icon as={AiFillCarryOut} />
          <Heading as={"h3"} size={"md"}>
            {banner?.gia_tri || "Giá trị bằng cấp:"}
          </Heading>
        </HStack>
        {value?.map((itemt, index) => (
          <div
            style={{
              listStyle: "none",
              whiteSpace: "pre-line",
              lineHeight: 1.8
            }}
            key={index}
            dangerouslySetInnerHTML={{ __html: clean(itemt) }}
          />
        ))}
      </Box>
    </Box>
  );
};
interface IBranchNganh {
  programlearns: string[];
  chuong_trinh_hoc: any;
}

export const BranchNganh = (props: IBranchNganh) => {
  const { programlearns, chuong_trinh_hoc } = props;
  return (
    <Box>
      <Container maxW={"6xl"} pt={10}>
        <SimpleGrid
          spacing={"10"}
          gridTemplateColumns={{
            base: "1fr",
            md: " 1fr",
            lg: "repeat(2, 1fr)"
          }}
          py={{ lg: 20, md: 10, base: 10 }}
        >
          <GridItem py={{ lg: "45px", base: `25px` }}>
            <HeadSection
              subtitle={""}
              title={chuong_trinh_hoc?.tieu_de || "CHƯƠNG TRÌNH HỌC"}
              desc={""}
            />
            <Box boxShadow={"xl"} bg={"white"} p={6} rounded={"lg"}>
              {programlearns?.map((item, index) => (
                <div
                  style={{ paddingTop: "12px", whiteSpace: "pre-line" }}
                  key={index}
                  dangerouslySetInnerHTML={{ __html: clean(item) }}
                />
              ))}
            </Box>
          </GridItem>
          <GridItem pt={"57px"} pos="relative">
            <Image
              src={chuong_trinh_hoc?.anh || "/Rectangle.jpg"}
              alt="Picture"
              width={{ base: "100%", lg: "600px" }}
              height={{ base: "auto", lg: "400px" }}
              objectFit="cover"
            />
            <Box textAlign={"center"} mt={"25px"}>
              <BtnDk />
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
