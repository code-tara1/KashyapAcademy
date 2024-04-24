import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Facebook, Instagram, Twitter } from "../../assets/SocailIcons";
import Logo from "../../assets/footerLogo.png";
export const About = () => {
  return (
    <Flex flexDir={"column"} gap={4}>
      <Image w={120} h={120} src={Logo} alt="logo" />
      <Text fontSize={{ base: "16px", md: "18px" }}>
        Follow us on Social Media
      </Text>
      <HStack justify={"start"} align={"center"}>
        <Facebook boxSize={{ base: 8, md: 12 }} />
        <Instagram boxSize={{ base: 8, md: 12 }} />
        <Twitter boxSize={{ base: 8, md: 12 }} />
      </HStack>
    </Flex>
  );
};
