/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useFetchBlogById } from "../../api";
import { BaseURL } from "../../api/axiosSetup";
import { Banner } from "../../component/Banner";
import { CKEditor } from "../../component/CkEditor";

export const BlogDetail = () => {
  const { id } = useParams();
  const { data } = useFetchBlogById(parseInt(id!));

  return (
    <Flex flexDir={"column"}>
      {data && (
        <>
          <Banner image={`${BaseURL}/${data.image}`} />
          <Container maxW={"95vw"} py={20}>
            <Text
              fontWeight={600}
              fontSize={{ base: "22px", sm: "24px", md: "28px", lg: "30px" }}
            >
              {data.heading}
            </Text>
            <CKEditor data={data.content} />
          </Container>
        </>
      )}
    </Flex>
  );
};
