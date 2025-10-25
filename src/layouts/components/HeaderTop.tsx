"use client";

import {
  HStack,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tag,
  TagLabel
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaSearch } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { Logo } from "./Logo";
import dynamic from "next/dynamic";

const InputSearch = dynamic(() =>
  import("@/features/Search/InputSearch").then((mod) => mod.InputSearch)
);

export const Tags = ({
  label,
  type,
  children
}: {
  label: string;
  type: string;
  children: ReactNode;
}) => {
  return (
    <Tag
      variant="solid"
      bg={"#028dbf"}
      py="8px"
      px="8px"
      as={Link}
      href={`${type}:${label}`}
    >
      {children}
      <TagLabel fontSize={{ base: ".6rem", md: "sm" }}>{label}</TagLabel>
    </Tag>
  );
};

export const HeaderTop = ({}: { hasSearch?: boolean }) => {
  return (
    <HStack align={"center"} justify={"space-between"}>
      <HStack flex={1} justify={"left"} display={{ base: "flex", lg: "none" }}>
        <Popover placement="bottom">
          <PopoverTrigger>
            <IconButton
              size="xl"
              color="gray "
              pl={4}
              aria-label="Search database"
              icon={<FaSearch width="1em" height="1em" />}
              borderRadius={"0"}
              bg={"white"}
            />
          </PopoverTrigger>
          <PopoverContent p={5}>
            <InputSearch type="popover" />
          </PopoverContent>
        </Popover>
      </HStack>
      <HStack
        flex={1}
        justify={"space-between"}
        display={{ base: "none", lg: "flex" }}
      >
        <InputSearch type="popover" />
      </HStack>
      <HStack justify={"center"} display={{ base: "flex", lg: "flex" }}>
        <Logo />
      </HStack>
      <HStack
        flex={1}
        display={{ base: "none", lg: "flex" }}
        justify={"right"}
        gap={"2px"}
      >
        <Tags type="tel" label="0919.240.116">
          <Icon as={LuPhone} />
        </Tags>
        <Tags type="mailto" label="ehou@gvcn.vn">
          <Icon as={MdOutlineMail} />
        </Tags>
      </HStack>
    </HStack>
  );
};
