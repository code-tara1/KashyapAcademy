import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../component/Navbar";

export const SchoolLayout = () => {
  return (
    <Flex flexDir={"column"}>
      <Navbar />
      <Outlet />
    </Flex>
  );
};
