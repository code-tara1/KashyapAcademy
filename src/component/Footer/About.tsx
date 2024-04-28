import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useFetchSchool } from "../../api";
import { Facebook, Instagram, LinkedIn } from "../../assets/SocailIcons";
import Logo from "../../assets/footerLogo.png";
export const About = () => {
  const { data } = useFetchSchool();
  return (
    <Flex flexDir={"column"} gap={4}>
      <Image w={120} h={120} src={Logo} alt="logo" />
      <Text fontSize={{ base: "16px", md: "18px" }}>
        Follow us on Social Media
      </Text>
      <HStack justify={"start"} align={"center"}>
        <Link target="_blank" to={data?.facebook}>
          <Facebook
            _hover={{ textColor: "#3b5998" }}
            boxSize={{ base: 8, md: 12 }}
          />
        </Link>
        <Link target="_blank" to={data?.instagram}>
          <Instagram
            _hover={{ textColor: "#c13584" }}
            boxSize={{ base: 8, md: 12 }}
          />
        </Link>
        <Link target="_blank" to={data?.linkedin}>
          <LinkedIn
            _hover={{ textColor: "#0077b5" }}
            boxSize={{ base: 8, md: 12 }}
          />
        </Link>
      </HStack>
    </Flex>
  );
};
