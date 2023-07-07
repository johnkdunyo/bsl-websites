import React from "react";
import { motion } from "framer-motion";
import { Animate } from "../animations/ScrollAnimator";

const SingleMobileCustomCard = ({
  title,
  icon,
}: {
  title: string;
  icon: string;
}) => {
  return (
    <Animate.ScaleIn className="w-full h-full  ">
      <div className="flex items-center  justify-center  gap-6 md:gap-8 md:text-center px-10 md:px-0">
        <div className="flex items-center justify-center   h-16 w-20 md:h-20 md:w-24 flex-col ">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={`/assets/img/bdp/expertise/${icon}`}
            alt={icon}
            className=" "
          />
        </div>
        <div className=" w-full ">
          <h1 className="text-purple  md:font-light text-lg sm:text-3xl md:text-4xl text-left">
            {title}
          </h1>
        </div>
      </div>
    </Animate.ScaleIn>
  );
};

const OurExpetiseSection = () => {
  return (
    <section className="bg-white  py-24">
      <div className="custom-container">
        <div className="text-center w-full">
          <Animate.FadeUp className="text-[2.8rem] sm:text-5xl leading-10 sm:leading-tight text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#6600CC] to-[#CC0166] ">
            Our Expertise
          </Animate.FadeUp>

          <div className="md:hidden flex flex-col justify-between gap-10 mt-10 ">
            <SingleMobileCustomCard
              title="Highly secure payment solutions"
              icon="highly-secure.png"
            />
            <SingleMobileCustomCard title="Agile solutions" icon="agile.png" />
            <SingleMobileCustomCard
              title="Robust & Advanced technology"
              icon="robust.png"
            />
            <SingleMobileCustomCard
              title="Responsive tech support"
              icon="responsive.png"
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="hidden md:grid grid-cols-2  gap-y-5 gap-x-20 mt-16 max-w-5xl">
              <div></div>
              <SingleMobileCustomCard
                title="Robust & Advanced technology"
                icon="robust.png"
              />
              <SingleMobileCustomCard
                title="Highly secure payment solutions"
                icon="highly-secure.png"
              />
              <div></div>
              <div></div>
              <SingleMobileCustomCard
                title="Responsive tech support"
                icon="responsive.png"
              />
              <SingleMobileCustomCard
                title="Agile solutions"
                icon="agile.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpetiseSection;
