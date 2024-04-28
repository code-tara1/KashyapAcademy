import { Box, Flex, Text } from "@chakra-ui/react";
import { useFetchHomeContent } from "../../api/HomeApi";

export const HeroSection = () => {
  const path = location.pathname.split("/")[1];
  const { data } = useFetchHomeContent(path);

  // const image = `${BaseURL}/${data?.image}`;

  return (
    <Box
      h={{ base: "300px", sm: "400px", md: "600px", lg: "700px" }}
      bg={`url(https://images.unsplash.com/photo-1713689951355-7df0f904e54d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}
      w={"100%"}
      bgPos={"center"}
      bgSize={"cover"}
      display={"flex"}
      alignItems={{ base: "start", md: "center" }}
      bgRepeat={"no-repeat"}
      p={4}
      mb={4}
    >
      <Flex
        flexDir={"column"}
        bg={"rgba(255, 73, 0, 0.59)"}
        w={"fit-content"}
        bottom={10}
        textAlign={"center"}
        p={4}
      >
        <Text
          fontSize={{ base: "18px", sm: "22px", md: "26px", lg: "30px" }}
          color={"white"}
        >
          {data?.title}
        </Text>
        <Text
          fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}
          color={"white"}
        >
          {data?.description}
        </Text>
      </Flex>
    </Box>
  );
};
