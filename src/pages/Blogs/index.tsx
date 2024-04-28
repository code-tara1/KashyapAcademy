import BlogBanner from "../../assets/Banner/BlogsBanner.png";
import { Banner } from "../../component/Banner";
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardBody,
  Container,
  Flex,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useFetchBlogs, useFetchSchool } from "../../api";
import { BaseURL } from "../../api/axiosSetup";
import { Facebook, Instagram, LinkedIn } from "../../assets/SocailIcons";
import { RightArrow } from "../../assets/icons";
import { CKEditor } from "../../component/CkEditor";
export const Blogs = () => {
  const { data } = useFetchSchool();
  const { data: blogData } = useFetchBlogs();
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  return (
    <Flex flexDir={"column"}>
      <Banner image={BlogBanner} title="Blogs" subtitle="Read about us" />
      <Container maxW={"95vw"} py={20}>
        <Flex gap={10}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={4}
            w={{ md: "60%", lg: "70%" }}
          >
            {blogData?.length > 0 ? (
              blogData.map((blog: any) => (
                <GridItem key={blog.id} colSpan={1}>
                  <Card
                    borderRadius={"none"}
                    border={"none"}
                    borderBottom={"0.5px solid"}
                    borderBottomColor={"#6A6B6C"}
                    shadow={"none"}
                  >
                    <Image
                      objectPosition={"center"}
                      objectFit={"cover"}
                      h={{ base: 300, sm: 400 }}
                      border={"1px solid #6A6B6C"}
                      borderRadius={"10px"}
                      src={`${BaseURL}/${blog.image}`}
                    />

                    <CardBody>
                      <Stack gap={2}>
                        <Text
                          fontWeight={600}
                          fontSize={{ base: "18px", md: "20px" }}
                        >
                          {blog.heading}
                        </Text>
                        <Text fontSize={{ base: "14px", md: "16px" }}>
                          {blog.date}
                        </Text>
                        <CKEditor noOfLines={5} data={blog.content} />

                        <Flex
                          role="group"
                          as={Link}
                          to={`/${path}/blogs/${blog.id}`}
                          align={"center"}
                          textColor={"primary.500"}
                        >
                          <Text fontSize={{ base: "14px", md: "16px" }}>
                            Learn More
                          </Text>
                          <RightArrow
                            _groupHover={{
                              transform: "translateX(5px)",
                              transition: "all 0.3s",
                            }}
                            boxSize={6}
                          />
                        </Flex>
                      </Stack>
                    </CardBody>
                  </Card>
                </GridItem>
              ))
            ) : (
              <Flex justify={"center"} align={"center"}>
                <Text>No Blogs Available ...</Text>
              </Flex>
            )}
          </SimpleGrid>

          <Flex
            display={{ base: "none", md: "flex" }}
            flexDir={"column"}
            gap={4}
            w={{ base: "100%", md: "40%", lg: "30%" }}
          >
            <Text fontSize={{ base: "24px", md: "28px" }} fontWeight={500}>
              Recent Posts
            </Text>
            {blogData?.length > 0 ? (
              blogData.slice(0, 5).map((blog: any) => (
                <Card
                  as={Link}
                  to={`/${path}/blogs/${blog.id}`}
                  borderRadius={"none"}
                  border={"none"}
                  borderBottom={"0.5px solid"}
                  borderBottomColor={"#6A6B6C"}
                  shadow={"none"}
                  key={blog.id}
                >
                  <Flex gap={2}>
                    <Image
                      objectPosition={"center"}
                      objectFit={"cover"}
                      h={"80px"}
                      border={"1px solid #6A6B6C"}
                      borderRadius={"10px"}
                      src={blog.image}
                    />
                    <CardBody>
                      <Text
                        fontWeight={600}
                        fontSize={{ base: "18px", md: "20px" }}
                        noOfLines={2}
                      >
                        {blog.title}
                      </Text>
                      <Text fontSize={{ base: "14px", md: "16px" }}>
                        {blog.date}
                      </Text>
                    </CardBody>
                  </Flex>
                </Card>
              ))
            ) : (
              <Text>No Blogs Available ...</Text>
            )}

            <Stack align={"center"} bg={"secondary.100"} borderRadius={"5px"}>
              <Text fontSize={{ base: "18px", md: "22px" }} fontWeight={500}>
                Follow on Social Media
              </Text>
              <HStack justify={"start"} align={"center"}>
                <Link target="_blank" to={data?.facebook}>
                  <Facebook
                    _hover={{ textColor: "#3b5998" }}
                    boxSize={{ base: 8, md: 10 }}
                  />
                </Link>
                <Link target="_blank" to={data?.instagram}>
                  <Instagram
                    _hover={{ textColor: "#c13584" }}
                    boxSize={{ base: 8, md: 10 }}
                  />
                </Link>
                <Link target="_blank" to={data?.linkedin}>
                  <LinkedIn
                    _hover={{ textColor: "#0077b5" }}
                    boxSize={{ base: 8, md: 10 }}
                  />
                </Link>
              </HStack>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
