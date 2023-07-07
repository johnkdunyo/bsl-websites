import React from "react";
import { Animate } from "../animations/ScrollAnimator";

const WeAreWhenYouNeedUsSection = () => {
  return (
    <section className="bg-[#F8F8F8] -mb-1">
      <div className="h-full w-full flex flex-col md:flex-row custom-container pt-20 gap-16 md:gap-10">
        <div className="text-center md:text-left w-full md:order-last  flex items-center  ">
          <Animate.FadeUp className="text-[1.9rem] md:text-5xl leading-[3rem] md:leading-[4rem] text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#1D365A] to-[#AB2346] px-6 sm:px-0 sm:w-4/5">
            We are your go-to Fibre maintenance team providing you with Seamless
            connectivity and uninterrupted performance
          </Animate.FadeUp>
        </div>
        <div className="w-full h-full ">
          <img src="/assets/img/isg/weready.png" alt="we are ready image" />
        </div>
      </div>
    </section>
  );
};

export default WeAreWhenYouNeedUsSection;
