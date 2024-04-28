/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Card,
  CardFooter,
  CardHeader,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useFetchTestimonial } from "../../api/HomeApi";
import { BaseURL } from "../../api/axiosSetup";
import TestimonialBanner from "../../assets/Banner/Testimonial.png";
import { Slider } from "../../component/Slider";
export const TestimonialSection = () => {
  const { data } = useFetchTestimonial();
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  };
  return (
    <Box
      bg={`url(${TestimonialBanner})`}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPos={"center"}
      py={{ base: 1, md: 10 }}
    >
      <Container maxW={{ base: "99vw", md: "90vw", lg: "80vw" }} p={10}>
        <Box>
          <Heading size={{ base: "md", md: "lg", lg: "xl" }} mb={2}>
            Testimonials
          </Heading>
        </Box>
        <Slider
          noOfSlides={3}
          speed={1000}
          loop={true}
          space={10}
          breakpoints={breakpoints}
        >
          {data?.map(({ id, name, designation, description, image }: any) => (
            <SwiperSlide key={id} className="swiper-items swiper-activities">
              <Card
                role="group"
                shadow={"none"}
                w={{ base: "250px", md: "350px", lg: "400px" }}
                h={"250px"}
                overflow={"hidden"}
              >
                <CardHeader
                  h={200}
                  alignContent={"center"}
                  textAlign={"center"}
                >
                  <Text
                    noOfLines={4}
                    fontSize={{ base: "16px", md: "18px" }}
                    mt={2}
                  >
                    {description}
                  </Text>
                </CardHeader>
                <CardFooter alignSelf={"center"}>
                  <HStack align={"center"} gap={4}>
                    <Image
                      w={12}
                      src={`${BaseURL}/${image}`}
                      borderRadius={"full"}
                      alt={name}
                    />
                    <Stack gap={0} textAlign={"center"}>
                      <Text
                        fontSize={{
                          base: "14px",
                          md: "16px",
                        }}
                        fontWeight={700}
                      >
                        {name}
                      </Text>
                      <Text
                        textColor={"#737373"}
                        fontSize={"12px"}
                        fontWeight={400}
                      >
                        {designation}
                      </Text>
                    </Stack>
                  </HStack>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};
