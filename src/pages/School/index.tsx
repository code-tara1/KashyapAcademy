import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SchoolImage from "../../assets/SwitchImage/School.png";
import Logo from "../../assets/logo.png";

export const HomeSchool = () => {
  return (
    <Box bg={`url(${SchoolImage})`}>
      <Flex
        role="group"
        justify={"center"}
        align={"center"}
        textColor={"white"}
        minH={{ base: "50vh", md: "100vh" }}
        flexDir={"column"}
        gap={10}
      >
        <Image
          opacity={{ base: 1, md: 0 }}
          _groupHover={{ opacity: 1 }}
          src={Logo}
          alt={"Kashyap Academy"}
        />
        <Text textColor={"secondary.500"} fontSize={"4xl"}>
          Kashyap Academy
        </Text>
        <Button
          opacity={{ base: 1, md: 0 }}
          _groupHover={{ opacity: 1 }}
          as={Link}
          reloadDocument
          to={"/school/"}
          variant={"primary"}
          borderRadius={"5px"}
          rightIcon={<ChevronRightIcon fontSize={"xl"} />}
        >
          Visit School Website
        </Button>
      </Flex>
    </Box>
  );
};
