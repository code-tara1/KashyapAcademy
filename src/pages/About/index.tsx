import { Box, Flex, Text } from "@chakra-ui/react";
import AboutBanner from "../../assets/Banner/AboutBanner.png";
import { MessageSection } from "../Homepage/MessageSection";
import AboutSection from "./AboutSection";
import MVGSection from "./MVGSection";
import WhyUsSection from "./WhyUsSection";

export default function AboutUs() {
  return (
    <Flex flexDir={"column"}>
      <Box
        h={{ base: "300px", sm: "400px", md: "600px", lg: "700px" }}
        bg={`url(${AboutBanner})`}
        w={"100%"}
        bgPos={"center"}
        bgSize={"cover"}
        display={"flex"}
        alignItems={{ base: "start", md: "center" }}
        justifyContent={{ base: "start", md: "start" }}
        bgRepeat={"no-repeat"}
        p={4}
        mb={4}
      >
        <Flex
          flexDir={"column"}
          bg={"rgba(255, 73, 0, 0.70)"}
          w={"fit-content"}
          bottom={10}
          textAlign={"center"}
          p={4}
        >
          <Text
            fontSize={{ base: "14px", sm: "22px", md: "26px", lg: "30px" }}
            color={"white"}
          >
            About Kashyap Academy
          </Text>
        </Flex>
      </Box>
      <AboutSection />
      <MVGSection />
      <WhyUsSection />
      <MessageSection />
    </Flex>
  );
}
