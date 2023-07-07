import React from "react";
import { Animate } from "../animations/ScrollAnimator";
import Image from "next/image";

const InfoMageSystems = () => {
  return (
    <section className=" bg-white pb-40 ">
      <div className="custom-container2 h-full flex flex-col md:flex-row justify-between py-10 md:py-20 gap-10  ">
        <div className=" w-full  -mt-20 md:-mt-[0rem] md:order-first">
          <Image
            src="https://res.cloudinary.com/diek2uivi/image/upload/v1686141784/bsl-website/bsl/business/info-mgt_l5n7ac.jpg"
            blurDataURL="https://res.cloudinary.com/diek2uivi/image/upload/v1686141784/bsl-website/bsl/business/info-mgt_l5n7ac.jpg"
            placeholder="blur"
            className="w-full md:h-full object-cover   h-[30rem] z-20  "
            alt="info mgt"
            style={{ objectPosition: "30% 75%" }}
            width={805}
            height={1204}
            unoptimized
          />
        </div>
        <div className="  w-full flex justify-center items-center text-[#1D365A]">
          <div className="flex flex-col gap-6  ">
            <h1 className="headerText1">
              <Animate.FadeUp>Information Management System</Animate.FadeUp>
            </h1>
            <p className=" paragraphText1">
              Information management systems are the backbone of any
              organization. They help in managing data, information, and
              knowledge in a structured way. Business intelligence is a subset
              of these systems and helps organizations to make better decisions
              by providing them with insights from their data
            </p>

            <h1 className="text-lg font-medium tracking-[0.2rem] mt-4">
              WE EXPERTISE IN
            </h1>

            <div className="flex flex-col border-[#1D365A] border-t ">
              <div className="text-3xl md:text-5xl font-medium py-5 border-b border-[#1D365A]">
                <Animate.ScaleIn>
                  <p>Enterprise Resource Planning</p>
                </Animate.ScaleIn>
              </div>
              <div className="text-3xl md:text-5xl  font-medium py-5 border-b border-[#1D365A]">
                <Animate.ScaleIn>
                  <p>Learning Management System</p>
                </Animate.ScaleIn>
              </div>
              <div className="text-3xl md:text-5xl  font-medium py-5 border-b  border-[#1D365A]">
                <Animate.ScaleIn>
                  <p>School Resource Planning</p>
                </Animate.ScaleIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoMageSystems;
