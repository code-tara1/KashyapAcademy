import {
  Box,
  Container,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useFetchSchool } from "../../api";
import { CoreValueIcon, MissionIcon, VisionIcon } from "../../assets/icons";
import Logo from "../../assets/logo.png";
export default function MVGSection() {
  const { data } = useFetchSchool();
  console.log(data);
  return (
    <Box bg={"#E5F7D2"} p={4}>
      <Flex justify={"center"} py={10}>
        <Image src={Logo} />
      </Flex>
      <Container maxW={{ base: "99vw", md: "85vw" }}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          py={10}
          justifyItems={"center"}
          spacing={{ base: 10, md: 20 }}
        >
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Flex flexDir={"column"} gap={2} align={"center"}>
              <MissionIcon boxSize={{ base: 12, md: 16 }} />
              <Text
                textColor={"secondary.500"}
                fontSize={{ base: "18px", md: "22px" }}
                fontWeight={700}
              >
                Our Mission
              </Text>
              <Text
                textAlign={"center"}
                fontSize={{ base: "14px", md: "18px" }}
              >
                {data?.mission}
              </Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Flex flexDir={"column"} gap={2} align={"center"}>
              <VisionIcon boxSize={{ base: 12, md: 16 }} />
              <Text
                textColor={"secondary.500"}
                fontSize={{ base: "18px", md: "22px" }}
                fontWeight={700}
              >
                Our Vision
              </Text>
              <Text
                textAlign={"center"}
                fontSize={{ base: "14px", md: "18px" }}
              >
                {data?.vision}
              </Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex flexDir={"column"} gap={2} align={"center"}>
              <CoreValueIcon boxSize={{ base: 12, md: 16 }} />
              <Text
                textColor={"secondary.500"}
                fontSize={{ base: "18px", md: "22px" }}
                fontWeight={700}
              >
                Core Values
              </Text>
              <Text
                textAlign={"center"}
                fontSize={{ base: "14px", md: "18px" }}
              >
                {data?.core_values}
              </Text>
            </Flex>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
