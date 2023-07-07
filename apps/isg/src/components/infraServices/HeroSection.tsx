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

  const texts = ["Simple", "Accessible", "Secure"];
  const [currentTextIndex, setCurrentTextIndexs] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndexs(currentTextIndex < 2 ? currentTextIndex + 1 : 0);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <section className=" bg-[url('/assets/img/isg/hero-bg.jpeg')] h-[90vh] sm:h-[90vh] md:h-[100vh] bg-cover   bg-[center_left_40rem] md:bg-center top-0 relative">
      <div className="h-full w-full custom-container flex flex-col justify-end md:justify-center  pb-20 md:pb-0     ">
        <div className=" w-full  flex flex-col justify-center items-center sm:items-start  text-center md:text-left gap-10  md:gap-6 max-w-3xl">
          <Animate.FadeUp className="font-light md:font-extralight text-4xl md:text-6xl tracking-wider leading-snug md:leading-[1.2]">
            Maximizing <span className="font-bold">uptime</span> with expert
            Fibre Maintenance
          </Animate.FadeUp>
          <Animate.FadeIn className="text-lg md:text-xl tracking-wider   md:mt-6 font-normal">
            Our core focus is on providing fibre optic maintenance and logistics
            solutions to meet the growing demands of the telecommunications
            industry.
          </Animate.FadeIn>
        </div>
      </div>

      <div className="flex justify-center h-[12%] bottom-[30px] left-0 right-0  absolute ">
        <button>
          <Lottie options={lottieDefaultOptions} height={160} width={160} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
