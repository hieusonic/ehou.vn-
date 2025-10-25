"use client";

import { Button, ButtonProps, Text } from "@chakra-ui/react";
import { useModal } from "@/components/ModalContext";

export const BtnTheme = (props: ButtonProps) => {
  const { children, ...args } = props;
  return (
    <Button
      color={"white"}
      rounded={"sm"}
      fontSize={"15px"}
      lineHeight={"63px"}
      width={"203px"}
      p={"0 40px"}
      {...args}
      transform={"skew(-15deg, 0)"}
      bg={"linear-gradient(135deg, #F87431  0%, #FF9900 100%)"}
      transition={"all ease .4s"}
      _hover={{
        background: "linear-gradient(135deg,#008AFA 0%,#009AFA 100%)"
      }}
    >
      <Text transform={"skew( 15deg, 0)"}> {children}</Text>
    </Button>
  );
};

export const BtnThemes = (props: ButtonProps) => {
  const { children, ...args } = props;
  return (
    <Button
      color={"white"}
      size={"md"}
      rounded={"sm"}
      {...args}
      bg={"#007bff"}
      transition={"all ease .4s"}
    >
      {children}
    </Button>
  );
};

export const BtnDk = () => {
  const { isOpen, onOpen } = useModal();
  return (
    <Button
      color={"white"}
      lineHeight={"63px"}
      p={"0 40px"}
      bg={"#028dbf"}
      width="150px"
      height="45px"
      border={"2px solid #fff"}
      transition={"all ease .4s"}
      _hover={{
        background: "#ef7b22 ",
        color: "#ffffff"
      }}
      rounded={"lg"}
      onClick={() => !isOpen && onOpen && onOpen()}
      size={"2xl"}
      w={{ lg: "250px", md: "200px", base: "full" }}
    >
      <Text> Đăng ký ngay</Text>
    </Button>
  );
};

export const BtnDkss = () => {
  const { isOpen, onOpen } = useModal();
  return (
    <Button
      color={"white"}
      fontSize={"12px"}
      p={"25px 45px"}
      bg={"#f15e0e"}
      transition={"all ease .4s"}
      _hover={{
        background: "#36adb3",
        color: "white"
      }}
      onClick={() => !isOpen && onOpen && onOpen()}
      rounded={"lg"}
    >
      <Text> Đăng ký ngay</Text>
    </Button>
  );
};

export const BtnDks = () => {
  const { isOpen, onOpen } = useModal();
  return (
    <Button
      color={"#ffffff"}
      size={"2xl"}
      w={{ lg: "250px", md: "200px", base: "full" }}
      rounded={"lg"}
      p={"15px 70px"}
      bg={"#028dbf"}
      transition={"ease-in-out .4s"}
      _hover={{
        background: "#36adb3",
        color: "#ffc600",
        transition: "0.4s ease-in-out"
      }}
      onClick={() => !isOpen && onOpen && onOpen()}
    >
      <Text fontSize={"16px"} fontWeight={600} textTransform={"uppercase"}>
        Đăng ký ngay
      </Text>
    </Button>
  );
};
