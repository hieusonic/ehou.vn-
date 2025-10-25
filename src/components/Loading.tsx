"use client";

import { Center, Spinner, SpinnerProps } from "@chakra-ui/react";

interface ILoading extends SpinnerProps {
  he?: string;
}

export const Loading = (props: ILoading) => {
  return (
    <Center minH={props?.he || "10vh"}>
      <Spinner color="red.500" size={"md"} {...props} />
    </Center>
  );
};
