import React, { useState } from "react";
import Lottie from "react-lottie";
import ActiveLottieLoader from "../../../public/assets/lottie/loader/active-loader.json";
import InactiveLottieLoader from "../../../public/assets/lottie/loader/inactive-loader.json";

const CustomLottieLoader = ({ status }: { status: "active" | "inactive" }) => {
  const defaultLottieOptions = {
    loop: true,
    autoPlay: true,
    animationData:
      status === "active" ? ActiveLottieLoader : InactiveLottieLoader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="-ml-4">
      <Lottie options={defaultLottieOptions} height={50} width={50} />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="  h-[90vh] sm:h-[95vh]  relative  top-0 bg-[url('/assets/img/about/bg.jpeg')] bg-cover bg-center">
      {/* <div className="absolute inset-0   bg-video   ">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          playsInline
        >
          <source src="/assets/videos/homepage.webm" type="video/webm" />
        </video>
      </div> */}

      <div className="relative  h-full  flex flex-col   justify-end gap-8 sm:gap-20">
        <div className=" container mx-auto text-white flex h-full px-4 sm:px-0  justify-center sm:items-end  pb-10  relative ">
          {/* mobile */}
          <div className="sm:hidden  w-full    flex  flex-col items-center justify-evenly text-center mt-20 ">
            <h2 className=" font-extralight text-center text-[2.8rem] sm:text-7xl leading-[3.6rem] sm:leading-[6rem]">
              We are <span className="font-bold">committed</span> to connecting
              Africa&apos;s Digital Future
            </h2>

            <h1 className="text-[#AB2346] uppercase tracking-widest">
              Get to know us
            </h1>
          </div>

          {/* desktop */}
          <div className="hidden sm:flex flex-col  h-full w-full custom-container justify-center items-center">
            <div className=" max-w-4xl flex flex-col items-center gap-10 mt-20">
              <h2 className=" font-extralight text-center text-[2.8rem] sm:text-7xl leading-[3.6rem] sm:leading-[6rem]">
                We are <span className="font-bold">committed</span> to
                connecting Africa&apos;s Digital Future
              </h2>
            </div>
          </div>

          <div className="hidden sm:flex absolute  w-full  justify-between">
            <div className="w-full flex justify-center items-center">
              <h1 className="text-[#AB2346] font-medium text-xl uppercase tracking-widest">
                Get to know us
              </h1>
            </div>
            <div className="w-full">{""}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
