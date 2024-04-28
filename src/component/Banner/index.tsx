import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

type BannerProps = {
  image: string;
  bg?: string;
  title?: string;
  subtitle?: string;
};

export const Banner = ({ image, title, subtitle, bg }: BannerProps) => {
  return (
    <Box
      bg={
        bg
          ? `linear-gradient(180deg, rgba(98, 195, 0, 0.40) 0%, rgba(255, 111, 6, 0.40) 100%)`
          : ``
      }
      h={{ base: "200px", md: "400px", lg: "500px" }}
      bgPosition={"center"}
      p={4}
      pos={"relative"}
    >
      <Image
        src={image}
        loading="lazy"
        pos={"absolute"}
        objectFit={"cover"}
        objectPosition={"top"}
        w={"100%"}
        top={0}
        left={0}
        h={"100%"}
      />
      <Flex h={"100%"} justify={"center"} align={"center"} color={"white"}>
        <Stack align={"center"}>
          <Text
            fontSize={{ base: "20px", sm: "24px", md: "28px", lg: "32px" }}
            fontWeight={500}
          >
            {title}
          </Text>
          <Text
            fontSize={{ base: "16px", sm: "18px", md: "22px", lg: "26px" }}
            fontWeight={400}
          >
            {subtitle}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};
