import { Box, Flex, Stack, Text } from "@chakra-ui/react";

type BannerProps = {
  image: string;
  title: string;
  subtitle?: string;
};

export const Banner = ({ image, title, subtitle }: BannerProps) => {
  return (
    <Box
      bg={`url(${image})`}
      h={{ base: "200px", md: "400px", lg: "600px" }}
      bgSize={"cover"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      p={4}
    >
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
