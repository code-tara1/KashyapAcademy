import { Flex, Link, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const ContactData = [
  {
    id: 1,
    title: "+91 1234567890",
    to: "tel:+91 1234567890",
  },
  {
    id: 2,
    title: "contact@kashyap.com",
    to: "mailto:contact@kashyap.com",
  },
  {
    id: 4,
    title: "Sahid Basu Smitri Marg, Kathmandu 44600",
    to: "https://maps.app.goo.gl/vRYN6YbbjNYYrAx2A",
  },
];

export const Contact = () => {
  return (
    <Flex flexDir={"column"} gap={4}>
      <Text fontSize={{ base: "18px", md: "20px" }} fontWeight={700}>
        Resources
      </Text>
      <Stack spacing={4}>
        {ContactData.map((link) => (
          <Link
            textColor={"#6A6B6C"}
            fontWeight={400}
            _hover={{ color: "#000", textDecoration: "none", fontWeight: 500 }}
            fontSize={{ base: "16px", md: "18px" }}
            as={NavLink}
            to={`${link.to}`}
            key={link.id}
          >
            {link.title}
          </Link>
        ))}
      </Stack>
    </Flex>
  );
};
