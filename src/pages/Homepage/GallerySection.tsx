/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Heading, Image, Stack } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useFetchGallery } from "../../api/HomeApi";
import GalleryBanner from "../../assets/Banner/Gallery.png";
import { Icon1 } from "../../assets/GalleryIcons";
export const GallerySection = () => {
  const { data } = useFetchGallery();
  console.log(data);

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
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 0: 1, 350: 2, 750: 3, 1100: 4 }}
              >
                <Masonry columnsCount={4} gutter="10px">
                  {data?.map((item: any) =>
                    item.gallery_images.map((gallery: any) => (
                      <Image
                        borderRadius={"10px"}
                        w={"auto"}
                        h={"auto"}
                        key={gallery.id}
                        src={`http://127.0.0.1:8000${gallery.image}`}
                        alt={item.title}
                      />
                    ))
                  )}
                </Masonry>
              </ResponsiveMasonry>
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
