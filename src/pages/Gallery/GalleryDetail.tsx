/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Flex, Image, Link } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useLocation } from "react-router-dom";
import { BaseURL } from "../../api/axiosSetup";
import { Icon1 } from "../../assets/GalleryIcons";
import { Banner } from "../../component/Banner";
import Fancybox from "../../component/Fancybox";
export const GalleryDetail = () => {
  const location = useLocation();
  const data = location?.state;
  console.log(data);
  return (
    <>
      {data && (
        <Flex flexDir={"column"}>
          <Banner
            image={`${BaseURL}/${data?.item.primary_image}`}
            title={data.item.title}
          />
          <Box py={10} h={"auto"} pos={"relative"}>
            <Container maxW={{ base: "95vw", md: "85vw", lg: "75vw" }}>
              <Fancybox
                options={{
                  Carousel: {
                    infinite: true,
                  },
                  dragToClose: true,
                }}
              >
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 0: 1, 450: 2, 750: 3, 1366: 4 }}
                  style={{
                    border: "1px solid #eaeaea",
                    padding: "10px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    background:
                      " radial-gradient(circle, rgba(229,247,210,1) 0%, rgba(229,247,210,0) 100%)",
                  }}
                >
                  <Masonry columnsCount={4} gutter="15px">
                    {data?.item?.gallery_images.map((gallery: any) => (
                      <Box
                        key={gallery.id}
                        as={Link}
                        href={`${BaseURL}/${gallery.image}`}
                        data-fancybox="gallery"
                        overflow={"hidden"}
                        border={"1px solid #eaeaea"}
                        borderRadius={"10px"}
                      >
                        <Image
                          w={"100%"}
                          objectPosition={"center"}
                          objectFit={"cover"}
                          _hover={{
                            transform: "scale(1.05)",
                            transition: "all 0.5s",
                          }}
                          key={gallery.id}
                          src={`${BaseURL}/${gallery.image}`}
                          alt={gallery.title}
                        />
                      </Box>
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              </Fancybox>
            </Container>

            <Icon1
              opacity={0.7}
              pos={"absolute"}
              top={0}
              right={{ base: 12, md: 20, lg: 28 }}
              zIndex={-2}
              boxSize={{ base: 100, md: 188, lg: 226 }}
            />
          </Box>
        </Flex>
      )}
    </>
  );
};
