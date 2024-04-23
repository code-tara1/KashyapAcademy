import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Image,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { navItems } from "./data";

export const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const pathName = path.split("/")[1];
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Flex as={"nav"} p={4} borderBottom={"1px solid #CACACA"}>
      <Container maxW={{ base: "95vw", md: "90vw" }}>
        <Flex justifyContent={"space-between"}>
          <Box>
            <Image src={Logo} w={{ base: 150, md: 200 }} alt="Kasyap Academy" />
          </Box>
          <Button
            display={{ base: "block", md: "none" }}
            variant={"primary"}
            onClick={onOpen}
          >
            <HamburgerIcon />
          </Button>
          <HStack display={{ base: "none", md: "flex" }} spacing={4}>
            {navItems.map(({ id, name, to }) => (
              <Link
                fontSize={{ base: "14px", md: "16px" }}
                as={NavLink}
                key={id}
                _hover={{
                  textDecoration: "none",
                  borderBottom: "2px solid #FF4900",
                }}
                _activeLink={{
                  borderBottom:
                    path === `/${pathName}/${to}` ? "2px solid #FF4900" : "",
                }}
                borderBottom={"2px solid transparent"}
                to={
                  path.startsWith("/school")
                    ? `/school/${to}`
                    : `/college/${to}`
                }
              >
                {name}
              </Link>
            ))}
          </HStack>
        </Flex>
      </Container>
      <Drawer size={"full"} isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <Flex flexDir={"column"} p={4} py={32} align={"center"} gap={6}>
            {navItems.map(({ id, name, to }) => (
              <Link
                fontSize={"20px"}
                as={NavLink}
                key={id}
                _hover={{ textDecoration: "none" }}
                _activeLink={{
                  borderBottom:
                    path === `/school/${to}` || path === `/college/${to}`
                      ? "2px solid #FF4900"
                      : "",
                }}
                borderBottom={"2px solid transparent"}
                to={
                  path.startsWith("/school")
                    ? `/school/${to}`
                    : `/college/${to}`
                }
                onClick={onClose}
              >
                {name}
              </Link>
            ))}
          </Flex>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
