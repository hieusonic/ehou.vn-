"use client";

import { menus } from "@/router";
import {
  Box,
  Flex,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { useRouter } from "next/router";

interface INavItem {
  title: string;
  children?: Array<INavItem>;
  path?: string;
}
export const DesktopNav = () => {
  const router = useRouter();
  const linkColor = "#028dbf";
  const linkHoverColor = "#19A4F0";
  const popoverContentBgColor = "white";
  const activeBorderColor = "#19A4F0"; // Border color for the active menu

  return (
    <Stack direction={"row"} spacing={7}>
      {menus.map((navItem) => (
        <Box key={navItem.title} position="relative">
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as={Link}
                p={2}
                href={navItem.path ?? "#"}
                fontSize={"md"}
                fontWeight={600}
                textTransform={"uppercase"}
                color={
                  router.asPath === (navItem.path || "/")
                    ? linkHoverColor
                    : linkColor
                }
                _hover={{
                  color: linkHoverColor,
                  "::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: "-4px", // Adjust this to control the spacing below the text
                    height: "3px", // Adjust this to control the thickness of the underline
                    backgroundColor: linkHoverColor
                  }
                }}
                position="relative"
                _after={{
                  content: '""',
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: "-4px", // Adjust this to control the spacing below the text
                  height: "3px", // Adjust this to control the thickness of the underline
                  backgroundColor:
                    router.asPath === navItem.path
                      ? activeBorderColor
                      : "transparent"
                }}
              >
                {navItem.title}
              </Box>
            </PopoverTrigger>

            {navItem.childs && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.childs.map((child) => (
                    <DesktopSubNav key={child.title} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export const DesktopSubNav = ({ title, path }: INavItem) => {
  return (
    <Box
      as={Link}
      href={path}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            color={"black"}
            _groupHover={{ color: "#558dd9" }}
            fontSize={"14px"}
            fontWeight={400}
          >
            {title}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#558dd9"} w={5} h={5} as={BsChevronRight} />
        </Flex>
      </Stack>
    </Box>
  );
};
