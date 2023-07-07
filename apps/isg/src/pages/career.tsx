import SiteLayout from "@/components/Layout/SiteLayout";
import HeroSection from "@/components/careerPage/HeroSection";
import WorkWithUs from "@/components/careerPage/WorkWithUs";
import React from "react";

const career = () => {
  return (
    <SiteLayout pageName={"Career"}>
      <>
        <HeroSection />
        <WorkWithUs />
      </>
    </SiteLayout>
  );
};

export default career;
