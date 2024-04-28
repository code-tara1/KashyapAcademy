import {
  Box,
  Card,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import FocusBanner from "../../assets/Banner/Focus.png";
import { focusData } from "./data";
export const OurFocus = () => {
  return (
    <Box py={10} pos={"relative"}>
      <Image
        src={FocusBanner}
        loading="lazy"
        alt="Focus Banner"
        objectFit={"cover"}
        objectPosition={"center"}
        w={"100%"}
        h={"100%"}
      />
      <Container maxW={{ base: "95vw", md: "90vw", lg: "80vw" }} py={10}>
        <Heading
          textColor={"white"}
          size={{ base: "md", md: "lg", lg: "xl" }}
          pl={8}
          mb={6}
        >
          Our Focus
        </Heading>
        <Flex gap={{ base: 4, md: 10 }} flexWrap={"wrap"} justify={"center"}>
          {focusData.map(({ id, title, description, icon }) => (
            <Card
              role="group"
              flexBasis={{ base: "100%", sm: "45%", lg: "30%" }}
              borderRadius={0}
              key={id}
              variant={"normal"}
              p={10}
            >
              <Flex flexDir={"column"} gap={1}>
                {icon}
                <Text fontSize={{ base: "16px", md: "18px" }} mt={2}>
                  {title}
                </Text>
                <Box
                  _groupHover={{ w: "70%" }}
                  transition={"all 0.5s ease"}
                  bg={"#62C300"}
                  w={"30%"}
                  py={"2px"}
                  my={"8px"}
                  borderRadius={"4px"}
                />
                <Text
                  letterSpacing={0.2}
                  fontSize={{ base: "14px", md: "16px" }}
                >
                  {description}
                </Text>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};
