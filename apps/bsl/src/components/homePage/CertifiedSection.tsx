import React from "react";
import Lottie from "react-lottie";
import CorrectIsoData from "../../../public/assets/lottie/iso.json";
import { Animate } from "../animations/ScrollAnimator";

const CertifiedSection = () => {
  const isoLottieOptions = {
    loop: false,
    autoplay: true,
    animationData: CorrectIsoData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="we-are-certified-section  py-[4rem]">
      <div className="custom-container flex flex-col justify-between w-full h-full ">
        <div className="text-center   flex items-center justify-center">
          {/** */}
          <div className="max-w-3xl">
            <h1 className="font-bold text-4xl sm:text-6xl mb-5 ">
              <Animate.FadeUp>We are Certified</Animate.FadeUp>
            </h1>

            <div>
              <Animate.FadeUp>
                <p className="text-base sm:text-lg">
                  Our certifications reveal our commitment to providing quality
                  products and services to all our existing and prospective
                  customers.
                </p>
              </Animate.FadeUp>
            </div>
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row justify-end items-end sm:h-full      ">
          <div className="w-full    h-full flex flex-col items-center justify-end ">
            <div className="sm:hidden  -mr-8 ">
              <Lottie options={isoLottieOptions} height={200} width={200} />
            </div>
            <div className="hidden sm:block   sm:borderr-red-500  md:borderr-green-500 lg:borderr-yellow-400 -mr-28">
              <Lottie options={isoLottieOptions} height={300} width={300} />
            </div>
          </div>
          <Animate.FadeUp className="w-full h-full">
            <div className="flex flex-col items-center justify-center text-center  gap-2 sm:h-full sm:text-left sm:items-start w-full px-3 sm:px-0  ">
              <h1 className="text-2xl sm:text-3xl font-bold">
                ISO/IEC 27001:2013
              </h1>
              <p className="text-lg  sm:text-xl font-bold max-w-xs ">
                Information Security management System (ISMS)
              </p>
              <p className="text-base font-normal max-w-sm">
                We adhere to data protection standards both Internally and
                Externally so your data is secured
              </p>
            </div>
          </Animate.FadeUp>
        </div>
      </div>
    </div>
  );
};

export default CertifiedSection;
