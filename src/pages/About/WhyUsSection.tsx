import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { whyUsData } from "../Homepage/data";

export default function WhyUsSection() {
  return (
    <Container maxW={{ base: "95vw", md: "85vw" }} py={{ base: 4, md: 10 }}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        py={10}
        justifyItems={"center"}
        spacing={{ base: 10, md: 20 }}
      >
        <GridItem
          order={{ base: 2, md: 1 }}
          w={"100%"}
          colSpan={{ base: 2, md: 1 }}
        >
          <Accordion allowToggle>
            {whyUsData.map((item, index) => (
              <AccordionItem
                borderTop={"0.5px solid #000"}
                borderBottom={
                  index === whyUsData.length - 1 ? "0.5px solid #000" : ""
                }
                key={item.id}
              >
                <AccordionButton p={"10px 0px"}>
                  <Box
                    as="span"
                    fontSize={{
                      base: "18px",
                      sm: "20px",
                      md: "22px",
                      lg: "24px",
                    }}
                    flex="1"
                    textAlign="left"
                    fontWeight={500}
                  >
                    {item.title}
                  </Box>
                  <AccordionIcon fontSize={32} />
                </AccordionButton>

                <AccordionPanel
                  fontSize={{ base: "16px", md: "18px" }}
                  letterSpacing={"0.50px"}
                  pb={4}
                  px={0}
                >
                  {item.body}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </GridItem>
        <GridItem
          order={{ base: 1, md: 2 }}
          w={"100%"}
          colSpan={{ base: 2, md: 1 }}
        >
          <Flex flexDir={"column"}>
            <Heading
              fontSize={{ base: "20px", sm: "22px", md: "26px", lg: "30px" }}
              color={"secondary.500"}
            >
              Why Kashyap Academy?
            </Heading>
            <Text fontSize={{ base: "16px", lg: "18px" }} py={4}>
              Kashyab Academy, offers a unique educational experience blending
              spiritual principles, scientific inquiry, and entrepreneurial
              skills. With a curriculum spanning spirituality, science, and
              entrepreneurship, students engage in mindfulness practices,
              rigorous STEM studies, and business education.
            </Text>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
