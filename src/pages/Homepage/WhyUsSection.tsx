import {
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useFetchStatistics } from "../../api/HomeApi";
import StatsBanner from "../../assets/Banner/Stats.png";
import CollegeImage from "../../assets/WhyUs/College.png";
import SchoolImage from "../../assets/WhyUs/School.png";
import { WhyUsData } from "../../utils/DataTypes";
import { whyUsData } from "./data";

export const WhyUsSection = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const { data } = useFetchStatistics();

  return (
    <Box py={10}>
      <Container maxW={"95vw"} py={10}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={10}
          alignItems={"center"}
          justifyItems={"center"}
        >
          <GridItem colSpan={1}>
            <Image
              src={path === "school" ? SchoolImage : CollegeImage}
              alt="School"
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Flex flexDir={"column"} gap={"26px"}>
              <Heading size={{ base: "lg", md: "xl" }}>Why Us</Heading>
              {whyUsData.map(({ id, title, body, color, icon }) => (
                <Flex
                  flexDir={{ base: "column", lg: "row" }}
                  gap={4}
                  key={id}
                  role="group"
                >
                  <Box>{icon}</Box>
                  <Flex flexDir={"column"} gap={2}>
                    <Text
                      fontSize={{
                        base: "18px",
                        sm: "20px",
                        md: "24px",
                        lg: "28px",
                      }}
                    >
                      {title}
                    </Text>

                    <Box
                      transition={"all 0.5s ease"}
                      bgGradient={color}
                      w={{ base: "80px", sm: "100px", md: "200px" }}
                      py={"2px"}
                      borderRadius={"4px"}
                    />
                    <Text
                      fontSize={{
                        base: "14px",
                        md: "16px",
                      }}
                    >
                      {body}
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </GridItem>
        </SimpleGrid>
      </Container>
      <Flex
        bg={`url(${StatsBanner})`}
        bgSize={"cover"}
        align={"center"}
        justify={"center"}
        bgPos={"center"}
        bgRepeat={"no-repeat"}
        h={"200px"}
        w={"full"}
        py={16}
      >
        <Container maxW={{ base: "95vw", md: "85vw" }}>
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
            {data?.map(({ id, title, counter }: WhyUsData) => (
              <GridItem colSpan={1} key={id}>
                <Flex align={"center"} flexDir={"column"} justify={"center"}>
                  <Text
                    textColor={"white"}
                    fontSize={{
                      base: "30px",
                      sm: "35px",
                      md: "38px",
                      lg: "42px",
                    }}
                    fontWeight={700}
                  >
                    {counter}
                  </Text>
                  <Text
                    fontWeight={700}
                    fontSize={{ base: "14px", md: "16px" }}
                    textColor={"#252B42"}
                  >
                    {title}
                  </Text>
                </Flex>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Flex>
    </Box>
  );
};
