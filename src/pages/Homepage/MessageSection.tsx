import {
  Box,
  Card,
  Container,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Guru1 from "../../assets/Guru1.png";
import { FlowerIcon, FlowerIcon2, QuoteIcon } from "../../assets/icons";
import { messageData } from "./data";

export const MessageSection = () => {
  return (
    <Container maxW={{ base: "95vw", md: "90vw", lg: "80vw" }} py={10}>
      {messageData.map(({ id, name, designation, message, image }) => (
        <Card
          overflow={"hidden"}
          bgColor={"#E1DCDC"}
          borderRadius={"20px"}
          key={id}
          pos={"relative"}
        >
          <Container
            maxW={{ base: "100vw", md: "container.xl" }}
            py={5}
            zIndex={2}
          >
            <Flex
              flexWrap={{ base: "wrap", md: "nowrap" }}
              gap={{ base: 0, lg: 12 }}
              pt={5}
              align={"center"}
            >
              <Box pos={"relative"}>
                <Image
                  src={image}
                  w={{ base: 200, md: 500, lg: 350 }}
                  h={{ base: 200, md: 250, lg: 300 }}
                  alt={name}
                  loading="lazy"
                />
                <Image
                  src={Guru1}
                  w={{ base: "165px", md: "185px", lg: "210px" }}
                  pos={"absolute"}
                  h={{ base: "190px", md: "240px", lg: "290px" }}
                  alt={name}
                  loading="lazy"
                  top={2}
                  left={8}
                  zIndex={-1}
                />
              </Box>
              <Flex gap={4} align={"start"} pt={5}>
                <Box
                  w={{ md: 50, lg: 100 }}
                  h={{ md: 50, lg: 100 }}
                  display={{ base: "none", md: "block" }}
                >
                  <QuoteIcon />
                </Box>
                <Flex
                  flexDir={"column"}
                  gap={2}
                  w={{ base: "100%", md: "70%" }}
                >
                  <Text
                    textColor={"#5F6D7E"}
                    fontSize={{
                      base: "16px",
                      sm: "18px",
                      md: "20px",
                    }}
                  >
                    {message}
                  </Text>
                  <Stack gap={0}>
                    <Text
                      textColor={"#5F6D7E"}
                      fontWeight={600}
                      fontSize={{
                        base: "18px",
                        sm: "20px",
                        md: "22px",
                        lg: "24px",
                      }}
                    >
                      {name}
                    </Text>
                    <Text
                      textColor={"#5F6D7E"}
                      fontSize={{
                        base: "16px",
                        md: "20px",
                      }}
                    >
                      {designation}
                    </Text>
                  </Stack>
                </Flex>
              </Flex>
            </Flex>
          </Container>
          <Box
            opacity={{ base: 0.6, md: 1 }}
            pos={"absolute"}
            bottom={0}
            right={-10}
          >
            <FlowerIcon />
          </Box>
          <Box opacity={{ base: 0.6, md: 1 }} pos={"absolute"} top={0} left={0}>
            <FlowerIcon2 />
          </Box>
        </Card>
      ))}
    </Container>
  );
};
