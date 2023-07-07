import React from "react";
import { Animate } from "../animations/ScrollAnimator";
import Image from "next/image";

const CloudStorageSection = () => {
  return (
    <section className=" bg-white pb-40 ">
      <div className="custom-container2 h-full flex flex-col md:flex-row justify-between py-10 md:py-20 gap-16  ">
        <div className=" w-full  -mt-24 md:-mt-[0rem] md:order-last border">
          <Image
            src="https://res.cloudinary.com/diek2uivi/image/upload/v1686141784/bsl-website/bsl/business/datacenter2_dnkm3j.jpg"
            blurDataURL="https://res.cloudinary.com/diek2uivi/image/upload/v1686141784/bsl-website/bsl/business/datacenter2_dnkm3j.jpg"
            width={1920}
            height={1080}
            alt="data center"
            placeholder="blur"
            className="w-full md:h-full object-cover h-[30rem]"
          />
        </div>
        <div className="  w-full flex justify-center items-center text-[#1D365A] ">
          <div className="flex flex-col gap-6  ">
            <Animate.FadeUp>
              <h1 className="headerText1">Cloud and Storage Solutions</h1>
            </Animate.FadeUp>

            <h1 className="text-xl font-medium tracking-wider mt-4 uppercase">
              STORAGE SOLUTIONS FOR
            </h1>

            <div className="flex flex-col border-[#1D365A] border-t ">
              <div className="text-3xl md:text-5xl font-medium py-5 border-b border-[#1D365A]">
                <Animate.ScaleIn>
                  <p>Datacenter</p>
                </Animate.ScaleIn>
              </div>
              <div className="text-3xl md:text-5xl  font-medium py-5 border-b border-[#1D365A]">
                <Animate.ScaleIn>
                  <p>Disaster Recovery and Backups</p>
                </Animate.ScaleIn>
              </div>
              <div className="text-3xl md:text-5xl  font-medium py-5 border-b border-[#1D365A]">
                <Animate.ScaleIn>
                  <p>Customized Digital Market place</p>
                </Animate.ScaleIn>
              </div>
              <div className="text-3xl md:text-5xl  font-medium py-5 border-b border-[#1D365A]">
                <Animate.ScaleIn>
                  <p>Banking/Payment Solutions</p>
                </Animate.ScaleIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudStorageSection;
