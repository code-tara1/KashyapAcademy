import { Flex, Link, Stack, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

const LinksData = [
  {
    id: 1,
    title: "Home",
    to: "",
  },
  {
    id: 2,
    title: "About",
    to: "about",
  },
  {
    id: 3,
    title: "Contact",
    to: "contact",
  },
  {
    id: 4,
    title: "Services",
    to: "services",
  },
];

export const Links = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  return (
    <Flex flexDir={"column"} gap={4}>
      <Text fontSize={{ base: "18px", md: "20px" }} fontWeight={700}>
        Links
      </Text>
      <Stack spacing={4}>
        {LinksData.map((link) => (
          <Link
            textColor={"#6A6B6C"}
            fontWeight={400}
            _hover={{ color: "#000", textDecoration: "none", fontWeight: 500 }}
            fontSize={{ base: "16px", md: "18px" }}
            as={NavLink}
            reloadDocument
            to={`/${path}/${link.to}`}
            key={link.id}
          >
            {link.title}
          </Link>
        ))}
      </Stack>
    </Flex>
  );
};
