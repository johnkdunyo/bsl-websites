import React from "react";
import { animate, motion } from "framer-motion";
import { Animate } from "../animations/ScrollAnimator";

const AboutSection = () => {
  return (
    <motion.section
      className=" bg-white py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // whileFocus={}
    >
      <div className="text-center custom-container2 flex flex-col justify-between gap-10 sm:gap-20 max-w-5xl">
        <h1 className="text-purple font-medium text-xl  tracking-widest">
          A SUBSIDIARY OF BROADSPECTRUM
        </h1>

        <div className="flex items-center justify-center mt-10 ">
          <Animate.FadeUp className="text-3xl sm:text-5xl leading-10 sm:leading-tight text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#6600CC] to-[#CC0166] ">
            Safe & Secure acceptance of payments, online and in person.
          </Animate.FadeUp>
        </div>

        <div className="">
          <Animate.FadeUp className="text-[#606060] paragraphText1">
            We built Broadspectrum Digital Payments to meet all your business
            needs. You can count on us to provide the platform, solutions and
            expertise you need to meet your most pressing payment needs
          </Animate.FadeUp>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
