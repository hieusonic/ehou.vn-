"use client";

import { InputSearch } from "@/features/Search/InputSearch";
import { useSize } from "@/hooks/useSizeWindow";
import { menus } from "@/router";
import { CiSearch } from "react-icons/ci";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { Logo } from "./Logo";
interface INavItem {
  title: string;
  childs?: Array<{ title: string; childs?: Array<{}>; path?: string }>;
  path?: string;
  onClose: () => void;
}
export const MobileNavItem = ({ title, childs, path, onClose }: INavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={childs && onToggle}>
      <Flex
        py={2}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none"
        }}
        fontWeight={600}
        color={"white"}
      >
        <Link
          href={path ?? "#"}
          style={{ width: "100%" }}
          onClick={() => !childs && onClose()}
        >
          {title}
        </Link>
        {childs && (
          <Icon
            as={BsChevronDown}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={"20px"}
            h={"20px"}
          />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"white"}
          align={"start"}
        >
          {childs &&
            childs.map((child) => (
              <Link
                key={child.title}
                style={{
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  fontWeight: "500",
                  width: "100%"
                }}
                href={child.path ?? "/"}
                onClick={onClose}
              >
                {child.title}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
export const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const { size } = useSize();
  const { width } = size;
  return (
    <>
      <Box>
        <Flex
          justifyContent={"space-between"}
          alignItems="center"
          lineHeight={"60px"}
        >
          <Box>
            <IconButton
              w={"50px"}
              h={"50px"}
              ref={btnRef}
              onClick={onOpen}
              icon={<Icon as={AiOutlineMenu} w={"24px"} h={"24px"} />}
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
              background={"#f7f7f7"}
            />
          </Box>
          <Box>
            <Logo />
          </Box>
          <Box display={{ base: "flex", lg: "none" }}>
            <Popover placement="bottom">
              <PopoverTrigger>
                <IconButton
                  justifyContent={"flex-end"}
                  size="2xl"
                  color="black"
                  _hover={{}}
                  bg="transparent"
                  aria-label="Search database"
                  icon={<CiSearch width="8em" height="8em" />}
                  borderRadius={"0"}
                />
              </PopoverTrigger>
              <PopoverContent p={5}>
                <Box>
                  <InputSearch type="popover" />
                </Box>
              </PopoverContent>
            </Popover>
          </Box>
        </Flex>
        <Drawer
          isOpen={width < 992 ? isOpen : false}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size={"xs"}
        >
          <DrawerOverlay />
          <DrawerContent maxH={"100vh"}>
            <DrawerCloseButton />
            <DrawerHeader>
              <Flex onClick={onClose}>
                <Logo />
              </Flex>
            </DrawerHeader>
            <Divider />
            <DrawerBody bg={"#0c6be3"} className="test">
              <Stack
                className="test2"
                color={"white"}
                p={4}
                display={{ lg: "none" }}
              >
                {menus.map((navItem) => (
                  <MobileNavItem
                    key={navItem.title}
                    {...navItem}
                    onClose={onClose}
                  />
                ))}
              </Stack>
              <Box onSubmit={onClose}>
                <InputSearch type={"normal"} />
              </Box>
            </DrawerBody>
            <Divider />
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};
