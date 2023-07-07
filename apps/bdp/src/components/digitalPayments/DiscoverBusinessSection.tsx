import React from "react";
import { motion } from "framer-motion";
import BDPPaymentLottieData from "../../../public/assets/lottie/bdp-payment.json";
import Lottie from "react-lottie";
import { Animate } from "../animations/ScrollAnimator";

const lottieDefaultOptions = {
  loop: true,
  autoPlay: true,
  animationData: BDPPaymentLottieData,
};

const SingleItem = ({
  title,
  icon,
  description,
}: {
  title: string;
  icon: string;
  description: string;
}) => {
  return (
    <Animate.FadeUp className="bg-white rounded-[45px] p-5 w-full h-[18rem] sm:h-[26rem]">
      <div className="flex flex-col justify-between items-center  gap-8 w-full h-full ">
        <div className=" h-full flex items-center">
          <motion.img
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            src={`/assets/img/bdp/discover/${icon}`}
            className="h-4/5 sm:h-3/5"
          />
        </div>
        <div>
          <h1
            className="text-purple font-bold text-center  w-full  text-xl sm:text-2xl"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          <p className="hidden sm:block text-[#606060] text-center mt-2">
            {description}
          </p>
        </div>
      </div>
    </Animate.FadeUp>
  );
};
const DiscoverBusinessSection = () => {
  return (
    <section className="bg-white ">
      <section className="bg-[url('/assets/img/bdp/mobile-purple-bg.svg')] md:bg-[url('/assets/img/bdp/purple-bg.svg')] h-[80rem] bg-cover  bg-no-repeat sm:-mt-[12rem] -mt-[2rem] w-full  pt-32 sm:py-[27rem] z-20  ">
        <div className=" w-full text-white  custom-container flex flex-col gap-14  z-20 ">
          <Animate.FadeUp className="headerText3 text-center">
            Discover solutions for every business need
          </Animate.FadeUp>

          <div className="flex flex-col sm:flex-row gap-8   px-6 sm:px-0 overflow-x-scroll xl:px-20 lg:gap-10">
            <SingleItem
              title="MOMO $ MPOS"
              icon="momo.svg"
              description="Payment terminals, card readers, POS hardware"
            />
            <SingleItem
              title="Checkout API"
              icon="api.svg"
              description="Payment terminals, card readers, POS hardware"
            />
            <SingleItem
              title="Routing & Switching <br/> Services"
              icon="routing.svg"
              description="Payment terminals, card readers, POS hardware"
            />
          </div>
        </div>
      </section>
      <section className=" bg-white h-[50rem]  z-2  ">
        <div className="flex flex-col md:flex-row justify-between custom-container w-full items-center sm:gap-4 ">
          <div className="w-full   md:w-[60%] z-10">
            <Lottie
              options={lottieDefaultOptions}
              height={"100%"}
              width={"100%"}
              style={{ zIndex: -10 }}
            />
          </div>
          <div className="w-full md:w-[40%]  text-center md:text-left flex flex-col gap-8 ">
            <div className="flex items-center justify-center  ">
              <h1 className="text-3xl sm:text-5xl leading-10 sm:leading-tight text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#6600CC] to-[#CC0166] ">
                Custom Digital Payment solutions
              </h1>
            </div>

            <div className="text-[#606060] paragraphText px-1">
              Broadspectrum Digital Payments has the capability to develop
              custom payment solutions that address the unique requirements of
              banks, payment service providers and merchants. From in-app
              payments, hotel booking engines and online registration systems to
              tokenization , we’ve got you covered.
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DiscoverBusinessSection;
