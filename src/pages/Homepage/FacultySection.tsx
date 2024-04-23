/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Badge,
  Button,
  Container,
  Flex,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useFetchFaculty } from "../../api/HomeApi";
import { FacultyData } from "../../utils/DataTypes";

export const FacultySection = () => {
  const { data } = useFetchFaculty();

  return (
    <Container maxW={{ base: "95vw", md: "90vw", lg: "80vw" }} py={2}>
      <Heading size={{ base: "md", md: "lg", lg: "xl" }} mb={6}>
        Faculties
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={10}
        alignItems={"center"}
        justifyItems={"center"}
      >
        {data?.map(({ id, title, icon, courses }: FacultyData) => (
          <GridItem key={id} colSpan={1} w={"full"}>
            <Flex
              role="group"
              bg={`url(http://127.0.0.1:8000${icon})`}
              _hover={{
                bg: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%), url(http://127.0.0.1:8000${icon}) no-repeat top center/cover`,
              }}
              bgSize={"cover"}
              bgPos={"top"}
              bgRepeat={"no-repeat"}
              w={"100%"}
              align={"center"}
              justify={"center"}
              textColor={"white"}
              h={{ base: "350px", sm: "400px", md: "450px", lg: "500px" }}
              key={id}
              borderRadius={"10px"}
              pos={"relative"}
              overflowWrap={"break-word"}
              overflow={"auto"}
            >
              <Text
                fontWeight={600}
                fontSize={{ base: "22px", sm: "24px", md: "26px", lg: "28px" }}
              >
                {title}
              </Text>

              <Button
                _groupHover={{ variant: "secondary" }}
                pos={"absolute"}
                top={0}
                right={4}
                variant={"primary"}
                size={"sm"}
                borderRadius={"5px"}
                mt={4}
              >
                Our Courses
              </Button>
              <HStack
                gap={2}
                pos={"absolute"}
                bottom={5}
                left={0}
                overflow={"wrap"}
              >
                {courses?.map(({ id, title }: any, index: number) => (
                  <Badge
                    variant={"normal"}
                    borderRadius={"5px"}
                    w={"100px"}
                    textOverflow={"clip"}
                    bg={
                      index === 0
                        ? "red.400"
                        : index === 1
                        ? "blue.400"
                        : index === 2
                        ? "green.400"
                        : "yellow.400"
                    }
                    key={id}
                  >
                    {title}
                  </Badge>
                ))}
              </HStack>
            </Flex>
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  );
};
