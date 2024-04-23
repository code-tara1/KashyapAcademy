import { Flex, GridItem, SimpleGrid } from "@chakra-ui/react";

import ContactBanner from "../../assets/Banner/ContactBanner.png";
import { Banner } from "../../component/Banner";
import { ContactForm } from "./ContactForm";
import { ContactInformation } from "./ContactInformation";

export const Contact = () => {
  return (
    <Flex flexDir={"column"}>
      <Banner
        image={ContactBanner}
        title={"Contact Us"}
        subtitle={"We are here to help you"}
      />
      <SimpleGrid columns={{ base: 1, md: 2 }} p={4} spacing={4}>
        <GridItem colSpan={1}>
          <ContactInformation />
        </GridItem>
        <GridItem colSpan={1}>
          <ContactForm />
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
};
