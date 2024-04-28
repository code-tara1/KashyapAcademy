/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetchGallery } from "../../api/HomeApi";
import { BaseURL } from "../../api/axiosSetup";
import GalleryBanner from "../../assets/Banner/Gallery.png";
import { Icon1 } from "../../assets/GalleryIcons";
export const Gallery = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const navigate = useNavigate();
  const { data } = useFetchGallery();

  return (
    <Container maxW={{ base: "95vw", md: "85vw", lg: "75vw" }}>
      <Box
        bg={`url(${GalleryBanner}) no-repeat center center`}
        py={10}
        pos={"relative"}
      >
        <Stack justify={"center"}>
          <Heading size={{ base: "md", md: "lg", lg: "xl" }} textAlign="center">
            Image Gallery
          </Heading>
          <Container
            maxW={{ base: "95vw", md: "85vw", lg: "75vw" }}
            py={{ base: 4, md: 10, lg: 20 }}
          >
            {data?.length > 0 ? (
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 0: 1, 450: 2, 1200: 3 }}
              >
                <Masonry columnsCount={4} gutter="10px">
                  {data?.slice(0, 10).map((item: any) => (
                    <Flex
                      bg={`url(${BaseURL}/${item.primary_image}) no-repeat center/cover`}
                      _hover={{
                        bg: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%), url(http://127.0.0.1:8000${item.primary_image}) no-repeat top center/cover`,
                      }}
                      cursor={"pointer"}
                      h={"300px"}
                      borderRadius={"10px"}
                      key={item.id}
                      transition={"all 0.3s"}
                      role="group"
                      align={"end"}
                      overflow={"hidden"}
                      onClick={() =>
                        navigate(`/${path}/gallery/${item.id}`, {
                          state: { item },
                        })
                      }
                    >
                      <Box
                        opacity={0}
                        _groupHover={{ opacity: 1, transition: "all 0.5s" }}
                        py={1}
                        px={2}
                        bg={"rgba(0,0,0,0.6)"}
                        w={"full"}
                      >
                        <Text
                          fontWeight={500}
                          fontSize={{ base: "16px", md: "18px", lg: "24px" }}
                          textColor={"white"}
                        >
                          {item.title}
                        </Text>
                      </Box>
                    </Flex>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            ) : (
              <Flex justify={"center"}>
                <Text>No Images Available ...</Text>
              </Flex>
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
    </Container>
  );
};
