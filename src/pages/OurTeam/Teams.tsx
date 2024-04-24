/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFetchTeams } from "../../api";

export const Teams = () => {
  const { data } = useFetchTeams();
  console.log(data);
  return (
    <>
      {/* {data?.map((team: any) => (
        <Box bg={team.id === 1 ? "#73DE9E" : "#f2f2f2"} key={team.id}>
          <Container
            maxW={{
              base: "container.xl",
              md: "container.lg",
              xl: "container.xl",
            }}
          >
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={10} p={10}>
              <GridItem colSpan={1}>
                <Box>
                  <Heading size={{ base: "md", md: "lg" }}>Team 1</Heading>
                </Box>
              </GridItem>
              {[...Array(7)].map((_, index) => (
                <GridItem colSpan={1} key={index}>
                  <Card
                    boxShadow={"0px 13px 19px 0px rgba(0, 0, 0, 0.07)"}
                    borderRadius={"20px"}
                    overflow={"hidden"}
                  >
                    <Image
                      src="https://bit.ly/sage-adebayo"
                      alt="Segun Adebayo"
                    />
                    <CardBody>
                      <Stack justify={"center"}>
                        <Heading size="md">Segun Adebayo</Heading>
                        <Heading size="sm">UI/UX Designer</Heading>
                      </Stack>
                    </CardBody>
                  </Card>
                </GridItem>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      ))} */}
    </>
  );
};
