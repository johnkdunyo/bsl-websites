import SiteLayout from "@/components/Layout/SiteLayout";
import CloudStorageSection from "@/components/businessPage/CloudStorageSection";
import ComputingNetworkingSection from "@/components/businessPage/ComputingNetworkingSection";
import DataCenterSection from "@/components/businessPage/DataCenterSection";
import HeroSection from "@/components/businessPage/HeroSection";
import InfoMageSystems from "@/components/businessPage/InfoMageSystems";
import React from "react";

const Business = () => {
  return (
    <SiteLayout pageName={"Business"}>
      <>
        <HeroSection />
        <InfoMageSystems />
        <DataCenterSection />
        <ComputingNetworkingSection />
        <CloudStorageSection />
      </>
    </SiteLayout>
  );
};

export default Business;
