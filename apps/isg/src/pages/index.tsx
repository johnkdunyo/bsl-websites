import SiteLayout from "@/components/Layout/SiteLayout";
import AboutSection from "@/components/infraServices/AboutSection";
import HeroSection from "@/components/infraServices/HeroSection";
import OurSolutionSection from "@/components/infraServices/OurSolutionSection";
import ReliableSection from "@/components/infraServices/ReliableSection";
import WeAreWhenYouNeedUsSection from "@/components/infraServices/WeAreWhenYouNeedUsSection";
import React from "react";

const Isg = () => {
  return (
    <SiteLayout pageName={"Infra Services"}>
      <>
        <HeroSection />
        <AboutSection />
        <ReliableSection />
        <OurSolutionSection />
        <WeAreWhenYouNeedUsSection />
      </>
    </SiteLayout>
  );
};

export default Isg;
