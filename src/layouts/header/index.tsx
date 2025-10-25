"use client";

import FormPopup from "@/components/FormPopup";
import { useModal } from "@/components/ModalContext";
import { Box, Container, Divider, Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { HeaderTop } from "../components/HeaderTop";

const ModalBase = dynamic(() =>
  import("@/components/Modal").then((mod) => mod.ModalBase)
);
const DesktopNav = dynamic(() =>
  import("../components/DeskhopNav").then((mod) => mod.DesktopNav)
);
const MobileNav = dynamic(() =>
  import("../components/MobileNav").then((mod) => mod.MobileNav)
);
export const Header = () => {
  const [id, setId] = useState("");
  const [href, setHref] = useState("");
  const { onOpen, onClose, isOpen } = useModal();

  useEffect(() => {
    const getForm = async () => {
      try {
        const res = await fetch(`/api/data-form/?type=form-main`);
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data = await res.json();
        const id = data?.id || "";
        id && setId(id);
        const href = data?.href || "";
        href && setHref(href);
      } catch (error) {
        console.error(error);
      }
    };
    getForm();
  }, [id, href, isOpen]);
  return (
    <>
      <Box zIndex={11} pos={"relative"}>
        <Container
          maxW="7xl"
          py="16px"
          display={{ base: "none", lg: "block" }}
          height={"75px"}
          px={4}
          padding-inline-start={5}
        >
          <HeaderTop />
        </Container>
      </Box>
      <Divider />
      {/* <Divider
        borderColor={"orange"}
        borderWidth={"1px"}
        display={{ base: "none", lg: "block" }}
      /> */}
      <Box pos={"sticky"} top={0} left={0} right={0} zIndex={10} bg={"white"}>
        <Container
          display={{ lg: "flex" }}
          color={"#000"}
          minH={"60px"}
          alignItems={"center"}
          maxW="7xl"
        >
          <Box display={{ lg: "none", base: "block" }}>
            <MobileNav />
          </Box>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", lg: "center" }}
            align={"center"}
            display={{ base: "none", lg: "flex" }}
          >
            <Flex display={{ base: "none", lg: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
        </Container>
      </Box>
      <ModalBase
        isOpen={isOpen || false}
        onClose={() => onClose && onClose()}
        onOpen={() => onOpen && onOpen()}
      >
        <FormPopup onClose={() => onClose && onClose()} />
      </ModalBase>
    </>
  );
};
