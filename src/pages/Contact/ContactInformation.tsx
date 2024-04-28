import { Box, Flex, Text } from "@chakra-ui/react";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { useFetchSchool } from "../../api";

export const ContactInformation = () => {
  const { data } = useFetchSchool();
  return (
    <Flex flexDir={"column"} gap={4} p={4}>
      <Flex
        w={"fit-content"}
        as={Link}
        to={`tel:${data?.phone}`}
        gap={2}
        p={4}
        role="group"
      >
        <Box
          boxSize={{ base: "30px", md: "40px" }}
          _groupHover={{ color: "primary.500" }}
        >
          <IoCallOutline size={"100%"} />
        </Box>
        <Text
          _groupHover={{ color: "primary.500" }}
          fontWeight={500}
          fontSize={{ base: "14px", md: "16px" }}
        >
          {data?.phone}
        </Text>
      </Flex>
      <Flex
        w={"fit-content"}
        as={Link}
        to={`mailto:${data?.email}`}
        role="group"
        gap={2}
        align={"center"}
        p={4}
      >
        <Box
          boxSize={{ base: "30px", md: "40px" }}
          _groupHover={{ color: "primary.500" }}
        >
          <IoMailOutline size={"100%"} />
        </Box>
        <Text
          _groupHover={{ color: "primary.500" }}
          fontWeight={500}
          fontSize={{ base: "14px", md: "16px" }}
        >
          {data?.email}
        </Text>
      </Flex>
      <Flex
        w={"fit-content"}
        as={Link}
        to={"https://maps.app.goo.gl/vRYN6YbbjNYYrAx2A"}
        gap={2}
        align={"center"}
        p={4}
        role="group"
      >
        <Box
          _groupHover={{ color: "primary.500" }}
          boxSize={{ base: "30px", md: "40px" }}
        >
          <IoLocationOutline size={"100%"} />
        </Box>
        <Text
          _groupHover={{ color: "primary.500" }}
          fontWeight={500}
          fontSize={{ base: "14px", md: "16px" }}
        >
          {data?.address}
        </Text>
      </Flex>
    </Flex>
  );
};
