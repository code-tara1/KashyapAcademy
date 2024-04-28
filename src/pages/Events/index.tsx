/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import EventBanner from "../../assets/Banner/EventBanner.png";

import { useState } from "react";
import { useFetchEvent } from "../../api/HomeApi";
import { BaseURL } from "../../api/axiosSetup";
import { CalendarIcon, ClockIcon, PinIcon } from "../../assets/icons";
import { Banner } from "../../component/Banner";
export default function Events() {
  const [displayCount, setDisplayCount] = useState(3);
  const [noOfLines, setNoOfLines] = useState(5);
  const handleExpand = () => {
    setNoOfLines(100);
  };
  const handleCompress = () => {
    setNoOfLines(5);
  };
  const { data } = useFetchEvent();
  return (
    <Flex flexDir={"column"}>
      <Banner
        title=" Events"
        image={EventBanner}
        subtitle="Learn About our events here"
      />
      <Container maxW={{ base: "95vw", md: "85vw", lg: "75vw" }} p={4}>
        {data?.length > 0 ? (
          data.slice(0, displayCount).map((event: any) => (
            <Flex
              key={event.id}
              flexDir={"column"}
              justify={"center"}
              gap={4}
              py={4}
            >
              <Heading size={{ base: "md", md: "lg", lg: "xl" }} mt={10}>
                {event.title}
              </Heading>
              <Flex justify={"center"} gap={10}>
                <Image
                  border={"1px solid #7884B6"}
                  w={"100%"}
                  objectFit={"cover"}
                  objectPosition={"center"}
                  h={{ base: "250px", md: "350px", lg: "450px" }}
                  src={`${BaseURL}/${event.image}`}
                  alt={event.title}
                />
              </Flex>
              <HStack
                justify={"space-evenly"}
                spacing={4}
                gap={2}
                flexWrap={"wrap"}
              >
                <Flex align={"center"} justify={"center"} gap={2}>
                  <CalendarIcon boxSize={5} />
                  <Text
                    fontWeight={600}
                    fontSize={{ base: "16px", md: "20px" }}
                  >
                    {event.start_date}
                  </Text>
                </Flex>

                <Flex align={"center"} justify={"center"} gap={2}>
                  <PinIcon boxSize={6} />
                  <Text
                    fontWeight={600}
                    fontSize={{ base: "16px", md: "20px" }}
                  >
                    {event.location}
                  </Text>
                </Flex>
                <Flex align={"center"} justify={"center"} gap={2}>
                  <ClockIcon boxSize={6} />
                  <Text
                    fontWeight={600}
                    fontSize={{ base: "16px", md: "20px" }}
                  >
                    {event.start_time} - {event.end_time}
                  </Text>
                </Flex>
              </HStack>
              <Text
                lineHeight={2}
                fontWeight={500}
                textAlign={"center"}
                fontSize={{ base: "16px", md: "18px" }}
                noOfLines={noOfLines}
              >
                {event.description}
              </Text>
              {noOfLines !== 100 && (
                <Button
                  onClick={handleExpand}
                  variant={"transparent"}
                  w={"fit-content"}
                  p={0}
                >
                  Read More
                </Button>
              )}
              {noOfLines !== 5 && (
                <Button
                  variant={"transparent"}
                  w={"fit-content"}
                  p={0}
                  onClick={handleCompress}
                >
                  Read Less
                </Button>
              )}
            </Flex>
          ))
        ) : (
          <Flex justify={"center"} align={"center"}>
            <Text>No Events Available ...</Text>
          </Flex>
        )}
        {displayCount < data?.length && (
          <Stack align={"center"}>
            <Button
              size={"sm"}
              onClick={() => setDisplayCount(displayCount + 3)}
              variant={"primary"}
              w={"fit-content"}
            >
              Load More
            </Button>
          </Stack>
        )}
      </Container>
    </Flex>
  );
}
