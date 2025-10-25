"use client";

import { Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() =>
  import("@/layouts/components/Sidebar").then((mod) => mod.Sidebar)
);

export const LayoutBottom = ({
  children,
  sticky
}: {
  children: ReactNode;
  sticky?: string;
}) => {
  return (
    <Container maxW={"7xl"} pt={10}>
      <SimpleGrid columns={{ base: 2, lg: 3 }} gap={"24px"}>
        <GridItem colSpan={{ base: 3, lg: 2 }}>{children}</GridItem>
        <GridItem className="sidebar-posts" colSpan={{ base: 3, lg: 1 }}>
          <Sidebar sticky={sticky} />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
