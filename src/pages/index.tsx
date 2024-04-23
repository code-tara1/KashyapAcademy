import { GridItem, SimpleGrid } from "@chakra-ui/react";

import { HomeCollege } from "./College";
import { HomeSchool } from "./School";

export const Home = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <GridItem colSpan={1}>
        <HomeSchool />
      </GridItem>
      <GridItem colSpan={1}>
        <HomeCollege />
      </GridItem>
    </SimpleGrid>
  );
};
