import SiteLayout from "@/components/Layout/SiteLayout";
import AboutSection from "@/components/digitalPayments/AboutSection";
import CustomDigitalSection from "@/components/digitalPayments/CustomDigitalSection";
import DiscoverBusinessSection from "@/components/digitalPayments/DiscoverBusinessSection";
import HeroSection from "@/components/digitalPayments/HeroSection";
import MissionVissionSection from "@/components/digitalPayments/MissionVissionSection";
import NumberSection from "@/components/digitalPayments/NumberSection";
import OurExpetiseSection from "@/components/digitalPayments/OurExpetiseSection";
import WorkPOSSection from "@/components/digitalPayments/WorkPOSSection";
import React from "react";

const Bdp = () => {
  return (
    <SiteLayout pageName={"Digital Payment"}>
      <>
        <HeroSection />
        <AboutSection />
        <DiscoverBusinessSection />
        {/* <CustomDigitalSection /> */}
        <WorkPOSSection />
        <OurExpetiseSection />
        <MissionVissionSection />
        <NumberSection />
      </>
    </SiteLayout>
  );
};

export default Bdp;
