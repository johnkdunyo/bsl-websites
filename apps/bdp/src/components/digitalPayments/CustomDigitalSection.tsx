import React from "react";
import BDPPaymentLottieData from "../../../public/assets/lottie/bdp-payment.json";
import Lottie from "react-lottie";

const CustomDigitalSection = () => {
  const lottieDefaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: BDPPaymentLottieData,
  };
  return (
    <section className="bg-white h-[50rem] border z-0 absolite">
      <div className="flex flex-col sm:flex-row justify-between custom-container w-full items-center sm:gap-4">
        <div className="w-full border  sm:w-[60%]">
          <Lottie
            options={lottieDefaultOptions}
            height={"100%"}
            width={"100%"}
          />
        </div>
        <div className="w-full sm:w-[40%] border text-center sm:text-left flex flex-col gap-8 ">
          <div className="flex items-center justify-center  ">
            <h1 className="text-3xl sm:text-5xl leading-10 sm:leading-tight text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#6600CC] to-[#CC0166] ">
              Custom Digital Payment solutions
            </h1>
          </div>

          <div className="text-[#606060] paragraphText px-1">
            Broadspectrum Digital Payments has the capability to develop custom
            payment solutions that address the unique requirements of banks,
            payment service providers and merchants. From in-app payments, hotel
            booking engines and online registration systems to tokenization ,
            we’ve got you covered.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDigitalSection;
