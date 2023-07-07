import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";

import ScrollDownLottieData from "../../../public/assets/lottie/scrolldown.json";
import { Animate } from "../animations/ScrollAnimator";

const HeroSection = () => {
  const lottieDefaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: ScrollDownLottieData,
  };

  return (
    <section className=" bg-[url('/assets/img/spectrum/hero-main.jpeg')] h-[100vh] sm:h-[90vh] md:h-[100vh] bg-cover   bg-[center_left_37rem]   md:bg-center top-0 relative">
      <div className="h-full w-full custom-container flex flex-col justify-between   pb-10 md:pb-8    ">
        <div className="h-[10rem] md:h-[1rem]"></div>
        <Animate.FadeUp className=" w-full  flex flex-col justify-center items-center md:items-start  gap-10   max-w-4xl">
          <h1 className="font-extralight text-[1.9rem] md:text-7xl md:leading-[5rem] md:tracking-wider ">
            A Telecommunication company with the{" "}
            <span className="font-bold text-[#35BC56]">
              lightening-fast connectivity
            </span>
          </h1>
          <p className="text-lg md:text-xl tracking-wider   md:mt-8 font-normal">
            We are committed to meet your business needs at the speed of light.
          </p>
        </Animate.FadeUp>

        <div className="w-full ">
          <Animate.FadeUp className="text-spectrumGreen font-medium text-xl   text-center tracking-widest w-full">
            A SUBSIDIARY OF BROADSPECTRUM
          </Animate.FadeUp>
        </div>
      </div>

      <div className="flex justify-center h-[12%] bottom-[100px] left-0 right-0  absolute ">
        <button>
          <Lottie options={lottieDefaultOptions} height={160} width={160} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
