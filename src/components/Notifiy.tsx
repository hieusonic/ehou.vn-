"use client";

import {
  Box,
  Container,
  GridItem,
  ListItem,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import Image from "next/image";
import { HeadSection } from "./HeadSection";

interface IBranchAb {
  titleprogram: string[];
  overview: string[];
  program: string[];
  workjobs: string[];
  worktitle: string;
  workjobstitles: string;
  image: string;
  src: string;
}

export const Notifiy = (props: IBranchAb) => {
  const {
    titleprogram,
    program,
    worktitle,
    workjobs,
    workjobstitles,
    image,
    src
  } = props;

  return (
    <>
      <Container maxW="6xl" py={20}>
        <HeadSection
          subtitle={"EHOU - ĐẠI HỌC TỪ XA PHÙ HỢP VỚI NGƯỜI ĐI LÀM"}
          title={"THÔNG BÁO TUYỂN SINH"}
          desc={""}
        />
        <SimpleGrid
          spacing={"10"}
          gridTemplateColumns={{
            base: "1fr",
            md: " 1fr",
            lg: "repeat(2, 1fr)"
          }}
        >
          <GridItem>
            {image && (
              <Image
                src={src}
                alt="Picture"
                width={640}
                height={247}
                style={{ width: "100%", height: "auto" }}
              />
            )}
          </GridItem>
          <GridItem>
            <Tabs variant="unstyled" mt="30px" display="flex">
              <TabList
                mb="25px"
                h="100%"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
                {titleprogram?.map((item, index) => (
                  <Tab
                    key={index}
                    bg="white"
                    boxShadow={"0 1px 6px rgba(0, 0, 0, 0.1)"}
                    borderRadius="5px"
                    mb="20px"
                    _selected={{ color: "#008AFA" }}
                    fontSize="13px"
                    fontWeight={700}
                    textTransform={"uppercase"}
                    textAlign={"left"}
                    p={"8px 18px"}
                    color={"#000"}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {item}
                  </Tab>
                ))}
              </TabList>
              <TabPanels display="flex" flexDirection="row">
                <TabPanel flex="1" height={{ lg: "250px" }} padding={"0"}>
                  <Box
                    boxShadow={"0 1px 6px rgba(0, 0, 0, 0.1)"}
                    ml={"20px"}
                    p={3}
                  >
                    {program?.map((item, index) => (
                      <UnorderedList key={index}>
                        <ListItem
                          fontWeight={500}
                          pb={"12px"}
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {item}
                        </ListItem>
                      </UnorderedList>
                    ))}
                  </Box>
                </TabPanel>
                <TabPanel flex="1">
                  <Text
                    mb="20px"
                    boxShadow={"0 1px 6px rgba(0, 0, 0, 0.1)"}
                    ml={"20px"}
                    p={3}
                  >
                    {worktitle}
                  </Text>
                </TabPanel>
                <TabPanel flex="1" padding={"0"}>
                  <Box
                    boxShadow={"0 1px 6px rgba(0, 0, 0, 0.1)"}
                    ml={"20px"}
                    p={3}
                  >
                    {workjobs?.map((item, index) => (
                      <UnorderedList key={index}>
                        <ListItem
                          fontWeight={500}
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {item}
                        </ListItem>
                      </UnorderedList>
                    ))}
                  </Box>
                </TabPanel>
                <TabPanel flex="1">
                  <Text
                    mb="20px"
                    boxShadow={"0 1px 6px rgba(0, 0, 0, 0.1)"}
                    ml={"20px"}
                    p={3}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {workjobstitles}
                  </Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
};
