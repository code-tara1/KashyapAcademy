/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Container,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import LazyLoad from "react-lazyload";
import { NavLink, useLocation } from "react-router-dom";
import { useFetchFaculty } from "../../api/HomeApi";
import { BaseURL } from "../../api/axiosSetup";
import { FacultyData } from "../../utils/DataTypes";

export const FacultySection = () => {
  const { data } = useFetchFaculty();
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  return (
    <LazyLoad offset={100}>
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
          {data?.map(({ id, title, icon }: FacultyData) => (
            <GridItem key={id} colSpan={1} w={"80%"}>
              <Flex
                role="group"
                bg={`url(${BaseURL}/${icon})`}
                _hover={{
                  bg: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%), url(${BaseURL}/${icon}) no-repeat top center/cover`,
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
                  fontSize={{
                    base: "22px",
                    sm: "24px",
                    md: "26px",
                    lg: "28px",
                  }}
                  opacity={0}
                  transition={"opacity 0.3s"}
                  _groupHover={{ opacity: 1 }}
                >
                  {title}
                </Text>

                <Button
                  as={NavLink}
                  to={`/${path}/course/${id}`}
                  _groupHover={{ bgColor: "secondary.500" }}
                  pos={"absolute"}
                  top={0}
                  right={4}
                  textColor={"white"}
                  bgColor={"primary.500"}
                  size={"sm"}
                  borderRadius={"5px"}
                  mt={4}
                >
                  View Courses
                </Button>
              </Flex>
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </LazyLoad>
  );
};
