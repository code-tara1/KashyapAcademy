import { Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { FacilitySection } from "./FacilitySection";
import { FacultySection } from "./FacultySection";
import { HeroSection } from "./HeroSection";
import { OurFocus } from "./OurFocus";
import { OurTeam } from "./OurTeam";
import { TestimonialSection } from "./TestimonialSection";
import { WhyUsSection } from "./WhyUsSection";

export const HomePage = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  return (
    <Flex flexDir={"column"}>
      <HeroSection />
      <WhyUsSection />
      {path === "college" && <FacultySection />}
      <TestimonialSection />
      <OurFocus />
      <FacilitySection />
      <OurTeam />
    </Flex>
  );
};
