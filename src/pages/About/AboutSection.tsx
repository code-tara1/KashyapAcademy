import {
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import AboutImage from "../../assets/about.png";
export default function AboutSection() {
  const [isLessThan1255] = useMediaQuery("(max-width: 1255px)");
  const [isLessThan1000] = useMediaQuery("(max-width: 1000px)");
  return (
    <Flex py={10} h={isLessThan1000 ? "full" : 500}>
      <Container maxW={{ base: "95vw", md: "85vw" }}>
        <SimpleGrid
          columns={isLessThan1000 ? 1 : 2}
          gap={4}
          pos={"relative"}
          justifyItems={isLessThan1000 ? "center" : "unset"}
          h={isLessThan1000 ? "full" : 300}
        >
          <GridItem
            colSpan={isLessThan1000 ? 1 : 2}
            w={isLessThan1000 ? "100%" : "70%"}
            bg={"secondary.500"}
          >
            <Box
              textColor={"white"}
              h={"full"}
              w={isLessThan1000 ? "full" : isLessThan1255 ? "80%" : "70%"}
              p={isLessThan1000 ? "40px 20px" : "80px 100px"}
            >
              <Heading size={{ base: "md", md: "lg" }}>Welcome to</Heading>
              <Heading size={{ base: "md", md: "lg" }}>Kashyap Academy</Heading>
              <Text fontSize={isLessThan1255 ? "14px" : "18px"}>
                Lorem ipsum dolor sit amet consectetur. Id rhoncus nunc ante
                pulvinar at. Velit nec tellus velit donec senectus eleifend ut
                in. At feugiat tincidunt pellentesque morbi sed.
              </Text>
            </Box>
          </GridItem>
          <GridItem
            colSpan={1}
            pos={isLessThan1000 ? "static" : "absolute"}
            top={"100px"}
            right={isLessThan1255 ? "75px" : "150px"}
          >
            <Image
              w={isLessThan1255 ? "auto" : "500px"}
              h={isLessThan1255 ? "250px" : "full"}
              src={AboutImage}
              objectFit={"cover"}
              objectPosition={"center"}
              alt={"About Image"}
            />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
