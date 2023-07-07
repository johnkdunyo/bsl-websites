import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";

import ScrollDownLottieData from "../../../public/assets/lottie/bdp-purple-scrolldown.json";

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

  const hoverHandler = () => {
    setCurrentTextIndexs(currentTextIndex < 2 ? currentTextIndex + 1 : 0);
  };
  return (
    <section className=" bg-[url('/assets/img/bdp/mobile.jpg')] sm:bg-[url('/assets/img/bdp/main.jpg')] h-[98vh] sm:h-[85vh] md:h-[95vh] bg-cover  bg-center top-0 relative">
      <div className="h-full w-full custom-container2 flex flex-col justify-start pt-[5rem] sm:justify-center   ">
        <div className="    mt-[4.8rem] sm:-mt-10 ">
          <div className=" w-full  flex flex-col justify-center items-center sm:items-start  ">
            <motion.h2
              className="font-bold  leading-[1.4] sm:leading-[1.2] text-[3rem] sm:text-[8rem] tracking-wide"
              onMouseEnter={hoverHandler}
              initial={{ opacity: 0, y: "100%" }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              exit={{
                y: "-100%",
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              layout
            >
              {texts[currentTextIndex]}
            </motion.h2>
            <h1 className="text-xl tracking-widest sm:text-3xl sm:mt-3">
              payment for everyone.
            </h1>
          </div>
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
