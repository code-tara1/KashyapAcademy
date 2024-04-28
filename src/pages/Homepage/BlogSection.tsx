/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import LazyLoad from "react-lazyload";
import { useFetchBlog } from "../../api/HomeApi";
import { BaseURL } from "../../api/axiosSetup";

export const BlogSection = () => {
  const { data } = useFetchBlog();
  return (
    <LazyLoad offset={100}>
      <Box bg={""} py={{ base: 1, md: 10 }}>
        <Container maxW={{ base: "95vw", md: "90vw", lg: "80vw" }} py={4}>
          <Box>
            <Heading size={{ base: "md", md: "lg", lg: "xl" }} pl={8} mb={2}>
              Blogs & News
            </Heading>
            {data?.length === 0 && (
              <Flex justify={"center"} align={"center"}>
                <Text fontSize={"lg"}>No blogs available...</Text>
              </Flex>
            )}
            <SimpleGrid
              columns={[1, 2, 3]}
              spacing={4}
              py={4}
              alignItems={"center"}
            >
              {data?.map((blog: any) => (
                <GridItem key={blog.id} colSpan={1}>
                  <Card
                    key={blog.id}
                    bg={"white"}
                    role="group"
                    variant={"normal"}
                    borderRadius={"20px"}
                    boxShadow={"0px 0px 40px 0px rgba(0, 0, 0, 0.08)"}
                    justifySelf={"center"}
                  >
                    <CardHeader borderRadius={10} overflow={"hidden"}>
                      <Image
                        w={"full"}
                        h={"full"}
                        borderRadius={10}
                        src={`${BaseURL}/${blog.image}`}
                        alt={blog.title}
                      />
                    </CardHeader>
                    <CardBody mt={0}>
                      <Heading noOfLines={2} size="md" mb={2}>
                        {blog.title}
                      </Heading>
                      <Box>{blog.content}</Box>
                      <Box>
                        <Flex justify={"space-between"} my={4}>
                          <Button
                            w={"fit-content"}
                            size={{ base: "xs", md: "sm" }}
                            variant={"primary"}
                          >
                            Read More
                          </Button>
                        </Flex>
                      </Box>
                      <Box bg={"#6A6B6C"} p={0.2} mt={4} stroke={"0.5px"} />
                    </CardBody>
                  </Card>
                </GridItem>
              ))}
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </LazyLoad>
  );
};
