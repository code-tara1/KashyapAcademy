/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetchGallery } from "../../api/HomeApi";
import { BaseURL } from "../../api/axiosSetup";
import GalleryBanner from "../../assets/Banner/Gallery.png";
import { Icon1 } from "../../assets/GalleryIcons";
export const GallerySection = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const navigate = useNavigate();
  const { data } = useFetchGallery();

  return (
    <>
      {data && data.length > 0 && (
        <Box
          bg={`url(${GalleryBanner}) no-repeat center center`}
          py={10}
          pos={"relative"}
        >
          <Stack justify={"center"}>
            <Heading
              size={{ base: "md", md: "lg", lg: "xl" }}
              textAlign="center"
            >
              Image Gallery
            </Heading>
            <Container
              maxW={{ base: "95vw", md: "85vw", lg: "75vw" }}
              py={{ base: 4, md: 10, lg: 20 }}
            >
              {data && (
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 0: 1, 450: 2, 1200: 3 }}
                >
                  <Masonry columnsCount={4} gutter="10px">
                    {data?.slice(0, 10).map((item: any) => (
                      <Flex
                        bg={`url(${BaseURL}/${item.primary_image})`}
                        _hover={{
                          bg: `linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${BaseURL}${item.primary_image})`,
                          bgSize: "cover",
                          bgPosition: "center",
                          bgRepeat: "no-repeat",
                        }}
                        cursor={"pointer"}
                        h={"300px"}
                        bgSize={"cover"}
                        bgPosition={"center"}
                        bgRepeat={"no-repeat"}
                        borderRadius={"10px"}
                        key={item.id}
                        transition={"all 0.3s"}
                        p={4}
                        role="group"
                        align={"end"}
                        justify={"center"}
                        onClick={() =>
                          navigate(`/${path}/gallery/${item.id}`, {
                            state: { item },
                          })
                        }
                      >
                        <Text
                          opacity={0}
                          _groupHover={{ opacity: 1 }}
                          fontWeight={500}
                          fontSize={{ base: "16px", md: "18px", lg: "24px" }}
                          textColor={"white"}
                        >
                          {item.title}
                        </Text>
                      </Flex>
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              )}
              {data?.length > 10 && (
                <Stack align={"center"} justify={"center"} mt={10}>
                  <Button
                    onClick={() => navigate("/gallery")}
                    variant={"primary"}
                    w={"fit-content"}
                  >
                    View More
                  </Button>
                </Stack>
              )}
            </Container>
          </Stack>

          <Icon1
            opacity={0.7}
            pos={"absolute"}
            top={0}
            right={{ base: 12, md: 20, lg: 28 }}
            zIndex={-2}
            boxSize={{ base: 100, md: 188, lg: 226 }}
          />
        </Box>
      )}
    </>
  );
};
