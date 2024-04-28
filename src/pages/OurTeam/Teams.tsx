/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Card,
  CardBody,
  Container,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useFetchTeams } from "../../api";

export const Teams = () => {
  const { data } = useFetchTeams();
  console.log(data);
  return (
    <>
      {data?.map((team: any, index: number) => (
        <Box bg={team.id === 1 ? "#73DE9E" : "#FFF"} key={team.id}>
          <Container
            maxW={{
              base: "95vw",
              md: "85vw",
              lg: "80vw",
            }}
            borderBottom={
              team?.id !== 1 && index === data?.length - 2
                ? "1px solid #000"
                : ""
            }
            borderColor={"secondary.500"}
            py={10}
          >
            {/* <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} p={4}>
              <GridItem colSpan={1}>
                <Box>
                  <Text
                    fontWeight={700}
                    fontSize={{
                      base: "24px",
                      sm: "26px",
                      md: "28px",
                      lg: "28px",
                    }}
                  >
                    {team?.title}
                  </Text>
                  <Text noOfLines={5} fontSize={{ base: "sm", md: "md" }}>
                    {team?.description}
                  </Text>
                </Box>
              </GridItem>

              {team?.teams.map((member: any) => (
                <GridItem colSpan={1} key={member?.id} h={"100%"}>
                  <Card
                    boxShadow={"0px 13px 19px 0px rgba(0, 0, 0, 0.07)"}
                    borderRadius={"20px"}
                    overflow={"hidden"}
                    w={"90%"}
                  >
                    <Image
                      src={`http://127.0.0.1:8000${member?.image}`}
                      alt={member?.title}
                    />
                    <CardBody>
                      <Stack
                        justify={"center"}
                        align={"center"}
                        textAlign={"center"}
                      >
                        <Text
                          fontSize={{ base: "14px", md: "16px" }}
                          fontWeight={700}
                          textColor={"#252B42"}
                        >
                          {member?.name}
                        </Text>
                        <Text
                          letterSpacing={0.2}
                          fontSize={{ base: "12px", md: "14px" }}
                        >
                          {member?.position}
                        </Text>
                      </Stack>
                    </CardBody>
                  </Card>
                </GridItem>
              ))}
            </SimpleGrid> */}

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 400: 2, 900: 3, 1200: 4 }}
              style={{
                padding: "20px",
              }}
            >
              <Masonry gutter={"20px"}>
                <Box>
                  <Text
                    fontWeight={700}
                    fontSize={{
                      base: "24px",
                      sm: "26px",
                      md: "28px",
                      lg: "28px",
                    }}
                  >
                    {team?.title}
                  </Text>
                  <Text noOfLines={6} fontSize={{ base: "sm", md: "md" }}>
                    {team?.description}
                  </Text>
                </Box>
                {team?.teams.slice(0, 3).map((member: any) => (
                  <>
                    <Card
                      key={member?.id}
                      boxShadow={"0px 13px 19px 0px rgba(0, 0, 0, 0.07)"}
                      borderRadius={"20px"}
                      overflow={"hidden"}
                    >
                      <Image src={`http://127.0.0.1:8000${member?.image}`} />
                      <CardBody overflow={"clip"}>
                        <Stack
                          justify={"center"}
                          align={"center"}
                          textAlign={"center"}
                        >
                          <Text
                            fontSize={{ base: "14px", md: "16px" }}
                            fontWeight={700}
                            textColor={"#252B42"}
                          >
                            {member?.name}
                          </Text>
                          <Text
                            letterSpacing={0.2}
                            fontSize={{ base: "12px", md: "14px" }}
                          >
                            {member?.position}
                          </Text>
                        </Stack>
                      </CardBody>
                    </Card>
                  </>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </Container>
        </Box>
      ))}
    </>
  );
};
