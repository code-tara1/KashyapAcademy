import { Flex } from "@chakra-ui/react";
import TeamBanner from "../../assets/Banner/OurTeam.png";
import { Banner } from "../../component/Banner";
import { Teams } from "./Teams";

export const OurTeam = () => {
  return (
    <Flex flexDir={"column"}>
      <Banner
        image={TeamBanner}
        title={"Our Team"}
        subtitle="Learn about our team here"
      />
      <Teams />
    </Flex>
  );
};
