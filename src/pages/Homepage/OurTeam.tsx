/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Card, Container, Heading, Stack, Text } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useFetchTeam } from "../../api/HomeApi";
import { BaseURL } from "../../api/axiosSetup";
import { Slider } from "../../component/Slider";

export const OurTeam = () => {
  const { data } = useFetchTeam();
  const team = data?.find((item: any) => item.id === 1);

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    895: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1270: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  };
  return (
    <LazyLoad offset={100} height={100}>
      <Box bg={"#F2F2F2"} py={{ base: 1, md: 10 }}>
        <Container
          key={team?.id}
          maxW={{ base: "95vw", md: "90vw", lg: "80vw" }}
          py={4}
        >
          <Box>
            <Heading size={{ base: "md", md: "lg", lg: "xl" }} pl={8} mb={2}>
              Our Team
            </Heading>
            <Text fontSize={{ base: "14px", md: "16px" }} pl={8}>
              {team?.description}
            </Text>
          </Box>
          <Slider
            noOfSlides={4}
            breakpoints={breakpoints}
            space={10}
            loop={true}
            speed={1000}
          >
            {team &&
              team.teams.map((item: any) => (
                <SwiperSlide
                  key={item.id}
                  className="swiper-items swiper-activities"
                >
                  <Card
                    borderRadius={"10px"}
                    role="group"
                    align={"center"}
                    shadow={"none"}
                    w={"238px"}
                    h={"320px"}
                    overflow={"hidden"}
                  >
                    <Box
                      w={"full"}
                      h={250}
                      bg={`url(${BaseURL}/${item.image}) no-repeat center center/cover`}
                    />

                    <Stack gap={1} mt={2} textAlign={"center"}>
                      <Text
                        fontSize={{
                          base: "14px",
                          md: "16px",
                        }}
                        fontWeight={700}
                      >
                        {item.name}
                      </Text>
                      <Text
                        textColor={"#737373"}
                        fontSize={"12px"}
                        fontWeight={400}
                      >
                        {item.position}
                      </Text>
                    </Stack>
                  </Card>
                </SwiperSlide>
              ))}
          </Slider>
        </Container>
      </Box>
    </LazyLoad>
  );
};
