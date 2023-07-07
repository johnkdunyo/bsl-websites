import React from "react";
import { Animate } from "../animations/ScrollAnimator";
import Image from "next/image";

const DataCenterSection = () => {
  return (
    <section className="bg-[#AB2346] pb-16 md:pb-0">
      <div className="custom-container2 ">
        <div className="flex flex-col md:flex-row gap-10 justify-between ">
          <div className=" -mt-28 md:-my-16 w-full md:order-last   md:w-[95%]  ">
            <Image
              src="https://res.cloudinary.com/diek2uivi/image/upload/v1686141784/bsl-website/bsl/business/datacenter_jynmtj.jpg"
              blurDataURL="https://res.cloudinary.com/diek2uivi/image/upload/v1686141784/bsl-website/bsl/business/datacenter_jynmtj.jpg"
              width={1920}
              height={1080}
              alt="data center img"
              className="w-full  object-cover h-[30rem] md:h-full"
              unoptimized
            />
          </div>
          <div className="w-full flex  justify-center items-center my-10 md:my-24">
            <div className=" flex flex-col gap-6 md:gap-10">
              <Animate.FadeUp>
                <h1 className="headerText1">
                  Data Centre Design and Deployment
                </h1>
              </Animate.FadeUp>
              <Animate.FadeUp>
                <p className="paragraphText1">
                  Data center design serves as they key design phase of data
                  center development, where system architects create a
                  documented and diagrammatic, logical view of a data center.
                </p>
              </Animate.FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataCenterSection;
