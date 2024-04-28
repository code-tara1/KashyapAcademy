/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useFetchEvent } from "../../api/HomeApi";
import { BaseURL } from "../../api/axiosSetup";
import EventBanner from "../../assets/Banner/Events.png";
import { CalendarIcon, PinIcon } from "../../assets/icons";

export const UpcomingEvents = () => {
  const [isLessThan420] = useMediaQuery("(max-width: 420px)");
  const { data } = useFetchEvent();
  return (
    <Box
      backgroundImage={`linear-gradient(0deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.45) 100%), url(${EventBanner})`}
      bgColor="#00C34E"
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPos={"center"}
      py={10}
    >
      <Heading size={{ base: "md", md: "lg", lg: "xl" }} textAlign="center">
        Upcoming Events
      </Heading>
      <Container
        maxW={{ base: "95vw", md: "85vw", lg: "75vw" }}
        py={{ base: 4, md: 10, lg: 20 }}
      >
        {data?.length === 0 && (
          <Flex justify={"center"} align={"center"}>
            <Text fontSize={"lg"}>No upcoming events...</Text>
          </Flex>
        )}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={5}
          justifyItems={"center"}
          p={4}
        >
          <Flex flexDir={"column"} gap={2} w={"full"}>
            {data?.slice(1, data?.length).map((event: any) => (
              <GridItem key={event.id} colSpan={1}>
                <Card
                  h={isLessThan420 ? 400 : 167}
                  borderRadius={"5px"}
                  border={" 3px solid #DCDCDC"}
                  overflow={"hidden"}
                >
                  <Flex
                    flexDir={isLessThan420 ? "column" : "row"}
                    gap={4}
                    h={"full"}
                    align={"start"}
                  >
                    <Box
                      h={"full"}
                      bg={`url(${BaseURL}/${event.image})`}
                      bgSize={"cover"}
                      bgRepeat={"no-repeat"}
                      bgPos={"center"}
                      w={
                        isLessThan420 ? "full" : { base: "150px", md: "200px" }
                      }
                    />
                    <Stack p={2} gap={4}>
                      <Text
                        fontWeight={600}
                        color={"#272D37"}
                        fontSize={{
                          base: "16px",
                          sm: "18px",
                          md: "20px",
                          lg: "22px",
                        }}
                      >
                        {event.title}
                      </Text>
                      <HStack gap={2} align={"center"}>
                        <CalendarIcon boxSize={{ base: 4, sm: 6 }} />

                        <Text fontSize={{ base: "12px", md: "16px" }}>
                          {event.start_datetime}
                        </Text>
                      </HStack>
                      <HStack gap={2} align={"center"}>
                        <PinIcon boxSize={{ base: 4, sm: 6 }} />

                        <Text fontSize={{ base: "12px", md: "16px" }}>
                          {event.location}
                        </Text>
                      </HStack>
                    </Stack>
                  </Flex>
                </Card>
              </GridItem>
            ))}
          </Flex>

          {data?.slice(0, 1).map((event: any) => (
            <GridItem
              key={event.id}
              colSpan={1}
              w={{ base: "100%", md: "90%", lg: "70%" }}
            >
              <Card
                borderRadius={"5px"}
                border={" 3px solid #DCDCDC"}
                overflow={"hidden"}
                h={isLessThan420 ? 400 : { base: 167, md: 550 }}
              >
                <Flex
                  flexDir={
                    isLessThan420 ? "column" : { base: "row", md: "column" }
                  }
                  gap={2}
                  h={"full"}
                  // align={"center"}
                >
                  <Box
                    h={"full"}
                    bg={`url(${BaseURL}${event.image})`}
                    bgSize={"cover"}
                    bgPos={"center"}
                    bgRepeat={"no-repeat"}
                    w={isLessThan420 ? "full" : { base: "150px", md: "100%" }}
                  />
                  <Stack p={4} gap={4}>
                    <Text
                      fontWeight={600}
                      color={"#272D37"}
                      fontSize={{
                        base: "16px",
                        sm: "18px",
                        md: "20px",
                        lg: "22px",
                      }}
                    >
                      {event.title}
                    </Text>
                    <HStack gap={2} align={"center"}>
                      <CalendarIcon boxSize={{ base: 4, sm: 6 }} />

                      <Text fontSize={{ base: "12px", md: "16px" }}>
                        {event.start_datetime}
                      </Text>
                    </HStack>
                    <HStack gap={2} align={"center"}>
                      <PinIcon boxSize={{ base: 4, sm: 6 }} />

                      <Text fontSize={{ base: "12px", md: "16px" }}>
                        {event.location}
                      </Text>
                    </HStack>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      variant="transparent"
                      w={"fit-content"}
                      size={"sm"}
                      color={"secondary.500"}
                      p={0}
                    >
                      Learn More
                    </Button>
                  </Stack>
                </Flex>
              </Card>
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
