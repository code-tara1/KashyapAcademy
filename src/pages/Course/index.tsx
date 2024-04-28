/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Container,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useFetchFaculty } from "../../api";
import CourseBanner from "../../assets/Banner/CoueseBanner1.png";
import { Banner } from "../../component/Banner";
import { CKEditor } from "../../component/CkEditor";
import LoadingScreen from "../Loading";

export const Course = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetchFaculty(parseInt(id!));
  console.log(data);

  return (
    <Flex flexDir={"column"}>
      <Banner bg="" title="Courses" image={CourseBanner} />
      {isLoading ? (
        <Flex justify={"center"} align={"center"} h={"20vh"} py={10}>
          <LoadingScreen />
        </Flex>
      ) : (
        <>
          {data ? (
            <Container maxW={{ base: "95vw", md: "90vw" }} py={10}>
              <Flex flexDir={"column"} gap={4}>
                <Text
                  textColor={"secondary.500"}
                  fontSize={{ base: "20px", md: "24px" }}
                  fontWeight={600}
                >
                  Department of {data?.faculty?.title}
                </Text>
                {<CKEditor data={data?.faculty.description} />}

                <Text
                  textColor={"secondary.500"}
                  fontSize={{ base: "20px", md: "24px" }}
                  fontWeight={600}
                >
                  Program Content
                </Text>
                <Flex justify={"center"} align={"center"} mt={10}>
                  <TableContainer w={{ md: "50%" }}>
                    <Table size={"md"} variant="striped">
                      <Thead>
                        <Tr bg={"primary.500"}>
                          <Th
                            fontSize={{
                              base: "18px",
                              sm: "20px",
                              md: "22px",
                              lg: "24px",
                            }}
                            fontWeight={600}
                            textAlign={"center"}
                            colSpan={50}
                            textColor={"white"}
                          >
                            {data?.faculty?.title}
                          </Th>
                        </Tr>
                        <Tr bg={"secondary.500"}>
                          <Th
                            fontSize={{
                              base: "16px",
                              sm: "18px",
                              md: "20px",
                              lg: "22px",
                            }}
                            fontWeight={600}
                            textAlign={"center"}
                            textColor={"white"}
                          >
                            Grade XI
                          </Th>
                          <Th
                            fontSize={{
                              base: "16px",
                              sm: "18px",
                              md: "20px",
                              lg: "22px",
                            }}
                            fontWeight={600}
                            textAlign={"center"}
                            textColor={"white"}
                          >
                            Grade XII
                          </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {data?.courses.map((course: any) => (
                          <React.Fragment key={course.id}>
                            {Array.from({
                              length: Math.max(
                                course["11"].length,
                                course["12"].length
                              ),
                            }).map((_, index) => (
                              <Tr key={index}>
                                <Td
                                  fontSize={{
                                    base: "14px",
                                    sm: "16px",
                                    md: "18px",
                                    lg: "20px",
                                  }}
                                  fontWeight={400}
                                  textAlign={"center"}
                                >
                                  {course["11"][index].title}
                                </Td>
                                <Td
                                  fontSize={{
                                    base: "14px",
                                    sm: "16px",
                                    md: "18px",
                                    lg: "20px",
                                  }}
                                  fontWeight={400}
                                  textAlign={"center"}
                                >
                                  {course["12"][index].title}
                                </Td>
                              </Tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Flex>
              </Flex>
            </Container>
          ) : (
            <Flex justify={"center"} align={"center"} py={10}>
              <Text>No Courses Found ...</Text>
            </Flex>
          )}
        </>
      )}
    </Flex>
  );
};
