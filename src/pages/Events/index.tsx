import { Flex } from "@chakra-ui/react";
import EventBanner from "../../assets/Banner/EventBanner.png";

import { Banner } from "../../component/Banner";
import { EventSection } from "./EventSection";

export default function Events() {
  return (
    <Flex flexDir={"column"}>
      <Banner
        title=" Events"
        image={EventBanner}
        subtitle="Learn About our events here"
      />
      <EventSection />
    </Flex>
  );
}
